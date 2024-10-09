<script setup>
import { computed } from 'vue'

const props = defineProps({
  from: { type: String, required: true },
  to: { type: String, required: true }
})

const formattedFrom = computed(() => props.from)
const formattedTo = computed(() => props.to)
</script>

<template>
  <div class="date-range">
    <div v-if="formattedFrom" class="date-range__from">{{ formattedFrom }}</div>
    <span v-if="formattedTo"> - </span>
    <div v-if="formattedTo" class="date-range__to">{{ formattedTo }}</div>
  </div>
</template>

<style scoped lang="scss">
.date-range {
  height: 21px;
  display: flex;
  align-items: center;
  font-size: var(--font-size-base);
  color: var(--color-dark-grey);

  span {
    padding: 0 4px;
  }
}
</style>