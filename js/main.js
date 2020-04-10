
    AOS.init({
        easing:'slide',
        duration:1000
    });




$(document).ready(function(){

 $('.main-menu a[href*="#"]').on('click', function(){
     $('html,body').animate({
         scrollTop: $($(this).attr('href')).offset().top -100
     }, 2000);
 });

 $('.up').on('click', function() {
     $('html, body').animate({
         scrollTop: 0 
     }, 2000);
 });
    // first slider control
$('.slider-one').not('.slick-initialized').slick({
    autoplay: true,
    control:false,
    autoplaySpeed: 4000,
    dots: true,
    prevArrow: ".site-slider .slider-btn.prev",
    nextArrow: ".site-slider .slider-btn.next",
});

$('.testiSlide').slick({
    slidesToShow:3,
    infinite: true,
    slidesToScroll:1,
    controls:false,
    dots:true,
    autoplay:true,
    autoplaySpeed: 10000,
    responsive:[{
        breakpoint:850,
        settings: {
            slidesToShow:2,
            slidesToScroll:1,
            infinite:true,
            controls:false
        }

    },
    {
        breakpoint:620,
        settings:{
            slidesToShow:2,
            slidesToScroll:1,
            controls:false,
            autoplaySpeed:5000
        }
    },
    {
        breakpoint:480,
        settings:{
            slidesToScroll:1,
            slidesToShow:1,
            control:false
        }
    }
]
});
});
