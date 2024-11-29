<template>
  <div class="bg-black-100 text-white px-4 py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-serif mb-4">
          LIFESTYLE & CULTURE
        </h1>
        <p class="text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
          Luxury-travel guides, interiors inspiration, cultural updates and
          inspiring interviews
        </p>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article
          v-for="(article, index) in articles"
          :key="index"
          class="group cursor-pointer"
        >
          <div class="aspect-[4/5] overflow-hidden mb-4">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div class="space-y-2">
            <div class="text-xs tracking-wider text-gray-400">
              {{ article.category }}
            </div>
            <h2
              class="font-serif text-lg leading-tight group-hover:text-gray-300 transition-colors"
            >
              {{ article.title }}
            </h2>
            <div class="text-xs text-gray-400">{{ article.date }}</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  articles: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (article) =>
          typeof article.image === "string" &&
          typeof article.category === "string" &&
          typeof article.title === "string" &&
          typeof article.date === "string"
      );
    },
  },
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
