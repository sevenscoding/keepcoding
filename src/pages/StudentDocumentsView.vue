<template>
  <div class="student-documents-view">
    <ProfileCard class="student-documents-view__profile" :user="user" :user-status="userStatus" />
    <FilterPanel class="student-documents-view__filter" @showModal="openModal" />
    <DocumentsPanel :documents="documents" :loading="isLoading" />

    <Modal v-model:modelValue="isModalVisible" title="Добавить документ">
      <DocumentForm />
      <template #footer>
          <ButtonComponent label="добавить документ"></ButtonComponent>
          <ButtonComponent label="добавить документ"></ButtonComponent>
      </template>
    </Modal>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';
import { useDocumentStore } from '@/stores/documentStore';
import ProfileCard from "@components/Profile/ProfileCard.vue";
import FilterPanel from "@components/Filter/FilterPanel.vue";
import DocumentsPanel from "@components/Document/DocumentsPanel.vue";
import Modal from "@components/сommon/Modal/Modal.vue";
import DocumentForm from "@components/Document/DocumentForm.vue";
import ButtonComponent from "@components/сommon/ButtonComponent.vue";

const userStore = useUserStore();
const documentStore = useDocumentStore();
const { user, userStatus } = storeToRefs(userStore);

const { documents, isLoading } = storeToRefs(documentStore);
const isModalVisible = ref(false)
const openModal = () => {
  isModalVisible.value = true
}
const closeModal = () => {
  isModalVisible.value = false
}

const confirmAction = () => {
  alert('Действие подтверждено!')
  closeModal()
}

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