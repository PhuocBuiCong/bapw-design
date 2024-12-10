<template>
  <!-- Navigation Bar -->
  <nav class="fixed top-0 left-0 right-0 z-50 border-b bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Left Side -->
        <button class="lg:hidden p-2" @click="isMenuOpen = !isMenuOpen">
          <Menu class="h-6 w-6" />
          <span class="sr-only">Menu</span>
        </button>

        <!-- Center Logo -->
        <div class="flex-1 flex items-center justify-center lg:justify-start">
          <button
            class="hidden lg:block p-2 mr-4"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Menu class="h-6 w-6" />
            <span class="sr-only">Menu</span>
          </button>
          <a href="/" class="flex items-center">
            <!-- <img src="/images/logo1.png" alt="logo" /> -->
            LOGO
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-white lg:hidden">
    <div class="p-4">
      <button class="p-2" @click="isMenuOpen = false">
        <X class="h-6 w-6" />
        <span class="sr-only">Close menu</span>
      </button>
      <!-- Add mobile menu items here -->
    </div>
  </div>

  <!-- Hero Section -->
</template>

<script setup>
import { ref } from "vue";
import { Menu, Search, Heart, User, ShoppingCart, X } from "lucide-vue-next";

const isMenuOpen = ref(false);
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
