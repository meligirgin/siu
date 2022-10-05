var owl = $('.owl-carousel-rtl');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    rtl:true
});
var owl = $('.owl-carousel-ltr');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    rtl:false
});
$( ".owl-carousel-rtl" ).click(function() {
    location.href = "gallery.html";
});
$( ".owl-carousel-ltr" ).click(function() {
    location.href = "gallery.html";
});