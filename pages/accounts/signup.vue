<template>
    <CardsBase class="items-center justify-center flex flex-col">
      <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
      <Form @submit="onSubmit" :validation-schema="schema">
        <FormsInput v-model="first_name" label="First Name" name="first_name" id="first_name" />
        <FormsInput v-model="phone" label="Phone" name="phone" id="phone" />
        <FormsInput v-model="email" label="Email" name="email" id="email" type="email"/>
        <FormsInput v-model="password" label="Password" name="password" id="password" type="password" />
        <FormsInput v-model="password_confirmation" label="Password Confirmation" name="password_confirmation"
          id="password_confirmation" type="password" />
        <ButtonsBlue :disabled="submitting" :class="{ 'opacity-50': submitting }">
          <span v-if="submitting">Submitting...</span>
          <span v-else>Submit</span>
        </ButtonsBlue>
      </Form>
      <!--already have an account? login-->
      <div class="mt-4">
        <span class="text-gray-600">Already have an account?</span>
        <NuxtLink class="text-blue-600 hover:text-blue-800" to="/accounts/login">Login</NuxtLink>
      </div>
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

const first_name = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const submitting = ref(false)

const schema = Yup.object({
  first_name: Yup.string().min(3).required(),
  phone: Yup.string().min(6).max(15).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})


const onSubmit = async (values) => {
  submitting.value = true
  try {
    await accountStore.signup(
      values.first_name,
      values.phone,
      values.email,
      values.password,
    )
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
    alert('Account created successfully !')
    router.push('/accounts/login')
  }
}
</script>