$(".en").hide();


$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

var swiper = new Swiper(".swiper-2", {
  slidesPerView: 2,
  // centeredSlides: true,
  // centeredSlidesBounds: true,
  spaceBetween: 15,
  //   cssMode: true,
  navigation: {
    nextEl: ".buttom .img-4",
    prevEl: ".buttom .img-3",
  },
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    426: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  //   mousewheel: true,
  //   keyboard: true,
  // grabCursor: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});


$("a").on("click", function () {
  if (
    $(".img-3").hasClass("swiper-button-disabled") &&
    !$(".img-4").hasClass("swiper-button-disabled")
  ) {
    $(".img-3").children("svg").find(".a").css("stroke", "#009BDB");
    $(".img-3").children("svg").find(".b").css("fill", "#009BDB");
    $(".img-4").children("svg").find(".a").css("stroke", "#009BDB");
    $(".img-4").children("svg").find(".b").css("fill", "#009BDB");
  } else if (
    !$(".img-3").hasClass("swiper-button-disabled") &&
    $(".img-4").hasClass("swiper-button-disabled")
  ) {
    $(".img-4").children("svg").find(".a").css("stroke", "#009BDB");
    $(".img-4").children("svg").find(".b").css("fill", "#009BDB");
    $(".img-3").children("svg").find(".a").css("stroke", "#009BDB");
    $(".img-3").children("svg").find(".b").css("fill", "#009BDB");
  } else {
    $(".img-4").children("svg").find(".a").css("stroke", "#009BDB");
    $(".img-4").children("svg").find(".b").css("fill", "#009BDB");
    $(".img-3").children("svg").find(".a").css("stroke", "#009BDB");
    $(".img-3").children("svg").find(".b").css("fill", "#009BDB");
  }
});

$(".album-a-2").hide();

$(document).ready(function () {
  $(".album-a").on("click", function () {
    $(".hide").css({"display": "block"});
    $(this).hide();
    $(".album-a-2").show();
  });
});

$(document).ready(function () {
  $(".album-a-2").on("click", function () {
    $(".hide").css({ display: "none" });
    $(".album-a").show();
    $(".album-a-2").hide();
  });
});


function dismissProgress() {
  $("#work-in-progress").fadeOut(100);
}

// Animation on Scroll
$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    
  });
});

