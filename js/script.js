$(document).ready(function() {
    // Configuración de Slick Carousel
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.multiple-items').css({
        'width': '80%',
        'position': 'relative',
        'left': '10%',
        'top': '-90px',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
    });

    $('.multiple-items a').css({
        'margin-left': '60px',
        'margin-right': '0px'
    });
});


