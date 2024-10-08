<script setup>
import PaginationItem from "@components/сommon/Pagination/PaginationItem.vue";

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="pagination">
    <ul v-if="items.length" class="pagination__list">
      <PaginationItem v-for="item in items" :item="item" :key="item.text" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  &__list {
    display: flex;
    padding: 0;
    list-style: none;
  }
}
</style>