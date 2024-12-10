<template>
  <Swiper
    :modules="modules"
    :slides-per-view="slidePerView"
    :direction="direction"
    :watch-slides-progress="watchSlidesProgress"
    :breakpoints="breakpoints"
    :effect="effect"
    :centered-slides="centeredSlides"
    :autoplay="autoplay"
    :coverflow-effect="coverflowEffect"
    :space-between="spaceBetween"
    :navigation="navigation"
    :pagination="pagination"
    :class="swiperClass"
    @swiper="emit('swiper')"
  >
    <SwiperSlide v-for="item in items" :key="item.id" :class="swiperSlideClass">
      <img :src="item.src" :alt="item.alt" :class="imageClass" />
      <p v-if="item.des">{{ item.des }}</p>
      <slot />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  items: {
    type: Array,
    required: false,
    default: () => [],
  },
  // class
  swiperClass: {
    type: String,
    required: false,
  },
  swiperSlideClass: {
    type: String,
    required: false,
  },
  imageClass: {
    type: String,
    required: false,
  },
  // class main swiper
  swiperMainWrapperClass: {
    type: String,
    required: false,
  },
  swiperMainClass: {
    type: String,
    required: false,
  },
  swiperSlideMainClass: {
    type: String,
    required: false,
  },
  imageMainClass: {
    type: String,
    required: false,
  },
  //   attribute swiper
  slidePerView: {
    type: Number,
    required: false,
    default: 1,
  },
  direction: {
    type: String,
    required: false,
    default: "horizontal",
  },
  modules: {
    type: Array,
    required: false,
    default: () => [],
  },
  watchSlidesProgress: {
    type: Boolean,
    required: false,
    default: false,
  },
  breakpoints: {
    type: Object,
    required: false,
    default: () => {},
  },
  effect: {
    type: String,
    required: false,
  },
  centeredSlides: {
    type: Boolean,
    required: false,
  },
  autoplay: {
    type: Object,
    required: false,
    default: () => {},
  },
  coverflowEffect: {
    type: Object,
    required: false,
  },
  spaceBetween: {
    type: Number,
    required: false,
  },
  navigation: {
    type: Object,
    required: false,
  },
  pagination: {
    type: Object,
    required: false,
  },
});

const emit = defineEmits(["swiper"]);
</script>
