(function() {
    $(document).ready(function() {





        $('.tab__text').on('click', function() {
            $(this).addClass('tab__text--active-js').siblings().removeClass('tab__text--active-js');
        });


        $('.aboveTab').children('.tab1').on('click', function() {
            $('.europeContent').removeClass('disable--tab').addClass('active--tab');
            $('.europeContent--brocker').removeClass('active--tab').addClass('disable--tab');
            $('.price--tab-1').removeClass('price--disable--tab').addClass('price--active--tab');
            $('.price--tab-2').removeClass('price--active--tab').addClass('price--disable--tab');
            $('.europeContent__button').removeClass('button--disable--tab').addClass('button--active--tab');
            $('.europeContent__button--broker').removeClass('button--active--tab').addClass('button--disable--tab');
        });


        $('.aboveTab').children('.tab2').on('click', function() {
            $('.europeContent').removeClass('active--tab').addClass('disable--tab');
            $('.europeContent--brocker').removeClass('disable--tab').addClass('active--tab');
            $('.price--tab-1').removeClass('price--active--tab').addClass('price--disable--tab');
            $('.price--tab-2').removeClass('price--disable--tab').addClass('price--active--tab');
            $('.europeContent__button').removeClass('button--active--tab').addClass('button--disable--tab');
            $('.europeContent__button--broker').removeClass('button--disable--tab').addClass('button--active--tab');
        });


        $('.priceRange').on('click', function() {
            $('.priceRange__text').toggleClass('priceRange__text--active-js');
            $('.priceRange--bg').toggleClass('priceRange--active-js');
            $('.price__list').slideToggle('slow');
        });


        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: false,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            },
        });


        $('.svg--2').on('click', function() {
            $(this).closest(".svg__pos").find('.svg--1').toggleClass('svg--visible');
        });


    });
})();