<template>
  <div class="flex flex-col">
    <div>
      <ButtonsBlue>
        <NuxtLink to="/jobs/create">Create Job</NuxtLink>
      </ButtonsBlue>
    </div>
    <div class="flex mb-4 mt-16">
      <FormsSearch />
    </div>
    <div class="flex">
      <div class="w-1/4 px-10">
        Filter List
      </div>
      <div class="w-3/4 px-10">
        Showing 01-12 of 96 jobs
      </div>
    </div>
    <div class="flex gap-2">
      <div class="w-1/4">
        <FilterCategories :categories="categories" />
        <FilterLocations :locations="locations" />
      </div>
      <div class="w-3/4">
        <div v-if="loading">
          <p>Loading...</p>
        </div>
        <ul v-else-if="jobs">
          <JobList :jobs="jobs" />
        </ul>
        <ul v-else>
          what is this?
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useJobStore } from '~/store/jobs';
import { useCategoryStore } from '~/store/categories';
import { useLocationStore } from '~/store/locations';

const jobStore = useJobStore()
const categoryStore = useCategoryStore()
const locationStore = useLocationStore()

const { jobs, loading } = storeToRefs(jobStore)
const { categories } = storeToRefs(categoryStore)
const { locations } = storeToRefs(locationStore)

const fetchJobs = async () => {
  await jobStore.fetchJobs()
}

const fetchCategories = async () => {
  await categoryStore.fetchCategories()
}

const fetchLocations = async () => {
  await locationStore.fetchLocations()
}


onMounted(async () => {
  await fetchJobs()
  await fetchCategories()
  await fetchLocations()
})


</script>  