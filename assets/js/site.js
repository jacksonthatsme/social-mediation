$(document).ready(function() {
  var menuToggle = $('[data-js="menu__toggle"]'),
      menuBackground = $('[data-js="menu__background"]'),
      navigationList = $('[data-js="navigation__list"]'),
      navigationListItem = $('[data-js="navigation__list__item"]'),
      socialButtonContainer = $('[data-js="social__button-container"]'),
      footerCopyright = $('[data-js="footer__copyright"]'),
      siteMenuElement = $('[data-js*="site__menu__element"]'),
      menuIconActivate = $('[data-js*="menu__activate"]'),
      menuIconClose = $('[data-js*="menu__close"]'),
      bodyEl = $('body'),
      siteMenuElementReverse = siteMenuElement.toArray().reverse(),
      blobOrange = $('[data-js="blob--orange"]'),
      blobBlue = $('[data-js="blob--blue"]'),
      blobYellow = $('[data-js="blob--yellow"]'),
      blobGreen = $('[data-js="blob--green"]'),
      check = $('[data-js="check"]'),
      cross = $('[data-js="cross"]'),
      blueBrowL = $('[data-js="blue__brow--L"]'),
      blueEyeL = $('[data-js="blue__eye--L"]'),
      blueEyeR = $('[data-js="blue__eye--R"]'),
      blueBrowR = $('[data-js="blue__brow--R"]'),
      blueMouth = $('[data-js="blue__mouth"]'),
      blueHand = $('[data-js="blue__hand"]'),
      yellowBrowL = $('[data-js="yellow__brow--L"]'),
      yellowBrowR = $('[data-js="yellow__brow--R"]'),
      yellowMouth = $('[data-js="yellow__mouth"]'),
      yellowEyeL = $('[data-js="yellow__eye--L"]'),
      yellowEyeR = $('[data-js="yellow__eye--R"]'),
      yellowHand = $('[data-js="yellow__hand"]'),
      logotype = $('[data-js="logotype"]'),
      contentContainer = $('[data-js="content-container"]'),
      footer = $('[data-js="footer"]'),
      circledLine = $('[data-js="circledLine"]');

  var menuAnimation = gsap.timeline();

  //CustomEase.create("menuBackgroundShrink", "M0,0 C0,0 0.147,-0.006 0.252,0.102 0.406,0.263 0.358,0.642 0.526,0.82 0.73,1.036 0.985,1 1,1");

  function toggleMenu() {
    bodyEl.toggleClass('has-menu');

    if (bodyEl.hasClass('has-menu')) {
      menuAnimation.to(menuBackground, {duration: .4, scaleX: 1.2, scaleY: 1.2})
                   .to(menuBackground, {duration: 1.1, ease: Expo.easeOut, scaleX: 60, scaleY: 60})
                   .to(menuIconActivate, { duration: .1, opacity: 0}, "-=1.1")
                   .to(menuIconClose, {duration: .8, opacity: 1}, "-=1")
                   .to(siteMenuElement, {opacity: 1, stagger: .08}, "-=1");
    } else {
      menuAnimation.to(menuBackground, {duration: 1.1, scaleX: 1.2, scaleY: 1.2, ease: Expo.easeIn})
                   .to(menuBackground, {duration: .4, scaleX: 1.6, scaleY: 1.6})
                   .to(siteMenuElementReverse, {opacity: 0, stagger: .06}, "-=1.5")
                   .to(menuIconClose, {duration: 0, opacity: 0}, "-=.4")
                   .to(menuIconActivate, {duration: .8, opacity: 1}, "-=.2");

    }
  }

  menuToggle.bind('click', function() {
    toggleMenu();
  });

  function setFooterHeight() {
    var footerHeight = footer.innerHeight();
    contentContainer.css('marginBottom', footerHeight);
  }

  setFooterHeight();

  $(window).resize(function(){
    setFooterHeight();
  });

  var blueBlobAnimation = gsap.timeline({yoyo: true, repeat: -1, paused: true});

  // blueBlobAnimation.to(blueHand, {duration: .4, x: 5, ease: Power2.easeIn})
  //                  .to(blueHand, {duration: .4, y: -10, ease: Power2.easeOut})
  //                  .to(blueBrowR, {duration: .4, rotation: 5, y: -10, ease: Power3.easeIn}, '<');

  // blueBlobAnimation.play();

  circledLine.each(function() {
    var path = $(this).find("svg path").get(0);
    var pathLength = path.getTotalLength();

    this.style.strokeDasharray = pathLength;
    this.style.strokeDashoffset = pathLength;
  });
});
