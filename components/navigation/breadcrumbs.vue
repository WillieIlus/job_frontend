<template>
  <section class="pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900 bg-[url('../images/home/page-title.png')] bg-center bg-cover relative">
    <div class="container mx-auto">
      <div class="grid">
        <div class="col-span-12">
          <div class="text-center text-white">
            <h3 class="mb-4 text-[26px]">{{ pageTitle }}</h3>
            <div class="page-next">
              <nav class="inline-block" aria-label="breadcrumb text-center">
                <ol class="flex flex-wrap justify-center text-sm font-medium uppercase">
                  <li v-for="(item, index) in items" :key="index">
                    <NuxtLink :to="item.to"  class="mx-7 px-7" :class="{ 'text-primary': item.action, 'active': !item.action, 'cursor-pointer': item.action, 'cursor-not-allowed': !item.action }">
                      {{ item.label }}
                    </NuxtLink>
                    <span v-if="!isLast(index)" class="mx-7 px-7"> | </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="~/assets/images/about/shape.png" alt="" class="absolute block bg-cover -bottom-0 dark:hidden">
    <img src="~/assets/images/about/shape-dark.png" alt="" class="absolute hidden bg-cover -bottom-0 dark:block">
  </section>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const props = defineProps(['items']);

const pageTitle = ref('');

const route = useRoute(); 

watch(() => {
  pageTitle.value = route.meta.title || 'Alphajiri Jobs';
});

const isLast = (index) => index === props.items.length - 1;

const selectItem = (item) => {
  if (item.action) {
    item.action();
  }
};


</script>
