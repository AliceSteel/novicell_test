<template>
  <button
    :disabled="isLoading"
    class="flex items-center justify-center gap-2 p-2 w-full uppercase transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
    :class="variants[variant]"
    @click="onClick"
  >
    <Icon v-if="isLoading" name="mdi:loading" size="18" class="animate-spin" />
    <span v-else>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./AppButton.types";

withDefaults(defineProps<ButtonProps>(), {
  label: "Add",
  variant: "primary",
  isLoading: false,
});

const variants: Record<string, string> = {
  primary:
    "bg-alice-orange text-white rounded-xl hover:bg-alice-orange/80 disabled:bg-alice-orange/50",
  secondary:
    "bg-transparent border border-alice-orange text-alice-orange rounded-xl hover:bg-alice-orange/10 disabled:opacity-50",
};
</script>
