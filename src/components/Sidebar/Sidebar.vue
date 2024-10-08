<template>
  <aside class="sidebar">
    <a href="#" class="sidebar__logo">
      <IconLogo />
    </a>
    <nav class="sidebar__nav">
      <SidebarMenu :items="MENU_ITEMS_LIST" />
    </nav>
  </aside>
</template>

<script setup>
import SidebarMenu from '@components/Sidebar/SidebarMenu.vue'
import IconLogo from "@icons/IconLogo.vue";
import { MENU_ITEMS_LIST } from '@constants/menu'
</script>

<style lang="scss" scoped>
.sidebar {
  width: inherit;
  background-color: var(--color-blue);
  padding-top: var(--indent-medium);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 4px 0 var(--color-shadow-black);

  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 18px;
  }
}
</style>