<script setup>
import AvatarBlock from "@components/сommon/AvatarBlock.vue";

defineProps({
  userName: {
    type: String,
    default: '',
  },
  avatarSrc: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div v-if="avatarSrc && userName" class="profile-info">
    <AvatarBlock :avatar-src="avatarSrc" :alt-text="userName" class="profile-info__image" />
    <span class="profile-info__name">{{ userName }}</span>
  </div>
</template>

<style scoped lang="scss">
.profile-info {
  display: flex;
  align-items: center;
  gap: var(--indent-small);
  cursor: pointer;
  width: max-content;

  &__image {
    border-radius: 50%;
    display: block;
    width: 40px;
    height: 40px;
  }

  &__name {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
    line-height: 1;
  }
}
</style>