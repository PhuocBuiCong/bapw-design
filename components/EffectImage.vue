<template>
  <div class="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="[
        'absolute inset-0 transition-opacity duration-500',
        currentSlide === index ? 'opacity-100' : 'opacity-0',
      ]"
    >
      <div class="relative h-full">
        <NuxtImg
          :src="slide.src"
          :alt="slide.alt"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/30"></div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
        >
          <transition name="slide-fade" mode="out-in">
            <div
              v-if="textVisible && currentSlide === index"
              :key="index"
              class="text-content"
            >
              <h2
                class="text-sm sm:text-base md:text-lg tracking-wider mb-2 sm:mb-4"
              >
                {{ slide.subtitle }}
              </h2>
              <h1
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 md:mb-8"
              >
                {{ slide.title }}
              </h1>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- Carousel Navigation -->
    <div
      class="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="setCurrentSlide(index)"
        :class="[
          'w-2 h-2 rounded-full transition-all',
          currentSlide === index ? 'bg-white w-4' : 'bg-white/50',
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const currentSlide = ref(0);
const textVisible = ref(true);
let intervalId;
const setCurrentSlide = (index) => {
  textVisible.value = false;
  setTimeout(() => {
    currentSlide.value = index;
    textVisible.value = true;
  }, 500);
};

const startSlideshow = () => {
  console.log("1111");
  intervalId = setInterval(() => {
    setCurrentSlide((currentSlide.value + 1) % props.slides.length);
  }, 5000);
};

onMounted(() => {
  console.log("2222");

  startSlideshow();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

watch(currentSlide, () => {
  console.log("3333");

  clearInterval(intervalId);
  startSlideshow();
});
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

.text-content {
  transition: all 0.5s ease;
}
</style>
