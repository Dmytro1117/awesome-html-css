function upButton() {
  const upButton = document.querySelector('.up-button');
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      upButton.classList.add('up-button--visible');
    } else {
      upButton.classList.remove('up-button--visible');
    }
  };
}

upButton();
