<template>
  <div class="student-documents-view">
    <ProfileCard class="student-documents-view__profile" :user="user" :user-status="userStatus" />
    <FilterPanel class="student-documents-view__filter" />
    <DocumentsPanel :documents="documents" :loading="isLoading" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import { useDocumentStore } from '@/stores/documentStore';
import ProfileCard from "@components/Profile/ProfileCard.vue";
import FilterPanel from "@components/Filter/FilterPanel.vue";
import DocumentsPanel from "@components/Document/DocumentsPanel.vue";

const userStore = useUserStore();
const documentStore = useDocumentStore();
const { user, userStatus } = storeToRefs(userStore);

const { documents, isLoading } = storeToRefs(documentStore);

onMounted(() => {
  documentStore.fetchDocuments();
});
</script>

<style lang="scss" scoped>
.student-documents-view {
  width: 1602px;

  &__profile {
    margin-bottom: var(--indent-block);
  }

  &__filter {
    margin-bottom: 34px;
  }
}
</style>