var controller = new ScrollMagic.Controller();

// Top banner animation
var topBannerTl = gsap.timeline();
topBannerTl.fromTo("#title", {opacity: 0}, {opacity: 1, duration: 0.5}).delay(0.5);
topBannerTl.fromTo("#top-banner img", 1, {y: 50, opacity: 0}, {y: 0, opacity: 1}).delay(0.5);
topBannerTl.fromTo("#top-banner a", 1, {y: 50, opacity: 0}, {y: 0, opacity: 1}).delay(0.5);

// Company logos animation
var companyTL = gsap.timeline();
companyTL.staggerFromTo(".company-img", 1, {opacity:0}, {opacity:1, duration: 0.1}, 0.2);

// Company logo trigger
new ScrollMagic.Scene({
  triggerElement: ".seen-in",
  triggerHook: 1
})
  .setTween(companyTL)
  .addTo(controller);


$(document).ready(function(){
  if ($( window ).width() < 992) {
    // Makes highlightes products into slider
    $('.highlighted-products .row').slick({
      dots: true,
      centerMode: true,
      centerPadding: '50px',
      prevArrow: "",
      nextArrow: ""
    });
  }
  if ($( window ).width() > 992) {
    // Navigation bar opacity animation
    var navAni = gsap.fromTo("nav", {background: "rgba(235, 235, 235, 0)"}, {backgroundColor: "rgba(235, 235, 235, 1)", borderBottomWidth: 1, duration: 0.1})

    // Navigation bar opacity trigger
    var scene = new ScrollMagic.Scene({
      triggerElement: "body",
      triggerHook: 0,
      offset: 50
    })
      .setTween(navAni)
      .addTo(controller);
  }

  $('#top-banner').css('padding-top', $('.fixed-top').outerHeight(true));
});