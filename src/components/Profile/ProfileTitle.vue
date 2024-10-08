<script setup>
import { computed } from "vue";
import { useProfile } from '@composables/user/useProfile';

defineProps({
  name: {
    type: String,
    default: '',
  },
  gender: {
    type: String,
    required: true,
  },
});

const { userGenderIcon } = useProfile();

const genderIcon = computed(() => {
  return userGenderIcon.value;
});
</script>

<template>
  <div v-if="name && gender" class="profile-title">
    <h1 class="profile-title__text"> {{ name }} </h1>
    <img :src="genderIcon" alt="gender icon">
  </div>
</template>

<style scoped lang="scss">
.profile-title {
  display: flex;

  &__text {
    margin-right: 30px;
  }
}
</style>