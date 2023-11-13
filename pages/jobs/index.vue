<template>
  <div class="flex flex-col pt-6 pl-6">
    <h1 class="text-2xl font-bold mb-4 text-center">Job Listings</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="jobs.length === 0" class="text-center">no jobs found</div>
    <div v-else>
      <div class="mb-4">
        <p class="text-gray-700 text-center">Showing {{ jobStart }}-{{ jobEnd }} of {{ jobCount }} jobs.</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col md:flex-row">
    <!-- Job filter options -->
    <div class="w-full md:w-1/4 bg-gray-100 p-6">
      <FilterCategories :categories="categories" />
      <FilterLocations :locations="locations" />
    </div>
    <!-- Job listings -->
    <div class="w-full md:w-3/4 p-6">
      <JobList :jobs="jobs" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { DocumentArrowUpIcon, DocumentCheckIcon, RectangleGroupIcon, MapPinIcon, EyeIcon, CursorArrowRippleIcon, HeartIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { storeToRefs } from 'pinia'

const jobStore = useJobStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()

const { jobs, loading } = storeToRefs(jobStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)

const selectedCategory = ref('')
const selectedLocation = ref('')

const fetchJobs = async () => {
  await jobStore.fetchJobs()
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

onMounted(async () => {
  await fetchJobs()
  await fetchCategories()
  await fetchLocations()
})
</script>

<style scoped>
/* Add Tailwind CSS classes here */
</style>
