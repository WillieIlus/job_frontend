import { defineStore } from 'pinia'
import { BASE_URL } from './base'
import { useAccountStore } from './accounts'

export const useJobStore = defineStore('job', {
  state: () => ({
    jobs: [],
    job: null,
    loading: false,
    error: null,
    query: ""
  }),
  getters: {
    getJobs: (state) => state.jobs,
    getJob: (state) => state.job,
    getLoading: (state) => state.loading,
    getError: (state) => state.error,
    jobsCount: (state) => state.jobs.length,
  },
  actions: {
    async handleError(action) {
      this.loading = true;
      try {
        await action();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchJobs(filters = {}) {
      await this.handleError(async () => {
        const queryString = Object.entries(filters)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');

        const response = await fetch(`${BASE_URL}/jobs?${queryString}`);
        const data = await response.json();
        this.jobs = data;
      });
    },
    
    async fetchJobsByUser(userId) {
      await this.handleError(async () => {
        const response = await fetch(`${BASE_URL}/jobs?userId=${userId}`);
        const data = await response.json();
        this.jobs = data;
      });
    },

    async fetchMyJobs() {
      await this.handleError(async () => {
        const accountStore = useAccountStore();
        const response = await fetch(`${BASE_URL}/jobs/my`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accountStore.token}`,
          },
        });
        const data = await response.json();
        this.jobs = data;
      });
    },

    async fetchJob(slug) {
      await this.handleError(async () => {
        const response = await fetch(`${BASE_URL}/jobs/${slug}`);
        const data = await response.json();
        this.job = data;
      });
    },


    async createJob(data) {
      try {
        const accountStore = useAccountStore();
        const token = accountStore.token;
        const headers = {
          'Authorization': 'Bearer ' + token
        };
        const response = await fetch(`${BASE_URL}/jobs/`, {
          method: 'POST',
          // headers: {
          //   // 'Content-Type': 'application/json',
          //   // 'Content-Type': 'multipart/form-data',
          //   'Authorization': 'Bearer ' + token,
          // },
          headers: headers,
          body:data,
        });if (!response.ok) {
          throw new Error('Server responded with ' + response.status);
        }
        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error('Error submitting form:', error);
        this.error = error;
      }
    },

    //     if (response.status === 400) {
    //       const errorData = await response.json();
    //       throw new Error(`Bad Request Error: ${JSON.stringify(errorData)}`);
    //     }

    //     const data = await response.json();
    //     this.jobs.push(data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    async updateJob(slug, job) {
      this.loading = true;
      const accountStore = useAccountStore();
      try {
        const response = await fetch(`${BASE_URL}/jobs/${slug}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accountStore.token}`,
          },
          body: JSON.stringify(job),
        });
        const data = await response.json();
        this.jobs = this.jobs.map((job) => {
          if (job.slug === slug) {
            return data;
          }
          return job;
        });
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async deleteJob(slug) {
      await this.handleError(async () => {
        await fetch(`${BASE_URL}/jobs/${slug}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });
        this.jobs = this.jobs.filter((job) => job.slug !== slug);
      });
    },
  },
})
