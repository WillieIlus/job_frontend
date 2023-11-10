<template>
  <CardsBase class="items-center justify-center flex flex-col">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <Form @submit="onSubmit" :validation-schema="schema">
      <FormsInput v-model="email" label="Email" name="email" id="email" />
      <FormsInput v-model="password" label="Password" name="password" id="password" type="password" />
      <ButtonsBlue :disabled="submitting" :class="{ 'opacity-50': submitting }" type="submit">
        <span v-if="submitting">Submitting...</span>
        <span v-else>Submit</span>
      </ButtonsBlue>
    </Form>
    <!--don't have an account? signup-->
    <div class="mt-4">
      <span class="text-gray-600">Don't have an account?</span>
      <NuxtLink class="text-blue-600 hover:text-blue-800" to="/accounts/signup">Signup</NuxtLink>
    </div>
    <!-- Display error message -->
    <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
  </CardsBase>
</template>

<script setup>
import { ref } from 'vue'

import { Form } from 'vee-validate'
import * as Yup from 'yup'

import { useAccountStore } from '~/store/accounts';
import { useRouter } from 'vue-router'

const accountStore = useAccountStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const submitting = ref(false)
const error = ref('') // Add error ref to store and display errors

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
})

const onSubmit = async (values) => {
  submitting.value = true
  try {
    console.log('Submitting login...');
    await accountStore.login(values.email, values.password);
    console.log('Login successful');
  } catch (error) {
    console.log(error)
    // Handle error with status code 401
    if (error.response && error.response.status === 401) {
      error = 'Invalid email or password' // Set the error message
      console.log(error)
    } else {
      error = 'An error occurred. Please try again.' // Set the error message for other errors
      console.log(error)
    }
    if (!error.value) {
      router.push('/accounts/dashboard')
      error = 'An error occurred. Please try again.' // Set the error message for other errors
      console.log(error)
    }
  } finally {
    submitting.value = false

  }
}
</script>
