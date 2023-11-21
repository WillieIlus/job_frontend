<template>
  <label class="text-white"
   :for="id">{{ label }}</label>
  <Field v-model="value" :id="id" :name="name" :type="type" :placeholder="placeholder" v-auto-animate
  class="w-full mt-1 group-data-[theme-color=violet]:bg-violet-400/40 group-data-[theme-color=sky]:bg-sky-400/40 group-data-[theme-color=red]:bg-red-400/40 group-data-[theme-color=green]:bg-green-400/40 group-data-[theme-color=pink]:bg-pink-400/40 group-data-[theme-color=blue]:bg-blue-400/40 py-2.5 rounded border-transparent placeholder:text-sm placeholder:text-gray-50 text-white" />
  <ErrorMessage :name="name" class="text-red-500" v-auto-animate />
</template>

<!-- <template>
  <label class="block text-gray-700 text-sm font-bold mb-2"
   :for="id">{{ label }}</label>
  <Field v-model="value" :id="id" :name="name" :type="type" :placeholder="placeholder" v-auto-animate
  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " />
  <ErrorMessage :name="name" class="text-red-500" v-auto-animate />
</template> -->

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
