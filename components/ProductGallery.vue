<template>
  <div class="flex gap-4 max-w-6xl mx-auto p-4">
    <!-- Thumbnail Swiper -->
    <div class="">
      <swiper
        :slides-per-view="4"
        :space-between="10"
        :direction="'vertical'"
        :modules="[Navigation, Thumbs]"
        :watch-slides-progress="true"
        @swiper="setThumbsSwiper"
        class="thumbs-swiper h-[400px]"
      >
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          class="cursor-pointer !w-[90px]"
        >
          <img
            :src="image.src"
            :alt="`Product thumbnail ${index + 1}`"
            class="w-24 h-24 object-cover border border-gray-200 hover:border-gray-400 transition-colors"
          />
        </swiper-slide>
      </swiper>
    </div>

    <!-- Main Swiper -->
    <div class="flex-1 relative w-full">
      <swiper
        :modules="[Navigation, Thumbs]"
        :thumbs="{ swiper: thumbsSwiper }"
        :navigation="true"
        :pagination="{
          el: '.swiper-custom-pagination',
          type: 'bullets',
          clickable: true,
        }"
        class="h-[600px] product-swiper"
        @swiper="(swiper) => (mainSwiper = swiper)"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img
            :src="image.src"
            :alt="`Product view ${index + 1}`"
            class="w-full h-full object-contain"
          />
        </swiper-slide>

        <!-- Custom Navigation Buttons -->
        <button
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          @click="prevSlide"
        >
          <ChevronLeft class="w-6 h-6 text-gray-600" />
        </button>
        <button
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          @click="nextSlide"
        >
          <ChevronRight class="w-6 h-6 text-gray-600" />
        </button>
      </swiper>

      <!-- Custom Pagination -->
      <div
        class="swiper-custom-pagination absolute right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Thumbs } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const thumbsSwiper = ref(null);
const mainSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const prevSlide = () => {
  console.log("1111");
  if (mainSwiper.value) {
    mainSwiper.value.slidePrev();
  }
};

const nextSlide = () => {
  console.log("2222");
  console.log(mainSwiper);

  if (mainSwiper.value) {
    mainSwiper.value.slideNext();
  }
};

onMounted(() => {
  // Additional initialization if needed
});
</script>

<style scoped>
.thumbs-swiper .swiper-slide {
  opacity: 0.4;
  transition: opacity 0.3s;
}

.thumbs-swiper .swiper-slide-thumb-active {
  opacity: 1;
}

/* Custom Pagination Styles */
.swiper-custom-pagination {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.swiper-custom-pagination .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #d1d5db;
  opacity: 0.5;
  transition: all 0.3s;
  cursor: pointer;
}

.swiper-custom-pagination .swiper-pagination-bullet-active {
  background: #374151;
  opacity: 1;
}

/* Hide default swiper navigation */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}

/* Product Swiper Styles */
.product-swiper {
  --swiper-navigation-size: 24px;
  --swiper-navigation-color: theme("colors.gray.600");
}
</style>
