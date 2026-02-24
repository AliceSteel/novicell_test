<template>
  <div class="container">
    <div class="flex flex-col">
      <h1 class="mb-4">Your Cart</h1>
      <p v-if="cartStore.totalItems === 0" class="text-lg">
        Your cart is currently empty.
      </p>
      <div v-else class="flex flex-col gap-4">
        <div
          v-for="item in cartStore.items"
          :key="item.product.id"
          class="flex items-center gap-4"
        >
          <h2>{{ item.product.title }}</h2>
          <p>Quantity: {{ item.quantity }}</p>
        </div>

        <p class="text-xl">Total: ${{ cartStore.totalPrice.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/stores/cartStore";
const cartStore = useCartStore();
</script>
