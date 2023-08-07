function animationCSS() {
  const viewPortHeight = window.screen.height;
  let isShown = false;
  let isShown2 = false;

  window.addEventListener('scroll', function () {
    if (!isShown) {
      const galler = document.querySelector('.gallery__wrapper');
      const scrollTo = galler.offsetTop;

      if (window.pageYOffset > scrollTo - viewPortHeight) {
        galler.style.setProperty('--animate-duration', '2s');

        galler.classList.add('animate__animated', 'animate__backInLeft');

        isShown = true;
      }
    }

    if (!isShown2) {
      const feater = document.querySelector('.forms__item');
      const scrollTo2 = feater.offsetTop;

      if (window.pageYOffset > scrollTo2 - viewPortHeight) {
        feater.style.setProperty('--animate-duration', '3s');

        feater.classList.add('animate__animated', 'animate__fadeInBottomRight');

        isShown = true;
      }
    }
  });
}

animationCSS();
