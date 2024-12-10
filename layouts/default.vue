<template>
  <div class="min-h-screen flex flex-col">
    <Header1 v-if="switchMenu" />
    <template v-else>
      <Header @toggle-menu="toggleMenu" />
      <Navigation ref="navigationRef" />
    </template>
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "~/components/Header.vue";
import Header1 from "~/components/Header1.vue";
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";

const navigationRef = ref(null);

const switchMenu = ref(true);
const toggleMenu = () => {
  navigationRef.value?.openMenu();
};
</script>
