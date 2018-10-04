(function() {

    $(document).resize(function() {

    });

    $(document).ready(function() {

        var switchersTabLk = function(_this, index) {

            // var distance = 95 * index; // так не правильно задавать, лучше высчитывать ширину и работать с ней, иначе при адаптиве будет кака, придется переназначать переменную, ставить ресайз, ИМХО
            // var transform = 'translateX(-' + distance + 'vw)';
            var transform0 = 'translateX(-' + 15 + 'vw)';
            var transform1 = 'translateX(-' + 85 + 'vw)';
            var transform2 = 'translateX(-' + 185 + 'vw)';
            var transform3 = 'translateX(-' + 285 + 'vw)';
            var transform4 = 'translateX(-' + 385 + 'vw)';
            var transform5 = 'translateX(-' + 485 + 'vw)';
            var transform6 = 'translateX(-' + 585 + 'vw)';

            index = +(index);

            var doIt = function(img) {

                //li
                // $('.officeTabs__tabBlock').css('transform', transform);
                _this.addClass('officeTabs__li--select').siblings().removeClass('officeTabs__li--select');
                //bg
                $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                $('.officeTabs__bg').css('background', 'url("./img/bg/lk__' + img + '.png") no-repeat');
                /* Если всем изображениям дать имя lk__1,2,3 и т.д., то строка выше превратится в */
                //$('.officeTabs__bg').css('background', 'url("../img/bg/lk__'+ (index + 1) +'.png") no-repeat');
                /* и код ниже, точне все if else можно удалить */

            }

            /* и написать .... */

            doIt();

            if (index === 0) {
                doIt('privateData');
                $('.officeTabs__tabBlock').css('transform', transform0);
            } else if (index === 1) {
                $('.officeTabs__tabBlock').css('transform', transform1);
                doIt('reserve');
            } else if (index === 2) {
                $('.officeTabs__tabBlock').css('transform', transform2);
                doIt('bron');
            } else if (index === 3) {
                $('.officeTabs__tabBlock').css('transform', transform3);
                doIt('service');
            } else if (index === 4) {
                $('.officeTabs__tabBlock').css('transform', transform4);
                doIt('map');
            } else if (index === 5) {
                $('.officeTabs__tabBlock').css('transform', transform5);
                doIt('calendar');
            } else if (index === 6) {
                $('.officeTabs__tabBlock').css('transform', transform6);
                doIt('bonuses');
            }

        }

        var tabSwitch = function(_this, index) {

            console.log(_this);
            console.log(index);

            switch (index) {
                case 0:
                    console.log('case = 0');
                    //li
                    $('.officeTabs__tabBlock').css('transform', 'translateX(15vw)');
                    _this.parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                    _this.addClass('officeTabs__li--select');
                    //bg
                    $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                    $('.officeTabs__bg').css('background', 'url("../img/bg/lk__privateData.png") no-repeat');


                    break;

                case 1:
                    console.log('case = 1');
                    //li
                    $('.officeTabs__tabBlock').css('transform', 'translateX(-85vw)');
                    _this.parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                    _this.addClass('officeTabs__li--select');
                    //bg
                    $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                    $('.officeTabs__bg').css('background', 'url("../img/bg/lk__reserve.png") no-repeat');
                    break;

                case 2:
                    {
                        console.log('case = 2');
                        //li
                        $('.officeTabs__tabBlock').css('transform', 'translateX(-185vw)');
                        _this.parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        _this.addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bron.png") no-repeat');
                        break;
                    }

                case 3:
                    {
                        console.log('case = 3');
                        //li
                        $('.officeTabs__tabBlock').css('transform', 'translateX(-285vw)');
                        _this.parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        _this.addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__service.png") no-repeat');
                        break;
                    }

                case 4:
                    {
                        console.log('case = 4');
                        //li
                        $('.officeTabs__tabBlock').css('transform', 'translateX(-385vw)');
                        _this.parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        _this.addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__map.png") no-repeat');

                        break;
                    }

                case 5:
                    {
                        console.log('case = 5');
                        //li
                        $('.officeTabs__tabBlock').css('transform', 'translateX(-485vw)');
                        _this.parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        _this.addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__calendar.png") no-repeat');
                        break;
                    }

                case 6:
                    {
                        console.log('case = 6');
                        //li
                        $('.officeTabs__tabBlock').css('transform', 'translateX(-585vw)');
                        _this.parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        _this.addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bonuses.png") no-repeat');
                        break;
                    }

            }

        };

        setTimeout(function() {

            if (localStorage['tabIndex'] != undefined) {

                var index = localStorage['tabIndex'];
                delete localStorage['tabIndex'];

                switchersTabLk($('.officeTabs__li').eq(index), index);

            }

        }, 1e3);

        $('.officeMain__link').each(function() {
            $(this).on('click', function() {

                var index = $(this).attr('data-index');

                localStorage['tabIndex'] = index;

            });
        })

        var clickSave = 0;

        $('.officeTabs__li').each(function(index) {

            $(this).on('click', function() {

                switchersTabLk($(this), index);

                switch (index) {
                    case 0:
                        //li
                        $('.officeTabs__tabBlock').css('transform', 'translateX(15vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__privateData.png") no-repeat');

                        clickSave = 0;
                        break;

                    case 1:
                        //li
                        $('.officeTabs__tabBlock').css('transform', 'translateX(-85vw)!important');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__reserve.png") no-repeat');

                        clickSave = 1;
                        break;
                    case 2:
                        {
                            //li
                            $('.officeTabs__tabBlock').css('transform', 'translateX(-185vw)!important');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bron.png") no-repeat');

                            clickSave = 2;
                            break;
                        }

                    case 3:
                        {
                            //li
                            $('.officeTabs__tabBlock').css('transform', 'translateX(-285vw)');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            clickSave = $(this).addClass('officaTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__service.png") no-repeat');

                            clickSave = 3;
                            break;

                        }

                    case 4:
                        {
                            //li
                            $('.officeTabs__tabBlock').css('transform', 'translateX(-385vw)');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            clickSave = $(this).addClass('officaTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__map.png") no-repeat');

                            clickSave = 4;
                            break;
                        }

                    case 5:
                        {
                            //li
                            $('.officeTabs__tabBlock').css('transform', 'translateX(-485vw)');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            clickSave = $(this).addClass('officaTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__calendar.png") no-repeat');

                            clickSave = 5;
                            break;
                        }

                    case 6:
                        {
                            //li
                            $('.officeTabs__tabBlock').css('transform', 'translateX(-585vw)');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            clickSave = $(this).addClass('officaTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bonuses.png") no-repeat');

                            clickSave = 6;
                            break;
                        }

                }

            }); //click


            $(this).mouseenter(function() {


                switch (index) {
                    case 0:
                        {
                            //li
                            $('.officeTabs__tabBlock').removeClass('transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').addClass('transformHover-1');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__privateData.png") no-repeat');
                            break;
                        }
                    case 1:
                        {
                            //li
                            $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').addClass('transformHover-2');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__reserve.png") no-repeat');
                            break;
                        }
                    case 2:
                        {
                            //li
                            $('.officeTabs__tabBlock').removeClass('transformHover-2 transformHover-1 transformHover-4 transformHover-5 transformHover-6 transformHover-7').addClass('transformHover-3');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bron.png") no-repeat');
                            break;
                        }

                    case 3:
                        {
                            //li
                            $('.officeTabs__tabBlock').removeClass('transformHover-2 transformHover-3 transformHover-1 transformHover-5 transformHover-6 transformHover-7').addClass('transformHover-4');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__service.png") no-repeat');
                            break;
                        }

                    case 4:
                        {
                            //li
                            $('.officeTabs__tabBlock').removeClass('transformHover-2 transformHover-3 transformHover-4 transformHover-1 transformHover-6 transformHover-7').addClass('transformHover-5');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__map.png") no-repeat');

                            break;
                        }

                    case 5:
                        {
                            //li
                            $('.officeTabs__tabBlock').removeClass('transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-1 transformHover-7').addClass('transformHover-6');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__calendar.png") no-repeat');
                            break;
                        }

                    case 6:
                        {
                            //li
                            $('.officeTabs__tabBlock').removeClass('transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-1').addClass('transformHover-7');
                            $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                            $(this).addClass('officeTabs__li--select');
                            //bg
                            $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                            $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bonuses.png") no-repeat');
                            break;
                        }

                }


            }); //mouseenter




        }); //each

        $('.officeTabs__ul').mouseleave(function() {

            console.log(clickSave);

            switch (clickSave) {
                case 0:
                    {
                        //li
                        $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').css('transform', 'translateX(15vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).children().eq(0).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__privateData.png") no-repeat');
                        break;
                    }
                case 1:
                    {
                        //li
                        $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').css('transform', 'translateX(-85vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).children().eq(1).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__reserve.png") no-repeat');
                        break;
                    }
                case 2:
                    {
                        //li
                        $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').css('transform', 'translateX(-185vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).children().eq(2).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bron.png") no-repeat');
                        break;
                    }
                case 3:
                    {
                        //li
                        $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').css('transform', 'translateX(-285vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).children().eq(3).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__service.png") no-repeat');
                        break;
                    }
                case 4:
                    {
                        //li
                        $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').css('transform', 'translateX(-385vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).children('').eq(4).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__map.png") no-repeat');
                        break;
                    }
                case 5:
                    {
                        //li
                        $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').css('transform', 'translateX(-485vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).children().eq(5).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__calendar.png") no-repeat');
                        break;
                    }
                case 6:
                    {
                        //li
                        $('.officeTabs__tabBlock').removeClass('transformHover-1 transformHover-2 transformHover-3 transformHover-4 transformHover-5 transformHover-6 transformHover-7').removeClass('').css('transform', 'translateX(-585vw)');
                        $(this).parent().find('.officeTabs__li').removeClass('officeTabs__li--select');
                        $(this).children().eq(6).addClass('officeTabs__li--select');
                        //bg
                        $('.officeTabs__bg').removeClass('officeTabs__bg--localData').css('background', '');
                        $('.officeTabs__bg').css('background', 'url("../img/bg/lk__bonuses.png") no-repeat');
                        break;
                    }
            }


        }); //mouseleave



    });
})();