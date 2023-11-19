
<template>
  <div class="main-content">
    <div class="page-content">

      <NavigationBreadcrumbs />

      <!-- Start grid -->
      <section class="py-20">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div class="col-span-12 lg:col-span-6 lg:col-start-4">
              <div class="mb-5 text-center">
                <p class="inline px-2 py-1 text-sm font-medium text-white bg-yellow-500 rounded">Jobs Live Today</p>
                <h4 class="mt-2 text-gray-900 text-22 dark:text-white">Browse Job By Categories</h4>
                <p class="mt-2 text-gray-500 dark:text-gray-300">Post a job to tell us about your project. We'll quickly
                  match you with the right freelancers.</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-y-5 md:gap-8">
            <div v-for="(category, index) in categories" :key="category.id"
              :class="`col-span-12 md:col-span-6 xl:col-span-4 ${index % 3 === 0 ? 'col-start-4' : ''}`">
              <div class="mt-10 rounded bg-gray-50 dark:bg-neutral-700">
                <div class="p-6">
                  <ul class="space-y-4">
                    <li class="px-4 py-2 bg-white rounded dark:bg-neutral-600">
                      <NuxtLink :to="`/categories/${category.slug}`" class="text-gray-900 dark:text-white"> {{
                        category.name }} <span
                          class="px-2 py-1 rounded bg-sky-500/20 text-11 text-sky-500 ltr:float-right rtl:float-left">{{
                            category.job_count }}</span></NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End grid -->
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '@/store/categories';
import { useRouter } from 'vue-router';

const breadcrumbs = [
  {
    label: 'Home',
    action: () => router.push({ name: 'index' }),
  },
  {
    label: 'Categories',
  },
];

const categoryStore = useCategoryStore();
const { categories, loading, error } = storeToRefs(categoryStore);
const router = useRouter();

onMounted(() => {
  categoryStore.fetchCategories();
});

</script>
