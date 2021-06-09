$(document).ready(function () {
  // Body padding for the navbar height
  const p = window.location.pathname;
  if (p !== "/" && !p.match(/^\/?index/)) {
    $('body').css('padding-top', $('.fixed-top').outerHeight(true));
  }
  $('.dropdown').hover(
    function () {
      $('.shadow-overlay').css('display', 'block');
    }, function () {
      $('.shadow-overlay').css('display', 'none');
    }
  );
  // Navigation bar opacity animation
  var controller = new ScrollMagic.Controller();
  var infoBarAni = gsap.to(".info-bar", {height: "0", display: "none", duration: 0.3})

  // Navigation bar opacity trigger
  new ScrollMagic.Scene({
    triggerElement: "body",
    triggerHook: 0,
    offset: 50
  })
    .setTween(infoBarAni)
    .addTo(controller);
});
$('.collapse-btn').click(function () {
  $('i', this).toggleClass('bi-chevron-down').toggleClass('bi-chevron-up');
});