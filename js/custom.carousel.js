//index page caraousel
/*
var cartoonSlider = function(){  
    let width = screen.width;
    if(width>1500){
        var owl = $('.owl-carousel-rtl');
        owl.owlCarousel({
            items:6,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:true
        });
        var owl = $('.owl-carousel-ltr');
        owl.owlCarousel({
            items:6,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:false
        });
    }else if(width<1500 && width>1000){
        var owl = $('.owl-carousel-rtl');
        owl.owlCarousel({
            items:4,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:true
        });
        var owl = $('.owl-carousel-ltr');
        owl.owlCarousel({
            items:4,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:false
        });
    }else if(width<1000 && width>500){
        var owl = $('.owl-carousel-rtl');
        owl.owlCarousel({
            items:3,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:true
        });
        var owl = $('.owl-carousel-ltr');
        owl.owlCarousel({
            items:3,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:false
        });
    }
    else{
        var owl = $('.owl-carousel-rtl');
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:true
        });
        var owl = $('.owl-carousel-ltr');
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:false,
            rtl:false
        });
    }
}
cartoonSlider();
window.addEventListener('resize', function(event) {
    cartoonSlider();
}, true);
*/
// gallery click function
$( "#walker-ltr" ).click(function() {
    location.href = "galeri-ingilizce.html";
});
$( "#walker-rtl" ).click(function() {
    location.href = "galeri-turkce.html";
});
$('.carousel').carousel({
    interval: 2000
  })