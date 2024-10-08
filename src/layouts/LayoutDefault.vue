<template>
<div class="layout-default">
  <div class="layout-default__aside">
    <Sidebar />
  </div>
  <div class="layout-default__container">
      <HeaderBlock />
      <div class="layout-default__page">
        <slot></slot>
      </div>
  </div>
</div>
</template>

<script setup>
import Sidebar from "@components/Sidebar/Sidebar.vue";
import HeaderBlock from "@components/Header/HeaderBlock.vue";
</script>

<style lang="scss" scoped>
.layout-default {
  display: flex;
  height: 100%;

  &__page {
    padding-top: 26px;
    padding-inline: var(--container-padding);
  }

  &__aside {
    width: 138px;
  }

  &__container {
    flex-grow: 1;
  }
}
</style>