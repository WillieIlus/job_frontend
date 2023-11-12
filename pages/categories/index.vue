<template>
  <div :class="{ 'dark': isDarkMode }" class="bg-gray-100 dark:bg-gray-800 min-h-screen p-4">
    <CardsBreadcrumbs :items="breadcrumbs" class="mb-4" />

<!-- Categories List Section -->
<CardsBase class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
  <HeadingsH1 :class="{'text-white': isDarkMode, 'text-gray-800': !isDarkMode}" class="text-2xl mb-4">Categories</HeadingsH1>
  <div v-if="categories" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <div v-for="category in categories" :key="category.id">
      <CardsList class="p-4 hover:shadow-md transition duration-300 ease-in-out">
        <NuxtLink :to="`/categories/${category.slug}`" class="text-blue-500 font-semibold text-lg">{{ category.name }}</NuxtLink>
        <p class="mt-2 text-gray-600 dark:text-gray-300">{{ category.description }}</p>
      </CardsList>
    </div>
  </div>

  <!-- Display Loading -->
  <div v-if="loading" class="text-gray-500 mt-6">
    <p>Loading...</p>
  </div>

  <!-- Display Error -->
  <div v-if="error" class="text-red-500 mt-6">
    <p>{{ error }}</p>
  </div>
</CardsBase>


    <!-- Category Form Section -->
    <CardsBase class="mt-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
      <HeadingsH1 :class="{'text-white': isDarkMode, 'text-gray-800': !isDarkMode}" class="text-2xl mb-4">Add New Category</HeadingsH1>
      <form @submit.prevent="onHandleSubmit" class="space-y-4">
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-gray-600 dark:text-gray-300">Category Name</label>
          <input v-model="name" @input="() => useValidateField('name')" type="text" id="name" name="name" :class="{ 'border-red-500': errors.name }" class="mt-1 p-2 border rounded focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out">
          <span v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</span>
        </div>

        <div class="flex flex-col">
          <label for="description" class="text-sm font-medium text-gray-600 dark:text-gray-300">Description</label>
          <textarea v-model="description" @input="() => useValidateField('description')" id="description" name="description" :class="{ 'border-red-500': errors.description }" rows="4" class="mt-1 p-2 border rounded focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"></textarea>
          <span v-if="errors.description" class="text-red-500 text-sm">{{ errors.description }}</span>
        </div>

        <button :disabled="submitting" type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
          {{ submitting ? 'Submitting...' : 'Submit' }}
        </button>
      </form>
    </CardsBase>

  </div>
</template>

<!-- The rest of your script setup remains unchanged -->


<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '@/store/categories';
import { useRouter } from 'vue-router';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const isDarkMode = ref(false);
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
    await categoryStore.createCategory(values.name, values.description);
    router.push({ name: '/categories' });
  } catch (error) {
    console.error(error);
  } finally {
    submitting.value = false;
  }
});

onMounted(() => {
  categoryStore.fetchCategories();
});

</script>
