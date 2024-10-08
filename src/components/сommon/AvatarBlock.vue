<script setup>
defineProps({
  avatarSrc: {
    type: String,
    default: '',
  },
  altText: {
    type: String,
    default: '',
  }
});
</script>

<template>
  <div class="avatar">
    <img :src="avatarSrc" :alt="altText" class="avatar__image" />
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  &__image {
    display: block;
    max-width: 100%;
    height: auto;
  }
}
</style>