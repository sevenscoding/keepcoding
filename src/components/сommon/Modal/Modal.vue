<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <div class="modal-header">
        <h1>{{ title }}</h1>
        <IconClose class="modal__close" @click="close" />
      </div>

      <div class="modal-content">
        <slot></slot>
      </div>

      <div class="modal-footer">
        <slot name="footer">
          <button  @click="close">Закрыть</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import IconClose from "@icons/IconClose.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const visible = ref(props.modelValue)

const open = () => {
  visible.value = true
  emit('update:modelValue', true)
  emit('open')
}

const close = () => {
  visible.value = false
  emit('update:modelValue', false)
  emit('close')
}

watch(
    () => props.modelValue,
    (newVal) => {
      visible.value = newVal
    }
)

</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(122, 137, 150, 0.7);
  display: flex;
  justify-content: center;
  z-index: 1000;
  padding-top: 48px;
}

.modal {
  width: 650px;
  padding: var(--indent-extra-large);
  height: fit-content;
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 5px 0 hsla(0, 0%, 0%, 0.1);

  &__close {
    width: 18px;
    height: 18px;
    color: var(--color-dark-grey);
    cursor: pointer;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.modal-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-footer {
  display: flex;
  justify-content: center;
  gap: 29px;
}
</style>