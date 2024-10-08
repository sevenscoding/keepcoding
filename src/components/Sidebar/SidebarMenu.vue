<template>
  <ul class="sidebar__menu">
    <SidebarMenuItem
        v-for="{ name, icon, active, source, link } in items"
        :key="name"
        :name="name"
        :icon="icon"
        :link="link"
        :active="active"
        :source="source"
    />
  </ul>
</template>

<script setup>
import SidebarMenuItem from '@components/Sidebar/SidebarMenuItem.vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.sidebar__menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>