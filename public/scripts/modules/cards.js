$(function($) {
  $("#card").flip({
  	trigger: 'manual'
	}); 
  
  'use strict';

    var $mainButton = $(".main-button"),
    	$flipButton = $(".flip-button"),
        $closeButton = $(".close-button"),
        $buttonWrapper = $(".button-wrapper"),
        $ripple = $(".ripple"),
        $layer = $(".layered-content");

    $mainButton.on("click", function(){
        $ripple.addClass("rippling");
        $buttonWrapper.addClass("clicked").delay(1500).queue(function(){
            $layer.addClass("active");
        });
    });

    $closeButton.on("click", function(){
        $buttonWrapper.removeClass("clicked");
        $ripple.removeClass("rippling");
        $layer.removeClass("active");
    });
    $flipButton.on("click", function(){
    	console.log("toggle");
        $("#card").flip('toggle');
    });
   /* 
    $(".back").on("click", function(){
    	console.log("toggle");
        $("#card").flip('toggle');
    });
    */
});