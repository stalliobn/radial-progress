(function($) {
  'use strict';

  var $container = $(".container");
  var svgStrokeLength = 380;

  function container(percent) {
    var percent = svgStrokeLength - (svgStrokeLength * percent / 100)
    $container.find("circle.circle-color").animate({
      'stroke-dashoffset': percent
    });
  };

  function run() {
    var data = ($(".circle-color").data('progress'));
    $container.find("circle.circle-color")
    .css('stroke-dashoffset', svgStrokeLength)
    container(data, 2000);
  };
  run();
})(jQuery);
