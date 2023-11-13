<template>
  <div v-if="loading" class="flex justify-center items-center">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
  <div v-else-if="company">
    <div class="bg-gray-100 min-h-screen">
      <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">{{ company.name }}</h1>
        </div>
      </div>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2" v-if="!loading && !error">
              <div class="sm:col-span-1">
                <dt class="text-lg font-medium text-slate-700">
                  Company Name
                </dt>
                <dd class="mt-1 text-sm text-gray-900">{{ company.name }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-lg font-medium text-slate-700">
                  Industry
                </dt>
                <dd class="mt-1 text-sm text-gray-900">{{ company.get_category }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-lg font-medium text-slate-700">
                  Address
                </dt>
                <dd class="mt-1 text-sm text-gray-900">{{ company.get_location }} - {{ company.address }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-lg font-medium text-slate-700">
                  Phone Number
                </dt>
                <dd class="mt-1 text-sm text-gray-900">{{ company.phone }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-lg font-medium text-slate-700">
                  Email
                </dt>
                <dd class="mt-1 text-sm text-gray-900">{{ company.email }}</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-lg font-medium text-slate-700">
                  Website
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  <NuxtLink :to="company.website" >{{ company.website }}</NuxtLink>
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-lg font-medium text-slate-700">
                  Description
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ company.description }}
                </dd>
              </div>
            </dl>
            <div v-else-if="loading" class="text-center mt-4">
              Loading...
            </div>
            <div v-else class="text-center mt-4 text-red-600">
              An error occurred while fetching company details.
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" v-if="!loading && !error">
          <div class="px-4 py-5 sm:p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Jobs at {{ company.name }}</h2>
            <JobList :jobs="jobs" />
          </div>
        </div>
        <div v-else class="text-center mt-4 text-red-600">
          Unable to fetch company's jobs due to an error.
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <div class="text-red-500">Error: {{ error }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCompanyStore } from '~/store/companies'
import { useJobStore } from '~/store/jobs'

const companyStore = useCompanyStore()
const jobStore = useJobStore()

const { company, loading, error } = storeToRefs(companyStore)
const { jobs } = storeToRefs(jobStore)

const fetchCompany = async () => {
  const { params } = useRoute()
  await companyStore.fetchCompany(params.slug)
}

const fetchJobs = async () => {
  await jobStore.fetchJobs()
}

onMounted(() => {
  fetchCompany()
  fetchJobs()
})

const companyJobs = computed(() => {
  return jobs.value.filter(job => job.company === company.id)
})
</script>
