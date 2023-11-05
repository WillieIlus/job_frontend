<template>
  <div class="flex flex-col items-center">
    <div class="w-full max-w-3xl">
      <div class="bg-white shadow-md rounded-md overflow-hidden">
        <div class="px-4 py-2 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-800">{{ job.title }}</h2>
          <p class="text-sm text-gray-500">{{ job.company }}</p>
        </div>
        <div class="px-4 py-2 border-b border-gray-200">
          <p class="text-sm text-gray-500">{{ job.location }}</p>
          <p class="text-sm text-gray-500">{{ job.type }}</p>
        </div>
        <div class="px-4 py-2 border-b border-gray-200">
          <p class="text-sm text-gray-500">{{ job.description }}</p>
        </div>
        <div class="px-4 py-2 border-b border-gray-200">
          <p class="text-sm text-gray-500">Views: {{ job.viewCount }}</p>
          <p class="text-sm text-gray-500">Applications: {{ job.applicationCount }}</p>
          <p class="text-sm text-gray-500">Deadline: {{ job.deadline }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: {
        title: 'Frontend Developer',
        company: 'Acme Inc.',
        location: 'Remote',
        type: 'Full-time',
        description: 'We are looking for a frontend developer to join our team.',
        viewCount: 100,
        applicationCount: 10,
        deadline: '2022-01-31'
      }
    }
  }
}
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
