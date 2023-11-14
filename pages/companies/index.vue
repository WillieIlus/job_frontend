<template>
  <!-- <div class="bg-white dark:bg-gray-800 text-black dark:text-white p-4">
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
  </div> -->
  <div class="main-content">
    <div class="page-content">

      <section
        class="pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900 bg-[url('../images/home/page-title.png')] bg-center bg-cover relative">
        <div class="container mx-auto">
          <div class="grid">
            <div class="col-span-12">
              <div class="text-center text-white">
                <h3 class="mb-4 text-[26px]">Company List</h3>
                <div class="page-next">
                  <nav class="inline-block" aria-label="breadcrumb text-center">
                    <ol class="flex flex-wrap justify-center text-sm font-medium uppercase">
                      <li><a href="index.html">Home</a></li>
                      <li><i class="bx bxs-chevron-right align-middle px-2.5"></i><a href="javascript:void(0)">Pages</a>
                      </li>
                      <li class="active" aria-current="page"><i
                          class="bx bxs-chevron-right align-middle px-2.5"></i>Company List</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/images/about/shape.png" alt="" class="absolute block bg-cover -bottom-0 dark:hidden">
        <img src="assets/images/about/shape-dark.png" alt="" class="absolute hidden bg-cover -bottom-0 dark:block">
      </section>

      <CompanyList :companies="companies" />

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