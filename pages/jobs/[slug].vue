<template>
  <div class="main-content">
    <div class="page-content">
      <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" /> 
      <!-- Start grid -->
      <section v-if="job" class="py-16">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div class="col-span-12 lg:col-span-8">
              <div class="border rounded-md border-gray-100/30 dark:border-neutral-600/80">
                <div class="relative">
                  <img src="~/assets/images/job-detail.jpg" alt="" class="rounded-md img-fluid mb-7">
                  <div class="absolute z-20 -bottom-7 left-7">
                    <img src="~/assets/images/featured-job/img-10.png" alt="" class="rounded-md img-fluid">
                  </div>
                </div>
                <div class="p-6">
                  <div class="grid grid-cols-12">
                    <div class="col-span-12 lg:col-span-8">
                      <div class="relative">
                        <h5 class="mb-1 text-gray-900 dark:text-gray-50">{{ job.title }}</h5>
                        <ul class="flex gap-4 text-gray-500 dark:text-gray-300">
                          <li>
                            <i class="mdi mdi-account"></i> {{ job.vacancies }} Vacancy(ies)
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4">
                      <div class="flex gap-3 md:justify-end">
                        <div
                          class="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                          <a href="javascript:void(0)"><i class="uil uil-heart-alt text-lg leading-[1.8]"></i></a>
                        </div>
                        <div
                          class="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                          <a href="javascript:void(0)"><i class="uil uil-setting text-lg leading-[1.8]"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="grid grid-cols-12 mt-8 gap-y-3 lg:gap-3">
                    <div class="col-span-12 lg:col-span-3">
                      <div class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                        <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Experience</p>
                        <p class="font-medium text-gray-900 dark:text-gray-50">Minimum {{ job.experience }} Year</p>
                      </div>
                    </div>
                    <div class="col-span-12 lg:col-span-3">
                      <div class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                        <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Employee type</p>
                        <p class="font-medium text-gray-900 dark:text-gray-50">{{ job.type }}</p>
                      </div>
                    </div>
                    <div class="col-span-12 lg:col-span-3">
                      <div class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                        <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Position</p>
                        <p class="font-medium text-gray-900 dark:text-gray-50">Senior</p>
                      </div>
                    </div>
                    <div class="col-span-12 lg:col-span-3">
                      <div class="p-4 border rounded border-gray-100/50 dark:border-neutral-600/80">
                        <p class="mb-1 text-gray-500 dark:text-gray-300 text-13">Offer Salary</p>
                        <p class="font-medium text-gray-900 dark:text-gray-50">{{ job.currency }} {{ job.salary }} / {{ job.salary_type }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-5">
                    <h5 class="mb-3 text-gray-900 dark:text-gray-50">Job Description</h5>
                    <div>
                      <p class="mb-0 text-gray-500 dark:text-gray-300">{{ job.description }}</p>
                    </div>
                  </div>

                  <div class="mt-5">
                    <h5 class="mb-3 text-gray-900 dark:text-gray-50">Responsibilities</h5>
                    <div>
                      <p class="mb-3 text-gray-500 dark:text-gray-300">{{ job.requirements }}</p>
                    </div>
                  </div>

                  <div class="mt-5">
                    <h5 class="mb-3 text-gray-900 dark:text-gray-50">Qualification</h5>
                    <div>
                      <p class="mb-3 text-gray-500 dark:text-gray-300">{{ job.requirements }}</p>
                    </div>
                  </div>

                  <div class="pt-3 mt-4">
                    <ul class="flex flex-wrap items-center gap-3 mb-0">
                      <li class="mt-1 dark:text-gray-50">
                        Share this job:
                      </li>
                      <li class="mt-1">
                        <a href="javascript:void(0)"
                          class="btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 border-transparent text-white hover:-translate-y-1.5"><i
                            class="uil uil-facebook-f"></i> Facebook</a>
                      </li>
                      <li class="mt-1">
                        <a href="javascript:void(0)"
                          class="btn bg-red-600 border-transparent text-white hover:-translate-y-1.5"><i
                            class="uil uil-google"></i> Google+</a>
                      </li>
                      <li class="mt-1">
                        <a href="javascript:void(0)"
                          class="btn bg-green-500 border-transparent text-white hover:-translate-y-1.5"><i
                            class="uil uil-linkedin-alt"></i> linkedin</a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              <div class="mt-10 space-y-8">
                <h5 class="text-gray-900 dark:text-gray-50">Related Jobs</h5>

                <JobList :jobs="jobs" />

                <div class="mt-4 text-center">
                  <NuxtLink to="/jobs" class="font-medium text-gray-900 dark:text-gray-50">View More <i
                      class="mdi mdi-arrow-right"></i></NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-span-12 space-y-6 lg:col-span-4">
              <div class="border rounded border-gray-100/30 dark:border-neutral-600/80">
                <div class="p-6">
                  <h6 class="text-gray-900 text-17 dark:text-gray-50">Job Overview</h6>

                  <ul>
                    <li>
                      <div class="flex mt-6">
                        <i
                          class="uil uil-user icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Job Title</h6>
                          <p class="text-gray-500 dark:text-gray-300">{{ job.title }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex mt-6">
                        <i
                          class="uil uil-star-half-alt icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Experience</h6>
                          <p class="text-gray-500 dark:text-gray-300"> {{ job.experience }} Years</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex mt-6">
                        <i
                          class="uil uil-location-point icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Location</h6>
                          <p class="text-gray-500 dark:text-gray-300"> {{ job.address }} {{ job.get_location }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex mt-6">
                        <i
                          class="uil uil-usd-circle icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Offered Salary</h6>
                          <p class="text-gray-500 dark:text-gray-300">{{ job.currency }} {{ job.salary }} / {{ job.salary_type }}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex mt-6">
                        <i
                          class="uil uil-graduation-cap icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Qualification</h6>
                          <p class="text-gray-500 dark:text-gray-300">Bachelor Degree</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex mt-6">
                        <i
                          class="uil uil-building icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Industry</h6>
                          <p class="text-gray-500 dark:text-gray-300">Private</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="flex mt-6">
                        <i
                          class="uil uil-history icon group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 h-12 w-12 text-center leading-[2.4] text-xl group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 rounded-full"></i>
                        <div class="ltr:ml-4 rtl:mr-4">
                          <h6 class="mb-2 text-sm text-gray-900 dark:text-gray-50">Date Posted</h6>
                          <p class="text-gray-500 dark:text-gray-300">Posted {{ job.timesince }} ago</p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div class="mt-8 space-y-2">
                    <a href="#applyNow" data-bs-toggle="modal"
                      class="btn w-full group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 border-transparent text-white hover:-translate-y-1.5">Apply
                      Now <i class="uil uil-arrow-right"></i></a>
                    <a href=""
                      class="btn w-full bg-yellow-500/20 border-transparent text-yellow-500 hover:-translate-y-1.5 dark:bg-yellow-500/30"><i
                        class="uil uil-bookmark"></i> Add Bookmark</a>
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
import { storeToRefs } from 'pinia'
import { useJobStore } from '~/store/jobs'
import { useRouter, useRoute } from 'vue-router'

const jobStore = useJobStore()

const { job, jobs, loading, error } = storeToRefs(jobStore)
const route = useRoute()
const router = useRouter()

const fetchJob = async () => {
  await jobStore.fetchJob()
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
    label: 'Jobs',
    to: '/jobs',
  },
  {
    label: 'route.params.slug' || 'Jobs',
    to: route.fullPath,
  }
]

const pageTitle = 'route.params.slug' || 'Jobs'


onMounted(async () => {
  await fetchJob(route.params.slug),
  await fetchJobs({ category: job.category })

})

</script>
