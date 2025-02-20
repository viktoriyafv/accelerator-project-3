const navMain = document.querySelector('.main-header__menu');
const navToggle = document.querySelector('.main-header__toggle');
const body = document.querySelector('.page-body');
const navLinks = document.querySelectorAll('[data-link="nav-link"]');
const sublistButton = document.querySelectorAll('.main-header__link--sublist');

const isEnterKey = (evt) => evt.key === 'Enter';
const isEscapeKey = (evt) => evt.key === 'Escape';

const toggleMenu = () => {
  navMain.classList.toggle('main-header__menu--opened');
  body.classList.toggle('page-body--menu');
};

navToggle.addEventListener('click', (evt) => {
  evt.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', (evt) => {
  const target = evt.target;
  const itsMenu = target === navMain || navMain.contains(target);
  const itsNavToggle = target === navToggle;
  const menuIsActive = navMain.classList.contains('main-header__menu--opened');

  if (!itsMenu && !itsNavToggle && menuIsActive) {
    toggleMenu();
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();

    toggleMenu();
  }
});

function subLinkTabindexAdd() {
  const subListIsOpen = document.querySelectorAll('.main-header__item--active');

  for (let i = 0; i < subListIsOpen.length; i++) {

    const sublinkActive = subListIsOpen[i].querySelectorAll('.main-header__sublink');

    for (let j = 0; j < sublinkActive.length; j++) {
      sublinkActive[j].tabIndex = 0;
    }
  }
}

function subLinkTabindexRemove() {
  const subListIsClose = document.querySelectorAll('.main-header__item');

  for (let i = 0; i < subListIsClose.length; i++) {

    const sublinkActive = document.querySelectorAll('.main-header__sublink');

    for (let j = 0; j < sublinkActive.length; j++) {
      sublinkActive[j].tabIndex = -1;
    }
  }
}

const navLinkToggle = () => {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', () => {
      navMain.classList.remove('main-header__menu--opened');
      body.classList.remove('page-body--menu');
    });
  }

  for (let i = 0; i < sublistButton.length; i++) {

    sublistButton[i].addEventListener('click', () => {
      sublistButton[i].parentElement.classList.toggle('main-header__item--active');
      if (sublistButton[i].parentElement.classList.contains('main-header__item--active')) {
        subLinkTabindexAdd();
      } else {
        subLinkTabindexRemove();
      }
    });

    sublistButton[i].addEventListener('keydown', (evt) => {

      if (isEnterKey(evt)) {
        sublistButton[i].parentElement.classList.toggle('main-header__item--active');
        if (sublistButton[i].parentElement.classList.contains('main-header__item--active')) {
          subLinkTabindexAdd();
        } else {
          subLinkTabindexRemove();
        }
      }
    });
  }
};

window.addEventListener('load', navLinkToggle);
