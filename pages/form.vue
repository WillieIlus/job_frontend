<!-- <template>
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
</template> -->
<template>
  <div class="main-content">
    <div class="page-content">
      <navigation-breadcrumbs :breadcrumbs="breadcrumbs" page-title="PageTitle" />
      <section class="py-16">
        <div class="container mx-auto">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h1 class="text-2xl font-semibold mb-4">Country Form</h1>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="flex flex-wrap justify-between mx-2">
                <div class="w-full md:w-1/2 px-2">
                  <FormsInput v-model="formData.name" label="Name" placeholder="Country Name" />
                </div>
                <div class="w-full md:w-1/2 px-2">
                  <FormsInput v-model="formData.slug" label="Slug" placeholder="Country Slug" />
                </div>
                <div class="w-full md:w-1/2 px-2">
                  <FormsInput v-model="formData.code" label="Code" placeholder="Country Code" />
                </div>
                <div class="w-full md:w-1/2 px-2">
                  <label class="block text-sm font-medium text-gray-700">Flag</label>
                  <input type="file" ref="flagInput" placeholder="Country Flag" />
                </div>
              </div>
              <div class="flex justify-center">
                <ButtonsRed class="mx-7 hover:bg-rose-900" type="cancel" :disabled="submitting">
                  <span v-if="submitting">Cancel</span>
                  <span v-else>Cancel</span>
                </ButtonsRed>
                <ButtonsGreen :disabled="submitting" type="submit">
                  <span v-if="submitting">Creating Country…</span>
                  <span v-else>Create Country</span>
                </ButtonsGreen>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

  
<script setup>
import { ref } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup';
import { useCountriesStore } from '~/store/countries';

const countriesStore = useCountriesStore();

const formData = ref({
  name: '',
  slug: '',
  code: '',
  flag: null,
});
//create a schema for validation of formData

const schema = yup.object({
  name: yup.string().required(),
  slug: yup.string().required(),
  code: yup.string().required(),
  flag: yup.string().required(),
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
    const response = await countriesStore.createCountry(data);
    if (!response.ok) {
      throw new Error('Server responded with ' + response.status);
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};


const breadcrumbs = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Countries',
    to: '/locations/countries',
  },
  {
    label: 'Create Country',
    to: '/Country/create',
  }
]

const pageTitle = 'Create Country'

</script>

