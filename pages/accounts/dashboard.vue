<template>
  <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" /> 

  <div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold mb-8">Dashboard</h1>
    <div v-if="user">
      <p class="text-lg mb-4">Welcome {{ user.first_name }} to your dashboard</p>
      <div class="flex flex-col items-center space-y-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="editProfile">Edit
          Profile</button>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          @click="changePassword">Change Password</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAccountStore } from '~/store/accounts'

const breadcrumbs = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Dashboard',
    to: '/accounts/dashboard',
  },
])

const pageTitle = ref('Dashboard')

const accountStore = useAccountStore()
const router = useRouter()

const { user, isLoggedIn } = accountStore
const editProfile = () => {
  router.push('/accounts/profile')
}

const changePassword = () => {
  router.push('/accounts/change-password')
}

onMounted(() => {
  if (!isLoggedIn) {
    router.push('/accounts/signup')
  }
})

</script>
```
