<template>
  <!-- Navigation menu -->
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-8" src="~/assets/images/logo.svg" alt="Logo">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink class="text-white px-3 py-2 rounded-md text-sm font-medium" v-for="item in navItems"
                :key="item.name" :to="item.Link.to"
                :class="{ 'bg-gray-900 text-white': item.current, 'text-gray-300 hover:bg-gray-700 hover:text-white': !item.current }">
                {{ item.name }}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              aria-label="Notifications">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 19c0 1.66-1.34 3-3 3s-3-1.34-3-3"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10V6a5 5 0 0 1 10 0v4"></path>
              </svg>
            </button>

            <div class="ml-3 relative">
              <div>
                <button @click="popup = !popup"
                  class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
                  id="user-menu" aria-label="User menu" aria-haspopup="true">
                  <img class="h-8 w-8 rounded-full" src="~/assets/images/user.jpg" alt="">
                </button>
              </div>
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg" v-if="popup" :class="hidden">
                <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical"
                  aria-labelledby="user-menu">
                  <div v-if="isLoggedIn">
                    <NuxtLink v-for="item in userItems" :key="item.name" :to="item.Link.to"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      {{ item.name }}
                    </NuxtLink>
                    <div @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Logout
                    </div>
                  </div>
                  <NuxtLink v-else v-for="item in loginItems" :key="item.name" :to="item.Link.to"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden ">
          <button @click="popup = !popup"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            aria-label="Main menu" aria-expanded="false">
            <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="md:hidden" id="mobile-menu" >
      <div class="px-2 pt-2 pb-3 sm:px-3" v-if="popup" :class="hidden">
        <NuxtLink v-for="item in navItems" :key="item.name" :to="item.Link.to"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="{ 'bg-gray-900 text-white': item.current, 'text-gray-300 hover:bg-gray-700 hover:text-white': !item.current }">
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="~/assets/images/user.jpg" alt="">
          </div>
          <div class="ml-3" v-if="isLoggedIn">
            <div class="text-base font-medium leading-none text-white">{{ user.first_name }}</div>
            <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
          </div>
          <button
            class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:shadow-solid">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" @click="popup = !popup">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 19c0 1.66-1.34 3-3 3s-3-1.34-3-3"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10V6a5 5 0 0 1 10 0v4"></path>
            </svg>
          </button>
        </div>
        <div class="mt-3 px-2 sm:px-3" v-if="popup" :class="hidden">
          <div v-if="isLoggedIn">
          <NuxtLink v-for="item in userItems" :key="item.name" :to="item.Link.to"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{ 'bg-gray-900 text-white': item.current, 'text-gray-300 hover:bg-gray-700 hover:text-white': !item.current }">
            {{ item.name }}
          </NuxtLink>
          <div @click="logout" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
            Logout
          </div>
          </div>
          <NuxtLink v-else v-for="item in loginItems" :key="item.name" :to="item.Link.to"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{ 'bg-gray-900 text-white': item.current, 'text-gray-300 hover:bg-gray-700 hover:text-white': !item.current }">
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useAccountStore } from '~/store/accounts';

const accountStore = useAccountStore()
const { user, isLoggedIn } = storeToRefs(accountStore)
const route = useRoute()

const popup = ref(false)

const newJobButton = { name: 'New Job', Link: { to: '/new-job' } };
const logout = () => { accountStore.logout() }

const navItems = [
  { name: 'Home', Link: { to: '/' }, current: route.name === 'index' },
  { name: 'Jobs', Link: { to: '/jobs' }, current: route.name.includes('jobs') },
  { name: 'Companies', Link: { to: '/companies' }, current: route.name.includes('companies') },
  { name: 'Categories', Link: { to: '/categories' }, current: route.name.includes('categories') },
  { name: 'Locations', Link: { to: '/locations' }, current: route.name.includes('locations') },
]

const userItems = [
  { name: 'Profile', Link: { to: '/accounts/profile' }, current: route.name.includes('profile') },
  { name: 'Settings', Link: { to: '/accounts/dashboard' }, current: route.name.includes('settings') },
]

const loginItems = [
  { name: 'Login', Link: { to: '/accounts/login' }, current: route.name.includes('login') },
  { name: 'Register', Link: { to: '/accounts/signup' }, current: route.name.includes('register') },
]

onMounted(async () => {
  try {
    await accountStore.getUser();
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  } finally {
    isLoading.value = false;
  }
});

</script>