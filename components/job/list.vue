<template>
  <!-- <CardsBase v-for="job in jobs" :key="job.slug">
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
  </CardsBase> -->
  <div v-for="job in jobs" :key="job.slug"
    class="relative mt-4 overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/job group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
    <div class="p-4">
      <div class="grid items-center grid-cols-12">
        <div class="col-span-12 lg:col-span-2">
          <div class="mb-4 text-center mb-md-0">
            <NuxtLink to=""><img src="~/assets/images/featured-job/img-01.png" alt="" class="mx-auto img-fluid rounded-3">
            </NuxtLink>
          </div>
        </div>
        <!--end col-->
        <div class="col-span-12 lg:col-span-3">
          <div class="mb-2 mb-md-0">
            <h5 class="mb-1 fs-18">
              <NuxtLink :to="`/jobs/${job.slug}`" class="text-gray-900 dark:text-gray-50">{{ job.title }}</NuxtLink>
            </h5>
            <p class="mb-0 text-gray-500 fs-14 dark:text-gray-300">{{ job.get_company }}</p>
          </div>
        </div>
        <!--end col-->
        <div class="col-span-12 lg:col-span-3">
          <div class="mb-2 lg:flex">
            <div class="flex-shrink-0">
              <i
                class="mr-1 mdi mdi-map-marker group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500"></i>
            </div>
            <p class="mb-0 text-gray-500 dark:text-gray-300">{{ job.address }}, {{ job.get_location }}</p>
          </div>
        </div>
        <!--end col-->
        <div class="col-span-12 lg:col-span-2">
          <div>
            <p class="mb-0 text-gray-500 dark:text-gray-300">
              <ClockIcon
                class="h-4 w-4 mr-1 uil uil-clock-three group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500" />
              {{ job.timesince }} ago
            </p>
          </div>
        </div>
        <!--end col-->
        <div class="col-span-12 lg:col-span-2">
          <div class="flex flex-wrap gap-1.5">
            <span class="bg-green-500/20 text-green-500 text-13 px-2 py-0.5 font-medium rounded">{{ job.get_job_type
            }}</span>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <div class="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-6">
          <div>
            <p class="mb-0 text-gray-500 dark:text-gray-300"><span
                class="font-medium text-gray-900 dark:text-gray-50">Experience :</span> {{ job.experience }} years</p>
          </div>
        </div>
        <!--end col-->
        <div class="col-span-12 mt-2 lg:col-span-6 lg:mt-0 flex items-center">
          <div class="ltr:lg:text-right rtl:lg:text-left dark:text-gray-50">
            <NuxtLink to="#applyNow" data-bs-toggle="modal">Apply Now </NuxtLink>
            <ChevronDoubleRightIcon class="h-5 w-5 mr-1" />
          </div>
        </div>

        <!--end col-->
      </div>
      <!--end row-->
    </div>
  </div>
</template>

<script setup>
import { DocumentArrowUpIcon, DocumentCheckIcon, RectangleGroupIcon, MapPinIcon, EyeIcon, CursorArrowRippleIcon, HeartIcon, CurrencyDollarIcon, ChevronDoubleRightIcon, ClockIcon } from '@heroicons/vue/24/outline'

const { jobs } = defineProps({
  jobs: {
    type: Array,
    required: true
  }
})
</script>
