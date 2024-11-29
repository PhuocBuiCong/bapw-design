<template>
  <div class="">
    <!-- Hero Section -->
    <section class="relative h-[400px] sm:h-[300px] bg-gray-900 text-white">
      <div class="absolute inset-0">
        <img
          src="/images/bg-1.png"
          alt="Hero Background"
          class="w-full h-full object-cover opacity-50"
        />
      </div>
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center p-2"
      >
        <h2 class="text-6xl font-bold tracking-widest mb-4">UP TO 50% OFF</h2>
        <p class="text-xl mb-8">OUR BLACK FRIDAY SALE IS HERE</p>

        <div
          class="flex sm:flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:px-0 overflow-x-scroll sm:overflow-auto"
        >
          <button
            v-for="category in ['Dresses', 'Knitwear', 'Tops', 'Jackets']"
            :key="category"
            class="px-4 sm:px-6 py-2 border border-white hover:bg-white hover:text-black-100 transition-colors"
          >
            {{ category }}
          </button>
        </div>

        <p class="text-sm">Terms and conditions apply</p>
      </div>
    </section>
    <!-- space -->
    <div class="pt-4"></div>
    <!-- Product Grid Section -->
    <section class="bg-gray-100">
      <img
        src="/images/model-1.png"
        alt="Fashion Product 1"
        class="w-full h-full object-cover hidden sm:block"
      />
      <img
        src="/images/model-sp-1.png"
        alt="Fashion Product 1"
        class="w-full h-full object-cover block sm:hidden"
      />
    </section>
    <!-- title1 -->
    <div class="flex flex-col text-center mt-4">
      <h2 class="text-3xl font-medium font-chronicle mb-1">
        Gucci's dazzling designs
      </h2>
      <span class="mb-4">
        Steal the spotlight in sparkling co-ords, GG-monogrammed styles and more
        festive looks
      </span>
      <p class="underline underline-offset-4 text-black-100">
        Shop the collection
      </p>
    </div>
    <!-- space -->
    <div class="pt-8"></div>
    <div class="sm:mx-6 px-3 sm:px-0">
      <!-- swiper and content -->
      <div class="flex flex-col sm:flex-row sm:max-w-[1440px] mx-auto">
        <div class="sm:w-[30%] flex flex-col sm:ml-6">
          <span class="text-black-100 font-akkurat text-sm mb-2"
            >1,063 NEW ITEMS</span
          >
          <h1
            class="text-4xl sm:text-5xl font-medium font-chronicle leading-[40px] sm:leading-[60px]"
          >
            New In
          </h1>
          <p class="mt-4 mb-6">
            New arrivals, now dropping five days a week – discover the latest
            launches onsite from Monday to Friday
          </p>
          <button
            class="hidden sm:block h-10 max-w-[326px] bg-black-100 text-white border border-black-100 hover:opacity-80 transition-colors font-akkurat"
          >
            Shop New In
          </button>
        </div>
        <div class="sm:w-[65%] ml-6">
          <Swiper
            :modules="modules"
            :effect="'coverflow'"
            :centeredSlides="true"
            :slidesPerView="4"
            :breakpoints="{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 4,
              },
            }"
            :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
            :space-between="10"
            :navigation="{
              prevEl: navigationPrevRef,
              nextEl: navigationNextRef,
              disabledClass: 'opacity-0 cursor-default pointer-events-none',
            }"
            :pagination="{
              clickable: true,
              dynamicBullets: true,
            }"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            @swiper="onSwiper"
            class="w-full [&>.swiper-pagination]:hidden sm:[&>.swiper-pagination]:block"
          >
            <SwiperSlide v-for="item in itemCarousel" :key="item.id">
              <div class="w-full overflow-hidden">
                <img
                  :src="item.src"
                  :alt="item.alt"
                  class="w-[144px] h-[191px] sm:w-full sm:h-full object-cover"
                />
              </div>
              <p>{{ item.des }}</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <button
          class="mt-8 block sm:hidden mx-auto h-10 w-[240px] sm:max-w-[326px] bg-black-100 text-white border border-black-100 hover:opacity-80 transition-colors font-akkurat"
        >
          Shop New In
        </button>
      </div>

      <!-- content 2 -->
      <div
        class="flex flex-col sm:flex-row sm:max-w-[1440px] mx-auto mt-8 sm:mt-10"
      >
        <div class="flex flex-col w-full sm:w-50-custom sm:ml-6">
          <img src="/images/ct-1.png" alt="content-1" />
          <h2
            class="font-chronicle text-xl sm:text-2xl leading-[30px] mt-4 mb-2 font-medium"
          >
            The Exclusive Collection
          </h2>
          <p class="font-akkurat mb-4">
            Blazé Milano leads our edit of unmissable looks available only at
            NET‑A‑PORTER
          </p>
          <span
            class="font-chronicle underline underline-offset-4 font-medium text-sm"
            >Shop Exclusive</span
          >
        </div>

        <div class="flex flex-col w-full sm:w-50-custom mt-8 sm:mt-0 sm:ml-6">
          <img src="/images/ct-2.png" alt="content-2" />
          <h2
            class="font-chronicle text-xl sm:text-2xl leading-[30px] mt-4 mb-2 font-medium"
          >
            Your party destination
          </h2>
          <p class="font-akkurat mb-4">
            Discover dramatic dresses, hot heels and exclusive must-see looks
            from the party edit
          </p>
          <span
            class="font-chronicle underline underline-offset-4 font-medium text-sm"
            >Shop the party edit</span
          >
        </div>
      </div>
      <!-- content 3 -->
      <div
        class="flex flex-col sm:flex-row sm:max-w-[1440px] mx-auto mt-8 sm:mt-12"
      >
        <div class="w-full sm:max-w-[calc(60%-24px)] sm:ml-6">
          <img src="/images/ct-3.png" alt="content-3" class="hidden sm:block" />
          <img
            src="/images/ct-3-sp.png"
            alt="content-3"
            class="block sm:hidden"
          />
        </div>
        <div class="sm:pl-[8.5%] sm:max-w-[40%] sm:my-auto mt-8">
          <h2
            class="font-chronicle text-xl sm:text-2xl leading-[30px] mt-4 mb-2 font-medium text-center"
          >
            Alaïa’s Archetypes collection
          </h2>
          <p class="font-akkurat mb-4 text-center">
            Presenting the Parisian maison’s sculptural silhouettes, ‘Le Teckel’
            bags and more
          </p>
          <h5
            class="font-chronicle underline underline-offset-4 font-medium text-sm text-center"
          >
            Shop the collection
          </h5>
        </div>
      </div>
      <!-- content 4 -->
      <div
        class="flex flex-col sm:flex-row sm:max-w-[1440px] mx-auto mt-8 sm:mt-10"
      >
        <div class="flex flex-col w-full sm:w-50-custom sm:ml-6">
          <div class="hidden sm:block my-auto">
            <h2
              class="font-chronicle text-xl sm:text-2xl leading-[30px] mt-4 mb-2 font-medium text-center"
            >
              Alaïa’s Archetypes collection
            </h2>
            <p class="font-akkurat mb-4 text-center">
              Presenting the Parisian maison’s sculptural silhouettes, ‘Le
              Teckel’ bags and more
            </p>
            <h5
              class="font-chronicle underline underline-offset-4 font-medium text-sm text-center"
            >
              Shop the collection
            </h5>
          </div>
        </div>
        <div class="flex flex-col w-full sm:w-50-custom sm:ml-6">
          <img src="/images/ct-4.png" alt="content-1" />
          <h2
            class="font-chronicle text-xl sm:text-2xl leading-[30px] mt-4 mb-2 font-medium"
          >
            The Exclusive Collection
          </h2>
          <p class="font-akkurat mb-4">
            Blazé Milano leads our edit of unmissable looks available only at
            NET‑A‑PORTER
          </p>
          <span
            class="font-chronicle underline underline-offset-4 font-medium text-sm"
            >Shop Exclusive</span
          >
        </div>

        <div class="flex flex-col w-full sm:w-50-custom mt-8 sm:mt-0 sm:ml-6">
          <img src="/images/ct-4-1.png" alt="content-2" />
          <h2
            class="font-chronicle text-xl sm:text-2xl leading-[30px] mt-4 mb-2 font-medium"
          >
            Your party destination
          </h2>
          <p class="font-akkurat mb-4">
            Discover dramatic dresses, hot heels and exclusive must-see looks
            from the party edit
          </p>
          <span
            class="font-chronicle underline underline-offset-4 font-medium text-sm"
            >Shop the party edit</span
          >
        </div>
      </div>

      <!-- effect fade -->
      <div class="mt-[60px] flex items-center justify-center">
        <div class="flex w-full sm:h-[640px] shadow-xl">
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
            <img
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

      <!-- gallery image -->
      <GalleryImage :articles="articles" class="mt-10" />
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import GalleryImage from "~/components/GalleryImage.vue";

definePageMeta({
  layout: "default",
});
const itemCarousel = [
  {
    id: 1,
    src: "/images/cr-1.png",
    alt: "carousel-1",
    des: "Carousel",
  },
  {
    id: 2,
    src: "/images/cr-2.png",
    alt: "carousel-2",
    des: "Carousel",
  },
  {
    id: 3,
    src: "/images/cr-3.png",
    alt: "carousel-3",
    des: "Carousel",
  },
  {
    id: 4,
    src: "/images/cr-4.png",
    alt: "carousel-4",
    des: "Carousel",
  },
  {
    id: 5,
    src: "/images/model-sp-1.png",
    alt: "carousel-5",
    des: "Carousel",
  },
  {
    id: 6,
    src: "/images/cr-1.png",
    alt: "carousel-6",
    des: "Carousel",
  },
  {
    id: 7,
    src: "/images/cr-2.png",
    alt: "carousel-7",
    des: "Carousel",
  },
  {
    id: 8,
    src: "/images/cr-3.png",
    alt: "carousel-8",
    des: "Carousel",
  },
  {
    id: 4,
    src: "/images/cr-4.png",
    alt: "carousel-9",
    des: "Carousel",
  },
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

const articles = [
  {
    image: "/images/ct-2.png",
    category: "INTERIORS",
    title: "15 Instagram Accounts To Follow For Interior-Design Envy",
    date: "30 OCT '24",
  },
  {
    image: "/images/ct-2.png",
    category: "THE FASHION MEMO",
    title: "The Most Luxurious Stocking Stuffers",
    date: "29 OCT '24",
  },
  {
    image: "/images/ct-2.png",
    category: "TRAVEL",
    title: "7 Idyllic Destinations For A Winter-Sun Vacation",
    date: "18 NOV '24",
  },
  {
    image: "/images/ct-2.png",
    category: "TRAVEL",
    title: "The Hottest Hotel Openings To Have On Your Radar",
    date: "04 NOV '24",
  },
];

// Refs for custom navigation
const navigationPrevRef = ref(null);
const navigationNextRef = ref(null);

// Modules to use
const modules = [Navigation, Pagination, Autoplay, EffectCoverflow];

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
<style lang="css"></style>
