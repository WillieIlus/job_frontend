
<template>
  <CardsBase class="items-center justify-center flex flex-col">
    <h2 class="text-2xl font-bold mb-4">Create Company</h2>
    <Form @submit="onSubmit" :validation-schema="schema">
      <FormsInput v-model="name" label="Name" name="name" id="name" />
      <FormsTextarea v-model="description" label="Description" name="description" id="description" />
      <FormsInput v-model="logo" label="Logo" name="logo" id="logo" />
      <FormsInput v-model="cover" label="Cover" name="cover" id="cover" />
      <FormsInput v-model="website" label="Website" name="website" id="website" />
      <FormsInput v-model="phone" label="Phone" name="phone" id="phone" />
      <FormsInput v-model="email" label="Email" name="email" id="email" />
      <FormsInput v-model="address" label="Address" name="address" id="address" />
      <div v-if="categories" class="mb-4 flex items-center"> <label for="category"
          class="">Category</label>
        <div class="relative w-full"> <select v-model="category" id="category"
            class="">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
          <div class=""> <svg
              class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4 2 2-6 6-6-6 2-2z" />
            </svg> </div>
        </div>
        <ErrorMessage :name="name" class="text-red-500" />
      </div>
      <div v-if="locations" class="mb-4 flex items-center"> <label for="location"
          class="">Location</label>
        <div class="relative w-full"> <select v-model="location" id="location"
            class="">
            <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name }}</option>
          </select>
          <div class=""> <svg
              class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4 2 2-6 6-6-6 2-2z" />
            </svg> </div>
        </div>
        <ErrorMessage :name="name" class="text-red-500" />
      </div>
      <ButtonsRed class="mx-7 hover:bg-rose-900" type="cancel" :disabled="submitting"
        :class="{ 'opacity- 50': submitting }" @click="router.push('/companies')"> <span v-if=" submitting ">Cancel</span>
        <span v-else>Cancel</span> </ButtonsRed>
      <ButtonsGreen :disabled=" submitting " :class=" { 'opacity - 50': submitting } " type="submit"> <span
          v-if=" submitting ">Creating Company…</span> <span v-else>Create Company</span> </ButtonsGreen>
    </Form>
  </CardsBase>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

import { Form } from 'vee-validate'
import * as Yup from 'yup'

import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { useAccountStore } from '~/store/accounts'
import { useRouter } from 'vue-router'

const companyStore = useCompanyStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const accountStore = useAccountStore()
const router = useRouter()

const { loading, error } = storeToRefs(accountStore)
const categories = storeToRefs(categoryStore)
const locations = storeToRefs(locationStore)
const accounts = storeToRefs(accountStore)

const submitting = ref(false)

const name = ref('')
const description = ref('')
const logo = ref('')
const cover = ref('')
const website = ref('')
const phone = ref('')
const email = ref('')
const address = ref('')
const is_active = ref(false)
const category = ref('')
const location = ref('')

const schema = Yup.object({
  name: Yup.string().required(),
  description: Yup.string().required(),
  logo: Yup.string(),
  cover: Yup.string(),
  website: Yup.string(),
  phone: Yup.string().required(),
  email: Yup.string().required(),
  address: Yup.string().required(),
  is_active: Yup.boolean(),
  // category: Yup.number().required(),
  // location: Yup.number(),
})

const onSubmit = async (values) => {
  submitting.value = true
  try {
    await companyStore.createCompany(
      values.name,
      values.description,
      values.logo,
      values.cover,
      values.website,
      values.phone,
      values.email,
      values.address,
      values.is_active,
      values.category,
      values.location,
    )
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
    // alert('Company created successfully !')
    // router.push('/companies')
  }
}

onMounted(async () => {
  await categoryStore.fetchCategories()
  await locationStore.fetchLocations()
  await accountStore.fetchAccounts()
})

</script>
