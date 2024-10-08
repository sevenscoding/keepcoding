<script setup>
import { DOCUMENT_STATUS } from "@constants/common/";

defineProps({
  status: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="status-block">
    <div class="status-block__text"
         :class="{
           'active': status === DOCUMENT_STATUS.ACTIVE,
          'terminated': status === DOCUMENT_STATUS.TERMINATED,
           'has-text': text
          }
      ">
      {{ text }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.status-block {
  min-height: 21px;
  position: relative;
  display: flex;
  gap: 9px;

  .status-block__text {
    position: relative;
  }

  .status-block__text {
    position: relative;

    &.has-text:before {
      content: '';
      display: inline-block;
      width: 9px;
      height: 9px;
      border-radius: 2px;
      position: relative;
      background-color: var(--color-blue);
      margin-right: 9px;
    }

    &.active.has-text:before {
      background-color: var(--color-green);
    }

    &.terminated.has-text:before {
      background-color: var(--color-red);
    }
  }
}
</style>