<template>
  <div>
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type"
      v-model="value"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="errors" class="error">{{ errors[0] }}</span>
  </div>
</template>

<script>
import { useField } from 'vee-validate';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { value, errorMessage, handleBlur } = useField(props.name, props.rules);

    return {
      value,
      errors: errorMessage.value,
      handleBlur,
    };
  },
};
</script>


