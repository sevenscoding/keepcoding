<!-- components/common/CustomDatePicker.vue -->
<template>
  <div class="custom-datepicker">
    <!-- Используем :value вместо v-model -->
    <input
        type="date"
        :value="modelValue"
        @change="updateValue($event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String, // Значение даты в формате YYYY-MM-DD
})

const emit = defineEmits(['update:modelValue'])

// Обновляем значение и эмитим событие на родительский компонент
const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.custom-datepicker input {
  width: 100%;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}

.custom-datepicker input:focus {
  border-color: #40a9ff;
  outline: none;
}
</style>