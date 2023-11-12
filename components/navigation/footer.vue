<template>
  <footer class="bg-slate-900 dark:bg-slate-800 text-white py-4">
    <div class="container mx-auto flex flex-col items-center space-y-4">
      <!-- Row 1: Your Logo or Site Name -->
      <div class="text-lg font-bold">Alphajiri</div>

      <!-- Row 2: Navigation Links (Desktop) -->
      <nav class="hidden lg:flex space-x-6">
        <template v-for="item in navItems" :key="item.name">
          <NuxtLink :to="item.Link" class="hover:bg-slate-700 px-2 py-1 rounded">{{ item.name }}</NuxtLink>
        </template>
      </nav>
    </div>
  </footer>
  <footer class="bg-slate-700 dark:bg-slate-800 text-white py-4">
    <div class="container mx-auto flex flex-col items-center space-y-4">

      <!-- Row 3: Social Media Links and Current Year -->
      <div class="flex space-x-4">
        <div class="flex space-x-4">
          <!-- Add your social media icons and links here -->
          <a href="#" class="text-xl hover:text-slate-500">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-xl hover:text-slate-500">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-xl hover:text-slate-500">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <span>&copy; {{ currentYear }} Alphajiri</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia';
import { Bars3Icon, BellIcon, XMarkIcon, MoonIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/outline'
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

const currentYear = ref(new Date().getFullYear())

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
