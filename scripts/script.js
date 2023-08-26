const playSwiper = new Swiper(".play-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  effect: "coverflow",
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const gallerySwiper = new Swiper(".gallery-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  effect: "coverflow",
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
});
