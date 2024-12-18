<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-serif text-[#3c2a21] text-center mb-12">
        Our Product
      </h2>

      <!-- Filter Navigation -->
      <nav class="flex justify-center mb-12">
        <ul class="flex gap-8">
          <li v-for="filter in filters" :key="filter">
            <button
              class="px-4 py-2 text-[#3c2a21] hover:text-[#5c4033] transition-colors relative"
              :class="{
                'font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#3c2a21]':
                  filter === 'HOT',
              }"
            >
              {{ filter }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Product Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="product in products" :key="product.id" class="group">
          <!-- Product Image -->
          <div class="aspect-square bg-white rounded-lg overflow-hidden mb-4">
            <img
              :src="product.src"
              :alt="product.name"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Product Info -->
          <div class="space-y-2 text-center">
            <div class="flex justify-center gap-1">
              <Star
                v-for="n in 5"
                :key="n"
                class="w-4 h-4 text-yellow-400 fill-current"
              />
            </div>

            <h3 class="font-medium text-[#3c2a21]">{{ product.name }}</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative dots -->
    <div class="absolute right-12 top-12 grid grid-cols-3 gap-2">
      <div
        v-for="n in 9"
        :key="n"
        class="w-1 h-1 bg-[#3c2a21] rounded-full opacity-20"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { Star } from "lucide-vue-next";

const filters = ["HOT", "ON SALE", "TRENDING NOW", "NEW ARRIVAL"];

const products = [
  {
    id: 1,
    name: "Casual Long Sleeve",
    src: "/images/1.jpg",
  },
  {
    id: 2,
    name: "Pastel Long Sleeve",
    src: "/images/2.jpg",
  },
  {
    id: 3,
    name: "Hoodie Long Sleeve",
    src: "/images/3.jpg",
  },
  {
    id: 4,
    name: "Casual Long Sleeve",
    src: "/images/4.jpg",
  },
  {
    id: 5,
    name: "Pastel Long Sleeve",
    src: "/images/ct-1.png",
  },
  {
    id: 6,
    name: "Hoodie Long Sleeve",
    src: "/images/ct-2.png",
  },
  {
    id: 7,
    name: "Casual Long Sleeve",
    src: "/images/ct-3.png",
  },
  {
    id: 8,
    name: "Pastel Long Sleeve",
    src: "/images/ct-4.png",
  },
];
</script>
