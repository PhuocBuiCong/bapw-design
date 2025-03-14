<template>
  <div class="office-gallery py-10 px-5 text-center">
    <h2
      class="gallery-title text-3xl md:text-4xl font-bold mb-8 text-[#4a3c31]"
    >
      Không gian sáng tạo tại BAPW Design
    </h2>
    <p class="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
      Đây là nơi đội ngũ của chúng tôi biến ý tưởng thành hiện thực, mang đến
      những bộ sưu tập thời trang bán sỉ độc đáo và chất lượng cao.
    </p>
    <div
      class="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 container mx-auto"
    >
      <div v-for="(image, index) in galleryImages" :key="index" class="gallery">
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover rounded-lg gallery-hover:scale-125"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryImages: [
        {
          src: "/images/of1.jpg",
          alt: "Phòng làm việc sáng tạo",
        },
        {
          src: "/images/of2.jpg",
          alt: "Không gian bàn làm việc",
        },
        {
          src: "/images/of3.jpg",
          alt: "Phòng trưng bày",
        },
        {
          src: "/images/of4.jpg",
          alt: "Phòng trưng bày",
        },
        {
          src: "/images/of5.jpg",
          alt: "Phòng trưng bày",
        },
        {
          src: "/images/office-banner.jpg",
          alt: "Phòng trưng bày",
        },
      ],
    };
  },
};
</script>
<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}
</style>
