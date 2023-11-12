<template>
  <div v-if="loading" class="flex justify-center items-center">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
  <div v-else-if="error" class="flex justify-center">
    <div class="text-red-500">Error: {{ error }}</div>
  </div>
  <div v-else>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Company Form</h1>
      <Form @submit="onSubmit" :validation-schema="schema" class="space-y-4">
        <FormsInput v-model="name" label="Name" name="name" id="name" />
        <FormsTextarea v-model="description" label="Description" name="description" id="description" />
        <div class="flex flex-wrap justify-between -mx-2">
          <FormsInput v-model="phone" label="Phone" name="phone" id="phone" class="w-full sm:w-1/2 px-2" />
          <FormsInput v-model="website" label="Website" name="website" id="website" class="w-full sm:w-1/2 px-2" />
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <FormsInput v-model="email" label="Email" name="email" id="email" class="w-full sm:w-1/2 px-2" />
          <FormsInput v-model="address" label="Address" name="address" id="address" class="w-full sm:w-1/2 px-2" />
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="category">Category</label>
            <Field as="select" v-model="category"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="category" name="category">
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </Field>
            <ErrorMessage name="category" class="text-red-500" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="location">Location</label>
            <Field as="select" v-model="location"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="location" name="location">
              <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name }}</option>
            </Field>
            <ErrorMessage name="location" class="text-red-500" />
          </div>
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="logo">Logo</label>
            <input @change="onLogoChange" type="file" id="logo" name="logo"
              class="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline">
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="cover">Cover</label>
            <input @change="onCoverChange" type="file" id="cover" name="cover"
              class="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline">
          </div>
        </div>
        <div class="flex justify-center">
          <ButtonsRed class="mx-7 hover:bg-rose-900" type="cancel" :disabled="submitting">
            <span v-if="submitting">Cancel</span>
            <span v-else>Cancel</span>
          </ButtonsRed>
          <ButtonsGreen :disabled="submitting" type="submit">
            <span v-if="submitting">Creating Company…</span>
            <span v-else>Create Company</span>
          </ButtonsGreen>
        </div>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { storeToRefs } from 'pinia'

import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { useAccountStore } from '~/store/accounts'

const router = useRouter()

const companiesStore = useCompanyStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const accountStore = useAccountStore()

const { companies, loading, error } = storeToRefs(companiesStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)
const { user } = storeToRefs(accountStore)

const fetchCompanies = async () => {
  await companiesStore.fetchCompanies()
}

const fetchCategories = async () => {
  await categoryStore.fetchCategories()
}

const fetchLocations = async () => {
  await locationStore.fetchLocations()
}

const getUser = async () => {
  await accountStore.getUser()
}

const onLogoChange = (event) => {
  logo.value = event.target.files[0]
}

const onCoverChange = (event) => {
  cover.value = event.target.files[0]
}

const name = ref('')
const description = ref('')
const phone = ref('')
const website = ref('')
const email = ref('')
const address = ref('')
const category = ref('')
const location = ref('')
const logo = ref('')
const cover = ref('')
const submitting = ref(false)

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  phone: yup.string().required(),
  website: yup.string().url(),  // Use .url() for URL validation
  email: yup.string().required(),
  address: yup.string().required(),
  category: yup.string().required(),
  location: yup.string().required(),
  logo: yup.mixed().test('isImage', 'Invalid file format', (value) => {
    if (!value) return true; // If no file is provided, it's considered valid
    return value && value.type.startsWith('image/');
  }),
  cover: yup.mixed().test('isImage', 'Invalid file format', (value) => {
    if (!value) return true; // If no file is provided, it's considered valid
    return value && value.type.startsWith('image/');
  }),
})




const onSubmit = async (values) => {
  submitting.value = true
  try {
    await companiesStore.createCompany(
      values.name,
      values.description,
      values.phone,
      values.website,
      values.email,
      values.address,
      values.category,
      values.location,
      values.logo,
      values.cover,
    )
    router.push('/companies')
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false

  }
}

onMounted(() => {
  if (user === null) {
    router.push('/accounts/login')
  }
  fetchCompanies()
  fetchCategories()
  fetchLocations()
  getUser()
})

</script>