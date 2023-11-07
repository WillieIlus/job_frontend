<template>
  <label class="block text-gray-700 text-sm font-bold mb-2"
   :for="id">{{ label }}</label>
  <Field v-model="value" :id="id" :name="name" :type="type" :placeholder="placeholder" v-auto-animate
  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
  <ErrorMessage :name="name" class="text-red-500" v-auto-animate />
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



