<template>
  <!-- Footer Start -->
  <footer class="footer ">
    <!-- start footer -->
    <section class="py-12 bg-zinc-800 dark:bg-neutral-900">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 lg:gap-10">
          <div class="col-span-12 xl:col-span-4">
            <div class="mr-12">
              <h4 class="text-white mb-6 text-[23px]">Alphajiri</h4>
              <p class="text-white/50 dark:text-gray-300">
                It is a long established fact that a reader will be of a page reader
                will be of at its layout.
              </p>
              <p class="mt-3 text-white dark:text-gray-50">Follow Us on:</p>
              <div class="mt-5">
                <ul class="flex gap-3">
                  <li
                    class="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                    <NuxtLink to="#">
                      <i class="uil uil-facebook-f"></i>
                    </NuxtLink>
                  </li>
                  <li
                    class="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                    <NuxtLink to="#">
                      <i class="uil uil-linkedin-alt"></i>
                    </NuxtLink>
                  </li>
                  <li
                    class="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                    <NuxtLink to="#">
                      <i class="uil uil-google"></i>
                    </NuxtLink>
                  </li>
                  <li
                    class="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                    <NuxtLink to="#">
                      <i class="uil uil-twitter"></i>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p class="mb-6 text-white text-16">Company</p>
            <ul class="space-y-4">
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="about.html">
                  <i class="mdi mdi-chevron-right"></i> About Us
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="contact.html">
                  <i class="mdi mdi-chevron-right"></i> Contact Us
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="services.html">
                  <i class="mdi mdi-chevron-right"></i> Services
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="blog.html">
                  <i class="mdi mdi-chevron-right"></i> Blog
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="team.html">
                  <i class="mdi mdi-chevron-right"></i> Team
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="pricing.html">
                  <i class="mdi mdi-chevron-right"></i> Pricing
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p class="mb-6 text-white text-16">For Jobs</p>
            <ul class="space-y-4">
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="job-categories.html">
                  <i class="mdi mdi-chevron-right"></i> Browser Categories
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="job-list.html">
                  <i class="mdi mdi-chevron-right"></i> Browser Jobs
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="job-details.html">
                  <i class="mdi mdi-chevron-right"></i> Job Details
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="bookmark-jobs.html">
                  <i class="mdi mdi-chevron-right"></i> Bookmark Jobs
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p class="mb-6 text-white text-16">For Candidates</p>
            <ul class="space-y-4">
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="candidate-list.html">
                  <i class="mdi mdi-chevron-right"></i> Candidate List
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="candidate-grid.html">
                  <i class="mdi mdi-chevron-right"></i> Candidate Grid
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="candidate-details.html">
                  <i class="mdi mdi-chevron-right"></i> Candidate Details
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
            <p class="mb-6 text-white text-16">Support</p>
            <ul class="space-y-4">
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="contact.html">
                  <i class="mdi mdi-chevron-right"></i> Help Center
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="faqs.html">
                  <i class="mdi mdi-chevron-right"></i> FAQ'S
                </NuxtLink>
              </li>
              <li
                class="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                <NuxtLink to="privacy-policy.html">
                  <i class="mdi mdi-chevron-right"></i> Privacy Policy
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- end footer -->
    <!-- strat footer alt -->
    <section class="py-6 border-t bg-zinc-800 border-gray-100/10 dark:bg-neutral-900">
      <div class="container mx-auto">
        <div class="text-center">
          <p class="mb-0 text-center text-white/50">
          <div>document.write(new Date().getFullYear())</div>
          Alphajiri
          </p>
        </div>
      </div>
    </section>
    <!-- end footer alt -->
  </footer>
  <!-- end Footer -->
</template>