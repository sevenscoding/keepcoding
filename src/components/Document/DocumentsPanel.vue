<script setup>
import {
  VueSpinner,
} from 'vue3-spinners';
import DocumentCard from "@components/Document/DocumentCard.vue";

defineProps({
  loading: {
    type: Boolean
  },
  documents: {
    type: Array,
    default: () => [],
    required: true
  }
});
</script>

<template>
  <div class="documents">
    <div class="documents-panel" v-if="!loading">
      <template v-if="documents.length" >
        <DocumentCard v-for="document in documents" :key="document?.id" :document="document" />
      </template>
      <div v-else class="documents-panel__empty">
        Нет доступных документов.
      </div>
    </div>
    <div v-else class="documents-panel__loader">
      <VueSpinner size="60" color="#458AFB"></VueSpinner>
    </div>
  </div>
</template>

<style scoped lang="scss">
.documents-panel {
  display: grid;
  gap: var(--indent-large);
  grid-template-columns: repeat(4, 1fr);

  &__loader {
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
  }

  &__empty {
    height: 100px;
    font-size: var(--font-size-subtitle);
    display: flex;
    align-items: center;
  }
}
</style>