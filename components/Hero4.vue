<template>
  <section class="py-24 bg-[#413531] md:mt-28">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-[400px,1fr] gap-12 items-center">
        <!-- Content Column -->
        <div class="space-y-6 text-white">
          <h2 class="text-4xl md:text-5xl font-serif leading-tight">
            Best Seller Product
          </h2>
          <p class="text-white/70">
            Top những sản phẩm bán chạy nhất mùa hè 2024
          </p>
          <button
            class="px-8 py-3 border border-white/30 hover:bg-white hover:text-[#362f2d] transition-colors"
          >
            SEE MORE
          </button>
        </div>

        <div class="overflow-hidden">
          <div class="flex animate-scroll">
            <div v-for="i in 3" :key="i" class="flex flex-nowrap">
              <div
                v-for="(image, index) in images"
                :key="`${i}-${index}`"
                class="w-[300px] flex-shrink-0 mx-2"
              >
                <NuxtImg
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-[400px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const images = ref([
  { src: "/images/image-ln1.jpeg", alt: "Mobile design interface" },
  { src: "/images/image-ln2.jpeg", alt: "Custom made desktop interface" },
  { src: "/images/image-ln3.jpeg", alt: "Designer at work" },
  { src: "/images/image-ln4.jpeg", alt: "Designer with mannequin" },
  { src: "/images/image-ln5.jpeg", alt: "Fashion design sketch" },
]);
</script>

<style scoped lang="css">
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * 6));
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
