<template>
  <CardsBase class="items-center justify-center flex flex-col">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <Form @submit="onSubmit" :validation-schema="schema">
      <FormsInput v-model="email" label="Email" name="email" id="email" />
      <FormsInput v-model="password" label="Password" name="password" id="password" type="password" />
      <ButtonsBlue :disabled="submitting" :class="{ 'opacity-50': submitting }">
        <span v-if="submitting">Submitting...</span>
        <span v-else>Submit</span>
      </ButtonsBlue>
    </Form>
    <!--don't have an account? signup-->
    <div class="mt-4">
      <span class="text-gray-600">Don't have an account?</span>
      <NuxtLink class="text-blue-600 hover:text-blue-800" to="/accounts/signup">Signup</NuxtLink>
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

const email = ref('')
const password = ref('')
const submitting = ref(false)

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
})

const onSubmit = async (values) => {
  submitting.value = true
  try {
    await accountStore.login(
      values.email,
      values.password
    )
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
    alert('Login successfully !')
    router.push('/accounts/dashboard')
  }
}

</script>