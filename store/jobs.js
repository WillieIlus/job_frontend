import { defineStore } from 'pinia'
import { BASE_URL } from './base'
import { useAccountStore } from './accounts'

export const useJobStore = defineStore('job', {
  state: () => ({
    jobs: [],
    job: null,
    loading: false,
    error: null,
    queryString: ""
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

    // async fetchJobs() {
    //   await this.handleError(async () => {
    //     const response = await fetch(`${BASE_URL}/jobs`);
    //     const data = await response.json();
    //     this.jobs = data;
    //   });
    // },

    async fetchJobs(filters = {}) {
      await this.handleError(async () => {
        // const response = await fetch(`${BASE_URL}/jobs?title=${queryString}`);
        const response = await fetch(`${BASE_URL}/jobs?title=Graphic Designer needed`);
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


    async createJob(
      title,
      email, description, requirements,
      // image, 
      company, website, phone, category, location, job_type, salary_type, currency, salary,
      // openings, 
      // work_experience, 
      education_level,
      // work_hours, 
      // vacancies, 
      // deadline
    ) {
      try {
        const accountStore = useAccountStore();
        const token = accountStore.token;

        const requestData = {
          title: title,
          email: email,
          description: description,
          requirements: requirements,
          // image: image,
          company: company,
          website: website,
          phone: phone,
          category: category,
          location: location,
          job_type: job_type,
          salary_type: salary_type,
          currency: currency,
          salary: salary,
          // openings: openings,
          // work_experience: work_experience,
          education_level: education_level,
          // work_hours: work_hours,
          // vacancies: vacancies,
          // deadline: deadline,
        };

        const response = await fetch(`${BASE_URL}/jobs/?`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify(requestData),
        });

        if (response.status === 400) {
          const errorData = await response.json();
          throw new Error(`Bad Request Error: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        this.jobs.push(data);
      } catch (error) {
        console.error(error);
      }
    },

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
