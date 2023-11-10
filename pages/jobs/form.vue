<template>
  <CardsBase class="items-center">
    <template #header>
      <h1 class="text-2xl font-semibold">Create Job</h1>
    </template>

    <Form @submit="onSubmit" :validation-schema="schema">
      <FormsInput v-model="title" label="Title" name="title" id="title" />
      <FormsTextarea v-model="description" label="Description" name="description" id="description" />
      <FormsTextarea v-model="requirements" label="Requirements" name="requirements" id="requirements" />
      <FormsInput v-model="amount" label="Amount" name="amount" id="amount" />
      <FormsInput v-model="salary" label="Salary" name="salary" id="salary" />
      <FormsInput v-model="openings" label="Openings" name="openings" id="openings" />
      <FormsInput v-model="work_hours" label="Work Hours" name="work_hours" id="work_hours" />
      <FormsInput v-model="work_experience" label="Work Experience" name="work_experience" id="work_experience" />
      <FormsInput v-model="education_level" label="Education Level" name="education_level" id="education_level" />
      <FormsInput v-model="duration_days" label="Duration Days" name="duration_days" id="duration_days" />
      <FormsInput v-model="deadline" label="Deadline" name="deadline" id="deadline" />
      <div v-if="company" class="mb-4 flex items-center">
        <label for="company" class="">Company</label>
        <div class="relative w-full">
          <select v-model="company" id="company" class="">
            <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
          </select>
          <div class="">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4 2 2-6 6-6-6 2-2z" />
            </svg>
          </div>
        </div>
        <ErrorMessage :name="name" class="text-red-500" />
      </div>
      <div v-if="categories" class="mb-4 flex items-center">
        <label for="category" class="">Category</label>
        <div class="relative w-full">
          <select v-model="category" id="category" class="">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
          <div class="">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4 2 2-6 6-6-6 2-2z" />
            </svg>
          </div>
        </div>
        <ErrorMessage :name="name" class="text-red-500" />
      </div>
      <div v-if="locations" class="mb-4 flex items-center">
        <label for="location" class="">Location</label>
        <div class="relative w-full">
          <select v-model="location" id="location" class="">
            <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name }}</option>
          </select>
          <div class="">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4 2 2-6 6-6-6 2-2z" />
            </svg>
          </div>
        </div>
        <ErrorMessage :name="name" class="text-red-500" />
      </div>
      <div v-if="jobTypes" class="mb-4 flex items-center">
        <label for="job_type" class="">Job Type</label>
        <div class="relative w-full">
          <select v-model="job_type" id="job_type" class="">
            <option v-for="job_type in jobTypes" :key="job_type.value" :value="job_type.value">{{ job_type.label }}
            </option>
          </select>
          <div class="">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4 2 2-6 6-6-6 2-2z" />
            </svg>
          </div>
        </div>
        <ErrorMessage :name="name" class="text-red-500" />
      </div>
      <ButtonsRed class="mx-7 hover:bg-rose-900" type="cancel" :disabled="submitting"
        :class="{ 'opacity- 50': submitting }" @click="router.push('/companies')"> <span v-if="submitting">Cancel</span>
        <span v-else>Cancel</span>
      </ButtonsRed>
      <ButtonsGreen :disabled="submitting" :class="{ 'opacity - 50': submitting }" type="submit"> <span
          v-if="submitting">Creating Company…</span> <span v-else>Create Company</span> </ButtonsGreen>

    </Form>
  </CardsBase>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'

import { Form } from 'vee-validate'
import * as Yup from 'yup'

import { useJobStore } from '~/store/jobs'
import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { useAccountStore } from '~/store/accounts'
import { useRouter } from 'vue-router'

const jobStore = useJobStore()
const companyStore = useCompanyStore();
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const accountStore = useAccountStore()
const router = useRouter()

const { loading, error } = storeToRefs(accountStore)
const categories = storeToRefs(categoryStore)
const companies = storeToRefs(companyStore)
const locations = storeToRefs(locationStore)
const accounts = storeToRefs(accountStore)


const submitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const jobTypes = computed(() => {
  return [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Internship', label: 'Internship' },
    { value: 'Temporary', label: 'Temporary' },
    { value: 'Freelance', label: 'Freelance' },
  ];
});

const schema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
  requirements: Yup.string().required(),
  amount: Yup.number().required(),
  salary: Yup.number().required(),
  openings: Yup.number().required(),
  work_hours: Yup.number().required(),
  work_experience: Yup.number().required(),
  education_level: Yup.number().required(),
  duration_days: Yup.number().required(),
  deadline: Yup.date().required(),
  category: Yup.number().required(),
  location: Yup.number().required(),
})

const title = ref('')
const description = ref('')
const requirements = ref('')
const amount = ref('')
const salary = ref('')
const openings = ref('')
const work_hours = ref('')
const work_experience = ref('')
const education_level = ref('')
const duration_days = ref('')
const deadline = ref('')
const category = ref('')
const location = ref('')

const onSubmit = async (values) => {
  submitting.value = true
  try {
    await jobStore.createJob(
      values.title,
      values.description,
      values.requirements,
      values.amount,
      values.salary,
      values.openings,
      values.work_hours,
      values.work_experience,
      values.education_level,
      values.duration_days,
      values.deadline,
      values.category,
      values.location,
    )
    router.push({ name: 'jobs' })
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  if (accountStore.account) {
    await companyStore.fetchCompanies(accountStore.account.id)
  }
  if (jobStore.user === null) {
    router.push('/accounts/login')
  }
  await categoryStore.fetchCategories()
  await locationStore.fetchLocations()
  await accountStore.fetchAccounts()
  await companyStore.fetchMyCompanies()
  await jobStore.fetchJobs()
})

</script>
