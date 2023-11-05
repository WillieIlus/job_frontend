<template>
  <div class="flex flex-wrap -mx-4">
    <div v-for="company in companies" :key="company.id" class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img :src="company.logo" alt="Company Logo" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-medium text-gray-800">{{ company.name }}</h2>
          <p class="text-sm text-gray-600">{{ company.description }}</p>
          <div class="flex justify-between mt-4">
            <div class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.75c-4.556 0-8.25-3.694-8.25-8.25S5.444 2.25 10 2.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25zm-.75-12.75v6l4.5 2.625-.75 1.25L9.25 12V6h.5z"/>
              </svg>
              <span>{{ company.viewCount }} views</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.75c-4.556 0-8.25-3.694-8.25-8.25S5.444 2.25 10 2.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25zm-2.25-9.75h1.5v3h-1.5v-3zm3 0h1.5v3h-1.5v-3z"/>
              </svg>
              <span>{{ company.applicationCount }} applications</span>
            </div>
            <div class="flex items-center text-sm text-gray-600">
              <svg class="w-4 h-4 fill-current mr-1" viewBox="0 0 20 20">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18.75c-4.556 0-8.25-3.694-8.25-8.25S5.444 2.25 10 2.25s8.25 3.694 8.25 8.25-3.694 8.25-8.25 8.25zm-2.25-9.75h1.5v3h-1.5v-3zm3 0h1.5v3h-1.5v-3z"/>
              </svg>
              <span>{{ company.jobCount }} jobs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          name: 'Company A',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit.',
          logo: 'https://via.placeholder.com/500x300',
          viewCount: 100,
          applicationCount: 50,
          jobCount: 10
        },
        {
          id: 2,
          name: 'Company B',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit.',
          logo: 'https://via.placeholder.com/500x300',
          viewCount: 200,
          applicationCount: 75,
          jobCount: 20
        },
        {
          id: 3,
          name: 'Company C',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit.',
          logo: 'https://via.placeholder.com/500x300',
          viewCount: 300,
          applicationCount: 100,
          jobCount: 30
        }
      ]
    }
  }
}
</script>

<style>
/* Add any custom styles here */
</style>
