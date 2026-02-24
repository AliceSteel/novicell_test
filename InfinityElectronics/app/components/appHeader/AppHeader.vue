<template>
  <header
    class="h-11 fixed top-0 left-0 z-10 bg-transparent w-full flex items-center"
  >
    <div class="container flex items-center justify-end">
      <!-- Logo -->
      <nuxt-link
        to="/"
        class="w-full mr-auto text-xl h-full tracking-wider flex flex-col sm:flex-row items-start sm:items-center rounded-lg overflow-hidden transition-all duration-500 ease-in-out leading-none"
        title="Home"
        ><div
          class="overflow-hidden transition-all ease-in duration-500 delay-300 font-bold"
          :class="[{ 'w-24 delay-0': !isScrolled }, { 'sm:w-2 ': isScrolled }]"
        >
          INFINITY
        </div>
        <span v-if="isScrolled" class="hidden sm:block">.</span>
        <div>ELECTRONICS</div>
      </nuxt-link>

      <!-- Desktop Navigation -->
      <NavLinks
        :navLinks="navLinks"
        :socialLinks="socialLinks"
        :containerStyles="'hidden md:block'"
      >
      </NavLinks>
      <NuxtLink to="/cart" class="hidden md:flex items-center gap-1 uppercase">
        <span>Cart</span>
        <span v-if="cartStore.totalItems > 0">
          {{ `(${cartStore.totalItems})` }}
        </span>
      </NuxtLink>

      <!-- Hamburger Button - visible on mobile only -->
      <button
        class="flex md:hidden items-center justify-center w-10 h-10"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        @click="toggleMenu"
      >
        <Icon
          :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
          size="24"
        />
      </button>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="isMenuOpen"
          class="absolute top-11 left-0 right-0 w-full bg-white/45 backdrop-blur-md md:hidden z-30"
        >
          <nav class="container flex flex-col">
            <nuxt-link
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              :title="link.label"
              class="py-4"
              active-class="font-bold"
              @click="closeMenu"
            >
              {{ link.label }}
            </nuxt-link>
            <NuxtLink to="/cart" class="flex items-center gap-1 py-4">
              <span>Cart</span>
              <span v-if="cartStore.totalItems > 0">
                {{ cartStore.totalItems }}
              </span>
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { AppHeaderProps } from "./AppHeaderProps";
import { useCartStore } from "@/stores/cartStore";

withDefaults(defineProps<AppHeaderProps>(), {
  navLinks: () => [],
  socialLinks: () => [],
});
const isScrolled = ref<boolean>(false);
const isMenuOpen = ref(false);
const cartStore = useCartStore();

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
const closeMenu = () => (isMenuOpen.value = false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 10;
    if (isMenuOpen.value) closeMenu();
  });
});
</script>
