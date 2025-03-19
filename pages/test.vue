<template>
  <div class="font-sans bg-ivory min-h-screen">
    <!-- Header -->
    <header class="fixed w-full bg-ivory/95 shadow-sm z-50">
      <div
        class="container mx-auto px-4 py-3 flex items-center justify-between"
      >
        <div class="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-EH7EDoQParnvu66tmTAGmIlvM6yjCS.jpeg"
            alt="BAPW DESIGN Logo"
            class="h-16 md:h-20"
          />
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <nav class="flex space-x-6">
            <a href="#home" class="text-dark hover:text-gold transition-colors"
              >Trang chủ</a
            >
            <a href="#about" class="text-dark hover:text-gold transition-colors"
              >Về chúng tôi</a
            >
            <a
              href="#services"
              class="text-dark hover:text-gold transition-colors"
              >Dịch vụ</a
            >
            <a
              href="#collections"
              class="text-dark hover:text-gold transition-colors"
              >Sản phẩm</a
            >
            <a
              href="#contact"
              class="text-dark hover:text-gold transition-colors"
              >Liên hệ</a
            >
          </nav>
          <button
            class="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded transition-colors"
          >
            Đặt lịch tư vấn
          </button>
        </div>

        <button
          class="md:hidden text-dark"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden bg-ivory border-t border-gray-100 py-2"
      >
        <div class="container mx-auto px-4">
          <nav class="flex flex-col space-y-3 py-3">
            <a
              href="#home"
              class="text-dark hover:text-gold transition-colors"
              @click="mobileMenuOpen = false"
              >Trang chủ</a
            >
            <a
              href="#about"
              class="text-dark hover:text-gold transition-colors"
              @click="mobileMenuOpen = false"
              >Về chúng tôi</a
            >
            <a
              href="#services"
              class="text-dark hover:text-gold transition-colors"
              @click="mobileMenuOpen = false"
              >Dịch vụ</a
            >
            <a
              href="#collections"
              class="text-dark hover:text-gold transition-colors"
              @click="mobileMenuOpen = false"
              >Sản phẩm</a
            >
            <a
              href="#contact"
              class="text-dark hover:text-gold transition-colors"
              @click="mobileMenuOpen = false"
              >Liên hệ</a
            >
          </nav>
          <button
            class="mt-3 w-full bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded transition-colors"
          >
            Đặt lịch tư vấn
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="pt-28 md:pt-32 pb-16 md:pb-24 bg-cream">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <h1
              class="text-3xl md:text-5xl font-serif font-bold text-dark leading-tight mb-4"
            >
              Kết nối thời trang - Từ thiết kế đến phân phối
            </h1>
            <p class="text-lg md:text-xl text-bronze mb-8">
              BAPW DESIGN - Đối tác tin cậy cho các cửa hàng thời trang trên
              toàn quốc
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                class="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded transition-colors"
              >
                Khám phá bộ sưu tập
              </button>
              <button
                class="border border-gold text-gold hover:bg-gold hover:text-white px-6 py-3 rounded transition-colors"
              >
                Liên hệ môi giới
              </button>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="relative">
              <img
                src="/images/background1.jpg"
                alt="Fashion Design Collection"
                class="w-full h-auto rounded-lg shadow-lg"
              />
              <div
                class="absolute -bottom-6 -left-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center text-white font-bold"
              >
                NEW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Us Section -->
    <section id="about" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Hơn 10 năm kinh nghiệm trong ngành thiết kế và phân phối thời trang
          </h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/images/background1.jpg"
              alt="BAPW Design Team"
              class="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="md:w-1/2 md:pl-12">
            <p class="text-lg text-dark mb-6">
              BAPW DESIGN là đơn vị tiên phong trong lĩnh vực thiết kế và phân
              phối thời trang cao cấp tại Việt Nam. Chúng tôi tự hào kết nối các
              nhà thiết kế tài năng với các đối tác kinh doanh trên toàn quốc,
              mang đến những bộ sưu tập độc đáo và chất lượng.
            </p>
            <p class="text-lg text-dark mb-8">
              Với đội ngũ chuyên nghiệp và tầm nhìn sáng tạo, chúng tôi không
              ngừng đổi mới để đáp ứng nhu cầu ngày càng cao của thị trường thời
              trang.
            </p>

            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-gold mb-2">200+</div>
                <div class="text-bronze">Đối tác</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gold mb-2">500+</div>
                <div class="text-bronze">Thiết kế</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gold mb-2">50+</div>
                <div class="text-bronze">Tỉnh thành</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-gold mb-2">10+</div>
                <div class="text-bronze">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-16 md:py-24 bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Dịch vụ toàn diện cho đối tác kinh doanh
          </h2>
          <p class="text-lg text-bronze max-w-3xl mx-auto">
            Chúng tôi cung cấp các giải pháp toàn diện từ thiết kế đến phân
            phối, giúp đối tác kinh doanh tối ưu hóa hiệu quả và lợi nhuận.
          </p>
          <div class="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark text-center mb-3">
              Tư vấn thiết kế
            </h3>
            <p class="text-bronze text-center">
              Đội ngũ chuyên gia thiết kế giàu kinh nghiệm sẽ tư vấn và phát
              triển các bộ sưu tập phù hợp với định hướng thương hiệu của bạn.
            </p>
          </div>

          <div
            class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark text-center mb-3">
              Môi giới kết nối
            </h3>
            <p class="text-bronze text-center">
              Kết nối nhà thiết kế với các đối tác kinh doanh, tạo cơ hội hợp
              tác và phát triển bền vững cho cả hai bên.
            </p>
          </div>

          <div
            class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark text-center mb-3">
              Phân phối sỉ
            </h3>
            <p class="text-bronze text-center">
              Hệ thống phân phối rộng khắp cả nước, đảm bảo sản phẩm đến tay đối
              tác kinh doanh nhanh chóng và hiệu quả.
            </p>
          </div>

          <div
            class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div
              class="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-dark text-center mb-3">
              Hỗ trợ marketing
            </h3>
            <p class="text-bronze text-center">
              Cung cấp các giải pháp marketing hiệu quả, từ hình ảnh sản phẩm
              đến chiến lược truyền thông, giúp đối tác tiếp cận khách hàng tốt
              hơn.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Collections -->
    <section id="collections" class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Bộ sưu tập độc quyền từ các nhà thiết kế hàng đầu
          </h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="flex justify-center mb-10">
          <div class="flex space-x-2 md:space-x-4">
            <button class="px-4 py-2 bg-gold text-white rounded-full">
              Tất cả
            </button>
            <button
              class="px-4 py-2 bg-gray-100 hover:bg-gold hover:text-white rounded-full transition-colors"
            >
              Xu hướng
            </button>
            <button
              class="px-4 py-2 bg-gray-100 hover:bg-gold hover:text-white rounded-full transition-colors"
            >
              Mùa hè
            </button>
            <button
              class="px-4 py-2 bg-gray-100 hover:bg-gold hover:text-white rounded-full transition-colors"
            >
              Dạ tiệc
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img
                src="/images/background1.jpg"
                alt="Collection 1"
                class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <button
                  class="bg-gold text-white px-4 py-2 rounded transform -translate-y-10 group-hover:translate-y-0 transition-transform"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
            <h3 class="text-xl font-bold text-dark mb-1">
              Bộ sưu tập Mùa Hè 2025
            </h3>
            <p class="text-bronze">Thiết kế thanh lịch cho ngày hè</p>
          </div>

          <div class="group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img
                src="/images/background1.jpg"
                alt="Collection 2"
                class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <button
                  class="bg-gold text-white px-4 py-2 rounded transform -translate-y-10 group-hover:translate-y-0 transition-transform"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
            <h3 class="text-xl font-bold text-dark mb-1">Bộ sưu tập Dạ Tiệc</h3>
            <p class="text-bronze">Sang trọng và quyến rũ</p>
          </div>

          <div class="group">
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img
                src="/images/background1.jpg"
                alt="Collection 3"
                class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <button
                  class="bg-gold text-white px-4 py-2 rounded transform -translate-y-10 group-hover:translate-y-0 transition-transform"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
            <h3 class="text-xl font-bold text-dark mb-1">Bộ sưu tập Công Sở</h3>
            <p class="text-bronze">Chuyên nghiệp và tinh tế</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <button
            class="border-2 border-gold text-gold hover:bg-gold hover:text-white px-6 py-3 rounded-full transition-colors"
          >
            Xem tất cả bộ sưu tập
          </button>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="py-16 md:py-24 bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Quy trình hợp tác đơn giản và hiệu quả
          </h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="relative">
          <!-- Timeline line -->
          <div
            class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gold/30 transform -translate-x-1/2"
          ></div>

          <div class="space-y-12 md:space-y-0">
            <!-- Step 1 -->
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                <h3 class="text-xl font-bold text-dark mb-2">
                  1. Tư vấn & Khảo sát
                </h3>
                <p class="text-bronze">
                  Chúng tôi lắng nghe nhu cầu và mục tiêu kinh doanh của bạn, từ
                  đó đưa ra những tư vấn phù hợp nhất.
                </p>
              </div>
              <div class="md:w-12 md:flex md:justify-center md:items-center">
                <div
                  class="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold"
                >
                  1
                </div>
              </div>
              <div class="md:w-1/2 md:pl-16 md:text-left">
                <img
                  src="/images/background1.jpg"
                  alt="Step 1"
                  class="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col md:flex-row items-center">
              <div
                class="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right order-1 md:order-3"
              >
                <img
                  src="/images/background1.jpg"
                  alt="Step 2"
                  class="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
              <div
                class="md:w-12 md:flex md:justify-center md:items-center order-2 md:order-2"
              >
                <div
                  class="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold"
                >
                  2
                </div>
              </div>
              <div class="md:w-1/2 md:pl-16 md:text-left order-3 md:order-1">
                <h3 class="text-xl font-bold text-dark mb-2">
                  2. Lựa chọn & Thiết kế
                </h3>
                <p class="text-bronze">
                  Dựa trên nhu cầu của bạn, chúng tôi sẽ giới thiệu các bộ sưu
                  tập phù hợp hoặc phát triển thiết kế mới.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col md:flex-row items-center">
              <div class="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right">
                <h3 class="text-xl font-bold text-dark mb-2">
                  3. Sản xuất & Kiểm soát chất lượng
                </h3>
                <p class="text-bronze">
                  Chúng tôi giám sát quá trình sản xuất và đảm bảo mỗi sản phẩm
                  đều đạt tiêu chuẩn chất lượng cao nhất.
                </p>
              </div>
              <div class="md:w-12 md:flex md:justify-center md:items-center">
                <div
                  class="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold"
                >
                  3
                </div>
              </div>
              <div class="md:w-1/2 md:pl-16 md:text-left">
                <img
                  src="/images/background1.jpg"
                  alt="Step 3"
                  class="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
            </div>

            <!-- Step 4 -->
            <div class="flex flex-col md:flex-row items-center">
              <div
                class="md:w-1/2 md:pr-16 mb-6 md:mb-0 md:text-right order-1 md:order-3"
              >
                <img
                  src="/images/background1.jpg"
                  alt="Step 4"
                  class="rounded-lg shadow-md mx-auto md:mx-0"
                />
              </div>
              <div
                class="md:w-12 md:flex md:justify-center md:items-center order-2 md:order-2"
              >
                <div
                  class="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold"
                >
                  4
                </div>
              </div>
              <div class="md:w-1/2 md:pl-16 md:text-left order-3 md:order-1">
                <h3 class="text-xl font-bold text-dark mb-2">
                  4. Phân phối & Hỗ trợ
                </h3>
                <p class="text-bronze">
                  Chúng tôi đảm bảo sản phẩm được phân phối đúng thời hạn và
                  cung cấp hỗ trợ liên tục cho đối tác.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Đối tác tin cậy của các thương hiệu hàng đầu
          </h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center"
        >
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 1"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 2"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 3"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 4"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 5"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 6"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 7"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 8"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 9"
              class="h-12 md:h-16"
            />
          </div>
          <div
            class="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
          >
            <img
              src="/images/background1.jpg"
              alt="Partner 10"
              class="h-12 md:h-16"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 md:py-24 bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="text-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-bronze italic mb-6">
              "BAPW DESIGN đã giúp cửa hàng của tôi tìm được những bộ sưu tập
              độc đáo và phù hợp với khách hàng. Doanh thu tăng đáng kể sau khi
              hợp tác."
            </p>
            <div class="flex items-center">
              <img
                src="/images/background1.jpg"
                alt="Customer 1"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold text-dark">Nguyễn Thị Minh</h4>
                <p class="text-sm text-bronze">Chủ cửa hàng Minh Fashion</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="text-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-bronze italic mb-6">
              "Chất lượng sản phẩm và dịch vụ của BAPW DESIGN luôn vượt trội.
              Đội ngũ hỗ trợ nhiệt tình và chuyên nghiệp. Tôi rất hài lòng với
              sự hợp tác này."
            </p>
            <div class="flex items-center">
              <img
                src="/images/background1.jpg"
                alt="Customer 2"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold text-dark">Trần Văn Hùng</h4>
                <p class="text-sm text-bronze">Giám đốc Style Boutique</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <div class="flex items-center mb-6">
              <div class="text-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-bronze italic mb-6">
              "Là một nhà thiết kế, tôi đánh giá cao cách BAPW DESIGN kết nối
              tôi với các đối tác kinh doanh phù hợp. Họ thực sự hiểu thị trường
              và nhu cầu của khách hàng."
            </p>
            <div class="flex items-center">
              <img
                src="/images/background1.jpg"
                alt="Customer 3"
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold text-dark">Lê Thanh Hà</h4>
                <p class="text-sm text-bronze">Nhà thiết kế thời trang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog/News -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Xu hướng thời trang & Cập nhật ngành
          </h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img
                src="/images/background1.jpg"
                alt="Blog 1"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-gold text-white text-xs px-2 py-1 rounded"
              >
                Xu hướng
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-bronze mb-2">12 Tháng 3, 2025</div>
              <h3 class="text-xl font-bold text-dark mb-2">
                Xu hướng thời trang mùa hè 2025: Màu sắc và họa tiết
              </h3>
              <p class="text-bronze mb-4">
                Khám phá những xu hướng màu sắc và họa tiết nổi bật nhất trong
                mùa hè năm nay, từ pastel nhẹ nhàng đến họa tiết nhiệt đới.
              </p>
              <a href="#" class="text-gold hover:underline">Đọc thêm →</a>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img
                src="/images/background1.jpg"
                alt="Blog 2"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-gold text-white text-xs px-2 py-1 rounded"
              >
                Kinh doanh
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-bronze mb-2">5 Tháng 3, 2025</div>
              <h3 class="text-xl font-bold text-dark mb-2">
                5 chiến lược marketing hiệu quả cho cửa hàng thời trang
              </h3>
              <p class="text-bronze mb-4">
                Những chiến lược marketing đã được chứng minh hiệu quả giúp các
                cửa hàng thời trang tăng doanh số và xây dựng thương hiệu.
              </p>
              <a href="#" class="text-gold hover:underline">Đọc thêm →</a>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img
                src="/images/background1.jpg"
                alt="Blog 3"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-gold text-white text-xs px-2 py-1 rounded"
              >
                Thiết kế
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-bronze mb-2">28 Tháng 2, 2025</div>
              <h3 class="text-xl font-bold text-dark mb-2">
                Quy trình thiết kế thời trang: Từ ý tưởng đến sản phẩm
              </h3>
              <p class="text-bronze mb-4">
                Tìm hiểu quy trình thiết kế thời trang chuyên nghiệp, từ phác
                thảo ý tưởng ban đầu đến sản phẩm hoàn thiện.
              </p>
              <a href="#" class="text-gold hover:underline">Đọc thêm →</a>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button
            class="border-2 border-gold text-gold hover:bg-gold hover:text-white px-6 py-3 rounded-full transition-colors"
          >
            Xem tất cả bài viết
          </button>
        </div>
      </div>
    </section>

    <!-- Contact & Sign Up -->
    <section id="contact" class="py-16 md:py-24 bg-cream">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-2xl md:text-4xl font-serif font-bold text-dark mb-4">
            Bắt đầu hợp tác ngay hôm nay
          </h2>
          <div class="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form class="bg-white p-8 rounded-lg shadow-md">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-bronze mb-2"
                    >Họ và tên</label
                  >
                  <input
                    type="text"
                    id="name"
                    class="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-bronze mb-2"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    class="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Nhập email"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-bronze mb-2"
                    >Số điện thoại</label
                  >
                  <input
                    type="tel"
                    id="phone"
                    class="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div>
                  <label
                    for="business"
                    class="block text-sm font-medium text-bronze mb-2"
                    >Loại hình kinh doanh</label
                  >
                  <select
                    id="business"
                    class="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  >
                    <option value="">Chọn loại hình</option>
                    <option value="retail">Cửa hàng bán lẻ</option>
                    <option value="wholesale">Nhà phân phối sỉ</option>
                    <option value="designer">Nhà thiết kế</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              <div class="mb-6">
                <label
                  for="message"
                  class="block text-sm font-medium text-bronze mb-2"
                  >Nội dung</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Nhập nội dung liên hệ"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-gold hover:bg-gold-dark text-white py-3 rounded-md transition-colors"
              >
                Gửi liên hệ
              </button>
            </form>
          </div>

          <div>
            <div class="bg-white p-8 rounded-lg shadow-md mb-8">
              <h3 class="text-xl font-bold text-dark mb-6">
                Thông tin liên hệ
              </h3>

              <div class="space-y-4">
                <div class="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gold mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <h4 class="font-medium text-dark">Địa chỉ</h4>
                    <p class="text-bronze">
                      123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gold mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <h4 class="font-medium text-dark">Email</h4>
                    <p class="text-bronze">info@bapwdesign.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gold mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <h4 class="font-medium text-dark">Điện thoại</h4>
                    <p class="text-bronze">(+84) 28 1234 5678</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gold mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 class="font-medium text-dark">Giờ làm việc</h4>
                    <p class="text-bronze">Thứ Hai - Thứ Bảy: 8:30 - 17:30</p>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <h4 class="font-medium text-dark mb-4">
                  Kết nối với chúng tôi
                </h4>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    class="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <div class="h-64 bg-gray-200">
                <!-- Replace with actual map embed code -->
                <div
                  class="w-full h-full flex items-center justify-center bg-gray-100"
                >
                  <div class="text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-12 w-12 text-gold mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p class="text-bronze">Bản đồ showroom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-EH7EDoQParnvu66tmTAGmIlvM6yjCS.jpeg"
              alt="BAPW DESIGN Logo"
              class="h-16 mb-4"
            />
            <p class="text-gray-400 mb-4">
              BAPW DESIGN - Đối tác tin cậy cho các cửa hàng thời trang trên
              toàn quốc.
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-gray-400 hover:text-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">Liên kết nhanh</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#home"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Trang chủ</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Về chúng tôi</a
                >
              </li>
              <li>
                <a
                  href="#services"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Dịch vụ</a
                >
              </li>
              <li>
                <a
                  href="#collections"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Bộ sưu tập</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Liên hệ</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">Dịch vụ</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Tư vấn thiết kế</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Môi giới kết nối</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Phân phối sỉ</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Hỗ trợ marketing</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-400 hover:text-gold transition-colors"
                  >Đào tạo</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">Đăng ký nhận tin</h3>
            <p class="text-gray-400 mb-4">
              Đăng ký để nhận thông tin mới nhất về xu hướng thời trang và ưu
              đãi đặc biệt.
            </p>
            <form class="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                class="px-4 py-2 w-full bg-gray-800 text-white rounded-l focus:outline-none"
              />
              <button
                type="submit"
                class="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-r transition-colors"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>

        <div
          class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} BAPW DESIGN. Tất cả các quyền được
            bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

:root {
  --color-gold: #c29c54;
  --color-gold-dark: #a37e3a;
  --color-ivory: #f9f5f0;
  --color-cream: #f6eee0;
  --color-bronze: #8a6d3b;
  --color-gray: #e8e8e8;
  --color-dark: #333333;
}

@layer base {
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .font-serif {
    font-family: "Playfair Display", "Georgia", serif;
  }
}

@layer utilities {
  .bg-gold {
    background-color: var(--color-gold);
  }
  .bg-gold-dark {
    background-color: var(--color-gold-dark);
  }
  .bg-ivory {
    background-color: var(--color-ivory);
  }
  .bg-cream {
    background-color: var(--color-cream);
  }
  .text-gold {
    color: var(--color-gold);
  }
  .text-bronze {
    color: var(--color-bronze);
  }
  .text-dark {
    color: var(--color-dark);
  }
  .border-gold {
    border-color: var(--color-gold);
  }
  .bg-dark {
    background-color: var(--color-dark);
  }
}
</style>
