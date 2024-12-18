<template>
  <section class="bg-white relative mb-16 md:mb-0">
    <div class="container mx-auto px-4">
      <div class="flex flex-col-reverse md:flex-row gap-12 items-center">
        <!-- Image Column -->
        <div class="relative">
          <NuxtImg
            src="/images/image-ln4.jpeg"
            alt="Fashion Collection"
            class="w-full h-auto rounded-lg"
          />
          <!-- Decorative square -->
          <div
            class="absolute -bottom-8 -left-8 w-24 h-24 bg-[#e8d9c5] -z-10"
          ></div>
        </div>

        <!-- Content Column -->
        <div class="space-y-8">
          <!-- Decorative dots -->
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
              Best Fashion Since 2014
            </h2>
            <p class="text-[#5c4033] leading-relaxed">
              Tại Bapw Design, chúng tôi chuyên tạo ra các thiết kế sáng tạo,
              hấp dẫn và truyền cảm hứng. Có trụ sở tại Việt Nam, đội ngũ của
              chúng tôi tập trung vào chất lượng, chức năng và tính thẩm mỹ.
            </p>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-3 gap-8 pt-8">
            <div v-for="stat in stats" :key="stat.value" class="text-center">
              <div class="text-3xl font-serif text-[#3c2a21] mb-2">
                {{ stat.value }}
              </div>
              <div class="text-sm text-[#5c4033]">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "1000+", label: "Lượt tìm kiếm" },
  { value: "100+", label: "Sản phẩm bán ra" },
  { value: "1000+", label: "Lượt Reviews" },
];
</script>
