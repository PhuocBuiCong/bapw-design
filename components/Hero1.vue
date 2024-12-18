<template>
  <section class="min-h-fit bg-[#f7efe7] py-24">
    <div class="container mx-auto px-4 mt-[65px]">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <h1
            class="text-5xl md:text-6xl lg:text-7xl font-serif text-[#3c2a21] leading-tight"
          >
            Find The Best Fashion Style For You
          </h1>
          <p class="text-[#5c4033] text-lg max-w-md">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Sed
            Ullamcorper Congue Eros, Eget Tincidunt Ipsum Eleifend Ut.
          </p>
        </div>
        <div class="relative">
          <NuxtImg
            src="/images/image-ln2.jpeg"
            alt="Fashion Model"
            class="w-full h-auto rounded-lg"
          />
          <div
            class="absolute -z-10 top-8 right-8 w-full h-full bg-[#e8d9c5] rounded-lg"
          ></div>
        </div>
      </div>
    </div>

    <!-- Decorative dots -->
    <div class="absolute top-[96px] left-12 grid grid-cols-4 gap-2">
      <div
        v-for="n in 16"
        :key="n"
        class="w-1 h-1 bg-[#3c2a21] rounded-full opacity-20"
      ></div>
    </div>
  </section>
</template>
