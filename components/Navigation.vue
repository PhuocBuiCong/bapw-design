<template>
  <nav class="bg-[#111111]">
    <!-- Desktop Navigation -->
    <div class="hidden sm:block">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between sm:justify-center h-16">
          <div class="flex">
            <div class="sm:ml-6 sm:flex sm:space-x-8">
              <NuxtLink
                v-for="item in mainNavItems"
                :key="item"
                :to="'/' + item.toLowerCase().replace(' ', '-')"
                class="border-transparent text-white hover:border-gray-300 hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {{ item }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div v-if="isOpen" class="fixed inset-0 z-50 sm:hidden" @click="closeMenu">
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black bg-opacity-50"></div>

      <!-- Drawer -->
      <div
        class="fixed inset-y-0 left-0 w-64 bg-[#111111] overflow-y-auto"
        @click.stop
      >
        <div class="px-4 py-6 space-y-6">
          <!-- Close button -->
          <button @click="closeMenu" class="text-white hover:text-gray-300">
            <XIcon class="h-6 w-6" />
          </button>

          <!-- Navigation items -->
          <div class="space-y-1">
            <NuxtLink
              v-for="item in mainNavItems"
              :key="item"
              :to="'/' + item.toLowerCase().replace(' ', '-')"
              class="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-gray-300"
              @click="closeMenu"
            >
              {{ item }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { XIcon } from "lucide-vue-next";

const isOpen = ref(false);

const mainNavItems = [
  "New In",
  "Shop By",
  "Designers",
  "Clothing",
  "Shoes",
  "Bags",
  "Accessories",
  "Jewelry",
];

const closeMenu = () => {
  isOpen.value = false;
};

// Method to open menu (to be called from Header)
const openMenu = () => {
  isOpen.value = true;
};

// Expose methods to parent
defineExpose({
  openMenu,
  closeMenu,
});
</script>
