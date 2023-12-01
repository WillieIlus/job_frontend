<template>
  <div class="py-20 container">
    <div class="flex justify-center">
      <div class="w-1/2">
        <form @submit.prevent="submitForm">
          <div class="p-5">
            <label class="p-2" for="name">Name</label>
            <input type="text" v-model="formData.name" placeholder="Country Name">
          </div>
          <div class="p-5">
            <label class="p-2" for="slug">Slug</label>
            <input type="text" v-model="formData.slug" placeholder="Country Slug">
          </div>
          <div class="p-5">
            <label class="p-2" for="code">Code</label>
            <input type="text" v-model="formData.code" placeholder="Country Code">
          </div>
          <div class="p-5">
            <label class="p-2" for="flag">Flag</label>
            <input type="file" ref="flagInput" placeholder="Country Flag">
          </div>
          <button class="w-full bg-green-500 p-5 py-2 rounded text-white" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { useCountriesStore } from '~/store/countries';

const countriesStore = useCountriesStore();

const formData = ref({
  name: '',
  slug: '',
  code: '',
  flag: null,
});

const flagInput = ref(null);

const submitForm = async () => {
  const data = new FormData();
  data.append('name', formData.value.name);
  data.append('slug', formData.value.slug);
  data.append('code', formData.value.code);
  if (flagInput.value.files[0]) {
    data.append('flag', flagInput.value.files[0]);
  }

  try {
    const response = await countriesStore.submitForm(data); // Pass 'data' instead of 'flagInput.value'
    if (!response.ok) {
      throw new Error('Server responded with ' + response.status);
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};



</script>
