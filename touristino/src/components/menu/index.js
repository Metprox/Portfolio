import { moveToAnchor } from '../../index';

;$(function() {

/**
 * sliding menu
 */
   var slidingMenu = $('.sliding-menu');

   var menuDefaulHeight = function() {

       var height;
       ($(window).width() >= 1585) ? height = 344 : height = 40;
       slidingMenu.attr('data-default-height', height)
           .css({maxHeight: height + 'px'});

   };

    menuDefaulHeight();
    $(window).resize(menuDefaulHeight);

    var slidingList = slidingMenu.find('.sliding-menu__list');
    var getHeightSlidingList = slidingList.outerHeight();
    var getHeightDefault = slidingMenu.attr('data-default-height');

    var closeSlidingMenuForAnchor = function() {

        if($(window).width() >= 1585) {

            $('.sliding-menu__button').addClass('slide').removeClass('open');
            setTimeout(function() {
                slidingList.removeClass('open');
            },500);
            setTimeout(function() {
                slidingMenu.css({maxHeight: +getHeightDefault, zIndex: ''});
            },920);
            setTimeout(function(){
                $('.sliding-menu__button').removeClass('slide');
                moveToAnchor();
            },1e3);
        }
        else {
            $('body').removeClass('overflow').removeAttr('class');
            $('.sliding-menu__button').removeClass('open');
            slidingList.slideUp();
            moveToAnchor();
        }

    }

    if(slidingMenu.length) {

        $('.sliding-menu__button').on('click', function() {

            var setHeightMenuOpen = getHeightSlidingList;
            var setHeightDefault = +getHeightDefault;

            if($(window).width() >= 1585) {

                if( !$(this).hasClass('open') ) {

                    $(this).addClass('open');
                    slidingMenu.css({maxHeight: setHeightMenuOpen, zIndex: '3'});

                    setTimeout(function() {
                        slidingList.addClass('open');
                    }, 420)

                } else {

                    slidingList.find('li >a').filter('.open').removeClass('open').parent().find('ul').slideUp(300);
                    $(this).addClass('slide').removeClass('open');
                    setTimeout(function() {
                        slidingList.removeClass('open');
                    },500);
                    setTimeout(function() {
                        slidingMenu.css({maxHeight: setHeightDefault, zIndex: ''});
                    },920);
                    setTimeout(function(){
                        $('.sliding-menu__button').removeClass('slide');
                    },1e3);
                }

            }
            else {

                var breadcrumbsOffsetTop = breadcrumbs.offset().top;
                var breadcrumbsHeight = breadcrumbs.outerHeight();
                var posY = (breadcrumbsOffsetTop + breadcrumbsHeight + 10);

                if($(window).scrollTop() < 30) {

                    if(!$(this).hasClass('open')) {
                        $('body').addClass('overflow');
                        slidingMenu.css({top: '0.5px',zIndex: '3'});
                        $(this).addClass('open');
                        setTimeout(function(){
                            slidingList.slideDown();
                        },300);
                    } else {
                        $('body').removeClass('overflow').removeAttr('class');
                        slidingList.slideUp();
                        $(this).removeClass('open');
                        setTimeout(function() {
                            slidingMenu.css({top: posY + "px",zIndex: ''});
                        },300);
                    }

                } else {

                    !$(this).hasClass('open') ?
                        ($('body').addClass('overflow'),$(this).addClass('open'),slidingList.slideDown()) :
                        ($('body').removeClass('overflow').removeAttr('class'),$(this).removeClass('open'), slidingList.slideUp());
                }

            }


        });

    }

    $('.sliding-menu__list >li >a').on('click', function(event) {

        var submenu = $(this).parent().find('ul');
        var menuList = $(this).closest('.sliding-menu__list');

        var thisHref = $(this).attr('href');

        if(submenu.length) {

            event.preventDefault();

            if(submenu.is(':visible')) {

                $(this).removeClass('open');
                submenu.slideUp(300);

                closeSlidingMenuForAnchor();

            } else {

                menuList.find('li >ul').slideUp(300);
                menuList.find('li >a').removeClass('open');
                $(this).addClass('open');
                submenu.slideDown(300);
            }
        } else {

            if(thisHref == '#') {
                event.preventDefault();
            }
            closeSlidingMenuForAnchor();
        }

    });

    var breadcrumbs = $('.breadcrumbs');

    var slidingMenuResize = function() {

        if(breadcrumbs.length) {
            var breadcrumbsOffsetTop = breadcrumbs.offset().top;
            var breadcrumbsHeight = breadcrumbs.outerHeight();

            var posY = (breadcrumbsOffsetTop + breadcrumbsHeight + 10);
            var zInd = '';

            if(window.screen.width < 1660) {

                if($('.header').hasClass("fixed")) {
                    
                    posY = 60;
                    zInd = 13;
                    slidingMenu.css({top: posY + "px",zIndex: zInd });
                }
                else {

                    setTimeout(function() {
                        breadcrumbsOffsetTop = breadcrumbs.offset().top;
                        breadcrumbsHeight = breadcrumbs.outerHeight();
                        posY = (breadcrumbsOffsetTop + breadcrumbsHeight + 10);

                        slidingMenu.css({top: posY + "px",zIndex: zInd });
                    },300)
                }

            } else {

                if($('.header').hasClass("fixed")) posY = 60;
                else posY = 0;

                slidingMenu.css({top: posY + "px"});
            }

        }

    };

    slidingMenuResize();
    $(window).on('scroll resize', slidingMenuResize);


/**
* common menu
*/
    var slicker = document.getElementsByClassName('slicker')[0];
    var nav = document.getElementsByClassName('header__nav')[0];
    var close = document.getElementsByClassName('menu-close')[0];

    var hideMenuBlock = function() {

        nav.closest('.header__wrapper').style.zIndex = "";
        nav.classList.add('active');
        setTimeout(function(){
            nav.classList.remove('open');
        },700);

        setTimeout(function(){
            nav.classList.remove('active');
        }, 12e2);
    }

    slicker.addEventListener('click', function() {

        var _this = this;

        if($(window).width() < 1200) {

            if(!nav.classList.contains('open')) {

                // nav.removeAttribute('style');
                nav.closest('.header__wrapper').style.zIndex = "3";
                nav.classList.add('active');
                setTimeout(function(){
                    nav.classList.add('open');
                },500);
                setTimeout(function(){
                    nav.classList.remove('active');
                },11e2);

                if($(window).width() < 600) {

                    setTimeout(function() {
                        _this.classList.add('close');
                    },1e3);
                }

            } else {

                if($(window).width() < 600) {

                    hideMenuBlock();
                    this.classList.remove('close');

                }
            }

        }

    });

    close.addEventListener('click', function() {

        if(window.outerWidth < 1200 && nav.classList.contains('open')) {

            hideMenuBlock();
            if($(window).width() < 600)
                slicker.classList.remove('close');
        }

    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(".header__nav").length && !$(event.target).closest('.slicker').length && !$(event.target).closest('.popup-container').length) {

            hideMenuBlock();
            if($(window).width() < 600)
                slicker.classList.remove('close');

        }
    });

});
