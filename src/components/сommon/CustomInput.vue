<template>
  <div class="custom-input">
    <div class="input-container">
      <label :for="id" class="input-label" :class="{ active: isActive || modelValue }">
        {{ placeholder }} <span v-show="required" class="required">*</span>
      </label>
      <input
          :id="id"
          :type="type"
          :value="modelValue"
          @input="handleInput"
          @focus="isActive = true"
          @blur="isActive = false"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  modelValue: String,
  id: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  onlyNumbers: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])
const isActive = ref(false)

const updateValue = (value) => {
  emit('update:modelValue', value)
}

const handleInput = (event) => {
  let value = event.target.value
  if (props.onlyNumbers) {
    value = value.replace(/\D/g, '')
  }
  updateValue(value)
}
</script>

<style scoped>
.custom-input {
  position: relative;
  width: 100%;
}

.required {
  color: var(--color-red);
}

.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-light-grey);
}

input {
  width: 100%;
  padding: 16px 8px 8px 0;
  border: none;
  border-radius: 4px;
  transition: border-color 0.2s;
}

input:focus {
  border-color: var(--color-blue);
  outline: none;
}

.input-label {
  position: absolute;
  top: 20px;
  left: 0;
  font-size: var(--font-size-base);
  color: var(--color-light-grey);
  pointer-events: none;
  transition: all 0.2s ease;
}

input:focus + .input-label,
.input-label.active {
  top: -5px;
  font-size: 12px;
  color: #1890ff;
}
</style>