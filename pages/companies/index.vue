<template>
    <div class="flex flex-wrap justify-center">
      <div v-for="company in companies" :key="company.id" class="m-4">
        <nuxt-link :to="`/companies/${company.slug}`">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="company.logo" :alt="company.name" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ company.name }}</div>
              <p class="text-gray-700 text-base">{{ company.description }}</p>
              <div class="flex justify-between mt-4">
                <div class="text-gray-700 text-base">{{ company.user }}</div>
                <div class="text-gray-700 text-base">{{ company.get_location }}</div>
              </div>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                v-for="category in categories"
                :key="category.id"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                {{ category.name }}
              </span>
            </div>
          </div>
        </nuxt-link>
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