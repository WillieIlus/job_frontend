<template>
  <div class="main-content">
    <div class="page-content">

      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" /> 

      <!-- Start grid -->
      <section class="py-20">
        <div class="container mx-auto">
          <div class="grid items-center grid-cols-12 mb-4">
            <div class="col-span-12 lg:col-span-8">
              <div class="mb-3 mb-lg-0">
                <h6 class="text-gray-900 text-16 dark:text-gray-50"> Showing 1 – 8 of 11 results </h6>
              </div>
            </div><!--end col-->

            <div class="col-span-12 lg:col-span-4">
              <div class="candidate-list-widgets">
                <div class="grid items-center grid-cols-12 gap-3">
                  <div class="col-span-12 lg:col-span-6">
                    <div class="selection-widget">
                      <select class="form-select" data-trigger name="choices-single-filter-orderby"
                        id="choices-single-filter-orderby" aria-label="Default select example">
                        <option value="df">Default</option>
                        <option value="ne">Newest</option>
                        <option value="od">Oldest</option>
                        <option value="rd">Random</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-span-12 lg:col-span-6">
                    <div class="selection-widget">
                      <select class="form-select" data-trigger name="choices-candidate-page" id="choices-candidate-page"
                        aria-label="Default select example">
                        <option value="df">All</option>
                        <option value="ne">8 per Page</option>
                        <option value="ne">12 per Page</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div><!--end candidate-list-widgets-->
            </div><!--end col-->
          </div>
          <div class="mt-8">
            <div class="grid grid-cols-12 gap-8">
              <FilterCompanies :companies="companies" />
            </div>
          </div>
          <FilterPagination />
        </div>
      </section>
      <!-- End grid -->
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

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Companies',
    to: '/companies',
  },
]

const pageTitle = 'Companies'

onMounted(() => {
  fetchCompanies()
  fetchCategories()
})

</script>