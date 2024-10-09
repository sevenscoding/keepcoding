<template>
  <div class="custom-radio">
    <label v-for="option in options" :key="option.value" class="radio-label">
      <input
          type="radio"
          :value="option.value"
          :checked="modelValue === option.value"
          @change="updateValue(option.value)"
          class="radio-input"
      />
      <span class="custom-radio-button"></span>
      {{ option.label }}
    </label>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  options: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.custom-radio {
  display: flex;
  flex-wrap: wrap;
}

.radio-label {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-radio-button {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid var(--color-dark-grey);
  margin-right: 10px;
  transition: background-color 0.2s, border-color 0.2s;
}

.radio-input:checked + .custom-radio-button {
  background-color: var(--color-white);
  border-color: var(--color-blue);
}

.radio-input:checked + .custom-radio-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-blue);
}
</style>