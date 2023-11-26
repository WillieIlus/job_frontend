
// const jobStore = useJobStore();
// // pass the query parameters as an object
// await jobStore.fetchJobs({ location: 'Nairobi', category: 'Software' });


<template>
  <div>
    <ul>
      <li v-for="job in jobStore.jobs" :key="job.id">
        {{ job.title }}
      </li>
    </ul>
  </div>
</template>



<script setup>
import { onMounted } from 'vue'
import { DocumentArrowUpIcon, DocumentCheckIcon, RectangleGroupIcon, MapPinIcon, EyeIcon, CursorArrowRippleIcon, HeartIcon, CurrencyDollarIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'

import { useJobStore } from '~/store/jobs'
import { useCategoryStore } from '~/store/categories'
import { useLocationStore } from '~/store/locations'
import { storeToRefs } from 'pinia'

const jobStore = useJobStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()
const route = useRoute()

const { jobs, loading, error } = storeToRefs(jobStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)

const selectedCategory = ref('')
const selectedLocation = ref('')


const fetchJobs = async () => {
  await jobStore.fetchJobs({ location: 'Nairobi', category: 'Software' })
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

onMounted(async () => {
  await fetchJobs()
  await fetchCategories()
  await fetchLocations()
})
</script>
