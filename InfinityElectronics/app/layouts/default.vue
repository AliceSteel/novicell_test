<template>
  <div
    class="min-h-[calc(100vh-2.75rem)] mt-11 flex flex-col bg-khaki text-black"
  >
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4"
    >
      Skip to main content
    </a>
    <AppHeader :navLinks="navLinksHeader" />

    <main id="main-content" class="flex-1 flex flex-col">
      <slot />
    </main>
    <footer>
      <NavLinks
        :containerStyles="'bg-white/20 py-4'"
        :navLinks="navLinksFooter"
        :socialLinks="socialLinks"
      />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/appHeader/AppHeader.vue";
import NavLinks from "~/components/navLinks/NavLinks.vue";

//hardcoded nav links for navigation in header:
const navLinksHeader = [
  { to: "/products", label: "Products" },
  { to: "/about", label: "About us" },
  { to: "/contact", label: "Contact" },
];
//hardcoded nav links for navigation in footer:
const navLinksFooter = [
  { to: "/about", label: "About us", icon: "mdi:information-box-outline" },
  { to: "/contact", label: "Contact", icon: "mdi:phone" },
  { to: "/privacy", label: "Privacy Policy", icon: "mdi:shield" },
];
const socialLinks = [
  { to: "https://twitter.com", label: "Twitter", icon: "mdi:twitter" },
  { to: "https://instagram.com", label: "Instagram", icon: "mdi:instagram" },
  { to: "https://facebook.com", label: "Facebook", icon: "mdi:facebook" },
];
</script>
