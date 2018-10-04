(function() {
    $(document).ready(function() {

        $('.tabItem__mapSelect--onclick').each(function(index) {
            $(this).on('click', function(event) {

                switch (index) {
                    case 0:
                        {
                            $(this).addClass('anmBorder');
                            $(this).siblings().removeClass('anmBorder anmChange--2 anmChange--3 anmChange--4');
                            break;
                        }
                    case 1:
                        {
                            $(this).addClass('anmBorder anmChange--2');
                            $(this).siblings().removeClass('anmBorder anmChange--3 anmChange--4');
                            break;
                        }
                    case 2:
                        {
                            $(this).addClass('anmBorder anmChange--3');
                            $(this).siblings().removeClass('anmBorder anmChange--2 anmChange--4');
                            break;
                        }
                    case 3:
                        {
                            $(this).addClass('anmBorder anmChange--4');
                            $(this).siblings().removeClass('anmBorder anmChange--2 anmChange--3');
                            break;
                        }
                }

            });
        });
        var transformArrowY = 0;
        var forMinus = -176;
        var forPlus = 0;


        $('.tabItem__mapSelect--leftArrow').on('click', function() {

            if (transformArrowY >= forPlus) return;
            transformArrowY += 59;
            $('.tabItem__mapSelect--onclick').css('transform', `translateY(${transformArrowY}px)`);

            console.log(transformArrowY);

        });

        $('.tabItem__mapSelect--rightArrow').on('click', function() {

            if (transformArrowY < forMinus) return;
            transformArrowY -= 59;
            $('.tabItem__mapSelect--onclick').css('transform', `translateY(${transformArrowY}px)`);
            console.log(transformArrowY);

        });

    });
})();