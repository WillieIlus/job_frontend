<template>
  <div class="bg-white dark:bg-gray-800 text-black dark:text-white p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="company in companies" :key="company.id">
        <div class="bg-gray-100 dark:bg-gray-700 rounded p-4 shadow-md">
          <h2 class="text-xl font-semibold mb-2">{{ company.name }}</h2>
          <p class="text-gray-600 dark:text-gray-400">{{ company.description }}</p>
          <div class="mt-2">
            <span class="inline-block bg-blue-500 text-white rounded-full px-2 py-1 text-sm font-semibold">{{ company.get_category }}</span>
            <span class="ml-2 inline-block bg-green-500 text-white rounded-full px-2 py-1 text-sm font-semibold">{{ company.get_location }}</span>
          </div>
          <div class="mt-4">
            <NuxtLink :to="'/companies/' + company.slug" class="bg-indigo-700 text-white py-2 px-4 rounded-md text-sm font-semibold">
              Details
            </NuxtLink>
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <span class="text-sm font-semibold">Phone:</span>
              <span class="text-sm">{{ company.phone }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm font-semibold">Email:</span>
              <span class="text-sm">{{ company.email }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-sm font-semibold">Address:</span>
              <span class="text-sm">{{ company.address }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCompanyStore } from '~/store/companies'
import { useCategoryStore } from '~/store/categories'
import { useAccountStore } from '~/store/accounts'
import { useLocationStore } from '~/store/locations'

const companiesStore = useCompanyStore()
const categoriesStore = useCategoryStore()
const accountStore = useAccountStore()
const locationStore = useLocationStore()

const { companies, loading, error } = storeToRefs(companiesStore)
const { categories } = storeToRefs(categoriesStore)

const fetchCompanies = async () => {
  await companiesStore.fetchCompanies()
}

const fetchCategories = async () => {
  await categoriesStore.fetchCategories()
}

onMounted(() => {
  fetchCompanies()
  fetchCategories()
})

</script>