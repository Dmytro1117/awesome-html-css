(() => {
  const mobileMenubtn = document.querySelector('.mobile-menu__btn');
  const mobileMenu = document.querySelector('.header__menu');
  const navMenu = document.querySelector('.header__site-nav');

  mobileMenubtn.addEventListener('click', toggleMenu);

  navMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (innerWidth >= 767) {
      return;
    }
    mobileMenubtn.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  }
})();
