
<template>
  <CardsBreadcrumbs :items="breadcrumbs" />
  <CardsBase>
    <h1>Locations</h1>
    <div v-if="locations">
      <div v-for="location in locations" :key="location.id">
        <NuxtLink :to="`/locations/${location.slug}`">{{ location.name }}</NuxtLink>
        <p>{{ location.description }}</p>
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
import { useLocationStore } from '@/store/locations';
import { useRouter } from 'vue-router';

const breadcrumbs = [
  {
    label: 'Home',
    action: () => router.push({ name: 'index' }),
  },
  {
    label: 'Locations',
    action: () => router.push({ name: 'locations' }),
  },
  {
    label: 'Location Detail',
  },
];

const locationStore = useLocationStore();
const { location, loading, error } = storeToRefs(locationStore);
const router = useRouter();

const { fetchLocation } = locationStore;

onMounted(() => {
  fetchLocation(router.currentRoute.value.params.slug);
});


</script> 