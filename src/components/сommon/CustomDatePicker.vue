<template>
  <div class="custom-datepicker">
    <input
        type="date"
        ref="datePickerRef"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        class="date-input"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.custom-datepicker {
  position: relative;
  display: inline-block;
  width: 150px;
}

.date-input {
  width: 112px;
  border-radius: 4px;
  font-size: var(--font-size-base);
  color: var(--color-light-grey);
  background-color: var(--color-white);
  cursor: pointer;
  transition: border-color 0.3s;
  border: none;
}

.date-input::-webkit-calendar-picker-indicator {
  cursor: pointer;
  color: var(--color-dark-grey);
  opacity: 0.6;
}

.date-input::-webkit-calendar-picker-indicator:hover {
  opacity: 1;
}
</style>