<template>
  <header
    class="bg-[#111111] py-4 px-4 flex items-center justify-between border-b border-gray-700"
  >
    <!-- Left section -->
    <div class="flex items-center space-x-4">
      <button
        @click="toggleMenu"
        class="sm:hidden p-2 text-white"
        aria-label="Menu"
      >
        <MenuIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Center logo -->
    <NuxtLink to="/" class="absolute left-1/2 transform -translate-x-1/2">
      <h1 class="text-xl font-bold text-white whitespace-nowrap">
        NET-A-PORTER
      </h1>
    </NuxtLink>

    <!-- Right section -->
    <div class="flex items-center space-x-4">
      <button class="p-1 text-white" aria-label="Search">
        <SearchIcon class="w-6 h-6" />
      </button>
      <button class="p-1 text-white" aria-label="Wishlist">
        <HeartIcon class="w-6 h-6" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { SearchIcon, MenuIcon, HeartIcon } from "lucide-vue-next";

const emit = defineEmits(["toggle-menu"]);

const toggleMenu = () => {
  emit("toggle-menu");
};
</script>
