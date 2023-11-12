<template>
  <nav class="bg-slate-900 text-white">
    <div class="container mx-auto flex items-center justify-between py-4">
      <div class="flex items-center">
        <NuxtLink to="/" class="text-xl font-bold">
          Alphajiri
        </NuxtLink>
      </div>
      <div class="hidden md:flex items-center space-x-4">
        <div v-for="(item, index) in navItems" :key="index">
          <NuxtLink :to="item.Link.to" :class="[
            'py-2 px-3 rounded-md hover:bg-slate-700',
            item.current ? 'bg-indigo-700' : ''
          ]">
            {{ item.name }}
          </NuxtLink>
        </div>
        <div v-if="isLoggedIn" class="flex items-center space-x-4">
          <NuxtLink to="/companies/form" class="py-2 px-3 rounded-md bg-indigo-900 hover:bg-indigo-700">
            New Company
          </NuxtLink>
          <NuxtLink to="/jobs/form" class="py-2 px-3 rounded-md bg-slate-700 hover:bg-indigo-700">
            New Job
          </NuxtLink>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <button class="md:hidden" @click="toggleMobileMenu">
          <Bars3Icon class="h-6 w-6" />
        </button>
        <div v-if="isLoggedIn" class="relative">
          <button class="flex items-center space-x-2" @click="toggleUserMenu">
            <img class="h-8 w-8 rounded-full" :src="user.avatar" :alt="user.name" />
            <ChevronDownIcon class="h-4 w-4" />
          </button>
          <div v-if="userMenuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
            <NuxtLink to="/accounts/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Profile
            </NuxtLink>
            <button class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="accountStore.logout">
              Logout
            </button>
          </div>
        </div>
        <div v-else class="flex justify-center">
          <div v-for="(item, index) in loginItems" :key="index">
            <NuxtLink :to="item.Link.to" :class="[ 'bg-indigo-900 py-2 px-3 m-1 rounded-md hover-bg-indigo-700',
              item.current ? 'bg-slate-700' : ''
            ]">
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <div v-if="mobileMenuOpen" class="absolute top-0 left-0 w-full h-full bg-slate-900 z-10">
          <div class="flex flex-col items-center justify-center h-full">
            <button class="absolute top-0 right-0 m-4" @click="toggleMobileMenu">
              <XMarkIcon class="h-6 w-6" />
            </button>
            <div v-for="(item, index) in navItems" :key="index">
              <NuxtLink :to="item.Link.to" :class="[
                'py-2 px-3 rounded-md hover:bg-slate-700',
                item.current ? 'bg-slate-700' : ''
              ]">
                {{ item.name }}
              </NuxtLink>
            </div>
            <div v-if="isLoggedIn" class="flex items-center space-x-4">
              <NuxtLink to="/companies/form" class="py-2 px-3 rounded-md bg-indigo-900 hover:bg-indigo-700">
                New Company
              </NuxtLink>
              <NuxtLink to="/jobs/form" class="py-2 px-3 rounded-md bg-slate-700 hover:bg-indigo-700">
                New Job
              </NuxtLink>
            </div>
            <div v-if="!isLoggedIn" class="flex flex-col items-center justify-center space-y-4">
              <div v-for="(item, index) in loginItems" :key="index">
                <NuxtLink :to="item.Link.to" :class="[
                  'py-2 px-3 rounded-md hover:bg-slate-700',
                  item.current ? 'bg-slate-700' : ''
                ]">
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>

          </div>
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
  { name: 'Login', Link: { to: '/accounts/login' }, current: route.name.includes('login') },
  { name: 'Register', Link: { to: '/accounts/signup' }, current: route.name.includes('register') },
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

nav a:hover {
  background-color: #4B5563;
}
</style>

