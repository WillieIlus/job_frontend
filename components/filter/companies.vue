<template>
  <div v-for="company in companies" class="col-span-12 lg:col-span-4">
    <div class="relative px-6 py-12 border rounded-md border-gray-100/50 dark:border-neutral-600">
      <img src="~/assets/images/featured-job/img-01.png" alt="" class="mx-auto">
      <div class="mt-5 text-center">
        <NuxtLink :to="`/companies/${company.slug}`">
          <h6 class="mb-3 text-lg text-gray-900 dark:text-white">{{ company.name }}</h6>
        </NuxtLink>
        <p class="mb-6 text-gray-500 dark:text-gray-300">{{ company.get_location }}</p>

        <NuxtLink to="/companies/"
          class="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 focus:ring focus:ring-custom-500/30">52
          Opening Jobs</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>

const { companies } = defineProps({
  companies: {
    type: Array,
    required: true
  }
})

</script>