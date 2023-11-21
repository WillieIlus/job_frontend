<template>
  <label :for="name">{{ label }}</label>
  <Field as="select" :name="name" :id="id"  v-model="value"
  class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white">
    <option  v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
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