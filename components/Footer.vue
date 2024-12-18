<template>
  <footer class="py-16 bg-[#f7efe7]">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row w-full gap-10">
        <div>
          <div class="text-[#3c2a21] text-lg tracking-wide mb-4">CONTACT</div>
          <h2 class="text-4xl md:text-5xl font-serif text-black-100">
            Let's work <span class="italic">together</span>!
          </h2>
          <div class="mt-5 md:mt-10">
            <a
              href="#"
              class="inline-block px-8 py-3 border border-[#3c2a21] text-[#3c2a21] hover:bg-[#3c2a21] hover:text-white transition-colors rounded-full text-sm tracking-wide"
            >
              CONTACT ME
            </a>
          </div>
        </div>
        <!-- middle -->
        <div>
          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Email -->
            <div class="mt-0 md:mt-6">
              <div class="text-sm text-[#3c2a21] mb-2">EMAIL</div>
              <a
                href="mailto:HELLO@DIVIFASHION.COM"
                class="text-black-100 font-bold hover:text-[#5c4033] transition-colors"
              >
                HELLO@DIVIFASHION.COM
              </a>
            </div>

            <!-- Phone -->
            <div>
              <div class="text-sm text-[#3c2a21] mb-2">PHONE</div>
              <a
                href="tel:(346)361-6866"
                class="text-black-100 font-bold hover:text-[#5c4033] transition-colors"
              >
                (346) 361-6866
              </a>
            </div>

            <!-- Address -->
            <div>
              <div class="text-sm text-[#3c2a21] mb-2">ADDRESS</div>
              <address class="text-black-100 font-bold not-italic">
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
</style>
