<template>
  <div class="student-documents-view">
    <ProfileCard class="student-documents-view__profile" :user="user" :user-status="userStatus" />
    <FilterPanel class="student-documents-view__filter" @showModal="documentStore.openModal" />
    <DocumentsPanel :documents="documents" :loading="isLoading" />

    <Modal v-model:modelValue="modal" :title="MODALS_TITLE.DOCUMENT" @close="documentStore.closeModal">
      <DocumentForm />
      <template #footer>
          <ButtonComponent :disabled="documentStore.isDocumentAddDisabled" label="добавить документ"></ButtonComponent>
          <ButtonComponent label="отмена" color="grey" @click="documentStore.closeModal"></ButtonComponent>
      </template>
    </Modal>
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
import Modal from "@components/сommon/Modal/Modal.vue";
import DocumentForm from "@components/Document/DocumentForm.vue";
import ButtonComponent from "@components/сommon/ButtonComponent.vue";
import { MODALS_TITLE } from "@constants/modal/";

const userStore = useUserStore();
const documentStore = useDocumentStore();
const { user, userStatus } = storeToRefs(userStore);
const { documents, isLoading, modal } = storeToRefs(documentStore);

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