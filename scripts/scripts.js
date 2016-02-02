$(document).ready(function() {
	 var s = skrollr.init();

	$(this).scrollTop(0);

	$(window).resize(function() {
		if($(".circle-expanded").parent().parent().is(".1")) {
			$("html, body").animate({ scrollTop: $("#container-1").offset().top }, 0);
		}
		if($(".circle-expanded").parent().parent().is(".2")) {
			$("html, body").animate({ scrollTop: $("#container-2").offset().top }, 0);
		}
		else if($(".circle-expanded").parent().parent().is(".3")) {
			$("html, body").animate({ scrollTop: $("#container-3").offset().top }, 0);
		}
		else if($(".circle-expanded").parent().parent().is(".4")) {
			$("html, body").animate({ scrollTop: $("#container-4").offset().top }, 0);
		}
	})

	  $(".1").click(function () {
	  	$("html, body").stop();
	  	$("html, body").animate({
	  		scrollTop: $("#container-1").offset().top
	  	}, 1000);
	  	$(".1 a div").addClass("circle-expanded");
	  	$(".1 a div").removeClass("circle");
	  	$(".2 a div").addClass("circle");
	  	$(".2 a div").removeClass("circle-expanded");
	  	$(".3 a div").addClass("circle");
	  	$(".3 a div").removeClass("circle-expanded");
	  	$(".4 a div").addClass("circle");
	  	$(".4 a div").removeClass("circle-expanded");
	  });

	  $(".2").click(function () {
	  	$("html, body").stop();
	  	$("html, body").animate({
	  		scrollTop: $("#container-2").offset().top
	  	}, 1000);
	  	$(".2 a div").addClass("circle-expanded");
	  	$(".2 a div").removeClass("circle");
	  	$(".1 a div").addClass("circle");
	  	$(".1 a div").removeClass("circle-expanded");
	  	$(".3 a div").addClass("circle");
	  	$(".3 a div").removeClass("circle-expanded");
	  	$(".4 a div").addClass("circle");
	  	$(".4 a div").removeClass("circle-expanded");
	  });

	  $(".3").click(function () {
	  	$("html, body").stop();
	  	$("html, body").animate({
	  		scrollTop: $("#container-3").offset().top
	  	}, 1000);
	  	$(".3 a div").addClass("circle-expanded");
	  	$(".3 a div").removeClass("circle");
	  	$(".1 a div").addClass("circle");
	  	$(".1 a div").removeClass("circle-expanded");
	  	$(".2 a div").addClass("circle");
	  	$(".2 a div").removeClass("circle-expanded");
	  	$(".4 a div").addClass("circle");
	  	$(".4 a div").removeClass("circle-expanded");
	  });

	  $(".4").click(function () {
	  	$("html, body").stop();
	  	$("html, body").animate({
	  		scrollTop: $("#container-4").offset().top
	  	}, 1000);
	  	$(".4 a div").addClass("circle-expanded");
	  	$(".4 a div").removeClass("circle");
	  	$(".1 a div").addClass("circle");
	  	$(".1 a div").removeClass("circle-expanded");
	  	$(".2 a div").addClass("circle");
	  	$(".2 a div").removeClass("circle-expanded");
	  	$(".3 a div").addClass("circle");
	  	$(".3 a div").removeClass("circle-expanded");
	  });

	  $(window).on('mousewheel DOMMouseScroll touchmove', function(event) {
	    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	        if($(".circle-expanded").parent().parent().is(".2") && $("body").is(":animated") == false)
	        {
	        	$(".1").find("div").addClass("circle-expanded");
	        	$(".1").find("div").removeClass("circle");
	        	$(".2").find("div").addClass("circle");
	        	$(".2").find("div").removeClass("circle-expanded");
	        	$("html, body").animate({ scrollTop: $("#container-1").offset().top }, 1000);

	        }
	        else if($(".circle-expanded").parent().parent().is(".3") && $("body").is(":animated") == false)
	        {
	        	$(".2").find("div").addClass("circle-expanded");
	        	$(".2").find("div").removeClass("circle");
	        	$(".3").find("div").addClass("circle");
	        	$(".3").find("div").removeClass("circle-expanded");
	        	$("html, body").animate({ scrollTop: $("#container-2").offset().top }, 1000);
	        }
	        else if($(".circle-expanded").parent().parent().is(".4") && $("body").is(":animated") == false)
	        {
	        	$(".3").find("div").addClass("circle-expanded");
	        	$(".3").find("div").removeClass("circle");
	        	$(".4").find("div").addClass("circle");
	        	$(".4").find("div").removeClass("circle-expanded");
	        	$("html, body").animate({ scrollTop: $("#container-3").offset().top }, 1000);
	        }
	    }
	    else {
	        if($(".circle-expanded").parent().parent().is(".1") && $("body").is(":animated") == false)
	        {
	        	$(".2").find("div").addClass("circle-expanded");
	        	$(".2").find("div").removeClass("circle");
	        	$(".1").find("div").addClass("circle");
	        	$(".1").find("div").removeClass("circle-expanded");
	        	$("html, body").animate({ scrollTop: $("#container-2").offset().top }, 1000);

	        }
	        else if($(".circle-expanded").parent().parent().is(".2") && $("body").is(":animated") == false)
	        {
	        	$(".3").find("div").addClass("circle-expanded");
	        	$(".3").find("div").removeClass("circle");
	        	$(".2").find("div").addClass("circle");
	        	$(".2").find("div").removeClass("circle-expanded");
	        	$("html, body").animate({ scrollTop: $("#container-3").offset().top }, 1000);
	        }
	        else if($(".circle-expanded").parent().parent().is(".3") && $("body").is(":animated") == false)
	        {
	        	$(".4").find("div").addClass("circle-expanded");
	        	$(".4").find("div").removeClass("circle");
	        	$(".3").find("div").addClass("circle");
	        	$(".3").find("div").removeClass("circle-expanded");
	        	$("html, body").animate({ scrollTop: $("#container-4").offset().top }, 1000);
	        }
	    }
	});


 // marquee starts here
 var string1 = "a software engineer";
 var string2 = "an innovator";
 var string3 = "a dreamer";
 var string4 = "an explorer";

 var tempString = "";

	var broadcast = function(text, delay) {
	 	window.setTimeout(function() { $('.marquee').text(text); }, delay);
	 }

	var textDecrement = function(text) {
		tempString = text;
		for(var i = text.length-1; i > 0; i--) {
	 		tempString = text.substring(0, i-1);
			broadcast(tempString, (text.length*125)-(125*i));
	 	}
	}

	var textIncrement = function(text) {
		for(var i = 0; i < text.length; i++) {
	 		tempString += text.charAt(i);
			broadcast(tempString, 125*i);
	 	}
	}

	var runLoop = function(text) {
		textIncrement(text);
		window.setTimeout(function() { textDecrement(text); }, text.length*125+3000);
	}

	var loopMain = function() {
		window.setTimeout(function() {  runLoop(string1); }, 1000);
		window.setTimeout(function() {  runLoop(string2); }, string1.length*250+5000);
		window.setTimeout(function() {  runLoop(string3); }, string1.length*250+string2.length*250+9000);
		window.setTimeout(function() {  runLoop(string4); }, string1.length*250+string2.length*250+string3.length*250+13000);
		window.setTimeout(function() { loopMain(); }, string1.length*250+string2.length*250+string3.length*250+string4.length*250+16000)
	}

	loopMain();
 
 	var moveMobileNav = true
	$(".mobile-nav-main").click(function() {
		if(moveMobileNav) {
			$(".mobile-nav-follower").css("transform", "translateX(0px)")
			moveMobileNav = false
		}
		else {
			$(".mobile-nav-follower").css("transform", "translateX(200px)")
			moveMobileNav = true
		}
	});

});	  