<template>
  <button
      :class="['button', color, { 'button--disabled': disabled }]"
      :disabled="disabled"
      @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  color: { type: String, default: 'yellow' },
  onClick: { type: Function, default: () => {} },
  disabled: { type: Boolean, default: false }
})
</script>

<style scoped>
.button {
  border: none;
  cursor: pointer;
  width: 242px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: background-color 0.3s, opacity 0.3s;
}

.button.yellow {
  background-color: #FFB100;
  color: var(--color-white);
}

.button.grey {
  background-color: #D5DADF;
  color: var(--color-white);
}

.button--disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.1;
}
</style>