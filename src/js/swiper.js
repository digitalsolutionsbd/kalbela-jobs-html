/********************************
 ********* Similar company job slider ****
 ********************************/
 const companySwiper = new Swiper(".mySwiperCompanies", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mySwiperCompanies .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  /********************************
   ********* Similar job slider ****
   ********************************/
  const jobSwiper = new Swiper(".mySwiperJobs", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mySwiperJobs .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // Show 2 items from 768px+
      },
    },
  });
  