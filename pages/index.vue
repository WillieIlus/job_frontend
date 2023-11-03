<template>
  <div class="flex flex-col h-screen">
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
                <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700" aria-label="Notifications">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0 1.66-1.34 3-3 3s-3-1.34-3-3"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10V6a5 5 0 0 1 10 0v4"></path>
                </svg>
              </button>

              <div class="ml-3 relative">
                <div>
                  <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid" id="user-menu" aria-label="User menu" aria-haspopup="true">
                    <img class="h-8 w-8 rounded-full" src="~/assets/images/user.jpg" alt="">
                  </button>
                </div>
                <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-label="Main menu" aria-expanded="false">
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
      <div class="md:hidden" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="~/assets/images/user.jpg" alt="">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <button class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:shadow-solid">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0 1.66-1.34 3-3 3s-3-1.34-3-3"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10V6a5 5 0 0 1 10 0v4"></path>
              </svg>
            </button>
          </div>
          <div class="mt-3 px-2 sm:px-3">
            <a href="#" class="block text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Your Profile</a>
            <a href="#" class="block text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Settings</a>
            <a href="#" class="block text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Sign out</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-grow">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">Welcome to our website!</h1>
          <p class="mt-1 text-xl text-gray-600">We're glad you're here.</p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Facebook</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9.31v-7.01h-2.12v-2.73h2.12v-1.98c0-2.1 1.28-3.24 3.14-3.24.91 0 1.69.07 1.92.1v2.18l-1.31.01c-1.03 0-1.23.49-1.23 1.21v1.59h2.45l-.32 2.73h-2.13v7.01h4.15a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Twitter</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23 4.75c-.86.38-1.79.64-2.76.76a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .96-3.11 1.18a4.9 4.9 0 0 0-8.38 4.47c-4.06-.2-7.67-2.15-10.1-5.12a4.87 4.87 0 0 0-.66 2.44c0 1.68.86 3.17 2.16 4.04a4.88 4.88 0 0 1-2.22-.61v.06c0 2.34 1.67 4.28 3.88 4.72a4.88 4.88 0 0 1-2.2.08c.62 1.92 2.41 3.32 4.53 3.35a9.8 9.8 0 0 1-6.08 2.09c-.4 0-.8-.02-1.2-.07a13.86 13.86 0 0 0 7.51 2.2c9.01 0 13.94-7.47 13.94-13.94l-.02-.63a9.92 9.92 0 0 0 2.43-2.54z"></path>
            </svg>
          </a>

          <a href="#" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">GitHub</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 16.42 5.37 20.29 9.84 20.88C10.34 20.96 10.5 20.64 10.5 20.39C10.5 20.14 10.49 19.7 10.48 19.15C8.43 19.61 7.86 18.5 7.62 18.06C7.5 17.84 7.09 16.96 6.64 16.69C6.22 16.44 5.66 15.82 6.39 15.81C7.13 15.8 7.82 16.28 8.02 16.61C8.71 18.03 9.96 17.99 10.5 17.82C10.5 16.92 10.77 16.23 11.18 15.81C8.87 15.5 6.87 14.47 6.87 10.96C6.87 9.68 7.28 8.57 7.87 7.74C7.73 7.47 7.34 6.66 7.92 5.02C7.92 5.02 8.82 4.72 10.5 6.15C11.28 5.93 12.12 5.82 13 5.82C13.88 5.82 14.72 5.93 15.5 6.15C17.18 4.72 18.08 5.02 18.08 5.02C18.66 6.66 18.27 7.47 18.13 7.74C18.72 8.57 19.13 9.68 19.13 10.96C19.13 14.48 17.13 15.5 14.82 15.81C15.23 16.23 15.5 16.92 15.5 17.82C16.04 17.99 17.29 18.03 17.98 16.61C18.18 16.28 18.87 15.8 19.61 15.81C20.34 15.82 19.78 16.44 19.36 16.69C18.91 16.96 18.5 17.84 18.38 18.06C18.14 18.5 17.57 19.61 15.52 19.15C15.51 19.7 15.5 20.14 15.5 20.39C15.5 20.64 15.66 20.96 16.16 20.88C20.63 20.29 24 16.42 24 12C24 6.48 19.52 2 14 2H12Z"></path>
            </svg>
          </a>
        </div>
        <div class="mt-8">
          <p class="text-center text-base text-gray-400">
            &copy; 2021 My Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
