const slideBlogs_detail =
  new Swiper(".blog-related .swiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 38,
    speed: 1000,
    watchOverflow: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 38,
      },
    },
    navigation: {
      nextEl: ".blog-related .swiper-button-next",
      prevEl: ".blog-related .swiper-button-prev",
    },
  }) || false;