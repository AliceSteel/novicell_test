<template>
  <div
    class="flex flex-col items-start gap-4 border-2 rounded-xl border-alice-orange p-4 min-h-72 h-full justify-start bg-white text-black"
  >
    <nuxt-link :to="`product/${product.id}`">
      <NuxtImg
        :src="product.image"
        :alt="product.title"
        class="w-full aspect-square object-contain"
      />
      <h3 class="font-semibold">{{ product.title }}</h3>
      <p>{{ product.category }}</p>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "@/types/Product.types";

defineProps<{ product: Product }>();
</script>
