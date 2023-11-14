<template>
  <div v-for="company in companies" :key="company.slug" class="col-span-12 lg:col-span-4">
    <div class="relative px-6 py-12 border rounded-md border-gray-100/50 dark:border-neutral-600">
      <img src="assets/images/featured-job/img-02.png" alt="" class="mx-auto">
      <div class="mt-5 text-center">
        <a href="company-details.html">
          <h6 class="mb-3 text-lg text-gray-900 dark:text-white">Creative Agency</h6>
        </a>
        <p class="mb-6 text-gray-500 dark:text-gray-300">UK</p>

        <a href="company-details.html"
          class="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 focus:ring focus:ring-custom-500/30">11
          Opening Jobs</a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { DocumentArrowUpIcon, DocumentCheckIcon, RectangleGroupIcon, MapPinIcon, EyeIcon, CursorArrowRippleIcon, HeartIcon, CurrencyDollarIcon, ChevronDoubleRightIcon, ClockIcon } from '@heroicons/vue/24/outline'

const { companies } = defineProps({
  companies: {
    type: Array,
    required: true
  }
})
</script>