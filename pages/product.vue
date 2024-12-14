<template>
  <div class="relative pt-16">
    <EffectImage :slides="slides" />
  </div>
  <!-- Welcome -->
  <div class="py-12 sm:py-[80px] px-6 sm:px-0 text-center">
    <h1
      class="text-3xl md:text-5xl font-light mb-10 tracking-wide font-chronicle"
    >
      WELCOME TO THE BAPW DESIGN
    </h1>

    <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
      Your one-stop shop for stylish furniture and decor, delivering the latest
      trends exclusively to Perth.
    </p>
  </div>

  <!-- Categories Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-[50px]">
    <!-- Living Room Category -->
    <!-- Living Room Category -->
    <div class="relative group overflow-hidden">
      <div class="aspect-[4/5] relative">
        <img
          src="/images/ct-4-1.png"
          alt="Modern living room with white sectional sofa"
          class="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30"
        ></div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h2 class="text-3xl font-light mb-4">LIVING</h2>
          <!-- <button
            class="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
          >
            VIEW PRODUCTS
          </button> -->
        </div>
      </div>
    </div>

    <!-- Dining Room Category -->
    <div class="relative group overflow-hidden">
      <div class="aspect-[4/5] relative">
        <img
          src="/images/ct-4-1.png"
          alt="Dining room with wooden chairs"
          class="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30"
        ></div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h2 class="text-3xl font-light mb-4">DINING</h2>
          <!-- <button
            class="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
          >
            VIEW PRODUCTS
          </button> -->
        </div>
      </div>
    </div>

    <!-- Bedroom Category -->
    <div class="relative group overflow-hidden">
      <div class="aspect-[4/5] relative">
        <img
          src="/images/ct-4-1.png"
          alt="Bedroom with neutral toned bedding"
          class="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30"
        ></div>
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <h2 class="text-3xl font-light mb-4">BEDROOM</h2>
          <!-- <button
            class="bg-white text-black px-8 py-3 text-sm tracking-wider hover:bg-gray-100 transition-colors"
          >
            VIEW PRODUCTS
          </button> -->
        </div>
      </div>
    </div>
  </div>

  <div class="p-6 sm:p-[50px] flex flex-col sm:flex-row">
    <div class="w-full md:w-1/2 p-6 md:p-12 lg:p-16">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-8 uppercase"
      >
        IMAGINE THE POTENTIAL OF YOUR INTERIOR
      </h1>
      <p class="text-gray-600 text-lg mb-8 leading-relaxed">
        The Furniture Gallery's mission is to help turn your dream interior into
        a reality. Our team of talented stylists share a passion to create
        beautiful spaces for you to call home. Because life is too short not to
        love where you live.
      </p>
      <button
        class="bg-black-100 text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-800 transition-colors"
      >
        BOOK A DESIGN CONSULT
      </button>
    </div>

    <div class="w-full md:w-1/2 relative aspect-[4/3] mt-6 md:mt-0">
      <div class="relative w-full h-full overflow-hidden">
        <!-- Video/Image Placeholder -->
        <img
          src="/images/fade1.png"
          alt="Bright interior with windows"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <div class="py-12 sm:py-[80px] px-6 sm:px-0 text-center bg-[#f9f4f0]">
    <h1
      class="text-3xl md:text-5xl font-light mb-10 tracking-wide font-chronicle uppercase"
    >
      Shop our wide selection of stylish furniture
    </h1>

    <p class="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
      Western Australian owned and operated, The Furniture Gallery is a family
      owned company with a focus on quality craftsmanship and on-trend designs
      sourced from local and international brands. Ready to discover the largest
      range of stylish and affordable bed, living and dining furniture in WA?
      Visit one of our three furniture stores - located in Osborne Park,
      Joondalup and Cockburn.
    </p>
  </div>

  <GalleryImage :articles="articles" class="mt-10" />

  <!-- Social Media  -->
  <section class="py-16 px-4 bg-[#f9f4f0]">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-light mb-8">
          FOLLOW US ON SOCIAL
        </h2>
        <div class="flex justify-center gap-8">
          <a
            href="#"
            class="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.229 18.509c-2.074-.096-7.288-.096-9.358 0-2.417.112-2.699-2.155-2.71-6.509-.01-4.353.282-6.62 2.71-6.732 2.07-.095 7.284-.095 9.358 0 2.417.112 2.699 2.155 2.71 6.509.01 4.353-.282 6.62-2.71 6.732zm-7.229-9.509l6 3.5-6 3.5v-7z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <!-- Row 1 -->
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Coffee table"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="TV unit"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Outdoor seating"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Round table"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Black cabinet"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <!-- Row 2 -->
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="White sectional sofa"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Living room setup"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Dining set"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Curved sofa"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div class="relative group overflow-hidden">
          <img
            src="/images/g1.png"
            alt="Beige sofa"
            class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EffectImage from "~/components/EffectImage.vue";

definePageMeta({
  layout: "default",
});

const slides = [
  {
    image: "/images/fade2.png",
    subtitle: "SUMMER REFRESH",
    title: "NEW ARRIVALS",
    cta: "SHOP NOW",
  },
  {
    image: "/images/fade4.png",
    subtitle: "EXCLUSIVE COLLECTION",
    title: "MODERN LIVING",
    cta: "EXPLORE",
  },
];

const articles = [
  {
    image: "/images/ct-2.png",
    category: "INTERIORS",
    title: "15 Instagram Accounts To Follow For Interior-Design Envy",
    date: "30 OCT '24",
  },
  {
    image: "/images/ct-2.png",
    category: "THE FASHION MEMO",
    title: "The Most Luxurious Stocking Stuffers",
    date: "29 OCT '24",
  },
  {
    image: "/images/ct-2.png",
    category: "TRAVEL",
    title: "7 Idyllic Destinations For A Winter-Sun Vacation",
    date: "18 NOV '24",
  },
  {
    image: "/images/ct-2.png",
    category: "TRAVEL",
    title: "The Hottest Hotel Openings To Have On Your Radar",
    date: "04 NOV '24",
  },
];
</script>

<style scoped lang="css"></style>
