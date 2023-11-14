<template>
  <div class="col-span-12 xl:col-span-9">
    <div class="space-y-8 mt-14">
      <div
        class="relative overflow-hidden transition-all duration-500 ease-in-out bg-white border rounded-md border-gray-100/50 group/jobs group-data-[theme-color=violet]:hover:border-violet-500 group-data-[theme-color=sky]:hover:border-sky-500 group-data-[theme-color=red]:hover:border-red-500 group-data-[theme-color=green]:hover:border-green-500 group-data-[theme-color=pink]:hover:border-pink-500 group-data-[theme-color=blue]:hover:border-blue-500 hover:-translate-y-2 dark:bg-neutral-900 dark:border-neutral-600">
        <div class="p-6">
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-1">
              <div class="px-2 mb-4 text-center mb-md-0">
                <a href="company-details.html"><img src="" alt="" class="mx-auto img-fluid rounded-3"></a>
              </div>
            </div>
            <!--end col-->
            <div class="col-span-10">
              <h5 class="mb-1 fs-17"><a href="job-details.html" class="dark:text-gray-50">HTML Developer</a>
                <small class="font-normal text-gray-500 dark:text-gray-300">(0-2 Yrs Exp.)</small>
              </h5>
              <ul class="flex flex-wrap mb-0 lg:gap-3 gap-y-3">
                <li>
                  <p class="mb-0 text-sm text-gray-500 dark:text-gray-300">Jobcy Technology Pvt.Ltd</p>
                </li>
                <li>
                  <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="mdi mdi-map-marker"></i>
                    California</p>
                </li>
                <li>
                  <p class="mb-0 text-sm text-gray-500 dark:text-gray-300"><i class="uil uil-wallet"></i> $250 -
                    $800 / month</p>
                </li>
              </ul>
              <div class="mt-4">
                <div class="flex flex-wrap gap-1.5">
                  <span class="bg-green-500/20 text-green-500 text-11 px-2 py-0.5 font-medium rounded">Full
                    Time</span>
                  <span class="bg-yellow-500/20 text-yellow-500 text-11 px-2 py-0.5 font-medium rounded">Urgent</span>
                  <span class="bg-sky-500/20 text-sky-500 text-11 px-2 py-0.5 font-medium rounded">Private</span>
                </div>
              </div>
            </div>
          </div>
          <!--end row-->
        </div>
        <div class="px-4 py-3 bg-gray-50 dark:bg-neutral-700">
          <div class="grid grid-cols-12">
            <div class="col-span-12 lg:col-span-6">
              <ul class="flex flex-wrap gap-2 text-gray-700 dark:text-gray-50">
                <li><i class="uil uil-tag"></i> Keywords :</li>
                <li><a href="javascript:void(0)" class="primary-link text-muted">Ui designer</a>,</li>
                <li><a href="javascript:void(0)" class="primary-link text-muted">developer</a></li>
              </ul>
            </div>
            <!--end col-->
            <div class="col-span-12 mt-2 lg:col-span-6 lg:mt-0">
              <div class="ltr:lg:text-right rtl:lg:text-left dark:text-gray-50">
                <a href="#applyNow" data-bs-toggle="modal">Apply Now <i class="mdi mdi-chevron-double-right"></i></a>
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <div class="absolute top-4 ltr:right-4 rtl:left-4">
          <div class="w-8 h-8 text-center text-white bg-red-600 rounded">
            <a href="javascript:void(0)"><i class="uil uil-heart-alt text-lg leading-[1.9]"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-span-12 space-y-5 lg:col-span-3">
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 active">
            <span class="text-gray-900 dark:text-gray-50">Location</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>

        <div class="block accordion-body">
          <div class="p-5">
            <div class="mb-3">
              <form class="relative">
                <input
                  class="border rounded-md border-gray-100/50 placeholder:text-13 placeholder:text-gray-300 dark:bg-neutral-700 dark:border-gray-100/20 dark:text-gray-300"
                  type="search" placeholder="Search...">
                <button class="absolute bg-transparent border-0 top-3 ltr:right-0 rtl:left-0 ltr:mr-2 rtl:ml-2"
                  type="submit"><span class="text-gray-500 mdi mdi-magnify"></span></button>
              </form>
            </div>
            <div class="area-range">
              <div class="mb-3 form-label dark:text-gray-300">Area Range: <span class="mt-2 example-val"
                  id="slider1-span">9.00</span> miles</div>
              <div id="slider1" class="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50"> Work experience</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="p-5">
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">No
                experience</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                checked type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">0-3 years</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">3-6 years</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">More than 6
                years</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50">Type of employment</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="p-5">
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" checked value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">No
                experience</label>
            </div>
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">0-3 years</label>
            </div>
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">3-6 years</label>
            </div>
            <div class="mt-2">
              <input
                class="cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-neutral-600 dark:checked:bg-violet-500/20"
                type="radio" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">More than 6
                years</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50">Date Posted</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="p-5">
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">All</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                checked type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last Hour</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 24
                hours</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 7
                days</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 14
                days</label>
            </div>
            <div class="mt-2">
              <input
                class="rounded cursor-pointer group-data-[theme-color=violet]:checked:bg-violet-500 group-data-[theme-color=sky]:checked:bg-sky-500 group-data-[theme-color=red]:checked:bg-red-500 group-data-[theme-color=green]:checked:bg-green-500 group-data-[theme-color=pink]:checked:bg-pink-500 group-data-[theme-color=blue]:checked:bg-blue-500 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-600 dark:checked:bg-violet-500/20"
                type="checkbox" value="" id="flexCheckChecked1">
              <label class="text-gray-500 cursor-pointer ltr:ml-2 rtl:mr-2 dark:text-gray-300">Last 30
                days</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-tw-accordion="collapse">
      <div class="text-gray-700 accordion-item dark:text-gray-300">
        <h6>
          <button type="button"
            class="flex items-center justify-between w-full px-4 py-2 font-medium text-left accordion-header group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20 group active">
            <span class="text-gray-900 text-15 dark:text-gray-50">Tags Cloud</span>
            <i class="mdi mdi-chevron-down text-xl group-[.active]:rotate-180 text-gray-900 dark:text-gray-50"></i>
          </button>
        </h6>
        <div class="block accordion-body">
          <div class="flex flex-wrap gap-2 p-5">
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">design</a>
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">marketing</a>
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">business</a>
            <a href="javascript:void(0)"
              class="bg-gray-50 text-13 rounded px-2 py-0.5 font-medium text-gray-500 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out dark:text-gray-50 dark:bg-neutral-600/40">developer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
