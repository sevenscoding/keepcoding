<!-- components/common/CustomInput.vue -->
<template>
  <div class="custom-input">
    <!-- Используем :value вместо v-model -->
    <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String, // Значение для привязки к v-model (только чтение)
  id: String,
  type: {
    type: String,
    default: 'text', // Тип поля ввода (text, number и т.д.)
  },
  placeholder: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.custom-input input {
  width: 100%;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 14px;
}

.custom-input input:focus {
  border-color: #40a9ff;
  outline: none;
}
</style>