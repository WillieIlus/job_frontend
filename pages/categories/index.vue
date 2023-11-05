<template>
  <div class="flex flex-wrap -mx-4">
    <div v-for="category in categories" :key="category.id" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ category.name }}</div>
          <p class="text-gray-700 text-base">{{ category.description }}</p>
        </div>
        <div class="px-6 py-4 bg-gray-100">
          <p class="text-gray-700 text-base">{{ category.jobCount }} Jobs</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Web Development',
          description: 'Developing websites and web applications',
          jobCount: 25
        },
        {
          id: 2,
          name: 'Mobile Development',
          description: 'Developing mobile applications for iOS and Android',
          jobCount: 15
        },
        {
          id: 3,
          name: 'Data Science',
          description: 'Analyzing and interpreting complex data',
          jobCount: 10
        }
      ]
    }
  }
}
</script>
