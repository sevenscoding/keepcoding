<template>
  <div class="add-document-form">
    <div class="form-group form-group-column">
      <label class="form-label">Тип документа: <span class="required">*</span></label>
      <CustomRadio class="add-document-form__type" v-model="formData.type" :options="documentTypes" />
    </div>

    <div class="form-group">
      <label class="form-label" for="documentName">Название документа</label>
      <CustomInput id="documentName" v-model="formData.name" />
    </div>

    <div class="form-group">
      <label class="form-label" for="documentNumber">Номер</label>
      <CustomInput id="documentNumber" v-model="formData.number" />
    </div>

    <div class="form-group date-group">
      <label class="form-label">Действует с:</label>
      <CustomDatePicker v-model="formData.startDate" />
      <span class="form-label-separator">по:</span>
      <CustomDatePicker v-model="formData.endDate" />
    </div>

    <div class="form-group">
      <CustomCheckbox v-model="formData.notify" label="Оповещать об окончании" />
      <CustomCheckbox v-model="formData.createTask" label="Создавать задачу при окончании" />
    </div>

    <div class="form-group">
      <CustomFileUpload v-model="formData.file" label="Загрузить файл" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomRadio from "@components/сommon/CustomRadio.vue";
import CustomInput from "@components/сommon/CustomInput.vue";
import CustomDatePicker from "@components/сommon/CustomDatePicker.vue";
import CustomCheckbox from "@components/сommon/CustomCheckbox.vue";
import CustomFileUpload from "@components/сommon/CustomFileUpload.vue";


// Опции для радиокнопок (типы документов)
const documentTypes = ref([
  { value: 'contract', label: 'Договор' },
  { value: 'reference', label: 'Справка' },
  { value: 'other', label: 'Другое' },
])

// Локальные данные формы
const formData = ref({
  type: 'contract', // Тип документа
  name: '', // Название документа
  number: '', // Номер
  startDate: '', // Дата начала
  endDate: '', // Дата окончания
  notify: false, // Оповещение об окончании
  createTask: false, // Создание задачи
  file: null, // Загруженный файл
})
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
  margin-bottom: 20px;

  &-column {
    display: flex;
    gap: 17px;
  }
}

.date-group {
  display: flex;
  align-items: center;
}

.required {
  color: var(--color-red);
}

.form-label-separator {
  margin: 0 10px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}
</style>