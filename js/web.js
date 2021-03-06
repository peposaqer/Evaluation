

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


// $(".en").hide();

// //show more button
// $(".arbic").click(function () {
//   $(".arbic").hide();
//   $(".en").show();
// });

// //show more button
// $(".en").click(function () {
//   $(".en").hide();
//   $(".arbic").show();
// });



// Change Languages
var language;
// check langauge on loading page
function loadLang() {
  let lang_shor_name = localStorage.getItem("language");
  if (lang_shor_name === "ar") {
    arabicLang();
  } else {
    englishLang();
  }
}
// get Language
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "language/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });
}

// set Language
function setLanguage(lang) {
  localStorage.setItem("language", lang);
}
// set Language
function arabicLang(lang) {
  localStorage.setItem("language", lang);
}
// change to English
$(".en").on("click", englishLang);
// change to Arabic
$(".arbic").on("click", arabicLang);


function arabicLang() {
  $(".chang").addClass("right-dir");
  getLanguage();
  $("#nav_home").text(language.nav_home);
  $("#nav_about").text(language.nav_about);
  $("#nav_why").text(language.nav_why);
  $("#nav_pricing").text(language.nav_pricing);
  $("#nav_album").text(language.nav_album);
  $("#nav_testimonials").text(language.nav_testimonials);
  $("#nav_partners").text(language.nav_partners);
  $("#nav_contact").text(language.nav_contact);
  $("#header_h1").text(language.header_h1);
  $("#header_p").text(language.header_p);
  $("#about_h1").text(language.about_h1);
  $("#about_p").text(language.about_p);
  $("#why_h1").text(language.why_h1);
  $("#why_p").text(language.why_p);
  $("#why_h2").text(language.why_h2);
  $("#why_p2").text(language.why_p2);
  $("#why_h3").text(language.why_h3);
  $("#why_p3").text(language.why_p3);
  $("#why_h4").text(language.why_h4);
  $("#why_p4").text(language.why_p4);
  $("#why_h5").text(language.why_h5);
  $("#why_p5").text(language.why_p5);
  $("#album_h1").text(language.album_h1);
  $("#album_p").text(language.album_p);
  $("#album_a_1").text(language.album_a_1);
  $("#album_a_2").text(language.album_a_2);
  $("#Testimonials_h1").text(language.Testimonials_h1);
  $("#Testimonials_p").text(language.Testimonials_p);
  $("#testimonials_h5").text(language.testimonials_h5);
  $("#testimonials_p1").text(language.testimonials_p1);
  $("#testimonials_h5_1").text(language.testimonials_h5_1);
  $("#testimonials_p2").text(language.testimonials_p2);
  $("#testimonials_h5_2").text(language.testimonials_h5_2);
  $("#testimonials_h5_3").text(language.testimonials_h5_3);
  $("#testimonials_h5_4").text(language.testimonials_h5_4);
  $("#testimonials_p3").text(language.testimonials_p3);
  $("#testimonials_p4").text(language.testimonials_p4);
  $("#testimonials_p5").text(language.testimonials_p5);
  $("#clients_h1").text(language.clients_h1);
  $("#clients_p").text(language.clients_p);
  $("#Contact_h1").text(language.Contact_h1);
  $("#contact_p").text(language.contact_p);
  $("#contact_h3").text(language.contact_h3);
  $("#contact_copy").text(language.contact_copy);
  $("#contact_email").attr("placeholder", language.contact_email);
  $("#contact_textarea").attr("placeholder", language.contact_textarea);
  $("#contact_a").attr("value", language.contact_a);
  $(".Contact ul").css({ "margin-left": "5rem" });
  $(".header h1").css({ "text-align": "right" });
  $(".header p").css({ "text-align": "right" });
  $("nav ul").css({ "float": "right" });
  $(".header").css({ "background-repeat": "no-repeat" });
  $(".header").css({ "background": "url(img/header2.png)" });
  $(".header").css({ "background-position": "center" });
  $(".header").css({ "background-size": "cover" });
  $("body").css({ "font-family": "'Tajawal', sans-serif" });
  $("nav ul").css({"margin-right": "auto" });
  $("nav ul").css({ "margin-left": "0" });
  document.querySelector("style").textContent +=
    "@media screen and (max-width:425px) { .why .group { margin-left: .5rem }}";
  $(".arbic").hide();
  $(".en").show();

  // Function To Dismiss Progress Ring
  // dismissProgress();
}

function englishLang() {
  $(".chang").removeClass("right-dir");
  getLanguage();
  $("#nav_home").text(language.nav_home);
  $("#nav_about").text(language.nav_about);
  $("#nav_why").text(language.nav_why);
  $("#nav_pricing").text(language.nav_pricing);
  $("#nav_album").text(language.nav_album);
  $("#nav_testimonials").text(language.nav_testimonials);
  $("#nav_partners").text(language.nav_partners);
  $("#nav_contact").text(language.nav_contact);
  $("#header_h1").text(language.header_h1);
  $("#header_p").text(language.header_p);
  $("#about_h1").text(language.about_h1);
  $("#about_p").text(language.about_p);
  $("#why_h1").text(language.why_h1);
  $("#why_p").text(language.why_p);
  $("#why_h2").text(language.why_h2);
  $("#why_p2").text(language.why_p2);
  $("#why_h3").text(language.why_h3);
  $("#why_p3").text(language.why_p3);
  $("#why_h4").text(language.why_h4);
  $("#why_p4").text(language.why_p4);
  $("#why_h5").text(language.why_h5);
  $("#why_p5").text(language.why_p5);
  $("#album_h1").text(language.album_h1);
  $("#album_p").text(language.album_p);
  $("#album_p").text(language.album_p);
  $("#album_a_1").text(language.album_a_1);
  $("#album_a_2").text(language.album_a_2);
  $("#Testimonials_h1").text(language.Testimonials_h1);
  $("#Testimonials_p").text(language.Testimonials_p);
  $("#testimonials_h5").text(language.testimonials_h5);
  $("#testimonials_p1").text(language.testimonials_p1);
  $("#testimonials_h5_1").text(language.testimonials_h5_1);
  $("#testimonials_p2").text(language.testimonials_p2);
  $("#testimonials_h5_2").text(language.testimonials_h5_2);
  $("#testimonials_h5_3").text(language.testimonials_h5_3);
  $("#testimonials_h5_4").text(language.testimonials_h5_4);
  $("#testimonials_p3").text(language.testimonials_p3);
  $("#testimonials_p4").text(language.testimonials_p4);
  $("#testimonials_p5").text(language.testimonials_p5);
  $("#clients_h1").text(language.clients_h1);
  $("#clients_p").text(language.clients_p);
  $("#Contact_h1").text(language.Contact_h1);
  $("#contact_p").text(language.contact_p);
  $("#contact_h3").text(language.contact_h3);
  $("#contact_copy").text(language.contact_copy);
  $("#contact_email").attr("placeholder", language.contact_email);
  $("#contact_textarea").attr("placeholder", language.contact_textarea);
  $("#contact_a").attr("value", language.contact_a);
  $(".header h1").css({ "text-align": "left" });
  $(".header p").css({ "text-align": "left" });
  $(".header").css({"background": "url(img/home-bg.svg)" });
  $(".header").css({ "background-position": "center" });
  $(".header").css({ "background-repeat": "no-repeat" });
  $(".header").css({ "background-size": "cover" });
  $("nav ul").css({ "margin-left": "auto" });
  $("nav ul").css({ "margin-right": "0" });
  document.querySelector("style").textContent +=
    "@media screen and (max-width:425px) { .why .group { margin-left: .5rem }}";
  $(".en").hide();
  $(".arbic").show();


  // Function To Dismiss Progress Ring
  // dismissProgress();
}
