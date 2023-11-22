<template>
  <div class="main-content">
    <div class="page-content">

      <section
        class="flex items-center justify-center min-h-screen py-10 group-data-[theme-color=violet]:bg-violet-500/10 group-data-[theme-color=sky]:bg-sky-500/10 group-data-[theme-color=red]:bg-red-500/10 group-data-[theme-color=green]:bg-green-500/10 group-data-[theme-color=pink]:bg-pink-500/10 group-data-[theme-color=blue]:bg-blue-500/10 dark:bg-neutral-700">
        <div class="container mx-auto">
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-10 lg:col-start-2">
              <div class="flex flex-col bg-white rounded-lg dark:bg-neutral-800">
                <div class="grid flex-col grid-cols-12 ">
                  <div class="col-span-12 lg:col-span-6 ltr:rounded-l-lg rtl:rounded-r-lg">
                    <div class="p-10">
                      <NuxtLink to="/"> <img src="~/assets/images/logo-light.png" alt="" class="hidden mx-auto dark:block">
                        <img src="~/assets/images/logo-dark.png" alt="" class="block mx-auto dark:hidden">
                      </NuxtLink>
                      <div class="mt-5">
                        <img src="~/assets/images/auth/sign-in.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-12 rounded-b-md lg:col-span-6 group-data-[theme-color=violet]:bg-violet-700 group-data-[theme-color=sky]:bg-sky-700 group-data-[theme-color=red]:bg-red-700 group-data-[theme-color=green]:bg-green-700 group-data-[theme-color=pink]:bg-pink-700 group-data-[theme-color=blue]:bg-blue-700 lg:rounded-b-none lg:ltr:rounded-r-lg rtl:rounded-l-lg">
                    <div class="flex flex-col justify-center h-full p-12">
                      <div class="text-center">
                        <h5 class="text-[18.5px] text-white">Welcome Back !</h5>
                        <p class="mt-3 text-white/80">Sign in to continue to Alphajiri Jobs.</p>
                      </div>
                      <Form @submit="onSubmit" :validation-schema="schema" class="mt-8">
                        <div class="mb-5">
                          <FormsInput v-model="email" label="Email" name="email" id="email" />
                        </div>
                        <div class="mb-5">
                          <FormsInput v-model="password" label="Password" name="password" id="password" type="password" />
                          <NuxtLink to="" class="text-white ltr:float-right rtl:float-left">Forgot Password?</NuxtLink>
                          <label class="text-white align-middle" for="flexCheckDefault">Remember me</label>
                        </div>
                        <div class="my-8 text-center">
                          <button type="submit"
                            class="btn w-full bg-white text-gray-900 font-medium border-transparent hover:-translate-y-1.5 duration-500 ease">Sign
                            In
                          </button>
                        </div>
                      </Form>
                      <div class="text-center">
                        <p class="text-white">Not a member ? <NuxtLink to="/accounts/signup"
                            class="text-white underline fw-medium"> Sign UP </NuxtLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { Form } from 'vee-validate'
import * as Yup from 'yup'

import { useAccountStore } from '~/store/accounts';
import { useRouter } from 'vue-router'

definePageMeta({
  layout: 'auth'
})

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
    // Only navigate if there's no error
    if (!error.value) {
      router.push('/jobs');
    }

  }
}
</script>
