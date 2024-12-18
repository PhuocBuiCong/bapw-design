<template>
  <!-- Navigation Bar -->
  <header class="top-0 left-0 right-0 bg-[#f7efe7] z-50 border border-b-white">
    <div class="container mx-auto px-4 py-4">
      <nav class="flex items-center justify-between">
        <a href="/" class="text-[#3c2a21] text-2xl font-serif">BAPW DESIGN</a>

        <ul class="hidden md:flex items-center space-x-8">
          <li v-for="item in menuItems" :key="item">
            <a
              href="#"
              class="text-[#3c2a21] hover:text-[#5c4033] transition-colors"
            >
              {{ item }}
            </a>
          </li>
        </ul>

        <div class="flex items-center space-x-4"></div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ShoppingBag } from "lucide-vue-next";

const menuItems = ["COLLECTION", "TRENDS", "ABOUT US"];
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
