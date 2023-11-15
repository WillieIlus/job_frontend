// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@formkit/auto-animate/nuxt',

  ],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/icons.css',
    '~/assets/css/custom/structure/navbar.css',
    '~/assets/css/custom/general.css',
    
    '~/assets/css/icons/boxicons.css',
    '~/assets/css/icons/line-awesome.css',
    '~/assets/css/icons/fontawesome.css',
    '~/assets/css/icons/dripings.css',
    '~/assets/css/icons/eva-icons .css',


    '~/assets/css/plugins/custom-scrollbar.css',
    '~/assets/css/plugins/search-form.css',
    '~/assets/css/plugins/swiper.css',
    '~/assets/css/plugins/counter.css',
    '~/assets/css/plugins/uim-icon.css',
    '~/assets/css/plugins/noui-range-slider.css',
    '~/assets/css/plugins/job-grid.css',
    '~/assets/css/plugins/glight-box.css',
    '~/assets/css/plugins/countdown.css',


    ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  },
})


// @import "tailwindcss/base";

// @import "tailwindcss/components";

/* Custom Css */
// @import "custom/general.css";
// @import "custom/components.css";
// @import "custom/structure/navbar.css";

/* @import "plugins/all-custom.css"; */
// @import "plugins/custom-scrollbar.css";
// @import "plugins/search-form.css";
// @import "plugins/swiper.css";
// @import "plugins/counter.css";
// @import "plugins/uim-icon.css";
// @import "plugins/noui-range-slider.css";
// @import "plugins/job-grid.css";
// @import "plugins/glight-box.css";
// @import "plugins/countdown.css";

// @import "tailwindcss/utilities";