<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-card {
  padding: var(--indent-large);
  background-color: var(--color-white);
  border-radius: 10px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
}
</style>
