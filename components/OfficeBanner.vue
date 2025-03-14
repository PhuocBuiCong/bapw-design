<template>
  <div
    class="office-banner relative h-[500px] bg-cover bg-center"
    :style="{ backgroundImage: `url(${bannerImage})` }"
  >
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    <!-- Lớp mờ để chữ nổi bật -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
    >
      <h1 class="banner-title text-3xl md:text-4xl font-bold mb-3 text-shadow">
        BAPW Design – Sáng tạo thời trang cho bạn
      </h1>
      <p class="banner-description text-base md:text-lg max-w-md mx-auto">
        Kết nối cửa hàng với những thiết kế độc đáo và giá cả cạnh tranh.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImage: "/images/office-banner.jpg",
    };
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
</style>
