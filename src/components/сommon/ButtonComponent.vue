<template>
  <button
      :class="['button', color]"
      @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  color: { type: String, default: 'yellow' },
  onClick: { type: Function, default: () => {} },
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
}

.button.yellow {
  background-color: #FFB100;
  color: white;
}

.button.blue {
  background-color: #007bff;
  color: white;
}
</style>