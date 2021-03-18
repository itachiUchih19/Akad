$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__nav_mobile').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.slider').slick({
      arrows: false,
      dots: true
   });
});

