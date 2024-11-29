import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Swiper", Swiper);
  nuxtApp.vueApp.component("SwiperSlide", SwiperSlide);
});
