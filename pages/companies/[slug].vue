<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">{{ company.name }}</h1>
      </div>
    </div>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Company Name
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ company.name }}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Industry
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ company.industry }}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Address
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ company.address }}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Phone Number
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ company.phone }}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Email
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                {{ company.email }}
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-sm font-medium text-gray-500">
                Website
              </dt>
              <dd class="mt-1 text-sm text-gray-900">
                <a :href="company.website" target="_blank">{{ company.website }}</a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: {
        name: 'Acme Inc.',
        industry: 'Technology',
        address: '123 Main St, Anytown USA',
        phone: '555-555-5555',
        email: 'info@acme.com',
        website: 'https://www.acme.com'
      }
    }
  }
}
</script>

<style>
/* Add your custom styles here */
</style>
