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
    var dataProgress = ($(".circle-color").data('progress')),
    dataSpeed = ($(".circle-color").data('speed') + 's');
    $container.find("circle.circle-color")
    .css({'stroke-dashoffset': svgStrokeLength, 'transition': dataSpeed})
    container(dataProgress, 2000);
  };
  run();
})(jQuery);
