<!-- <template>
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
  <div class="flex flex-col md:flex-row"> -->
    <!-- Job filter options -->
    <!-- <div class="w-full md:w-1/4 bg-gray-100 p-6">
      <FilterCategories :categories="categories" />
      <FilterLocations :locations="locations" />
    </div> -->
    <!-- Job listings -->
    <!-- <div class="w-full md:w-3/4 p-6">
      <JobList :jobs="jobs" />
    </div>
  </div>
</template> -->

<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12 xl:gap-10 gap-y-12">
      <div class="col-span-12 xl:col-span-9">
        <div v-if="loading" class="text-center">Loading...</div>
        <div v-else-if="jobs.length === 0" class="text-center">no jobs found</div>
        <div v-else>
          <JobList :jobs="jobs" />
        </div>
      </div>
    </div>


  </div>

  <div class="col-span-12 space-y-5 lg:col-span-3">
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 active">
            <span class="text-gray-900 dark:text-gray-50">Location</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>

        <div class="block accordion-body">
          <div class="p-5">
            <div class="mb-3">
              <form class="relative">
                <input
                  class="border rounded-md border-gray-100/50 placeholder:text-13 placeholder:text-gray-300 dark:bg-neutral-700 dark:border-gray-100/20 dark:text-gray-300"
                  type="search" placeholder="Search...">
                <button class="absolute bg-transparent border-0 top-3 ltr:right-0 rtl:left-0 ltr:mr-2 rtl:ml-2"
                  type="submit"><span class="text-gray-500 mdi mdi-magnify"></span></button>
              </form>
            </div>
            <div class="area-range">
              <div class="mb-3 form-label dark:text-gray-300">Area Range: <span class="mt-2 example-val"
                  id="slider1-span">9.00</span> miles</div>
              <div id="slider1" class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50"> Work experience</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="p-5">
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">No
                experience</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                checked type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">0-3 years</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">3-6 years</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">More than 6
                years</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50">Type of employment</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="p-5">
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" checked value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">No
                experience</label>
            </div>
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">0-3 years</label>
            </div>
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">3-6 years</label>
            </div>
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">More than 6
                years</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50">Date Posted</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="p-5">
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">All</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                checked type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last Hour</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 24
                hours</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 7
                days</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 14
                days</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 30
                days</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50">Tags Cloud</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="flex flex-wrap gap-2 p-5">
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">design</a>
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">marketing</a>
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">business</a>
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">developer</a>
          </div>
        </div>
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
