<template>
  <div class="fixed transition-all duration-300 ease-linear top-[27.5rem] switcher" id="style-switcher">
    <div class="w-48 p-4 bg-white shadow-md">
      <div class="mt-5">
        <h3 class="mb-2 font-semibold text-gray-900 text-16">Light/dark Layout</h3>
        <div class="flex justify-center mt-2">
          <!-- light-dark mode button -->
          <a href="javascript: void(0);" id="mode"
            class="z-40 px-6 py-2 font-normal text-white transition-all duration-300 ease-linear rounded text-14 bg-zinc-800"
            onclick="changeMode(event)">
            <i class="hidden text-xl uil uil-brightness dark:text-white dark:inline-block"></i>
            <i class="inline-block text-xl uil uil-moon dark:text-zinc-800 dark:hidden"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- light-dark mode button -->
  <a href="javascript: void(0);" onclick="toggleSwitcher()"
    class="fixed z-40 flex flex-col gap-3 px-4 py-3 font-normal text-white group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 top-96 text-14 ltr:rounded-r rtl:rounded-l">
    <i class="text-xl mdi mdi-cog mdi-spin"></i>
</a>
</template>