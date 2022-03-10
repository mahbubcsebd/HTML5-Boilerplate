$(window).on('load', function () {
  /*---------------------
   magnific popup
  --------------------- */
  $('.photo-click').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  /*---------------------
    Video Play
  --------------------- */
  $('.play-btn').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',

      srcAction: 'iframe_src',
    }
  });

  /*---------------------
    Shop page dynamic
  --------------------- */
  $(".without-sidebar").on('click', function () {
    $('.shop-sidebar-wrapper').hide(500);
    $('.shop-right-side-wrapper').removeClass('col-lg-8', {
      duration: 500
    });
    $('.without-sidebar').addClass('active', {
      duration: 500
    });
    $('.with-sidebar').removeClass('active', {
      duration: 500
    });
    $('.shop-section .prod-dynamic-cls').addClass('col-lg-4 col-sm-6', {
      duration: 500
    });
  });

  $(".with-sidebar").on('click', function () {
    $('.shop-sidebar-wrapper').show(500);
    $('.shop-right-side-wrapper').removeClass('col-lg-8', {
      duration: 500
    });
    $('.shop-right-side-wrapper').addClass('col-lg-8 col-md-12', {
      duration: 500
    });
    $('.with-sidebar').addClass('active', {
      duration: 500
    });
    $('.without-sidebar').removeClass('active', {
      duration: 500
    });
    $('.shop-section .prod-dynamic-cls').removeClass('col-lg-4 col-sm-6', {
      duration: 500
    });
  });

  /*---------------------
    Search Button
  --------------------- */
  $(".btn-search").on('click', function () {
    $('.input-search-box').toggleClass('input-search');
  });

  /*---------------------
    Search Input
  --------------------- */
  $("#clickme").on('click', function () {
    $("#book").toggle("slow", function () {
      // Animation complete.
    });
  });

  /*---------------------
    Elivated Zoom
  --------------------- */
  $(".elivate-lg-img").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair"
  });


  /*---------------------
  Scroll to top
  --------------------- */
  $('body').materialScrollTop();
  // slick slider

  /*---------------------
  Elivate slider
  --------------------- */
  $('.elivate-slider').slick({
    speed: 600,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });

  /*---------------------
  Hero Slider
  --------------------- */
  $('.hero-slider').slick({
    infinite: true,
    autoplay: true,
    speed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

  });

  /*---------------------
  Product Category Slider
  --------------------- */
  $('.slider-category, .prod-slider').slick({
    infinite: false,
    speed: 600,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
});

/*---------------------
Price Range Dynamic
--------------------- */
$(window).on('load', function () {

  $('#price-range-submit').hide();

  $("#min_price,#max_price").on('change', function () {

    $('#price-range-submit').show();

    var min_price_range = parseInt($("#min_price").val());

    var max_price_range = parseInt($("#max_price").val());

    if (min_price_range > max_price_range) {
      $('#max_price').val(min_price_range);
    }

    $("#slider-range").slider({
      values: [min_price_range, max_price_range]
    });

  });


  $("#min_price,#max_price").on("paste keyup", function () {

    $('#price-range-submit').show();

    var min_price_range = parseInt($("#min_price").val());

    var max_price_range = parseInt($("#max_price").val());

    if (min_price_range == max_price_range) {

      max_price_range = min_price_range + 100;

      $("#min_price").val(min_price_range);
      $("#max_price").val(max_price_range);
    }

    $("#slider-range").slider({
      values: [min_price_range, max_price_range]
    });

  });


  $(function () {
    $("#slider-range").slider({
      range: true,
      orientation: "horizontal",
      min: 0,
      max: 10000,
      values: [0, 10000],
      step: 100,

      slide: function (event, ui) {
        if (ui.values[0] == ui.values[1]) {
          return false;
        }

        $("#min_price").val(ui.values[0]);
        $("#max_price").val(ui.values[1]);
      }
    });

    $("#min_price").val($("#slider-range").slider("values", 0));
    $("#max_price").val($("#slider-range").slider("values", 1));

  });

  $("#slider-range,#price-range-submit").click(function () {

    var min_price = $('#min_price').val();
    var max_price = $('#max_price').val();

    $("#searchResults").text("Here List of products will be shown which are cost between " + "$" + +min_price + " " + "and" + " $" + max_price + ".");
  });

});


/*---------------------
Cart Button Increment Decrement
--------------------- */
$('.input-number-increment').on('click', function () {
  add();
});

$('.input-number-decrement').on('click', function () {
  subst();
});

function add() {
  var a = $(".demoInput").val();
  a++;
  if (a >= 1) {
    $(".input-number-decrement").removeAttr("disabled");
  }
  $(".demoInput").val(a);
}

function subst() {
  var b = $(".demoInput").val();
  if (b.length > 0 && b >= 1) {
    b--;
    $(".demoInput").val(b);
  } else {
    $(".input-number-decrement").attr("disabled", "disabled");

  }
}

/*---------------------
Tabs
--------------------- */
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


/*---------------------
   Shuffle Activation
  --------------------- */
$(window).on('load', function (e) {

  if ($('body').find('.portfolio-shuffle').length !== 0) {
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var portFolioShuffle = new Shuffle(document.querySelector('.portfolio-shuffle'), {
      itemSelector: '.single-shuffle',
      sizer: '.Ssizer-element',
      buffer: 1,
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        portFolioShuffle.filter(input.value);
      }
    });

  }

});