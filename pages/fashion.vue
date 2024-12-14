<template>
  <div>
    <section class="container mx-auto px-4 py-12">
      <div class="flex flex-col lg:flex-row gap-8">
        <div>
          <div
            class="bg-[#f8f9f8] p-8 rounded-2xl lg:order-1 order-2 h-fit lg:h-[340px]"
          >
            <h1 class="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
              Giải pháp thiết kế sáng tạo
            </h1>
            <p class="text-lg text-gray-700 mb-6">
              Nâng tầm thương hiệu của bạn với các dịch vụ thiết kế và trình bày
              tiên tiến được chế tác với độ chính xác và sáng tạo tại Bapw
              Design.
            </p>
            <button
              class="bg-[#2c2b36] text-white px-8 py-3 rounded-full hover:bg-[#5A52E3] transition-colors"
            >
              Khám phá thiết kế của chúng tôi
            </button>
          </div>
          <div
            class="relative h-[200px] lg:h-[360px] rounded-2xl overflow-hidden mt-3"
          >
            <NuxtImg
              src="/images/1.jpg"
              alt="Color palette selection"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="">
          <div
            class="relative h-[450px] lg:h-[712px] rounded-2xl overflow-hidden"
          >
            <NuxtImg
              src="/images/2.jpg"
              alt="Design workspace"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="mt-12 bg-[#f8f9f8]">
      <div class="container mx-auto px-4 py-12">
        <div class="w-[70%] justify-center text-center mx-auto">
          <h2 class="text-[24px] lg:text-3xl text-[#1A1A2E] mb-4">
            Tại Bapw Design, chúng tôi chuyên tạo ra các thiết kế và bài thuyết
            trình sản phẩm sáng tạo, hấp dẫn và truyền cảm hứng. Có trụ sở tại
            Việt Nam, đội ngũ chuyên gia của chúng tôi biến các khái niệm có tầm
            nhìn thành những thành công hữu hình, tập trung vào chất lượng, chức
            năng và tính thẩm mỹ. Nâng tầm thương hiệu của bạn bằng các thiết kế
            gây được tiếng vang và các bài thuyết trình thu hút sự chú ý.
          </h2>
        </div>
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
        <div class="relative h-[60vh] overflow-hidden block lg:hidden">
          <div
            v-for="(slide, index) in imagesEffect"
            :key="index"
            :class="[
              'absolute inset-0 transition-opacity duration-500',
              currentSlide === index ? 'opacity-100' : 'opacity-0',
            ]"
          >
            <div class="relative h-full">
              <img
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
                      {{ slide.alt }}
                    </h2>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div
            class="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2"
          >
            <button
              v-for="(_, index) in imagesEffect"
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
        <!-- END SP -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "default",
});

const currentSlide = ref(0);
let intervalId;

const setCurrentSlide = (index) => {
  textVisible.value = false;
  setTimeout(() => {
    currentSlide.value = index;
  }, 500);
};

const startSlideshow = () => {
  intervalId = setInterval(() => {
    setCurrentSlide((currentSlide.value + 1) % imagesEffect.length);
  }, 5000);
};

onUnmounted(() => {
  clearInterval(intervalId);
});

watch(currentSlide, () => {
  clearInterval(intervalId);
  startSlideshow();
});

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

// hover effect
const hoveredIndex = ref(null);
const lastHoveredIndex = ref(0);

onMounted(() => {
  hoveredIndex.value = 0;
  startSlideshow();
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
<style scoped lang="css">
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
