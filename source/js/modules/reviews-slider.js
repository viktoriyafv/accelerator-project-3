import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

const getReviewsSlider = new Swiper('.reviews__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15,
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: '.reviews__button-swiper--next',
    prevEl: '.reviews__button-swiper--prev',
  },
  scrollbar: {
    el: '.reviews__scrollbar',
    draggable: true,
    dragSize: 394,
  },
  slideClass: 'reviews__item',
  wrapperClass: 'reviews__list',
  breakpoints: {
    320: {
      allowTouchMove: true,
      scrollbar: {
        enabled: false,
      }
    },
    768: {
      slidesPerView: 'auto',
      allowTouchMove: true,
      spaceBetween: 30,
      scrollbar: {
        dragSize: 324,
      },
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
    },
  },
});

getReviewsSlider.init();
