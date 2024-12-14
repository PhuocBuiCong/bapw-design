<template>
  <!-- Navigation Bar -->
  <nav class="top-0 left-0 right-0 z-50 border-b bg-[#F6F0F9]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-center h-16">
        <h3 href="/" class="flex items-center">Bapw DeSign</h3>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { Menu, X } from "lucide-vue-next";

const isMenuOpen = ref(false);
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
