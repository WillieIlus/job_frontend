<template>
  <div class="main-content">
    <div class="page-content">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error }}</div>
      <div v-else>

        <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />

        <!-- Start team -->
        <section class="py-16">
          <div class="container mx-auto">
            <div class="grid grid-cols-12 xl:gap-10 gap-y-12">
              <div class="col-span-12 xl:col-span-9">
                <div class="job-list-header">
                  <form @submit="performSearch">
                    <div class="grid grid-cols-12 gap-3">
                      <div class="col-span-12 xl:col-span-3">
                        <div class="relative filler-job-form">
                          <i class="uil uil-briefcase-alt"></i>
                          <input class="w-full filter-job-input-box dark:text-gray-100" type="text" name="searchTitle"
                            v-model="searchTitle" placeholder="Search by title: job..." />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-span-12 xl:col-span-3">
                        <div class="relative filler-job-form">
                          <i class="uil uil-location-point"></i>
                          <select class="form-select" v-model="selectedCategory"
                            @change="selectCategory($event.target.value)">
                            <option value="">All Categories</option>
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{
                              category.name }}</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-span-12 xl:col-span-3">
                        <div class="relative filler-job-form">
                          <i class="uil uil-clipboard-notes"></i>
                          <select class="form-select" v-model="selectedLocation"
                            @change="selectLocation($event.target.value)">
                            <option value="">All Locations</option>
                            <option v-for="location in locations" :key="location.id" :value="location.id">{{ location.name
                            }}</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-span-12 xl:col-span-3">
                        <buttonsGreen @click="performSearch" type="submit"
                          class="w-full text-white border-transparent btn bg-blue-500 focus:ring focus:ring-custom-500/30">
                          <i class="uil uil-filter"></i> Fliter
                        </buttonsGreen>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end grid-->
                  </form>
                </div>

                <div class="space-y-8 mt-14">
                  <!-- <FilterJobs :jobs="jobStore.jobs" /> -->
                  <div v-for="job in jobs" :key="job.id">
                    {{ job.title }}
                  </div>
                </div>

                <FilterPagination />
              </div>
              <div class="col-span-12 space-y-5 lg:col-span-3">
                <FilterFilters />
              </div>
            </div>
          </div>
        </section>
        <!-- End team -->
      </div>
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue'
import {
  DocumentArrowUpIcon,
  DocumentCheckIcon,
  RectangleGroupIcon,
  MapPinIcon,
  EyeIcon,
  CursorArrowRippleIcon,
  HeartIcon,
  CurrencyDollarIcon
} from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'
import { Form, Field } from 'vee-validate'
import * as yup from 'yup'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { storeToRefs } from 'pinia'

const jobStore = useJobStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const route = useRoute()

const { jobs, loading, error, } = storeToRefs(jobStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)


const searchTitle = ref('')
const selectedCategory = ref('')
const selectedLocation = ref('')
const submitting = ref(false)



const performSearch = async () => {
  submitting.value = true
  try {
    await jobStore.fetchJobs({
      title: searchTitle.value,
      location: selectedLocation.value,
      category: selectedCategory.value,
    })
  } catch (error) {
    console.log(error)
  } finally {
    submitting.value = false
  }
}


const fetchCategories = async () => {
  await categoryStore.fetchCategories()
}

const fetchLocations = async () => {
  await locationStore.fetchLocations()
}

const selectCategory = (category) => {
  selectedCategory.value = category.name
  jobStore.filterByCategory(category.id)
}

const selectLocation = (location) => {
  selectedLocation.value = location.name
  jobStore.filterByLocation(location.id)
}

const jobCount = computed(() => jobs.value.length)
const jobStart = computed(() => jobCount.value > 0 ? 1 : 0)
const jobEnd = computed(() => jobs.value.length > 12 ? 12 : jobs.value.length)

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Jobs',
    to: '/jobs',
  }
]

const pageTitle = 'Jobs'

const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const debouncedSearch = debounce(performSearch, 3000) // Adjust the delay as needed

// watchEffect((onInvalidate) => {
//   performSearch()
// })

watch(searchTitle, debouncedSearch)

onMounted(async () => {
  // await fetchJobs()
  await fetchCategories()
  await fetchLocations()
})


</script>
