(function() {
    $(document).ready(function() {

        var currentHeight1;
        var currentHeight2;
        var currentHeight3;
        var currentHeight4;
        var currentHeight5;
        var currentHeight6;
        var currentHeight7;

        $('.officeTabs__tabBlock').css('transform', 'translate(-85vw)').css('height', currentHeight1 + 'px');

        $('.menuAdaptive__humb').on('click', function() {

            $('.menuAdaptive__close').toggleClass('humb--animations');
            $('body').toggleClass('bodyToggle');
            $('section').toggleClass('sectionToggle');
            $('.menuAdaptive__ul').toggleClass('ulToggle');
            $('.breadcrumbs__item').toggleClass('breadcrumbsToggle');
            $(this).toggleClass('line--width');
        });



        $('.menuAdaptive__li').each(function(index) {


            $('.officeTabs__tabItem').each(function(index) {
                switch (index) {

                    case 0:
                        {
                            currentHeight1 = $(this).parent().find('.officeTabs__tabItem--1').height();
                        }
                    case 1:
                        {
                            currentHeight2 = $(this).parent().find('.officeTabs__tabItem--2').height();
                        }
                    case 3:
                        {
                            currentHeight3 = $(this).parent().find('.officeTabs__tabItem--3').height();
                        }
                    case 4:
                        {
                            currentHeight4 = $(this).parent().find('.officeTabs__tabItem--4').height();
                        }
                    case 5:
                        {
                            currentHeight5 = $(this).parent().find('.officeTabs__tabItem--5').height();
                        }
                    case 6:
                        {
                            currentHeight6 = $(this).parent().find('.officeTabs__tabItem--6').height();
                        }
                    case 7:
                        {
                            currentHeight7 = $(this).parent().find('.officeTabs__tabItem--7').height();
                            break;
                        }
                }
            });
            $(this).on('click', function() {
                console.log(currentHeight1);
                console.log(index);
                switch (index) {
                    case 0:
                        {
                            $('.officeTabs__tabBlock').css('transform', 'translateX(15vw)').css('height', currentHeight1 + 'px');
                            break;
                        };
                    case 1:
                        {
                            $('.officeTabs__tabBlock').css('transform', 'translate(-85vw)').css('height', currentHeight2 + 'px');
                            break;
                        };
                    case 2:
                        {
                            $('.officeTabs__tabBlock').css('transform', 'translate(-185vw)').css('height', currentHeight3 + 'px');
                            break;
                        };
                    case 3:
                        {
                            $('.officeTabs__tabBlock').css('transform', 'translate(-285vw)').css('height', currentHeight4 + 'px');
                            break;
                        };
                    case 4:
                        {
                            $('.officeTabs__tabBlock').css('transform', 'translate(-385vw)').css('height', currentHeight5 + 'px');
                            break;
                        };
                    case 5:
                        {
                            $('.officeTabs__tabBlock').css('transform', 'translate(-485vw)').css('height', currentHeight6 + 'px');
                            break;
                        };
                    case 6:
                        {
                            $('.officeTabs__tabBlock').css('transform', 'translate(-585vw)').css('height', currentHeight7 + 'px');
                            break;
                        };
                }


                $('.menuAdaptive__close').removeClass('humb--animations');
                $('body').removeClass('bodyToggle');
                $('section').removeClass('sectionToggle');
                $('.menuAdaptive__ul').removeClass('ulToggle');
                $('.breadcrumbs__item').removeClass('breadcrumbsToggle');
                $('.menuAdaptive__humb').removeClass('line--width');


            });
        });

    });
})();