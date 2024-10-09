<template>
  <div class="add-document-form">
    <div class="form-group form-group-column">
      <label class="form-label">Тип документа: <span class="required">*</span></label>
      <CustomRadio class="add-document-form__type" v-model="documentFormStore.formData.type" :options="documentTypes" />
    </div>

    <div class="form-group">
      <CustomInput :required="true" placeholder="Название документа" id="documentName" v-model="documentFormStore.formData.name" />
    </div>

    <div class="form-group">
      <CustomInput placeholder="Номер" id="documentNumber" :only-numbers="true" v-model="documentFormStore.formData.number" />
    </div>

    <div class="form-group date-group">
      <label class="form-label label-indent">Действует с:</label>
      <CustomDatePicker v-model="documentFormStore.formData.startDate" />
      <span class="form-label-separator">по:</span>
      <CustomDatePicker v-model="documentFormStore.formData.endDate" />
    </div>

    <div class="form-group form-group__checkbox">
      <CustomCheckbox v-model="documentFormStore.formData.notify" label="Оповещать об окончании" />
      <CustomCheckbox v-model="documentFormStore.formData.createTask" label="Создавать задачу при окончании" />
    </div>

    <div class="form-group">
      <CustomFileUpload v-model="documentFormStore.formData.file" label="Загрузить файл" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDocumentStore} from "@/stores/documentStore.js";
import CustomRadio from "@components/сommon/CustomRadio.vue";
import CustomInput from "@components/сommon/CustomInput.vue";
import CustomDatePicker from "@components/сommon/CustomDatePicker.vue";
import CustomCheckbox from "@components/сommon/CustomCheckbox.vue";
import CustomFileUpload from "@components/сommon/CustomFileUpload.vue";
import { FILTER_NAMES } from "@constants/filters/";

const documentTypes = ref(FILTER_NAMES.TYPE)
const documentFormStore = useDocumentStore()
</script>

<style lang="scss" scoped>
.add-document-form {
  display: flex;
  flex-direction: column;

  &__type {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.form-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 30px;

  &__checkbox {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &-column {
    display: flex;
    gap: 17px;
  }
}

.label-indent {
  margin-right: 17px;
}

.date-group {
  display: flex;
  align-items: center;
}

.required {
  color: var(--color-red);
}

.form-label-separator {
  margin: 0 20px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}
</style>