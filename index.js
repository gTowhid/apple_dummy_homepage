const swiper = new Swiper(".swiper", {
   autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  loop: true,

  slidesPerView: 1.2,
  spaceBetween: 10,
  centeredSlides: true,
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const popup = document.querySelectorAll(".popup");

const options = {
  root: null,
  threshold: 0.25,
};

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.style.animation = "popupanime 0.5s ease-in forwards";
    } else{
      entry.target.style.animation = "popdownanime 0.2s ease-in forwards";
    }
  });
}, options);

popup.forEach(el => {
  observer.observe(el);
})