<template>
  <label class="custom-checkbox">
    <input
        class="checkbox-input"
        type="checkbox"
        :checked="modelValue"
        @change="updateValue($event.target.checked)"
    />
    <span class="checkbox-box">
      <IconCheckbox class="checkbox-box__checkmark" v-if="modelValue" />
    </span>
    <span class="checkbox-text">{{ label }}</span>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import IconCheckbox from "@icons/IconCheckbox.vue";

const props = defineProps({
  modelValue: Boolean,
  label: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox-box {
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-light-grey);
  border-radius: 4px;
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, background-color 0.2s;
  margin-right: 8px;

  &__checkmark {
    color: var(--color-white);
    width: 12px;
    height: 12px;
    transition: opacity 0.2s;
  }
}

.checkbox-input:checked + .checkbox-box {
  border-color: var(--color-blue);
  background-color: var(--color-blue);
}

.checkbox-input:checked + .checkbox-box .checkmark {
  opacity: 1;
}

.checkbox-text {
  font-size: var(--font-size-base);
}
</style>