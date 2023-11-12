<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Locations</h1>
      </div>
    </div>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div v-if="loading" class="text-center mt-4">
            Loading...
          </div>
          <div v-else-if="error" class="text-center mt-4 text-red-600">
            An error occurred while fetching locations.
          </div>
          <div v-else>
            <!-- Your location content here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useLocationStore } from '@/store/locations';
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const isDarkMode = ref(false);


const locationStore = useLocationStore();
const { locations, loading, error } = storeToRefs(locationStore);
const router = useRouter();

const schema = yup.object({
  name: yup.string().min(3).required(),
  description: yup.string().min(16),
});

const { handleSubmit, validateField } = useForm({ validationSchema: schema });

const { value: name, errorMessage: nameError } = useField('name');
const { value: description, errorMessage: descriptionError } = useField('description');

const errors = {
  name: nameError || '',
  description: descriptionError || '',
};

const useValidateField = (field) => {
  validateField(field);
};

const submitting = ref(false);

const onHandleSubmit = handleSubmit(async (values) => {
  submitting.value = true;
  try {
    await locationStore.createLocation(values.name, values.description);
    router.push({ name: '/locations' });
  } catch (error) {
    console.error(error);
  } finally {
    submitting.value = false;
  }
});

onMounted(() => {
  locationStore.fetchLocations();
});
</script>
