<template>
  <li v-if="link" class="sidebar-item" :class="{ 'sidebar-item__link--active': active }">
    <a
        :href="link"
        class="sidebar-item__link"
    >
      <span class="sidebar-item__icon">
        <img v-if="source" :src="source" :alt="name" />
      </span>
      <span class="sidebar-item__text">{{ name ?? '' }}</span>
    </a>
  </li>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, required: true },
  active: { type: Boolean, default: false },
  source: { type: String, required: false, default: "" },
})
</script>

<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  justify-content: center;
  padding-top: var(--indent-large);
  padding-bottom: var(--indent-large);

  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    &--active {
      background-color: var(--color-light-blue);
    }
  }

  &__text {
    color: var(--color-white);
    font-weight: var(--font-weight-normal);
    line-height: 21.6px;
  }
}
</style>