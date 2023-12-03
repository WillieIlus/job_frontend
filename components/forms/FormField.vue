<template>
  <div class="p-5">
    <label class="p-2" :for="field">{{ label }}</label>
    <input :type="type" v-model="modelValue" :placeholder="placeholder" :ref="refName">
  </div>
</template>

<script setup>
defineProps({
  label: String,
  field: String,
  type: { type: String, default: 'text' },
  modelValue: [String, Number, File],
  placeholder: String,
  refName: String
});

defineEmits(['update:modelValue']);
</script>
