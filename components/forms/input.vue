<template>
  <label :for="id">{{ label }}</label>
  <Field v-model="value" :id="id" :name="name" />
  <ErrorMessage :name="name" />
</template>

<script setup>
import { computed } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps(['modelValue', 'label', 'name', 'id'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>
