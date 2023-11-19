<template>
  <div class="main-content">
    <div class="page-content">
      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" />
      <!-- Start grid -->
      <section v-if="company" class="py-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div class="col-span-12 lg:col-span-4">
              <div class="border rounded border-gray-100/50 dark:border-neutral-600">
                <div class="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                  <div class="text-center">
                    <img src="~/assets/images/featured-job/img-01.png" alt="" class="w-20 h-20 mx-auto rounded-full">
                    <h6 class="mt-4 mb-0 text-lg text-gray-900 dark:text-gray-50">{{ company.name }}</h6>
                    <p class="mb-4 text-gray-500 dark:text-gray-300">Since July 2017</p>
                    <ul class="flex flex-wrap justify-center gap-4">
                      <li
                        class="h-10 w-10 text-center leading-[2.2] bg-gray-50 rounded-full text-lg text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 ease-in dark:bg-neutral-700 dark:text-white dark:hover:bg-violet-500/20">
                        <a href="javascript:void(0)" class="social-link"><i class="uil uil-twitter-alt"></i></a>
                      </li>
                      <li
                        class="h-10 w-10 text-center leading-[2.2] bg-gray-50 rounded-full text-lg text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 ease-in dark:bg-neutral-700 dark:text-white dark:hover:bg-violet-500/20">
                        <a href="javascript:void(0)" class="social-link"><i class="uil uil-whatsapp"></i></a>
                      </li>
                      <li
                        class="h-10 w-10 text-center leading-[2.2] bg-gray-50 rounded-full text-lg text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-300 ease-in dark:bg-neutral-700 dark:text-white dark:hover:bg-violet-500/20">
                        <a href="javascript:void(0)" class="social-link"><i class="uil uil-phone-alt"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="p-5 border-b border-gray-100/50 dark:border-neutral-600">
                  <h6 class="mb-5 font-semibold text-gray-900 text-17 dark:text-gray-50">Profile Overview</h6>
                  <ul class="space-y-4">
                    <li>
                      <div class="flex flex-wrap">
                        <label class="text-gray-900 w-[118px] font-medium dark:text-gray-50">Owner Name</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">Charles Dickens</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex flex-wrap">
                        <label class="text-gray-900 w-[118px] font-medium dark:text-gray-50">Employees</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">1500 - 1850</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex flex-wrap">
                        <label class="text-gray-900 w-[118px] font-medium dark:text-gray-50">Location</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ company.get_location }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex flex-wrap">
                        <label class="text-gray-900 w-[118px] font-medium dark:text-gray-50">Website</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">{{ company.website }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex flex-wrap">
                        <label class="text-gray-900 w-[118px] font-medium dark:text-gray-50">Established</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">July 10 2017</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex flex-wrap">
                        <label class="text-gray-900 w-[118px] font-medium dark:text-gray-50">Views</label>
                        <div>
                          <p class="mb-0 text-gray-500 dark:text-gray-300">2574</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="mt-8">
                    <a href="javascript:void(0)"
                      class="btn w-full bg-red-600 border-transparent text-white hover:-translate-y-1.5"><i
                        class="uil uil-phone"></i> Contact</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-8">
              <div class="p-6 border rounded border-gray-100/50 dark:border-neutral-600">
                <div>
                  <h6 class="mb-3 text-gray-900 text-17 dark:text-gray-50">About Company</h6>
                  <p class="mb-4 text-gray-500 dark:text-gray-300">{{ company.description }}</p>
                </div>
                <div class="pt-10">
                  <h6 class="mb-0 text-gray-900 text-17 fw-bold dark:text-gray-50">Current Opening</h6>
                  <div class="mt-5 space-y-5">
                    <FilterJobs :jobs="jobs" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End grid -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCompanyStore } from '~/store/companies'
import { useJobStore } from '~/store/jobs'
import { routeLocationKey } from 'vue-router'

const companyStore = useCompanyStore()
const jobStore = useJobStore()

const { company, loading, error } = storeToRefs(companyStore)
const { jobs } = storeToRefs(jobStore)

const route = useRoute()
const router = useRouter()

const fetchCompany = async () => {
  const { params } = route()
  await companyStore.fetchCompany(params.slug)
}

const fetchJobs = async () => {
  await jobStore.fetchJobs()
}

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Companies',
    to: '/companies',
  },
  {
    label: route.params.slug || 'Company',
    to: route.fullPath,
  }
]

const pageTitle = route.params.slug || 'Company'


onMounted(() => {
  fetchCompany()
  fetchJobs()
})

const companyJobs = computed(() => {
  return jobs.value.filter(job => job.company === company.id)
})
</script>
