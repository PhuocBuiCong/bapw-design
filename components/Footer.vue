<template>
  <footer class="pb-16 bg-[#413531]">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row w-full gap-10">
        <div>
          <div class="text-white text-lg tracking-wide mb-4">CONTACT</div>
          <h2 class="text-4xl md:text-5xl font-serif text-white">
            Let's work <span class="italic">together</span>!
          </h2>
        </div>
        <!-- middle -->
        <div>
          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Email -->
            <div class="mt-0 md:mt-6">
              <div class="text-sm text-custom mb-2">EMAIL</div>
              <a
                href="mailto:HELLO@DIVIFASHION.COM"
                class="text-white font-bold hover:text-[#5c4033] transition-colors"
              >
                HELLO@DIVIFASHION.COM
              </a>
            </div>

            <!-- Phone -->
            <div>
              <div class="text-sm text-custom mb-2">PHONE</div>
              <a
                href="tel:(346)361-6866"
                class="text-white font-bold hover:text-[#5c4033] transition-colors"
              >
                (346) 361-6866
              </a>
            </div>

            <!-- Address -->
            <div>
              <div class="text-sm text-custom mb-2">ADDRESS</div>
              <address class="text-white font-bold not-italic">
                Vinhomes SmartCity
              </address>
            </div>
          </div>
        </div>
        <!-- right -->
        <div class="maps-wrapper h-[244px]">
          <iframe
            loading="lazy"
            allowfullscreen
            :src="srcMap"
            class="responsive-map"
          ></iframe>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const srcMap = ref(
  `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=VinSmartCity&zoom=10&maptype=roadmap`
);
</script>
<style scoped lang="css">
.maps-wrapper {
  flex: 1; /* Cho phép div map co giãn */
}

.responsive-map {
  width: 100%;
  height: 100%; /* Full chiều cao của maps-wrapper */
  border: none;
  object-fit: cover; /* Đảm bảo ảnh map fill đúng kích thước */
}
.text-custom {
  color: antiquewhite;
}
</style>
