<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Decorative dots -->
      <div class="absolute left-12 grid grid-cols-3 gap-2">
        <div
          v-for="n in 15"
          :key="n"
          class="w-1 h-1 bg-[#3c2a21] rounded-full opacity-20"
        ></div>
      </div>
      <!-- Section Header -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif text-[#3c2a21] mb-4">
          New Collection
        </h2>
        <p class="text-[#5c4033]">Khám phá bộ sưu tập mới của chúng tôi</p>
      </div>

      <!-- Product Categories Grid -->
      <!-- <div class="grid md:grid-cols-3 gap-8">
        <div v-for="category in categories" :key="category.name" class="group">
          <div
            class="relative mb-4 aspect-square bg-white rounded-lg overflow-hidden"
          >
            <NuxtImg
              :src="category.src"
              :alt="category.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 class="text-center text-[#3c2a21] font-medium tracking-wide">
            {{ category.name }}
          </h3>
        </div>
      </div> -->
      <!-- PC -->
      <div
        class="hidden lg:block relative h-[700px] rounded-2xl overflow-hidden mt-[80px]"
      >
        <div class="flex items-center justify-center">
          <div class="flex w-full sm:h-[700px] shadow-xl">
            <div
              v-for="(image, index) in imagesEffect"
              :key="index"
              @mouseenter="hoveredIndex = index"
              @mouseleave="handleMouseLeave"
              :class="[
                'relative overflow-hidden transition-all duration-1000 ease-in-out cursor-pointer',
                getImageClass(index),
              ]"
            >
              <NuxtImg
                :src="image.src"
                :alt="image.alt"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-500 ease-in-out"
                :class="{ 'opacity-0': isExpanded(index) }"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- END PC -->
      <!-- SP -->
      <div class="relative pt-10 block lg:hidden">
        <EffectImage :slides="imagesEffect" />
      </div>
      <!-- END SP -->
    </div>

    <!-- Decorative dots -->
    <div class="absolute right-12 grid grid-cols-3 gap-2">
      <div
        v-for="n in 15"
        :key="n"
        class="w-1 h-1 bg-[#3c2a21] rounded-full opacity-20"
      ></div>
    </div>
  </section>
</template>

<script setup>
import EffectImage from "~/components/EffectImage.vue";

const categories = [
  { name: "SWEATER", src: "/images/fade2.png" },
  { name: "LONG SLEEVE", src: "/images/fade3.png" },
  { name: "T-SHIRT", src: "/images/fade4.png" },
];
const imagesEffect = [
  {
    src: "/images/fade1.png",
    alt: "Image 1",
  },
  {
    src: "/images/fade2.png",
    alt: "Image 2",
  },
  {
    src: "/images/fade3.png",
    alt: "Image 3",
  },
  {
    src: "/images/fade4.png",
    alt: "Image 4",
  },
];
// hover effect
const hoveredIndex = ref(null);
const lastHoveredIndex = ref(0);

onMounted(() => {
  hoveredIndex.value = 0;
});

const handleMouseLeave = () => {
  lastHoveredIndex.value = hoveredIndex.value;
  hoveredIndex.value = null;
};

const isExpanded = (index) => {
  if (hoveredIndex.value !== null) {
    return hoveredIndex.value === index;
  }
  return lastHoveredIndex.value === index;
};

const getImageClass = (index) => {
  if (isExpanded(index)) {
    return "w-2/3";
  }
  return "w-1/4";
};
</script>
<style lang="css" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
