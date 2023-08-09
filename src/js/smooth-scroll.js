//=============================================================================
// 1) JS (from team proj)

// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     let href = this.getAttribute('href').substring(1);

//     const scrollTarget = document.getElementById(href);

//     const topOffset = 80;
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: 'smooth',
//     });
//   });
// });

// ==============================================================================
// 2) JS

const topOffset = document.querySelectorAll('a[href^="#"]');
for (let index of topOffset) {
  index.addEventListener('click', function (e) {
    e.preventDefault();
    const hreff = index.getAttribute('href');
    document.querySelector('' + hreff).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// =================================================================================
// 3) JQuery

// jQuery(document).ready(function () {
//   jQuery('a.scrollto').click(function () {
//     elementClick = jQuery(this).attr('href');
//     destination = jQuery(elementClick).offset().top;
//     jQuery('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 3100);
//     return false;
//   });
// });
