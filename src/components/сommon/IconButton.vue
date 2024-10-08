<template>
  <button class="icon-button" @click="onClick">
    <slot>
    </slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click']);
const onClick = () => {
  emit('click');
};
</script>

<style scoped lang="scss">
.icon-button {
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
  margin: 0;
  color: currentColor;
}
</style>