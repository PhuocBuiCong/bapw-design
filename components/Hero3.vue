<template>
  <section class="bg-white relative mb-16 md:mb-0">
    <div class="container mx-auto px-4">
      <!-- <div class="flex flex-col-reverse md:flex-row gap-12 items-center">
        <NuxtImg
          src="/images/background1.jpg"
          alt="Fashion Collection"
          class="w-[500px] rounded-lg"
        />

        <div class="space-y-8">
          <div class="grid grid-cols-6 gap-2 mb-8">
            <div
              v-for="n in 18"
              :key="n"
              class="w-1 h-1 bg-[#3c2a21] rounded-full opacity-20"
            ></div>
          </div>

          <div class="space-y-6">
            <h2
              class="text-4xl md:text-5xl font-serif text-[#3c2a21] leading-tight"
            >
              Best Fashion in 2025
            </h2>
            <p class="text-[#5c4033] leading-relaxed">
              Tại BAPW Design, chúng tôi mang đến những thiết kế thời trang độc
              đáo cho mọi cửa hàng.Với đội ngũ thiết kế sáng tạo, chúng tôi cam
              kết cung cấp các bộ sưu tập bán sỉ chất lượng cao, đáp ứng mọi
              phong cách và xu hướng.       
            <br>            
            </br>
            Hãy để chúng tôi giúp bạn nâng tầm thương hiệu với giá cả cạnh tranh và dịch vụ tận tâm.
            </p>
          </div>
        </div>
      </div> -->
      <div class="text-center mb-16 max-w-2xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif text-[#3c2a21] mb-4">
          Best Fashion in 2025
        </h2>
        <p class="text-[#5c4033] leading-relaxed text-xl">
          Tại BAPW Design, chúng tôi mang đến những thiết kế thời trang độc đáo
          cho mọi cửa hàng.Với đội ngũ thiết kế sáng tạo, chúng tôi cam kết cung
          cấp các bộ sưu tập bán sỉ chất lượng cao, đáp ứng mọi phong cách và xu
          hướng.
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        <div v-for="iamge in images" :key="iamge.src" class="group">
          <div
            class="relative mb-4 aspect-square bg-white rounded-lg overflow-hidden"
          >
            <NuxtImg
              :src="iamge.src"
              :alt="iamge.alt"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const images = ref([
  { src: "/images/cl2.jpg", alt: "Mobile design interface" },
  { src: "/images/b2.jpg", alt: "Custom made desktop interface" },
  { src: "/images/b3.jpg", alt: "Designer at work" },
  { src: "/images/b4.jpg", alt: "Designer with mannequin" },
]);
</script>
