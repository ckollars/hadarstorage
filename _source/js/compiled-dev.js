"use strict";
/*jslint browser:true*/
/*global $, jQuery*/


(function ($) {

  var smoothScroll = {

    init: function () {
      $('.btn--jump').on("click", this, function (event) {
        event.preventDefault();
        smoothScroll.scroll($(this).attr("href"));
      });
    },

    scroll: function (target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 30
      }, 'slow');
    }

  };

  var kit = {

    init: function () {

      // Attach fastclick
      // NOTE: jsLint error cause it's not around before concat
      FastClick.attach(document.body);

      // Initialize smooth scrolling for
      // 'jump to directions' button
      smoothScroll.init();
    }

  };

  $(document).ready(function () {

    // Toggle Ingredient List
    $('.ingredients .btn--close, .filter-ingredients').click(function () {
      $('.ingredients').toggle();
    });


    $('.ingredients a').click(function (event) {
      event.preventDefault();
      $(this).toggleClass('checked');
      $(this).siblings('input').trigger('click');
    });

    $('.about').on('click', '.btn', function () {
      $('.about').toggle();
    });

    $('.btn--mobile-nav').on('click', function () {
      $(this).next().toggleClass('show-mobile');
    });

    kit.init();

  });
}(jQuery, $));
;"use strict";
/*jslint browser:true*/
/*global $, jQuery*/


(function ($) {

  var smoothScroll = {

    init: function () {
      $('.btn--jump').on("click", this, function (event) {
        event.preventDefault();
        smoothScroll.scroll($(this).attr("href"));
      });
    },

    scroll: function (target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 30
      }, 'slow');
    }

  };

  var kit = {

    init: function () {

      // Attach fastclick
      // NOTE: jsLint error cause it's not around before concat
      FastClick.attach(document.body);

      // Initialize smooth scrolling for
      // 'jump to directions' button
      smoothScroll.init();
    }

  };

  $(document).ready(function () {

    // Toggle Ingredient List
    $('.ingredients .btn--close, .filter-ingredients').click(function () {
      $('.ingredients').toggle();
    });


    $('.ingredients a').click(function (event) {
      event.preventDefault();
      $(this).toggleClass('checked');
      $(this).siblings('input').trigger('click');
    });

    $('.about').on('click', '.btn', function () {
      $('.about').toggle();
    });

    $('.btn--mobile-nav').on('click', function () {
      $(this).next().toggleClass('show-mobile');
    });

    kit.init();

  });
}(jQuery, $));
;"use strict";
/*jslint browser:true*/
/*global $, jQuery*/


(function ($) {

  var smoothScroll = {

    init: function () {
      $('.btn--jump').on("click", this, function (event) {
        event.preventDefault();
        smoothScroll.scroll($(this).attr("href"));
      });
    },

    scroll: function (target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 30
      }, 'slow');
    }

  };

  var kit = {

    init: function () {

      // Attach fastclick
      // NOTE: jsLint error cause it's not around before concat
      FastClick.attach(document.body);

      // Initialize smooth scrolling for
      // 'jump to directions' button
      smoothScroll.init();
    }

  };

  $(document).ready(function () {

    // Toggle Ingredient List
    $('.ingredients .btn--close, .filter-ingredients').click(function () {
      $('.ingredients').toggle();
    });


    $('.ingredients a').click(function (event) {
      event.preventDefault();
      $(this).toggleClass('checked');
      $(this).siblings('input').trigger('click');
    });

    $('.about').on('click', '.btn', function () {
      $('.about').toggle();
    });

    $('.btn--mobile-nav').on('click', function () {
      $(this).next().toggleClass('show-mobile');
    });

    kit.init();

  });
}(jQuery, $));
;"use strict";
/*jslint browser:true*/
/*global $, jQuery*/


(function ($) {

  var smoothScroll = {

    init: function () {
      $('.btn--jump').on("click", this, function (event) {
        event.preventDefault();
        smoothScroll.scroll($(this).attr("href"));
      });
    },

    scroll: function (target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 30
      }, 'slow');
    }

  };

  var kit = {

    init: function () {

      // Attach fastclick
      // NOTE: jsLint error cause it's not around before concat
      FastClick.attach(document.body);

      // Initialize smooth scrolling for
      // 'jump to directions' button
      smoothScroll.init();
    }

  };

  $(document).ready(function () {

    // Toggle Ingredient List
    $('.ingredients .btn--close, .filter-ingredients').click(function () {
      $('.ingredients').toggle();
    });


    $('.ingredients a').click(function (event) {
      event.preventDefault();
      $(this).toggleClass('checked');
      $(this).siblings('input').trigger('click');
    });

    $('.about').on('click', '.btn', function () {
      $('.about').toggle();
    });

    $('.btn--mobile-nav').on('click', function () {
      $(this).next().toggleClass('show-mobile');
    });

    kit.init();

  });
}(jQuery, $));
;"use strict";
/*jslint browser:true*/
/*global $, jQuery*/


(function ($) {

  var smoothScroll = {

    init: function () {
      $('.btn--jump').on("click", this, function (event) {
        event.preventDefault();
        smoothScroll.scroll($(this).attr("href"));
      });
    },

    scroll: function (target) {
      $('html, body').animate({
        scrollTop: $(target).offset().top - 30
      }, 'slow');
    }

  };

  var kit = {

    init: function () {

      // Attach fastclick
      // NOTE: jsLint error cause it's not around before concat
      FastClick.attach(document.body);

      // Initialize smooth scrolling for
      // 'jump to directions' button
      smoothScroll.init();
    }

  };

  $(document).ready(function () {

    // Toggle Ingredient List
    $('.ingredients .btn--close, .filter-ingredients').click(function () {
      $('.ingredients').toggle();
    });


    $('.ingredients a').click(function (event) {
      event.preventDefault();
      $(this).toggleClass('checked');
      $(this).siblings('input').trigger('click');
    });

    $('.about').on('click', '.btn', function () {
      $('.about').toggle();
    });

    $('.btn--mobile-nav').on('click', function () {
      $(this).next().toggleClass('show-mobile');
    });

    kit.init();

  });
}(jQuery, $));
