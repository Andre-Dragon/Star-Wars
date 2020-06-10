$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        smartSpeed: 1200,
        navClass: ["slider__nav--left", "slider__nav--right"],
        autoWidth:true,
        responsiveClass:true,
        responsive:{
            320:{
                nav:false
            },
            960:{
                dots:false,
                nav:true
            }
        }
    });
});