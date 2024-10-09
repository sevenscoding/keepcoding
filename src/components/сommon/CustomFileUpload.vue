<!-- components/common/CustomFileUpload.vue -->
<template>
  <div class="custom-file-upload">
    <label class="upload-label">
      <span>{{ label }}</span>
      <input type="file" @change="handleFileUpload" />
    </label>
    <p v-if="fileName" class="file-name">Загружен файл: {{ fileName }}</p>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

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

<style scoped>
.custom-file-upload {
  border: 1px dashed #d9d9d9;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.upload-label {
  display: flex;
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