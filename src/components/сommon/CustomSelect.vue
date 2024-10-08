<template>
  <div class="custom-select" ref="selectRef">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="select-box" @click="toggleDropdown">
      <span>{{ selectedLabel }}</span>
      <span class="arrow">
        <IconArrow />
      </span>
    </div>
    <ul v-if="isOpen" class="options">
      <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option.value)"
          :class="{ selected: option.value === selected }"
      >
        {{ option.label }}
      </li>
    </ul>
    <span v-if="selected" class="reset" @click="resetFilter">
      <IconClose class="reset__icon"/>
    </span>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import IconArrow from "@icons/IconArrow.vue"
import IconClose from "@icons/IconClose.vue";

const props = defineProps({
  options: { type: Array, required: true },
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Не выбрано' },
  selected: { type: String, default: '' },
})

const emit = defineEmits(['update:selected'])

const isOpen = ref(false)
const selectRef = ref(null)

const selectedLabel = computed(() => {
  const selectedOption = props.options.find(option => option.value === props.selected)
  return selectedOption ? selectedOption.label : props.placeholder
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (value) => {
  isOpen.value = false
  emit('update:selected', value)
}

const resetFilter = () => {
  isOpen.value = false
  emit('update:selected', '')
}

const handleClickOutside = (event) => {
  if (selectRef.value && !selectRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.custom-select {
  position: relative;
  max-width: 200px;
  color: var(--color-blue);
}

.select-box {
  padding: 5px 12px 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.arrow {
  margin-left: var(--indent-small);
}

.options {
  position: absolute;
  background: white;
  color: var(--color-black);
  border: 1px solid #e6ebef;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 10;
  width: 150px;
}

.options li {
  padding: 8px 12px;
  cursor: pointer;
}

.options li:hover {
  background-color: var(--color-grey);
}

.options li.selected {
  background-color: var(--color-blue);
  color: var(--color-white);
}

.reset {
  position: absolute;
  color: var(--color-red);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-small);
  text-align: center;
  top: 0;
  right: -14px;

  svg {
    cursor: pointer;
    width: 10px;
    height: 10px;
  }
}
</style>