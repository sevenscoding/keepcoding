<!-- components/common/CustomFileUpload.vue -->
<template>
  <div class="custom-file-upload">
    <label class="upload-label">
      <IconPlus class="custom-file-upload__plus"/>
      <span class="custom-file-upload__download">{{ label }}</span>
      <span class="custom-file-upload__choose">
          <span class="underline">Выберите файл</span> или перетащите его сюда
      </span>
      <input type="file" @change="handleFileUpload" />
    </label>
    <p v-if="fileName" class="file-name">Загружен файл: {{ fileName }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import IconPlus from "@icons/IconPlus.vue";

const props = defineProps({
  label: {
    type: String,
    default: 'Загрузить файл',
  },
})

const emit = defineEmits(['update:modelValue'])

const fileName = ref('')

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
    emit('update:modelValue', file)
  }
}
</script>

<style lang="scss" scoped>
.custom-file-upload {
  border-radius: 10px;
  height: 157px;
  box-shadow: 0 4px 4px 0 #00000040;
  border: 1px solid var(--color-light-grey);
  background-color: var(--color-grey);
  padding-top: 26px;

  &__choose {
    color: var(--color-dark-grey);
    margin-top: var(--indent-small);
  }

  &__plus {
    width: 32px;
    height: 32px;
    margin-bottom: 20px;
    color: var(--color-dark-grey);
  }
}

.underline {
  text-decoration: underline;
}

.upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.upload-label input {
  display: none;
}

.file-name {
  margin-top: 10px;
  font-size: 14px;
}
</style>