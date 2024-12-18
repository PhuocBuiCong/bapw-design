<template>
  <div class="min-h-screen flex flex-col">
    <Header1 />

    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header1 from "~/components/Header1.vue";
import Footer from "~/components/Footer.vue";
</script>
