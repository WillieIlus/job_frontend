// store/countries.js
import { defineStore } from 'pinia';

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: [],
    country: null,
    loading: false,
    error: null,
  
  }),
  getters: {
    getCountries: (state) => state.countries,
    getCountry: (state) => state.country,
    countriesCount: (state) => state.countries.length,
  },
  actions: {
    async createCountry(data) {
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
