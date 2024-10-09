<template>
  <div class="filter-panel">
    <InfoBlock class="filter-panel__block" :label="FILTER_LABEL_TITLES.TYPE">
      <template #value>
        <CustomSelect
            :options="documentTypes"
            v-model:selected="documentStore.filters.type"
        />
      </template>
    </InfoBlock>
    <InfoBlock class="filter-panel__block" :label="FILTER_LABEL_TITLES.STATUS">
      <template #value>
        <CustomSelect
            :options="statuses"
            v-model:selected="documentStore.filters.status"
        />
      </template>
    </InfoBlock>
    <InfoBlock class="filter-panel__block" :label="FILTER_LABEL_TITLES.SORT_BY">
      <template #value>
        <CustomSelect
            :options="sortOptions"
            v-model:selected="documentStore.filters.startDate"
        />
      </template>
    </InfoBlock>
    <ButtonComponent
        class="filter-panel__btn"
        :label="FILTER_LABEL_TITLES.ADD_DOCUMENT"
        color="yellow"
        @click="handleAddDocument"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { useDocumentStore } from '@/stores/documentStore'
import CustomSelect from '@components/сommon/CustomSelect.vue'
import ButtonComponent from '@components/сommon/ButtonComponent.vue'
import InfoBlock from '@components/сommon/InfoBlock.vue'
import { FILTER_LABEL_TITLES, FILTER_NAMES } from '@constants/filters/'
import { useUrlFilters } from '@/composables/filter/useUrlFilters'

const documentStore = useDocumentStore()

const documentTypes = ref(FILTER_NAMES.TYPE)
const statuses = ref(FILTER_NAMES.STATUS)
const sortOptions = ref(FILTER_NAMES.SORT_BY)

const emit = defineEmits(['showModal'])

useUrlFilters()

const handleAddDocument = () => {
  emit('showModal')
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