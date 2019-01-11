'use strict';

$(function() {

    var slide = 220;
    var speed = 2500;
    var wait = 1000;
    var currSlide = 1;
    var $slider = $('#slider');
    var $slideCont = $('#slides');
    var $slides = $slideCont.find('.slide');

  setInterval(function() {
    $slideCont.animate({'margin-left':'-='+slide}, speed, function() {
        currSlide++;
        if (currSlide === 4) {
           currSlide = 1;
           $slideCont.css('margin-left', 0);
        }
    });
  }, wait);
});
