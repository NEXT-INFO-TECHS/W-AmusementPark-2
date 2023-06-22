(function ($) {
"use strict";

// preloader
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	wowAnimation();
});


// WOW active
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}

// isotope
$('.page-active').imagesLoaded(function () {
    var $grid = $('.page-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
			columnWidth: '.grid-sizer'
        }
    })
});


})(jQuery);