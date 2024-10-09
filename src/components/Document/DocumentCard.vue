<script setup>
import { useDocumentStore } from '@/stores/documentStore';
import { setStatusText } from '@/helpers'
import BaseCard from "@components/сommon/BaseCard.vue";
import StatusBlock from "@components/сommon/StatusBlock.vue";
import DateRangeBlock from "@components/сommon/DateRangeBlock.vue";
import ActionPanel from "@components/сommon/ActionPanel.vue";
import IconEdit from "@icons/IconEdit.vue";
import IconButton from "@components/сommon/IconButton.vue";
import IconRemove from "@icons/IconRemove.vue";
import IconPrint from "@icons/IconPrint.vue";
import FileTypeIcon from "@components/сommon/FileTypeIcon.vue";

const documentStore = useDocumentStore();

defineProps({
  document: {
    type: Object,
    required: false
  }
});

const printDocument = () => {
  window.print();
}
</script>

<template>
  <BaseCard>
    <div class="document-card">
      <div class="document-card__info">
        <h2 class="document-card__title"> {{ document?.name }} №{{ document?.number }} </h2>
        <StatusBlock :status="document?.status" :text="setStatusText(document?.status)" />
        <DateRangeBlock :from="document?.startDate"  :to="document?.endDate"/>
        <ActionPanel class="document-card__actions">
          <IconButton>
            <IconPrint @click="printDocument" />
          </IconButton>
          <IconButton>
            <IconEdit @click="documentStore.setForm(document)"/>
          </IconButton>
          <IconButton>
            <IconRemove @click="documentStore.removeDocument(document?.id)" />
          </IconButton>
        </ActionPanel>
      </div>
      <div class="document-card__img">
        <FileTypeIcon :type="document?.file" />
      </div>
    </div>
  </BaseCard>
</template>

<style scoped lang="scss">
.document-card {
  display: flex;

  &__title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 200px;
  }

  &__img {
    margin-left: auto;
  }

  &__actions {
    margin-top: 18px;
    display: flex;
    gap: var(--indent-extra-large);
    color: var(--color-dark-grey);
    align-items: center;
  }
}
</style>