<script setup>
import BaseCard from "@components/сommon/BaseCard.vue";
import StatusBlock from "@components/сommon/StatusBlock.vue";
import DateRangeBlock from "@components/сommon/DateRangeBlock.vue";
import ActionPanel from "@components/сommon/ActionPanel.vue";
import IconEdit from "@icons/IconEdit.vue";
import IconButton from "@components/сommon/IconButton.vue";
import IconRemove from "@icons/IconRemove.vue";
import IconPrint from "@icons/IconPrint.vue";
import FileTypeIcon from "@components/сommon/FileTypeIcon.vue";
import { setStatusText } from '@/helpers'

defineProps({
  document: {
    type: Object,
    required: false
  }
});
</script>

<template>
  <BaseCard>
    <div class="document-card">
      <div class="document-card__info">
        <h2 class="document-card__title"> {{ document?.document_type }} №{{ document?.id }} </h2>
        <StatusBlock :status="document?.status" :text="setStatusText(document?.status)" />
        <DateRangeBlock :from="document?.created_at"  :to="document?.created_to"/>
        <ActionPanel class="document-card__actions">
          <IconButton>
            <IconPrint />
          </IconButton>
          <IconButton>
            <IconEdit />
          </IconButton>
          <IconButton>
            <IconRemove />
          </IconButton>
        </ActionPanel>
      </div>
      <div class="document-card__img">
        <FileTypeIcon :type="document?.file_format" />
      </div>
    </div>
  </BaseCard>
</template>

<style scoped lang="scss">
.document-card {
  display: flex;

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