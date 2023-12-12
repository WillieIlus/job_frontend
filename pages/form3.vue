<template>
  <div class="main-content">
    <div class="page-content">
      <navigation-breadcrumbs :breadcrumbs="breadcrumbs" page-title="PageTitle" />
      <section class="py-16">
        <div class="container mx-auto">
          <div class="bg-white rounded-lg p-6 shadow-md">
            <h1 class="text-2xl font-semibold mb-4">Country Form</h1>
            <Form @submit="onSubmit" :validation-schema="schema" class="space-y-4">
              <div class="flex flex-wrap justify-between mx-2">                
                <FormsInput v-model="name" type="text" label="Country Name" name="name" id="name"/>
                <FormsInput v-model="code" type="text" label="Country Code" name="code" id="code"/>
                <div>
                  <label class="block text-sm font-medium text-gray-700">Flag</label>
                  <input type="file" ref="flagInput" placeholder="Country Flag" />
                </div>
              </div>
              <div class="flex justify-center">
                <ButtonsRed class="mx-7 pr-3 " type="button">
                  Cancel
                </ButtonsRed>
                <ButtonsGreen class="pl-3" :disabled="submitting" type="submit">
                  <span v-if="submitting">Creating Country…</span>
                  <span v-else>Create Country</span>
                </ButtonsGreen>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

  
<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useCountriesStore } from '~/store/countries';

const countriesStore = useCountriesStore();

const name = ref('');
const code = ref('');
const flagInput = ref(null);

const schema = yup.object({
  name: yup.string().required(),
  code: yup.string(),
  flag: yup.mixed()
});

const onSubmit = async () => {
  const data = new FormData();
  data.append('name', name.value);
  data.append('code', code.value);

  if (flagInput.value && flagInput.value.files.length > 0) {
    data.append('flag', flagInput.value.files[0]);
  }
  console.log(data)

  try {
    const response = await countriesStore.createCountry(data);
    if (!response) {
      throw new Error('Server responded with ' + response);
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Countries', to: '/locations/countries' },
  { label: 'Create Country', to: '/Country/create' }
];

const pageTitle = 'Create Country';

</script>