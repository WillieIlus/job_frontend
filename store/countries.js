// store/countries.js
import { defineStore } from 'pinia';

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    formData: {
      name: '',
      slug: '',
      code: '',
      flag: null,
    },
  }),
  actions: {
    async submitForm(data) {
      try {
        const response = await fetch('http://127.0.0.1:8000/locations/countries/', {
          method: 'POST',
          body: data,
        });
        if (!response.ok) {
          throw new Error('Server responded with ' + response.status);
        }
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  }  
});
