<template>
<label class="inline-flex items-center" :for="id">{{ label }}</label>
<Field as="checkbox" v-model="value" :id="id" :name="name" :type="type" :placeholder="placeholder"
class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" cols="30" rows="10" />
<ErrorMessage :name="name" class="text-red-500" />

</template>
<script setup>
import { computed } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps(['modelValue', 'label', 'name', 'id', 'type', 'placeholder'])
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
