<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import * as Yup from 'yup'

const onSubmit = (values) => {
  alert(JSON.stringify(values))
}

const message = ref('')

const schema = Yup.object({
  message: Yup.string().required().min(3)
})
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema">
    <FormsInput v-model="message" label="Message" name="message" id="message" /> {{ message }}
    <button type="submit">Submit</button>
  </Form>
</template>
