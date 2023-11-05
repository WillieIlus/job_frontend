<template>
  <div class="flex flex-col min-h-screen">
    <Navigation />
    <div class="flex-grow bg-gray-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtPage />
      </div>
    </div>
    <NavigationFooter />
  </div>
</template>
