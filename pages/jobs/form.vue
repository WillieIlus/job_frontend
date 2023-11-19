<template>
  <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" /> 
  <div v-if="loading" class="flex justify-center items-center h-screen">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
  <div v-else-if="error" class="flex justify-center">
    <div class="text-red-500">Error: {{ error }}</div>
  </div>
  <div v-else>
    <div class="bg-white rounded-lg p-6 shadow-md">
      <h1 class="text-2xl font-semibold mb-4">Job Form</h1>
      <Form @submit="onSubmit" :validation-schema="schema" class="space-y-4">
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <FormsInput v-model="title" label="Title" name="title" id="title" class="w-full sm:w-1/2 px-2" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <FormsInput v-model="email" label="Email" name="email" id="email" class="w-full sm:w-1/2 px-2" />
          </div>
        </div>
        <FormsTextarea v-model="description" label="Description" name="description" id="description" />
        <FormsTextarea v-model="requirements" label="Requirements" name="requirements" id="requirements" />
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <!-- < -->
            <label class="text-gray-700 dark:text-gray-300" for="image">Image</label>
            <input @change="onImageChange" type="file" id="image" name="image"
              class="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline">
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="category">Company</label>
            <Field as="select" v-model="company"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="company" name="company">
              <option v-for="company in companies" :key="company.id" :value="company.id">{{ company.name }}</option>
            </Field>
            <ErrorMessage name="company" class="text-red-500" />
          </div>
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <FormsInput v-model="website" label="Website" name="website" id="website" class="w-full sm:w-1/2 px-2" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <FormsInput v-model="phone" label="Phone" name="phone" id="phone" class="w-full sm:w-1/2 px-2" />
          </div>
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
            <label class="text-gray-700 dark:text-gray-300" for="job_type">Job Type</label>
            <Field as="select" v-model="job_type"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="job_type" name="job_type">
              <option v-for="job_type in jobTypes" :key="job_type.value" :value="job_type.value">{{ job_type.label }}
              </option>
            </Field>
            <ErrorMessage name="job_type" class="text-red-500" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="salary_type">Salary Type</label>
            <Field as="select" v-model="salary_type"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="salary_type" name="salary_type">
              <option v-for="salary_type in salaryTypes" :key="salary_type.value" :value="salary_type.value">{{
                salary_type.label }}</option>
            </Field>
            <ErrorMessage name="salary_type" class="text-red-500" />
          </div>
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="currency">Currency</label>
            <Field as="select" v-model="currency"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="currency" name="currency">
              <option v-for="currency in currencyTypes" :key="currency.value" :value="currency.value">{{ currency.label }}
              </option>
            </Field>
            <ErrorMessage name="currency" class="text-red-500" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="salary">Salary</label>
            <Field v-model="salary" type="number"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="salary" name="salary" />
            <ErrorMessage name="salary" class="text-red-500" />
          </div>
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="openings">Openings</label>
            <Field v-model="openings" type="number"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="openings" name="openings" />
            <ErrorMessage name="openings" class="text-red-500" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="work_experience">Work Experience</label>
            <Field v-model="work_experience" type="number"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="work_experience" name="work_experience" />
            <ErrorMessage name="work_experience" class="text-red-500" />
          </div>
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="education_level">Education Level</label>
            <Field v-model="education_level" type="number"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="education_level" name="education_level" />
            <ErrorMessage name="education_level" class="text-red-500" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="work_hours">Work Hours</label>
            <Field v-model="work_hours" type="number"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="work_hours" name="work_hours" />
            <ErrorMessage name="work_hours" class="text-red-500" />
          </div>
        </div>
        <div class="flex flex-wrap justify-between -mx-2">
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="vacancies">Vacancies</label>
            <Field v-model="vacancies" type="number"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="vacancies" name="vacancies" />
            <ErrorMessage name="vacancies" class="text-red-500" />
          </div>
          <div class="w-full sm:w-1/2 px-2">
            <label class="text-gray-700 dark:text-gray-300" for="deadline">Deadline</label>
            <Field v-model="deadline" type="date"
              class="form-control w-full py-2 px-3 text-gray-700 border rounded focus:outline-none focus:shadow-outline"
              id="deadline" name="deadline" />
            <ErrorMessage name="deadline" class="text-red-500" />
          </div>
        </div>
        <div class="flex justify-center">
          <ButtonsRed class="mx-7 hover:bg-rose-900" type="cancel" :disabled="submitting">
            <span v-if="submitting">Cancel</span>
            <span v-else>Cancel</span>
          </ButtonsRed>
          <ButtonsGreen :disabled="submitting" type="submit">
            <span v-if="submitting">Creating Job…</span>
            <span v-else>Create Job</span>
          </ButtonsGreen>
        </div>
      </Form>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { storeToRefs } from 'pinia'

import { useJobStore } from '~/store/jobs'
import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { useAccountStore } from '~/store/accounts'

const router = useRouter()

const jobsStore = useJobStore()
const companiesStore = useCompanyStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const accountStore = useAccountStore()

const { jobs, loading, error } = storeToRefs(jobsStore)
const { companies } = storeToRefs(companiesStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)
const { user } = storeToRefs(accountStore)

const fetchJobs = async () => {
  await jobsStore.fetchJobs()
}

const fetchCompanies = async () => {
  await companiesStore.fetchMyCompanies()
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

const onImageChange = (event) => {
  image.value = event.target.files[0]
}

const title = ref('')
const email = ref('')
const description = ref('')
const requirements = ref('')
const image = ref('')
const company = ref('')
const website = ref('')
const phone = ref('')
const category = ref('')
const location = ref('')
const job_type = ref('')
const salary_type = ref('')
const currency = ref('')
const salary = ref('')
const openings = ref('')
const work_experience = ref('')
const education_level = ref('')
const work_hours = ref('')
const vacancies = ref('')
const deadline = ref('')
const submitting = ref(false)

const schema = yup.object({
  title: yup.string().required(),
  email: yup.string().email().required(),
  description: yup.string().required(),
  requirements: yup.string(),
  image: yup.mixed(),
  company: yup.number().required(),
  website: yup.string().url(),
  phone: yup.string().required(),
  category: yup.number(),
  location: yup.number(),
  job_type: yup.string(),
  salary_type: yup.string(),
  currency: yup.string(),
  salary: yup.number(),
  openings: yup.number(),
  work_experience: yup.number(),
  education_level: yup.number(),
  work_hours: yup.number(),
  vacancies: yup.number(),
  deadline: yup.date(),
})

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

const currencyTypes = computed(() => {
  return [
    { value: 'USD', label: 'US Dollar' },
    { value: 'EUR', label: 'Euro' },
    { value: 'GBP', label: 'British Pound' },
    { value: 'CAD', label: 'Canadian Dollar' },
    { value: 'AUD', label: 'Australian Dollar' },
    { value: 'NZD', label: 'New Zealand Dollar' },
    { value: 'CHF', label: 'Swiss Franc' },
    { value: 'JPY', label: 'Japanese Yen' },
    { value: 'CNY', label: 'Chinese Yuan' },
  ];
});

const salaryTypes = computed(() => {
  return [
    { value: 'PH', label: 'Per Hour' },
    { value: 'PD', label: 'Per Day' },
    { value: 'PW', label: 'Per Week' },
    { value: 'PM', label: 'Per Month' },
    { value: 'PY', label: 'Per Year' },
  ];
});

const onSubmit = async (values) => {
  submitting.value = true
  try {
    await jobsStore.createJob(
      title.value,
      email.value,
      description.value,
      requirements.value,
      // image.value,
      company.value,
      website.value,
      phone.value,
      category.value,
      location.value,
      job_type.value,
      salary_type.value,
      currency.value,
      salary.value,
      // openings.value,
      // work_experience.value,
      education_level.value,
      // work_hours.value,
      // vacancies.value,
      // deadline.value,
    )
    router.push('/jobs')
  } catch (error) {
    console.log(error)
    submitting.value = false
    alert('Error creating job')
  }
}

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Jobs',
    to: '/jobs',
  },
  {
    label: 'Create Job',
    to: '/jobs/create',
  }
]

const pageTitle = 'Create Job'


onMounted(() => {
  if (!user.value) {
    router.push('/accounts/login')
  }

  fetchJobs()
  fetchCompanies()
  fetchCategories()
  fetchLocations()
  getUser()
})

</script>