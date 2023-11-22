<template>
  <div class="main-content">
    <div class="page-content">

      <section
        class="flex items-center justify-center min-h-screen py-10 group-data-[theme-color=violet]:bg-violet-500/10 group-data-[theme-color=sky]:bg-sky-500/10 group-data-[theme-color=red]:bg-red-500/10 group-data-[theme-color=green]:bg-green-500/10 group-data-[theme-color=pink]:bg-pink-500/10 group-data-[theme-color=blue]:bg-blue-500/10 dark:bg-neutral-700">
        <div class="container mx-auto">
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-10 lg:col-start-2">
              <div class="flex flex-col bg-white rounded-lg dark:bg-neutral-800">
                <div class="grid flex-col grid-cols-12">
                  <div class="col-span-6 ltr:rounded-l-lg rtl:rounded-r-lg">
                    <div class="p-10">
                      <NuxtLink to="/">
                        <img src="~/assets/images/logo-light.png" alt="" class="hidden mx-auto dark:block">
                        <img src="~/assets/images/logo-dark.png" alt="" class="block mx-auto dark:hidden">
                      </NuxtLink>
                      <div class="mt-5">
                        <img src="~/assets/images/auth/sign-up.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-span-12 rounded-b-md lg:col-span-6 group-data-[theme-color=violet]:bg-violet-700 group-data-[theme-color=sky]:bg-sky-700 group-data-[theme-color=red]:bg-red-700 group-data-[theme-color=green]:bg-green-700 group-data-[theme-color=pink]:bg-pink-700 group-data-[theme-color=blue]:bg-blue-700 lg:rounded-b-none lg:ltr:rounded-r-lg rtl:rounded-l-lg">
                    <div class="flex flex-col justify-center h-full p-12">
                      <div class="text-center">
                        <h5 class="text-[18.5px] text-white">Let's Get Started</h5>
                        <p class="mt-3 text-gray-50">Sign Up and get access to all the features of Alphajiri Jobs</p>
                      </div>
                      <Form @submit="onSubmit" :validation-schema="schema" class="mt-8">
                        <div class="mb-5">
                          <FormsInput v-model="first_name" label="First Name" name="first_name" id="first_name" />
                        </div>
                        <div class="mb-5">
                          <FormsInput v-model="email" label="Email" name="email" id="email" type="email" />
                        </div>
                        <div class="mb-5">
                          <FormsInput v-model="phone" label="Phone" name="phone" id="phone" />
                        </div>
                        <div class="mb-5">
                          <FormsInput v-model="password" label="Password" name="password" id="password" type="password" />
                        </div>
                        <div class="mb-5">
                          <FormsInput v-model="password_confirmation" label="Password Confirmation"
                            name="password_confirmation" id="password_confirmation" type="password" />
                        </div>
                        <div class="mb-4">
                          <div><input
                              class="align-middle border-transparent rounded focus:ring-0 focus:ring-offset-0 group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500"
                              type="checkbox" id="flexCheckDefault">
                            <label class="text-white align-middle" for="flexCheckDefault">I agree to the <a
                                href="javascript:void(0)" class="pb-1 text-white underline align-middle">Terms and
                                conditions</a></label>
                          </div>
                        </div>
                        <div class="my-5 text-center">
                          <button type="submit"
                            class="btn w-full bg-white text-gray-900 font-medium border-transparent hover:-translate-y-1.5 duration-500 ease">Sign
                            Up
                          </button>
                        </div>
                      </Form>
                      <div class="text-center">
                        <p class="text-white">Already a member ? <NuxtLink to="/accounts/login"
                            class="text-white underline fw-medium"> Sign In </NuxtLink>
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

const first_name = ref('')
const phone = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const submitting = ref(false)
const error = ref(null) // Add error ref to store and display errors

const schema = Yup.object({
  first_name: Yup.string().min(3).required(),
  phone: Yup.string().min(6).max(15).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const onSubmit = async (values) => {
  submitting.value = true;
  try {
    console.log('Submitting signup...');
    await accountStore.signup(
      values.first_name,
      values.phone,
      values.email,
      values.password
    );
    console.log('Account created successfully');
    // Successful signup, navigate to login
  } catch (error) {
    console.log(error);

    // Handle error with status code 401
    if (error.response && error.response.status === 401) {
      error.value = 'Invalid input or account already exists'; // Display an error message
    } else {
      error.value = 'An error occurred. Please try again.'; // Handle other errors
    }
  } finally {
    submitting.value = false;

    // Only navigate if there's no error
    if (!error.value) {
      router.push('/accounts/login');
    }
  }
};
</script>
