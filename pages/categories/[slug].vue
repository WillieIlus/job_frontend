
<template>
  <NavigationBreadcrumbs :items="breadcrumbs" :pageTitle="pageTitle" /> 
  <CardsBase>
    <h1>Categories</h1>
    <div v-if="categories">
      <div v-for="category in categories" :key="category.id">
        <NuxtLink :to="`/categories/${category.slug}`">{{ category.name }}</NuxtLink>
        <p>{{ category.description }}</p>
      </div>
    </div>
    <!-- display loading-->
    <div v-if="loading">
      <p>Loading...</p>
    </div>
    <!-- display error-->
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </CardsBase>
</template>

<script setup>

import { storeToRefs } from 'pinia';
import { useCategoryStore } from '@/store/categories';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Categories',
    to: '/categories',
  },
  {
    label: route.params.slug || 'Category', 
    to: route.fullPath,
  },
];

const pageTitle = route.params.slug || 'Category'; 
const categoryStore = useCategoryStore();
const { category, loading, error } = storeToRefs(categoryStore);
const router = useRouter();

const { fetchCategory } = categoryStore;

onMounted(() => {
  fetchCategory(router.currentRoute.value.params.slug);
});


</script> 