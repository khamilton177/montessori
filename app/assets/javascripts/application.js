// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require tether
//= require bootstrap.min
//= require_tree .

// $(window).on('load',  function() {
//   new JCaption('img.caption');
// });
//
// window.addEvent('domready', function() {
//   TextScroller(Array(164, 1, 20, 1200, 1500, 1));
// });

var revapi5;

$(document).ready(function() {
    // $(".zo2-sticky").sticky({topSpacing:0});

    wow = new WOW({
          boxClass:     'wow',
          animateClass: 'animated',
          offset:       100
        });
        wow.init();

      $('.faq_block .panel-heading').eq(0).addClass('active');
      $('.faq_block .panel-heading').click(function(){
          if($(this).hasClass('active')){
              $(this).removeClass('active');
          }
          else{
              $('.faq_block .panel-heading').removeClass('active');
              $(this).toggleClass('active');
          }
      });

  // zo2.settings.token = "87a6de99a0d360eb6580d325532b308a";
  $("#gototop").click(function(){$("body, html").animate({scrollTop: 0});
    return false;
  });

  if ($.fn.cssOriginal != undefined)
      $.fn.css = $.fn.cssOriginal;

  if ($('#rev_slider_5_89').revolution == undefined) {

  } else {
      revapi5 = $('#rev_slider_5_89').show().revolution(
        {
          delay:9000,
          startwidth:1170,
          startheight:640,
          hideThumbs:200,

          thumbWidth:100,
          thumbHeight:50,
          thumbAmount:3,

          navigationType: "none",
          navigationArrows: "solo",
          navigationStyle: "round",

          touchenabled: "on",
          onHoverStop: "on",

          navigationHAlign: "center",
          navigationVAlign: "bottom",
          navigationHOffset:0,
          navigationVOffset:20,

          soloArrowLeftHalign: "left",
          soloArrowLeftValign: "center",
          soloArrowLeftHOffset:20,
          soloArrowLeftVOffset:0,

          soloArrowRightHalign: "right",
          soloArrowRightValign: "center",
          soloArrowRightHOffset:20,
          soloArrowRightVOffset:0,

          shadow:0,
          fullScreen: "off",
          fullWidth: "on",

          stopLoop: "on",
          stopAfterLoops:0,
          stopAtSlide:2,


          shuffle: "off",

          hideSliderAtLimit:0,
          hideCaptionAtLimit:0,
          hideAllCaptionAtLilmit:0,
          startWithSlide:0
        }
      );
  }

  jQuery('#zt-tabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
  });
});
