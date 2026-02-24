<template>
  <div class="relative w-full">
    <!-- Multi- Image slider -->
    <div v-if="isMultiImage">
      <NuxtImg
        :src="heroItems[0]?.image"
        :alt="heroItems[0]?.title"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Custom Navigation Arrows -->
      <button
        class="absolute z-10 top-1/2 left-4 md:left-8 -translate-y-1/2 flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
        type="button"
        aria-label="Previous slide"
        @click="console.log('Previous slide')"
      >
        <Icon name="heroicons:chevron-left" size="24" />
      </button>

      <button
        class="absolute z-10 top-1/2 right-4 md:right-8 -translate-y-1/2 flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 hover:bg-white transition-colors duration-300"
        type="button"
        aria-label="Next slide"
        @click="console.log('Next slide')"
      >
        <Icon name="heroicons:chevron-right" size="24" />
      </button>
    </div>
    <!-- Single Image -->
    <div v-else class="w-full overflow-hidden">
      <NuxtImg
        :src="heroItems[0]?.image"
        :alt="heroItems[0]?.title"
        class="w-full h-[60vh] object-cover"
        preload
        loading="eager"
        fetchpriority="high"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeroSlide } from "./HeroSlider.types";

const props = withDefaults(
  defineProps<{
    heroItems: HeroSlide[];
  }>(),
  {
    heroItems: () => [],
  },
);

const isMultiImage = computed(() => props.heroItems.length > 1);

// TO DO: add slider logic and Pagination
// State to track if swiper is at the beginning or end
// keyboard navigation and pagination indicators can be added as well
// swipe gentures for mobile can be added as well
</script>
