import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import '../../sass/vendor/swiper.css';

const getProgramsSlider = new Swiper('.programs__swiper', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 15,
  modules: [Navigation, Scrollbar],
  navigation: {
    nextEl: '.programs__button-swiper--next',
    prevEl: '.programs__button-swiper--prev',
  },
  scrollbar: {
    el: '.programs__scrollbar',
    draggable: true,
    dragSize: 394,
  },
  slideClass: 'programs__item',
  wrapperClass: 'programs__list',
  breakpoints: {
    320: {
      scrollbar: {
        enabled: false,
      }
    },
    768: {
      allowTouchMove: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        dragSize: 324,
      },
    },
    1440: {
      allowTouchMove: false,
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

getProgramsSlider.init();
