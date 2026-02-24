<template>
  <div class="w-full bg-white flex-1 flex">
    <section class="container flex flex-wrap sm:flex-nowrap flex-1">
      <!-- Loading -->
      <div v-if="isLoading" class="flex justify-center items-center min-h-96">
        <Icon name="mdi:loading" size="48" class="animate-spin" />
      </div>

      <!-- Error  -->
      <div v-else-if="error" class="text-center text-alice-red">
        <Icon name="mdi:alert-circle" size="48" />
        <p>Failed to load product</p>
        <button @click="() => refresh()" class="mt-4 underline">
          Try again
        </button>
        <nuxt-link to="/products" class="mt-2 inline-block underline"
          >Back to products
        </nuxt-link>
      </div>

      <!-- product -->
      <div
        v-else-if="product"
        class="flex flex-col justify-center w-full sm:w-1/2"
      >
        <NuxtImg
          :src="product.image"
          :alt="product.title"
          class="sm:max-h-[80vh] object-contain object-center mx-auto sm:mx-0"
        />
      </div>

      <div
        class="w-full max-w-150 flex flex-col items-start justify-center px-0 sm:px-10 py-20 gap-5"
      >
        <h1 class="semibold text-3xl">{{ product?.title }}</h1>
        <p>{{ product?.description }}</p>
        <p>{{ `Price: ${product?.price.toFixed(2)}` }}</p>

        <AppButton
          label="Add to cart"
          :isLoading="isAddedToCart"
          @click="addToCart"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/Product.types";

const cartStore = useCartStore();

const route = useRoute();

const { data, isLoading, refresh, error } = await useFetchProducts(
  `/api/product/${route.params.productId}`,
);

const product = computed(() => (data.value as Product) ?? null);

useHead({
  title: `Infinity Electronics - ${route.params.productId}`.toLocaleUpperCase(),
});

//Simulate adding to cart  with timeout
const isAddedToCart = ref(false);

const addToCart = () => {
  if (isAddedToCart.value) return;

  isAddedToCart.value = true;
  if (product.value) {
    cartStore.addToCart(product.value);
  }

  setTimeout(() => {
    isAddedToCart.value = false;
  }, 1000);
};
</script>
