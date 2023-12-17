<template>
  <div v-for="job in jobs" :key="job.slug"
    class="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
    <div class="p-6">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 lg:col-span-1">
          <div class="px-2 mb-4 text-center mb-md-0">
            <NuxtLink to="/"><img src="~/assets/images/featured-job/img-02.png" alt=""
                class="mx-auto img-fluid rounded-3"></NuxtLink>
          </div>
        </div>
        <!--end col-->
        <div class="col-span-10">
          <h5 class="mb-1 fs-17">
            <NuxtLink :to="`/jobs/${job.slug}`" class="dark:text-gray-50">{{ job.title }} </NuxtLink>
            <small class="font-normal text-gray-500 dark:text-gray-300"> ( {{ job.experience }} Yrs Exp.)</small>
          </h5>
          <ul class="flex flex-wrap mb-0 lg:gap-3 gap-y-3">
            <li>
              <p class="mb-0 text-sm text-gray-500 dark:text-gray-300">{{ job.get_company }}</p>
            </li>
            <li>
              <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="mdi mdi-map-marker"></i> {{ job.address }}, {{ job.get_location }}</p>
            </li>
            <li>
              <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="uil uil-wallet"></i>{{ job.currency }} {{ job.salary }} / {{ job.salary_type }}</p>
              
            </li>
          </ul>
          <div class="mt-4">
            <div class="flex flex-wrap gap-1.5">
              <span class="bg-red-500/20 text-red-500 text-11 px-2 py-0.5 font-medium rounded">{{ job.job_type }}</span>
              <span v-if="job.is_featured" class="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded"> featured </span>
            </div>
          </div>
        </div>
      </div>
      <!--end row-->
    </div>
    <div class="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
      <div class="grid grid-cols-12">
        <div class="col-span-12 lg:col-span-6">
          <ul class="flex flex-wrap gap-2 text-gray-700 dark:text-gray-50">
            <li><i class="uil uil-tag"></i> Category :</li>
            <li><NuxtLink to="" class="primary-link text-muted"> {{ job.get_category}}</NuxtLink>,</li>
          </ul>
        </div>
        <!--end col-->
        <div class="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
          <div class="ltr:lg:text-right rtl:lg:text-left dark:text-gray-50">
            <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
  </div>
</template>

<script setup>

const { jobs } = defineProps({
  jobs: {
    type: Array,
    required: true
  }
})
</script>
