<!-- components/common/CustomCheckbox.vue -->
<template>
  <label class="custom-checkbox">
    <!-- Используем :checked вместо v-model -->
    <input type="checkbox" :checked="modelValue" @change="updateValue($event.target.checked)" />
    <span class="checkbox-text">{{ label }}</span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean, // Состояние чекбокса (true/false)
  label: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

// Обновление значения и отправка события на родительский компонент
const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom-checkbox input {
  margin-right: 8px;
}

.checkbox-text {
  font-size: 14px;
}
</style>