<template>
  <nav
    class="navbar fixed right-0 left-0 top-0 lg:top-[44.5px] px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900"
    id="navbar">
    <div class="mx-auto container-fluid">
      <div class="flex flex-wrap items-center justify-between mx-auto">
        <NuxtLink to="/" class="flex items-center">
          <img src="~/assets/images/logo-dark.png" alt="" class="logo-dark h-[22px] block dark:hidden">
          <img src="~/assets/images/logo-light.png" alt="" class="logo-dark h-[22px] hidden dark:block">
        </NuxtLink>
        <button data-collapse-toggle="navbar-collapse" type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg navbar-toggler group lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <div class="flex items-center lg:order-2">
          <div>
            <div class="relative dropdown">
              <div class="relative">
                <button type="button" class="btn border-0 h-[70px] dropdown-toggle px-4 text-gray-500 dark:text-gray-300"
                  aria-expanded="false" data-dropdown-toggle="notification">
                  <i class="text-2xl mdi mdi-bell"></i>
                </button>
                <span
                  class="absolute text-xs px-1.5 bg-red-500 text-white font-medium rounded-full left-6 top-3 ring-2 ring-white dark:ring-neutral-800">3</span>
              </div>
              <div
                class="absolute right-0 top-auto left-auto z-50 hidden list-none bg-white rounded shadow dropdown-menu w-72 dark:bg-neutral-800 "
                id="notification">
                <div class="border rounded border-gray-50 dark:border-neutral-600" aria-labelledby="notification">
                  <div class="grid grid-cols-1 ">
                    <div class="p-4 bg-gray-50 dark:bg-neutral-700">
                      <h6 class="mb-1 text-gray-800 dark:text-gray-50"> Notification </h6>
                      <p class="mb-0 text-gray-500 text-13 dark:text-gray-300"> Notification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div  class="relative dropdown ltr:mr-4 rtl:ml-4">
              <button v-if="isLoggedIn" type="button" class="flex items-center px-4 py-5 dropdown-toggle" id="page-header-user-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <img class="w-8 h-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2" :src="user.avatar" :alt="first_name">
                <span class="hidden fw-medium xl:block dark:text-gray-50">{{ user.first_name }}</span>
              </button>
              <ul v-if="isLoggedIn"
                class="absolute top-auto z-50 hidden w-48 p-3 list-none bg-white border rounded shadow-lg dropdown-menu border-gray-500/20 xl:ltr:-left-3 ltr:-left-32 rtl:-right-3 dark:bg-neutral-800"
                id="profile/log" aria-labelledby="navNotifications">
                <li v-for="(item, index) in loginItems" :key="index"
                  class="p-2 dropdown-item group/dropdown dark:text-gray-300">
                  <NuxtLink :to="item.Link.to"
                    class="text-15 font-medium text-gray-800  group-data-[theme-color=violet]:group-hover/dropdown:text-violet-500 group-data-[theme-color=sky]:group-hover/dropdown:text-sky-500 group-data-[theme-color=red]:group-hover/dropdown:text-red-500 group-data-[theme-color=green]:group-hover/dropdown:text-green-500 group-data-[theme-color=pink]:group-hover/dropdown:text-pink-500 group-data-[theme-color=blue]:group-hover/dropdown:text-blue-500 group-hover:pl-1.5 transition-all duration-300 ease-in dark:text-gray-50">
                    {{ item.name }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="navbar-collapse"
          class="navbar-res items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1 group-focus:[.navbar-toggler]:block hidden">
          <ul class="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center lg:flex-row"
            id="navigation-menu">
            <li v-for="(item, index) in navItems" :key="index" class="py-5 lg:px-4">
              <NuxtLink :to="item.Link.to" class="py-2.5 text-gray-800 font-medium leading-tight dark:text-gray-50"
                data-bs-toggle="dropdown">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
import { useAccountStore } from '~/store/accounts';

const accountStore = useAccountStore()
const { user, isLoggedIn } = storeToRefs(accountStore)
const route = useRoute()

const popup = ref(false)
const mobileMenuOpen = ref(false)
const userMenuOpen = ref(false)
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  const html = document.querySelector('html')
  if (isDarkMode.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}

const togglePopup = () => { popup.value = !popup.value }
const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const toggleUserMenu = () => { userMenuOpen.value = !userMenuOpen.value }

const navItems = [
  { name: 'Home', Link: { to: '/' }, current: route.name === 'index' },
  { name: 'Jobs', Link: { to: '/jobs' }, current: route.name.includes('jobs') },
  { name: 'Companies', Link: { to: '/companies' }, current: route.name.includes('companies') },
  { name: 'Categories', Link: { to: '/categories' }, current: route.name.includes('categories') },
  { name: 'Locations', Link: { to: '/locations' }, current: route.name.includes('locations') },
]

const loginItems = [
  { name: 'Login', Link: { to: '/NuxtLinkccounts/login' }, current: route.name.includes('login') },
  { name: 'Register', Link: { to: '/NuxtLinkccounts/signup' }, current: route.name.includes('register') },
]

onMounted(async () => {
  try {
    await accountStore.getUser();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  } finally {
  }
});

</script>

