(function ($) {
"use strict";
$(document).ready(function($){
	/*----- Mobile Menu -----*/
	$('.mobile-menu nav').meanmenu({
		meanScreenWidth: "990",
		meanMenuContainer: ".mobile-menu",
	});
	
		/*----- main slider -----*/	
	$('#mainSlider').nivoSlider({
		directionNav: false,
		animSpeed: 500,
		slices: 18,
		pauseTime: 1111115000,
		pauseOnHover: false,
		controlNav: true,
		prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
		nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
	});
	
	/*Owl Carousel for Weekly Featured Products*/
	$(".feature-pro-slider, .related-pro-slider").owlCarousel({
		loop: true,
		nav: true,
		margin: 30,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{items:1,},
			480:{items:2,},
			750:{items:3,},
			950:{items:4,},
			1170:{items:4,},
		}
	});
	/*Owl Carousel for Weekly Featured Products*/
	$(".tab-pro-slider").owlCarousel({
		loop: true,
		nav: true,
		margin: 30,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{items:1,},
			480:{items:2,},
			750:{items:3,},
			950:{items:4,},
			1170:{items:4,},
		}
	});
	/*Owl Carousel for Weekly Featured Products*/
	$(".tab-pro-slider-2").owlCarousel({
		loop: true,
		nav: true,
		margin: 30,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{items:1,},
			480:{items:2,},
			750:{items:3,},
		}
	});
	$(".trendy-product-slider").owlCarousel({
		loop: true,
		nav: false,
		margin: 20,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{items:2,},
			480:{items:2,},
			750:{items:4,},
			950:{items:2,},
			1170:{items:2,},
		}
	});	
	/*Owl Carousel for blog*/
	$(".blog-slider").owlCarousel({
		loop: true,
		nav: true,
		margin: 30,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{items:1,},
			750:{items:2,},
			1170:{items:3,},
		}
	});
	
	$('.funfact').appear(function() {
		$('.timer').countTo({
			speed: 3000
		});
	});
	/*Owl Carousel for Testimonial*/
	$(".testimonial-slider").owlCarousel({
		items:1,
		loop: true,
		nav: true,
		margin: 30,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});
	/*Owl Carousel for Brand*/
	$(".brand-slider").owlCarousel({
		loop: true,
		nav: false,
		margin: 30,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{items:2,},
			750:{items:4,},
			950:{items:5,},
		}
	});
	/*----- Scroll Up -----*/
	$.scrollUp({
		scrollText: '<i class="fa fa-chevron-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});

	$('#portfolio').mixItUp();
	
	/*-- Work PopUp --*/
	$('.port-wrap .hover').magnificPopup({
		type:'image',
		gallery: {
		  enabled: true
		},
		mainClass: 'mfp-with-zoom',
	});
	
	/*----- Cart Plus Minus Button -----*/	
	$(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
	$(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		  }
		  }
		$button.parent().find("input").val(newVal);
	});	
	
	/*----- Check Out Accordion -----*/
	$(".panel-heading a").on("click", function(){
		$(".panel-heading a").removeClass("active");
		$(this).addClass("active");
	});
	/*----- Simple Lens -----*/	
	$('.simpleLens-lens-image').simpleLens({
		loading_image: 'img/loading.gif'
	});
	
	/*----- Price Slider -----*/	
	$( "#slider-range" ).slider({
	   range: true,
	   min: 0,
	   max: 800,
	   values: [ 50, 550 ],
	   slide: function( event, ui ) {
		$( "#price-amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	$( "#price-amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
	$('.newslater-container .close').on("click", function(){
		$('#popup-newslater').addClass('hidden');
	});
	
});
	
})(jQuery);



var stripeResponseHandler = function(status, response) {
    // Grab the form:
    var form = document.getElementById('payment-form');

    if (response.error) { // Problem!
        // Show the errors on the form:
    } else { // Token was created!
        // Get the token ID:
        var token = response.id;

        // Insert the token ID into the form so it gets submitted to the server
        var form = document.getElementById('payment-form');
        var hiddenInput = document.createElement('input');
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', 'stripeToken');
        hiddenInput.setAttribute('value', token);
        form.appendChild(hiddenInput);

        // Submit the form
        form.submit();
    }
};

// Create a token when the form is submitted
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    Stripe.card.createToken(form, stripeResponseHandler);
});


function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);

    // Submit the form
    form.submit();
}

function createToken() {
    stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // Send the token to your server
            stripeTokenHandler(result.token);
        }
    });
};

// Create a token when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    createToken();
});


card.addEventListener('change', function(event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});