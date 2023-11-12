<template>
  <div class="flex flex-col md:flex-row">
    <!-- Job filter options -->
    <div class="w-full md:w-1/4 bg-gray-100 p-6">
      <h2 class="text-lg font-bold mb-4">Filter by Category</h2>
      <ul class="list-disc pl-4">
        <li v-for="category in categories" :key="category.id" @click="selectCategory(category)" class="cursor-pointer hover:underline">{{ category.name }}</li>
      </ul>
      <h2 class="text-lg font-bold my-4">Filter by Location</h2>
      <ul class="list-disc pl-4">
        <li v-for="location in locations" :key="location.id" @click="selectLocation(location)" class="cursor-pointer hover:underline">{{ location.name }}</li>
      </ul>
    </div>
    <!-- Job listings -->
    <div class="w-full md:w-3/4 p-6">
      <h1 class="text-2xl font-bold mb-4">Job Listings</h1>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="jobs.length === 0" class="text-center">no jobs found</div>
      <div v-else>
        <div class="mb-4">
          <p class="text-gray-700">Showing {{ jobStart }}-{{ jobEnd }} of {{ jobCount }} jobs.</p>
        </div>
        <CardsBase v-for="job in jobs" :key="job.slug">
    <div class="flex">
      <div class="w-1/6">
        <img src="https://via.placeholder.com/150" alt="logo" class="w-full object-cover pr-7" />
      </div>
      <div class="w-5/6">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-xl font-bold ">
              <NuxtLink :to="`/jobs/${job.slug}`">{{ job.title }}</NuxtLink>
            </h2>
            <div class="flex items-center">
              <span class="text-sm text-slate-500 flex items-center mx-2">
                <RectangleGroupIcon class="h-5 w-5 mr-1" />
                {{ job.get_category }}
              </span>
              <span class="text-sm text-slate-500 flex items-center mx-2">
                <MapPinIcon class="h-5 w-5 mr-1" />
                {{ job.get_location }}
              </span>
            </div>
          </div>
          <div class="mt-4 flex items-center">
            <div class="flex items-center mr-4">
              <CalendarIcon class="h-5 w-5 mr-1" />
              <div class="text-sm text-slate-500">{{ job.timesince }} ago </div>
            </div>
            <HeartIcon class="h-5 w-5 text-red-500 mr-2" />
            <ButtonsBlue class="flex items-center">
              <DocumentArrowUpIcon class="h-5 w-5 mr-1" />
              Apply for Job
            </ButtonsBlue>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-justify text-slate-500 dark:text-slate-100 truncate hover:text-clip">{{ job.description }}</p>
        </div>
        <div class="mt-4 flex items-center">
          <span class="text-sm text-slate-500 flex items-center mx-2">
            <EyeIcon class="h-5 w-5 mr-1" />
            {{ job.view_count }}
          </span>
          <span class="text-sm text-slate-500 flex items-center mx-2">
            <CursorArrowRippleIcon class="h-5 w-5 mr-1" />
            {{ job.click_count }}
          </span>
          <span class="text-sm text-slate-500 flex items-center mx-2">
            <DocumentCheckIcon class="h-5 w-5 mr-1" />
            {{ job.apply_count }}
          </span>
        </div>
        <div class="mt-4 flex items-center">
          <span class="text-xs bg-green-500 text-white py-1 px-2 rounded-full mr-2">{{ job.get_job_type }}</span>
          <span class="text-xs bg-yellow-500 text-white py-1 px-2 rounded-full" v-if="job.featured">Featured</span>
        </div>
        <hr class="my-4 border-t-2 border-gray-300">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <CurrencyDollarIcon class="h-5 w-5 mr-1" />
            {{ job.salary }}/ {{ job.salary_type }}
          </div>
          <div class="text-sm text-slate-500">{{ job.days_left }} days left</div>
        </div>
      </div>
    </div>
  </CardsBase>
      </div>
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
