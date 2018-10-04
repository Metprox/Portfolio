(function() {
    $(document).ready(function() {

        //rost 

        var idElementRost = document.getElementById('selectRost');
        var idElementVes = document.getElementById('selectVes');


        $('.orderPlacement__li--rost').on('click', function() {
            idElementRost.dataset.roster = $(this).html();
            console.log($(this).html());
        });

        //ves
        $('.orderPlacement__li--ves').on('click', function() {
            idElementVes.dataset.veses = $(this).html();
            console.log($(this).html());
        });

        //selected ves and rost


        $('.tabItem__listSelect--ves').on('click', function() {

            $('.tabItem__arrowSlideV--ves').toggleClass('toggle__arrow');
            $('.tabItem__ul--ves').toggle().css("display:block");
        });

        $('.tabItem__listSelect--rost').on('click', function() {

            $('.tabItem__arrowSlideR--rost').toggleClass('toggle__arrow');
            $('.tabItem__ul--rost').toggle().css("display:block");
        });

        $('.orderPlacement__onclick').each(function(index) {
            $(this).on('click', function(event) {

                switch (index) {
                    case 0:
                        {
                            $(this).addClass('orderPlace__animationMenu');
                            $(this).siblings().removeClass('orderPlace__animationMenu');
                            $('.orderPlacement__form--1').css('display', 'block');
                            $('.orderPlacement__form--2').css('display', 'none');
                            $('.orderPlacement__registration').css('display', 'block');
                            break;
                        }
                    case 1:
                        {
                            $(this).addClass('orderPlace__animationMenu');
                            $(this).siblings().removeClass('orderPlace__animationMenu');
                            $('.orderPlacement__form--1').css('display', 'none');
                            $('.orderPlacement__form--2').css('display', 'block');
                            $('.orderPlacement__registration').css('display', 'none');
                            break;
                        }
                }
            });
        });

        //next
        $('.orderPlacement__next').on('click', function() {

            $('.orderPlacement__form--1').css('display', 'none');
            $('.orderPlacement__selectMenu').css('display', 'none');
            $('.orderPlacement__crumbs--1').removeClass('orderPlacement__crumbs--green');
            $('.orderPlacement__crumbs--2').addClass('orderPlacement__crumbs--green');
            $('.orderPlacement__info2').css('display', 'block');

        });

        //prev

        //next
        $('.orderPlacement__button--prev').on('click', function() {

            $('.orderPlacement__form--1').css('display', 'block');
            $('.orderPlacement__selectMenu').css('display', 'flex');
            $('.orderPlacement__crumbs--1').addClass('orderPlacement__crumbs--green');
            $('.orderPlacement__crumbs--2').removeClass('orderPlacement__crumbs--green');
            $('.orderPlacement__info2').css('display', 'none');

        });

        //menu
        $('.orderPlacement__crumbs--1').on('click', function() {

            $('.orderPlacement__form--1').css('display', 'block');
            $('.orderPlacement__selectMenu').css('display', 'flex');
            $(this).addClass('orderPlacement__crumbs--green');
            $('.orderPlacement__crumbs--2').removeClass('orderPlacement__crumbs--green');
            $('.orderPlacement__info2').css('display', 'none');
            $('.orderPlacement__registration').css('display', 'block');
        });

        $('.orderPlacement__crumbs--2').on('click', function() {

            $('.orderPlacement__form--1').css('display', 'none');
            $('.orderPlacement__form--2').css('display', 'none');
            $('.orderPlacement__selectMenu').css('display', 'none');
            $('.orderPlacement__crumbs--1').removeClass('orderPlacement__crumbs--green');
            $(this).addClass('orderPlacement__crumbs--green');
            $('.orderPlacement__info2').css('display', 'block');
        });


        //addButton

        var links = 1;

        $('.orderPlacement__addButton').on('click', function() {

            links += 1;
            let links = $("[rebest='yes']").length;

            $(this).addClass('checking'); //need for the check event (click)


            $('#mainAdd').clone().attr('id', 'mainAdd' + links).appendTo('.orderPlacement__pplAddHere');

            setTimeout(function() {

                $('#mainAdd' + links).find('#selectRost').attr('id', 'selectRost' + links).removeClass('tabItem__arrowSlideR--rost orderPlacement__input--rost tabItem__listSelect--rost').addClass('tabItem__arrowSlideR--rost' + links).addClass('orderPlacement__input--rost' + links).addClass('tabItem__listSelect--rost' + links);
                $('#selectRost' + links).attr('data-roster' + links, '160см').removeAttr('data-roster').children().removeClass().addClass('tabItem__ul--rost' + links).children().removeClass().addClass('orderPlacement__li--rost' + links);

            }, 300);

            setTimeout(function() {

                $('#mainAdd' + links).find('#selectVes').attr('id', 'selectVes' + links).removeClass('tabItem__arrowSlideV--ves orderPlacement__input--ves tabItem__listSelect--ves').addClass('tabItem__arrowSlideV--ves' + links).addClass('orderPlacement__input--ves' + links).addClass('tabItem__listSelect--ves' + links);
                $('#selectVes' + links).attr('data-veses' + links, '100кг').removeAttr('data-veses').children().removeClass().addClass('tabItem__ul--ves' + links).children().removeClass().addClass('orderPlacement__li--ves' + links);


            }, 300);


        });

        //for a new block click



        setInterval(function() {



            //link for data-vesses and data-roster
            var idElementRost1 = document.getElementById('selectRost1');
            var idElementVes1 = document.getElementById('selectVes1');

            $('.orderPlacement__li--rost1').on('click', function() {
                idElementRost1.dataset.roster1 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves1').on('click', function() {
                idElementVes1.dataset.veses1 = $(this).html();
                console.log($(this).html());
            });
            //-- 1

            var idElementRost2 = document.getElementById('selectRost2');
            var idElementVes2 = document.getElementById('selectVes2');

            $('.orderPlacement__li--rost2').on('click', function() {
                idElementRost2.dataset.roster2 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves2').on('click', function() {
                idElementVes2.dataset.veses2 = $(this).html();
                console.log($(this).html());
            });
            //2

            var idElementRost3 = document.getElementById('selectRost3');
            var idElementVes3 = document.getElementById('selectVes3');

            $('.orderPlacement__li--rost3').on('click', function() {
                idElementRost3.dataset.roster3 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves3').on('click', function() {
                idElementVes3.dataset.veses3 = $(this).html();
                console.log($(this).html());
            });
            //3

            var idElementRost4 = document.getElementById('selectRost4');
            var idElementVes4 = document.getElementById('selectVes4');

            $('.orderPlacement__li--rost4').on('click', function() {
                idElementRost4.dataset.roster4 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves4').on('click', function() {
                idElementVes4.dataset.veses4 = $(this).html();
                console.log($(this).html());
            });
            //4

            var idElementRost5 = document.getElementById('selectRost5');
            var idElementVes5 = document.getElementById('selectVes5');

            $('.orderPlacement__li--rost5').on('click', function() {
                idElementRost5.dataset.roster5 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves5').on('click', function() {
                idElementVes5.dataset.veses5 = $(this).html();
                console.log($(this).html());
            });
            //5

            var idElementRost6 = document.getElementById('selectRost6');
            var idElementVes6 = document.getElementById('selectVes6');

            $('.orderPlacement__li--rost6').on('click', function() {
                idElementRost6.dataset.roster6 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves6').on('click', function() {
                idElementVes6.dataset.veses6 = $(this).html();
                console.log($(this).html());
            });
            //6

            var idElementRost7 = document.getElementById('selectRost7');
            var idElementVes7 = document.getElementById('selectVes7');

            $('.orderPlacement__li--rost7').on('click', function() {
                idElementRost7.dataset.roster7 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves7').on('click', function() {
                idElementVes7.dataset.veses7 = $(this).html();
                console.log($(this).html());
            });
            //7

            var idElementRost8 = document.getElementById('selectRost8');
            var idElementVes8 = document.getElementById('selectVes8');

            $('.orderPlacement__li--rost8').on('click', function() {
                idElementRost8.dataset.roster8 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves8').on('click', function() {
                idElementVes8.dataset.veses8 = $(this).html();
                console.log($(this).html());
            });
            //7

            var idElementRost9 = document.getElementById('selectRost9');
            var idElementVes9 = document.getElementById('selectVes9');

            $('.orderPlacement__li--rost9').on('click', function() {
                idElementRost9.dataset.roster9 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves9').on('click', function() {
                idElementVes9.dataset.veses9 = $(this).html();
                console.log($(this).html());
            });
            //7

            var idElementRost10 = document.getElementById('selectRost10');
            var idElementVes10 = document.getElementById('selectVes10');

            $('.orderPlacement__li--rost10').on('click', function() {
                idElementRost10.dataset.roster10 = $(this).html();
                console.log($(this).html());
            });

            //ves
            $('.orderPlacement__li--ves10').on('click', function() {
                idElementVes10.dataset.veses10 = $(this).html();
                console.log($(this).html());
            });
            //7

        }, 1000);


        //closes ul+links for new block

        $(document).on('click', '#selectRost1', function() {

            $('#selectRost1').toggleClass('toggle__arrow');
            $('#selectRost1').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes1', function() {

            $('#selectVes1').toggleClass('toggle__arrow');
            $('#selectVes1').children().toggle().css("display:block");
        });
        //1

        $(document).on('click', '#selectRost2', function() {

            $('#selectRost2').toggleClass('toggle__arrow');
            $('#selectRost2').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes2', function() {

            $('#selectVes2').toggleClass('toggle__arrow');
            $('#selectVes2').children().toggle().css("display:block");
        });
        //2

        $(document).on('click', '#selectRost3', function() {

            $('#selectRost3').toggleClass('toggle__arrow');
            $('#selectRost3').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes3', function() {

            $('#selectVes3').toggleClass('toggle__arrow');
            $('#selectVes3').children().toggle().css("display:block");
        });
        //3

        $(document).on('click', '#selectRost4', function() {

            $('#selectRost4').toggleClass('toggle__arrow');
            $('#selectRost4').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes4', function() {

            $('#selectVes4').toggleClass('toggle__arrow');
            $('#selectVes4').children().toggle().css("display:block");
        });
        //4


        $(document).on('click', '#selectRost5', function() {

            $('#selectRost5').toggleClass('toggle__arrow');
            $('#selectRost5').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes5', function() {

            $('#selectVes5').toggleClass('toggle__arrow');
            $('#selectVes5').children().toggle().css("display:block");
        });
        //5


        $(document).on('click', '#selectRost6', function() {

            $('#selectRost6').toggleClass('toggle__arrow');
            $('#selectRost6').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes6', function() {

            $('#selectVes6').toggleClass('toggle__arrow');
            $('#selectVes6').children().toggle().css("display:block");
        });
        //6


        $(document).on('click', '#selectRost7', function() {

            $('#selectRost7').toggleClass('toggle__arrow');
            $('#selectRost7').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes7', function() {

            $('#selectVes7').toggleClass('toggle__arrow');
            $('#selectVes7').children().toggle().css("display:block");
        });
        //7


        $(document).on('click', '#selectRost8', function() {

            $('#selectRost8').toggleClass('toggle__arrow');
            $('#selectRost8').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes8', function() {

            $('#selectVes8').toggleClass('toggle__arrow');
            $('#selectVes8').children().toggle().css("display:block");
        });
        //8


        $(document).on('click', '#selectRost9', function() {

            $('#selectRost9').toggleClass('toggle__arrow');
            $('#selectRost9').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes9', function() {

            $('#selectVes9').toggleClass('toggle__arrow');
            $('#selectVes9').children().toggle().css("display:block");
        });
        //9


        $(document).on('click', '#selectRost10', function() {

            $('#selectRost10').toggleClass('toggle__arrow');
            $('#selectRost10').children().toggle().css("display:block");
        });

        $(document).on('click', '#selectVes10', function() {

            $('#selectVes10').toggleClass('toggle__arrow');
            $('#selectVes10').children().toggle().css("display:block");
        });
        //10




        //closeButton

        setInterval(function() {
            $('.orderPlacement__close').on('click', function(event) {

                var target = event.target;

                console.log($(this).parent());

                if ($(this).closest('.orderPlacement__pplAdd')) {
                    $(this).parent().css('display', 'none');
                }

            });
        }, 1000);

        //for gid and lang on this component

        var idGid = document.getElementById('orderPlacement__name6');

        $('#orderPlacement__name6').on('click', function() {

            $('.tabItem__arrowSlide--ged').toggleClass('toggle__arrow');
            $('.tabItem__ul--ged').toggle().css("display:block");
        });

        $('.tabItem__li--lang--ged').on('click', function() {
            idListSelect.dataset.ged = $(this).html();
        });


        //mask 
        $('.orderPlacement__input--tel').mask("+(000) 000 00 00", { placeholder: "+(___) ___ __ __" });
        $('.orderPlacement__info3--input--tel').mask("+(000) 000 00 00", { placeholder: "+(___) ___ __ __" });
        $('#orderPlacement__name5').mask("AAAAAAAAA", { placeholder: "_ _ _ _ _ _ _ _ _" });
        $('#orderPlacement__name8').mask("AAAAAAAAA", { placeholder: "_ _ _ _ _ _ _ _ _" });
    });
})();