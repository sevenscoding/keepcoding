<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <li v-if="item?.text && item?.link" class="pagination-item">
    <a :href="item.link" class="pagination-item__link">
      {{ item.text }}
    </a>
  </li>
</template>

<style scoped lang="scss">
.pagination-item {
  cursor: pointer;
  display: flex;
  text-shadow: 0 4px 4px rgba(218, 222, 224, 0.8);

  $current-context: #{&};

  &:not(:last-child)::after {
    content: '/';
    margin: 0 8px;
    color: var(--color-dark-grey);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-thin);
  }

  &:last-child {
    cursor: default;

    #{$current-context}__link {
      color: var(--color-dark-grey);
      pointer-events: none;
    }
  }

  &__link {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-thin);
    line-height: 1;
    text-decoration: none;
    color: var(--color-black);
  }
}
</style>
