
// jqery owl carousel slider
$(document).ready(function(){
    $('#slider').owlCarousel({
        loop: true,
        dots: false,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 2
            },
            1170: {
                items: 3
            },
        }
    });
    $('#slider-l').click(function(){
        $('#slider').trigger('prev.owl.carousel');
    });
    $('#slider-r').click(function(){
        $('#slider').trigger('next.owl.carousel');
    });

});
