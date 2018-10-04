(function() {
    $(document).ready(function() {

        $('.tabItem__bonus--onclick').each(function(index) {
            $(this).on('click', function(event) {

                switch (index) {
                    case 0:
                        {
                            $(this).addClass('anmBorder');
                            $(this).siblings().removeClass('anmBorder');
                            $('.tabItem__promo').css('transform', 'translate(1vw, 3vh) scale(0)');
                            break;
                        }
                    case 1:
                        {
                            $(this).addClass('anmBorder');
                            $(this).siblings().removeClass('anmBorder');
                            $('.tabItem__promo').css('transform', 'translate(1vw, 3vh) scale(1)');
                            break;
                        }

                }

            });
        });



        var $dataOne = $('#bonusBlock-dataOne');
        var dataOne = +$dataOne.attr('data-value-one').split('')[0];

        switch (dataOne) {
            case 0:
                {
                    $('#circleAnimationOne').removeClass().addClass('circle__green--anim');
                    $('#bonusBlock__cupOne').removeClass('bonusBlock__cup--color--1 bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6');
                    break;
                }
            case 1:
                {
                    $('#circleAnimationOne').removeClass().addClass('circle__green--anim--1');
                    $('#bonusBlock__cupOne').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--1');
                    break;
                }
            case 2:
                {
                    $('#circleAnimationOne').removeClass().addClass('circle__green--anim--2');
                    $('#bonusBlock__cupOne').removeClass(' bonusBlock__cup--color--1 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--2');
                    break;
                }
            case 3:
                {
                    $('#circleAnimationOne').removeClass().addClass('circle__green--anim--3');
                    $('#bonusBlock__cupOne').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--1 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--3');
                    break;
                }
            case 4:
                {
                    $('#circleAnimationOne').removeClass().addClass('circle__green--anim--4');
                    $('#bonusBlock__cupOne').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--1 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--4');
                    break;
                }
            case 5:
                {
                    $('#circleAnimationOne').removeClass().addClass('circle__green--anim--5');
                    $('#bonusBlock__cupOne').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--1 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--5');
                    break;
                }
            case 6:
                {
                    $('#circleAnimationOne').removeClass().addClass('circle__green--anim--6');
                    $('#bonusBlock__cupOne').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--1').addClass('bonusBlock__cup--color--6');
                    break;
                }
        }

        var $dataTwo = $('#bonusBlock-dataTwo');
        var dataTwo = +$dataTwo.attr('data-value-two').split('')[0];

        switch (dataTwo) {
            case 0:
                {
                    $('#circleAnimationTwo').removeClass().addClass('circle__green--anim');
                    $('#bonusBlock__cupTwo').removeClass('bonusBlock__cup--color--1 bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6');
                    break;
                }
            case 1:
                {
                    $('#circleAnimationTwo').removeClass().addClass('circle__green--anim--1');
                    $('#bonusBlock__cupTwo').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--1');
                    break;
                }
            case 2:
                {
                    $('#circleAnimationTwo').removeClass().addClass('circle__green--anim--2');
                    $('#bonusBlock__cupTwo').removeClass(' bonusBlock__cup--color--1 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--2');
                    break;
                }
            case 3:
                {
                    $('#circleAnimationTwo').removeClass().addClass('circle__green--anim--3');
                    $('#bonusBlock__cupTwo').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--1 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--3');
                    break;
                }
            case 4:
                {
                    $('#circleAnimationTwo').removeClass().addClass('circle__green--anim--4');
                    $('#bonusBlock__cupTwo').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--1 bonusBlock__cup--color--5 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--4');
                    break;
                }
            case 5:
                {
                    $('#circleAnimationTwo').removeClass().addClass('circle__green--anim--5');
                    $('#bonusBlock__cupTwo').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--1 bonusBlock__cup--color--6').addClass('bonusBlock__cup--color--5');
                    break;
                }
            case 6:
                {
                    $('#circleAnimationTwo').removeClass().addClass('circle__green--anim--6');
                    $('#bonusBlock__cupTwo').removeClass(' bonusBlock__cup--color--2 bonusBlock__cup--color--3 bonusBlock__cup--color--4 bonusBlock__cup--color--5 bonusBlock__cup--color--1').addClass('bonusBlock__cup--color--6');
                    break;
                }
        }


    });
})();