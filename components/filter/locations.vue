<template>
  <div v-if="loading">
    <p>Loading...</p>
  </div>
  <div v-else-if="locations">
    <div class="col-span-12 md:col-span-6 xl:col-span-4">
      <div class="mt-10 rounded bg-gray-50 dark:bg-neutral-700">
        <div class="p-6">
          <ul class="space-y-4">
            <li v-for="location in locations" :key="location.id" class="px-4 py-2 bg-white rounded dark:bg-neutral-600">
              <NuxtLink :to="`/locations/${location.slug}`" class="text-gray-900 dark:text-white"> {{
                location.name }} <span
                  class="px-2 py-1 rounded bg-sky-500/20 text-11 text-sky-500 ltr:float-right rtl:float-left">{{
                    location.job_count }}</span></NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    no categories found
  </div>
</template>

<script setup>
const { locations } = defineProps({
  locations: {
    type: Array,
    required: true
  }
})

</script>
  