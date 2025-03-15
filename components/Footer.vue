<template>
  <footer class="bg-[#f5f1ed] py-8 text-[#4a3c31]">
    <div class="container mx-auto px-4">
      <!-- Phần Google Maps -->
      <div class="mb-8 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.89313333962!2d105.73825447584066!3d20.99692048887035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abd349a075c3%3A0xcb327a6664e027d8!2sT%C3%B2a%20B%20-%20Masteri%20West%20Heights!5e0!3m2!1svi!2s!4v1741972353202!5m2!1svi!2s"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          class="w-full h-full"
        ></iframe>
      </div>

      <!-- Phần thông tin liên hệ -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left"
      >
        <!-- Cột 1: Địa chỉ -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Địa chỉ</h3>
          <p class="text-sm">
            Toà B - materia - Vinhome Tây Mỗ , Nam Từ Liêm, Hà Nội, Việt Nam
          </p>
          <!-- Thay bằng địa chỉ thực tế của bạn -->
        </div>

        <!-- Cột 2: Liên hệ -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Liên hệ</h3>
          <p class="text-sm">Email: info@bapwdesign.com</p>
          <p class="text-sm">Điện thoại: 0961717906</p>
          <!-- Thay bằng email và số điện thoại thực tế -->
        </div>

        <!-- Cột 3: Mạng xã hội -->
        <div>
          <h3 class="text-lg font-semibold mb-2">Kết nối với chúng tôi</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="#" class="text-[#4a3c31] hover:text-opacity-80">
              <i class="fab fa-facebook-f"></i>
              <!-- Thay bằng icon thực tế -->
            </a>
            <a href="#" class="text-[#4a3c31] hover:text-opacity-80">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-[#4a3c31] hover:text-opacity-80">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Phần bản quyền -->
      <div class="mt-8 text-center text-sm border-t border-[#4a3c31] pt-4">
        <p>© 2025 BAPW Design. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Thêm Font Awesome nếu dùng icon mạng xã hội */
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
</style>
