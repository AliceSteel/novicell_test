<template>
  <div>
    <NuxtLayout>
      <NuxtErrorBoundary>
        <NuxtPage
          :transition="{
            name: 'slide',
            mode: 'out-in',
          }"
        />
        <template #error="{ error, clearError }">
          <p>
            Oh no, something broke on client!
            <code>{{ error }}</code>
          </p>
          <button @click="reset(clearError)" class="font-semibold">
            Home Page
          </button>
        </template>
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
//client-side error handling:
const reset = async (clearError: () => void) => {
  await navigateTo("/");
  clearError();
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.6s ease,
    opacity 0.35s ease;
}

.slide-enter-from {
  transform: translateX(60px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}
</style>
