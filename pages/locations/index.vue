<template>
  <div class="flex flex-wrap">
    <div v-for="location in locations" :key="location.id" class="w-full md:w-1/2 lg:w-1/3 p-4">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ location.name }}</div>
          <p class="text-gray-700 text-base">{{ location.description }}</p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ location.jobCount }} Jobs</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          id: 1,
          name: 'New York',
          description: 'The largest city in the United States',
          jobCount: 100
        },
        {
          id: 2,
          name: 'San Francisco',
          description: 'A city in California known for its tech industry',
          jobCount: 50
        },
        {
          id: 3,
          name: 'London',
          description: 'The capital city of England',
          jobCount: 75
        }
      ]
    }
  }
}
</script>

<style>
/* Add any custom styles here */
</style>
