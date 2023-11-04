<template>
    <Form @submit="onSubmit" :validation-schema="schema">
      <label for="email">Your Email</label>
      <Field id="email_addr" name="email_addr" type="email" />
      <ErrorMessage name="email_addr" />
      <button type="submit">Submit</button>
    </Form>
</template>
<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email_addr: Yup.string().email().required(),
});

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};
</script>
