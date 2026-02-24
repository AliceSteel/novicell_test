<template>
  <div class="w-4/5 mx-auto flex flex-col items-center gap-4">
    <!-- Category Filter -->
    <div class="w-full flex gap-2 flex-wrap mt-2">
      <button
        class="px-4 py-2 text-sm capitalize transition-colors duration-200 underline rounded-lg"
        :class="!selectedCategory ? 'bg-black/10 text-white' : ''"
        @click="selectCategory(null)"
      >
        All
      </button>
      <button
        v-for="category in categories"
        :key="category"
        class="px-4 py-2 text-sm capitalize transition-colors duration-200 underline rounded-lg"
        :class="selectedCategory === category ? 'bg-black/10 text-white' : ''"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="flex justify-center items-center min-h-96">
      <Icon name="mdi:loading" size="48" class="animate-spin" />
    </div>

    <!-- Error  -->
    <div v-else-if="error" class="flex flex-col items-center gap-5">
      <Icon name="mdi:alert-circle" size="48" />
      <p>Failed to load product</p>
      <button @click="() => refresh()" class="mt-4 underline">Try again</button>
      <nuxt-link to="/products" class="mt-2 inline-block underline"
        >Back to products</nuxt-link
      >
    </div>

    <!-- products -->
    <div
      v-else-if="products"
      class="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-2 pb-10"
    >
      <ProductCard v-for="(item, key) in products" :key="key" :product="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product, Category } from "@/pages/product/Product.types";

//Hardcoded categories , something for TODO:
const categories: Category[] = [
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery",
];

const selectedCategory = ref<Category | null>(null);
const selectCategory = (category: Category | null) => {
  selectedCategory.value = category;
};

const url = computed(() =>
  selectedCategory.value
    ? `/api/products?category=${encodeURIComponent(selectedCategory.value)}`
    : "/api/products",
);

const {
  data: product,
  isLoading,
  refresh,
  error,
} = await useFetchProducts(url);

const products = computed(() => (product.value as Product[]) || []);

useHead({
  title: "Infinity Electronics Products",
});
</script>
