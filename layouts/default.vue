<template>
  <div class="min-h-screen flex flex-col">
    <Header @toggle-menu="toggleMenu" />
    <Navigation ref="navigationRef" />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "~/components/Header.vue";
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";

const navigationRef = ref(null);

const toggleMenu = () => {
  navigationRef.value?.openMenu();
};
</script>
