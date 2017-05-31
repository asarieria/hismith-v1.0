$(document).ready(function(){

function toggleMenu() {
	var $nav = $(".main-nav"),
			$toggle = $(".toggle-mnu");
	$toggle.click(function() {
		$(this).toggleClass("on");
		$nav.slideToggle().css('display', 'flex');
	});
	$(window).resize(function () {
		if ( $(window).width() > 1024){
			$nav.removeAttr('style');
		}
	});
}
toggleMenu();
// ========================= ONEPAGE SCROLL START
$(".section-wrap").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 700,
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: false,                  // You can activate the keyboard controls
   responsiveFallback: 768,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

// Move section with down arrow button
function moveSection(sClass, sMove, sId){
   $(sClass).on('click', function () {
    $(sMove).moveTo(sId);
  });
}
moveSection('section.header .btn-down', 'section.about-us', '2');
moveSection('section.about-us .btn-down', 'section.exc-design', '3');
moveSection('section.exc-design .btn-down', 'section.deluxe', '4');
moveSection('section.deluxe .btn-down', 'section.footer', '5');
moveSection('section.footer .footer-up', 'section.header', '1');
// End move section with down arrow button

// ============================ END ONEPAGE SCROLL //


function carouselSlick(status, element, arrow, right){
    var status = $(status);
    var slickElement = $(element);
    var arrow = $(arrow);
    slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      status.text(i + ' / ' + slick.slideCount);
    });
    arrow.on("click", function(){
      if($(this).hasClass(right)){
        slickElement.slick("slickNext");
      } else slickElement.slick("slickPrev");
    });
    slickElement.slick({
        autoplay: false,
        dots: false,
        arrows: false,
        draggable: false
    });
}
carouselSlick('.stats__wrapper .pagingInfo', '.about-carousel','.stats__nav .arrow', 'stats__nav-right');
carouselSlick('.design__nav .pagingInfo', '.design-carousel','.design__nav .arrow', 'design__nav-right');
carouselSlick('.comment__nav .pagingInfo', '.deluxe-carousel','.comment__nav .arrow', '.comment__nav-right');


}); 
