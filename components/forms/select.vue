<template>
  <label :for="name">{{ label }}</label>
  <Field as="select" :name="name" :id="id" class="form-control" v-model="value">
    <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
  </Field>
  <ErrorMessage :name="name" class="text-red-500" />
</template>

<script setup>
import { Field } from 'vee-validate'
import { defineProps } from 'vue'

const props = defineProps({'modelValue': String, 'label': String, 'name': String, 'id': String, 'options': Array,})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.value
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

</script>