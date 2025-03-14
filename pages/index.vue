<template>
  <div class>
    <OfficeBanner />
    <!-- <Hero1 /> -->
    <Hero2 />
    <Hero3 />
    <OfficeGallery />

    <!-- <Hero4 /> -->
    <!-- Social Media  -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Hero1 from "~/components/Hero1.vue";
import Hero2 from "~/components/Hero2.vue";
import Hero4 from "~/components/Hero4.vue";
import OfficeGallery from "~/components/OfficeGallery.vue";
import OfficeBanner from "~/components/OfficeBanner.vue";

definePageMeta({
  layout: "default",
});
</script>
<style scoped lang="css"></style>
