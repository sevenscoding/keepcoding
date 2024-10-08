<template>
  <div class="filter-panel">
    <InfoBlock class="filter-panel__block" label="Тип документа">
      <template #value>
        <CustomSelect
            :options="documentTypes"
            v-model:selected="documentStore.filters.document_type"
        />
      </template>
    </InfoBlock>
    <InfoBlock class="filter-panel__block" label="Статус">
      <template #value>
        <CustomSelect
            :options="statuses"
            v-model:selected="documentStore.filters.status"
        />
      </template>
    </InfoBlock>
    <InfoBlock class="filter-panel__block" label="Сортировать по">
      <template #value>
        <CustomSelect
            :options="sortOptions"
            v-model:selected="documentStore.filters.created_at"
        />
      </template>
    </InfoBlock>
    <ButtonComponent
        class="filter-panel__btn"
        label="Добавить документ"
        color="yellow"
        @click="handleAddDocument"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDocumentStore } from '@/stores/documentStore'
import CustomSelect from '@components/сommon/CustomSelect.vue'
import ButtonComponent from '@components/сommon/ButtonComponent.vue'
import InfoBlock from '@components/сommon/InfoBlock.vue'
import { FILTER_NAMES } from '@constants/filters/index.js'
import { useUrlFilters } from '@/composables/filter/useUrlFilters'

const documentStore = useDocumentStore()

const documentTypes = ref(FILTER_NAMES.TYPE)
const statuses = ref(FILTER_NAMES.STATUS)
const sortOptions = ref(FILTER_NAMES.SORT_BY)


useUrlFilters()

const handleAddDocument = () => {
  console.log('Добавить документ')
}
</script>

<style lang="scss" scoped>
.filter-panel {
  display: flex;
  align-items: center;
  background: transparent;

  &__block {
    &:not(:first-child) {
      margin-left: 164px;
    }
  }

  &__btn {
    margin-left: auto;
  }
}
</style>