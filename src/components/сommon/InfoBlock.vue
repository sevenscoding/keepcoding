<script setup>
import { useSlots } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})

const slots = useSlots()
</script>

<template>
  <div class="info-block">
    <div class="info-block__label label">
      {{ label }}
    </div>
    <div class="info-block__text">
      <template v-if="slots.value">
        <slot name="value" />
      </template>
      <template v-else>
        {{ text }}
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>