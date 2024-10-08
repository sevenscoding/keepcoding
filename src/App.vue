<template>
  <div class="app-container">
    <LayoutDefault>
      <StudentDocumentsView />
    </LayoutDefault>
  </div>
</template>

<script setup>
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import StudentDocumentsView from "@/pages/StudentDocumentsView.vue";
</script>

<style lang="scss" scoped>
.app-container {
  height: 100vh;
}
</style>
