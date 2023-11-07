
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
      <FormsSelect v-model="category" label="Category" name="category" id="category" :options="categories" item-value='id' item-text='name' />
      <FormsInput v-model="location" label="Location" name="location" id="location" />
      <FormsCheckbox v-model="is_active" label="Is Active" name="is_active" id="is_active" />
      <ButtonsBlue :disabled="submitting" :class="{ 'opacity-50': submitting }">
        <span v-if="submitting">Submitting...</span>
        <span v-else>Submit</span>
      </ButtonsBlue>
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
      values.location
    )
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
    alert('Company created successfully !')
    router.push('/companies')
  }
}

onMounted(async () => {
  await categoryStore.fetchCategories()
  await locationStore.fetchLocations()
  await accountStore.fetchAccounts()
})

</script>
