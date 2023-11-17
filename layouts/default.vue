<template>
  <div lang="en" dir="ltr" data-mode="light" class="scroll-smooths group" data-theme-color="blue">
    <body class="bg-white dark:bg-neutral-800">
      <NavigationTopbar />
      <Navigation />
      <div class="main-content">
        <div class="page-content">
          <section class="py-16">
            <slot />
          </section>
        </div>
      </div>
      <NavigationFooter />
    </body>
  </div>
</template>
