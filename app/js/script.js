window.addEventListener("load", function (e) {
  // header navbar menu toggle
  $("header .activeBars").click(function () {
    $("header .activeMenuBars").slideToggle(1000);
  });

  //   header navbar menu drobdown

  $("header .dropdownLink").click(function () {
    $(".dropdown").not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

  // header navbar signin form eye show/hide password

  $("header .eyes").click(function () {
    var attr = $("header .pass input").attr("type");
    if (attr == "password") {
      $("header .pass input").attr("type", "text");
    } else {
      $("header .pass input").attr("type", "password");
    }
  });

  // header navbar signin form error Validation togirlash kerak

  $(".headerLogin button").click(function (e) {
    e.preventDefault();
    if ($(".headerLogin input").val() === "") {
      $(".errorMsg").show();
    } else {
      $(".errorMsg").hide();
    }
  });

  /// header navbar signin close

  $(".headerLogin .close").click(function () {
    $(".headerLogin").fadeOut(500);
  });

  $("header .signUp").click(function () {
    $(".headerLogin").fadeIn();
    $(".headerLogin").css("display", "flex");
  });

  /// main videoPlayer playing video

  $("main .fa-play").click(function () {
    document.querySelector(".videoPlayer video").play();
    $("main .videoPlayer").addClass("active");
    $(this).fadeOut();
  });

  $("main .videoPlayer").mouseover(function () {
    if ($(this).hasClass("active")) {
      $("main .fa-pause").fadeIn(); // block
      $("main .fa-pause").css("display", "flex");
    }
  });

  $("main .videoPlayer").mouseout(function () {
    $("main .fa-pause").fadeOut();
  });

  $("main .fa-pause").click(function () {
    document.querySelector(".videoPlayer video").pause();
    $("main .fa-play").fadeIn();
    $("main .videoPlayer").removeClass("active");
  });

  // .courses views all courses

  $(".courses .bgBlue").click(function () {
    if ($(".courses .activeCourses").hasClass("activeCourses")) {
      $(".courses .activeCourses").removeClass("activeCourses");
    } else {
      $(".courses .def").addClass("activeCourses");
    }
  });

  // owl-carousel

  $(".say .owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    nav: true,
  });

  // footer accardion

    $("footer #accardionTitle").click(function () {
      $(this.children[0]).css("transform", "rotate(180deg)").addClass("act");
      $("footer #accardionContent").not($(this).next()).slideUp();
      $(this).next().slideToggle();
      if ($(this.children[0]).hasClass("act")) {
        $(this.children[0]).css("transform", "rotate(360deg)").removeClass("act");
      }
    });
});
