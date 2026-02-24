<template>
  <div class="flex-1 flex flex-col gap-5 pb-5 w-full">
    <section class="w-full h-[60vh]">
      <HeroSlider :hero-items="heroImages" />
    </section>
    <section
      v-if="products"
      class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1"
    >
      <ProductCard v-for="i in products" :key="i.id" :product="i" />
    </section>
    <div v-else-if="isLoading" class="text-center text-alice-red">Loading</div>
  </div>
</template>

<script setup lang="ts">
//Stubbed hero images for the slider, can be replaced with dynamic content later:
const heroImages = [
  {
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147",
    title: "Top rated products this season",
    link: "/products",
  },
];
const { data, isLoading, refresh, error } = await useFetchProducts(
  "/api/products?limit=5",
);

const products = computed(() => (data.value as Product[]) ?? []);
useHead({
  title: "Infinity Electronics - Home",
});
</script>
