<template>
  <footer class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div v-for="item in footerItems" :key="item" class="px-5 py-2">
          <NuxtLink
            :to="'/' + item.toLowerCase().replace(' ', '-')"
            class="text-base text-gray-500 hover:text-gray-900"
          >
            {{ item }}
          </NuxtLink>
        </div>
      </nav>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; {{ new Date().getFullYear() }} Net-A-Porter Clone. All rights
        reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
const footerItems = [
  "About Us",
  "Customer Care",
  "Delivery",
  "Returns",
  "Contact Us",
];
</script>
