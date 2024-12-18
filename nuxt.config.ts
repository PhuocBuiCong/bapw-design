// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  css: [
    "~/assets/css/main.css",
    "~/assets/css/fonts.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    "/": { ssr: true },
  },
  app: {
    head: {
      title: "Bapw Design",
      meta: [{ name: "description", content: "Bapw Design" }],
      link: [{ rel: "icon", type: "image/png", href: "/images/model-1.png" }],
    },
  },
});
