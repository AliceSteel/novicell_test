<template>
  <div :class="containerStyles" class="w-full">
    <div
      class="container flex justify-end items-center gap-1 md:gap-4 uppercase"
    >
      <nuxt-link
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :title="link.label"
        class="hover:underline transition-all duration-300 flex items-center"
      >
        <span>{{ link.label }}</span>
      </nuxt-link>
      <nuxt-link
        v-for="link in socialLinks"
        external
        target="_blank"
        :key="link.to"
        :to="link.to"
        :title="link.label"
        :aria-label="link.label"
        class="hover:underline transition-all duration-300 flex items-center"
      >
        <Icon v-if="link.icon" :name="link.icon" size="20" aria-hidden="true" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavLinksProps } from "./NavLinks.types";

withDefaults(defineProps<NavLinksProps>(), {
  containerStyles: "bg-transparent",
});
</script>
