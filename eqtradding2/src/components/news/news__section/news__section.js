(function() {

    $(document).ready(function() {

        $('.paginations__item').on('click', function() {
            $(this).addClass('paginations__activeBlock').siblings().removeClass('paginations__activeBlock');
        });


        $('.texnology__button').on('click', function() {
            $(this).toggleClass('texnology--active-bg');
        });
    });
})();