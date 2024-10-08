<script setup>
import { computed } from 'vue'
import { FILE_TYPES } from "@constants/common/index.js";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: value => FILE_TYPES.includes(value.toLowerCase())
  }
})

const iconSrc = computed(() => {
  switch (props?.type?.toLowerCase()) {
    case 'pdf':
      return new URL('@/assets/img/filesType/pdf.svg', import.meta.url).href
    case 'jpg':
      return new URL('@/assets/img/filesType/jpg.svg', import.meta.url).href
    case 'doc':
      return new URL('@/assets/img/filesType/doc.svg', import.meta.url).href
    case 'xls':
      return new URL('@/assets/img/filesType/xls.svg', import.meta.url).href
    default:
      return ''
  }
})
</script>

<template>
  <div class="file-icon">
    <img v-if="iconSrc" class="file-icon__img" :src="iconSrc" :alt="type" />
  </div>
</template>

<style lang="scss" scoped>
.file-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 117px;
  height: 117px;
  border-radius: 10px;
  background-color: var(--color-grey);

  &__img {
    width: 58px;
    height: 58px;
  }
}
</style>