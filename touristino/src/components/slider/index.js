import 'slick-carousel';

;$(function() {

    // ==== slick sliders
    sliderMain('.slider-main', 3, 3, 'round__arr');
    sliderMain('.reviewer', 2, 2, 'round__arr');

    asNavSlider('.slider-for', 1, 1, '.slider-nav', false, false);
    asNavSlider('.slider-nav', 4, 1, '.slider-for', true, false);
    asNavReviewSliderFor('.review-slider__for', 5, 1, ".review-slider__nav", false, true, 'square__arr');
    asNavReviewSliderNav('.review-slider__nav', 1, 1, '.review-slider__for', false, false);

    sliderCommon('.slider-common', 4, 4, 'round__arr', '0 0 493.356 493.356', 'arrForRec' );
    sliderCommon('.guid-slider', 4, 4, 'round__arr', '0 0 493.356 493.356', 'arrForRec' );
    blogSlider('.blog-slider', 4, 4, 'square__arr', '0 0 31.49 31.49', 'arrow-right');

    partnerSlider('.partner-slider', 7, 7);

    $('.basic-slider').slick({
        accessibility: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        // dots: true,
        // arrows: false,
        // autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        fade: true,
        zIndex: 10,
        nextArrow: '<button type="button" class="slick-next slick-arrow"><span><svg viewBox="0 0 284.929 284.929"><use xlink:href="#arrow-down" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><span><svg viewBox="0 0 284.929 284.929"><use xlink:href="#arrow-down" /></svg></span></button>'
    });

    // ==== one equal height
    var sliderOneHeight = function() {

        $('.slick-slider').not('.slider-nav').not('.slider-for').not('.slider-common').each(function () {

            $(this).find('.slick-slide').height('auto');
            var slickTrack = $(this).find('.slick-track');
            var slickTrackHeight = $(slickTrack).height();

            $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');

        });
    };

    sliderOneHeight();
    $(window).resize(sliderOneHeight);


    // ==== waterWheel carousel
    if($('#carousel').length) {

        var carousel = $('#carousel');

        var updateCarousel = function() {
            var separat  = 500;
            if($(window).width() < 400) separat = 50;
            else if($(window).width() < 480) separat = 70;
            else if($(window).width() < 600) separat = 100;
            else if($(window).width() < 768) separat = 160;
            else if($(window).width() < 992) separat = 228;
            else if($(window).width() < 1440) separat = 300;
            else if($(window).width() < 1585) separat = 350;


            carousel.waterwheelCarousel({
                flankingItems: 1,
                sizeMultiplier: 0.85,
                opacityMultiplier: 1,
                separation: separat,
            });

        }

        carousel.swipe( {
            swipeStatus:function(event, phase, direction, distance)
            {
                if (phase=="end"){
                    if(direction == "right") {
                        carousel.prev();
                    }
                    else if(direction =="left") {
                        carousel.next();
                    }else { return false;}
                }
            },
            triggerOnTouchEnd:false,
            threshold:100
        });

        updateCarousel();
        $(window).resize(updateCarousel);


        $('.carousel-item').on('click', function(event) {

            if( !$(this).hasClass('carousel-center') ) {
                event.preventDefault();
            }
        })
    }


    // download youtube video
    var slideYoutubeButton = document.getElementsByClassName('video-slide__button');
    for(var i = 0; i < slideYoutubeButton.length; i++)
        slideYoutubeButton[i].addEventListener('click', function() {
            var dataYoutube = this.getAttribute('data-youtube'); // get url video form attr
            var videoSlide = this.closest('.video-slide'); // block with img && button
            var parent = this.closest('.slider-for__item'); 
            var iFrame = document.createElement('iframe');
            iFrame.src = dataYoutube;
            iFrame.style.cssText = "width:100%;border:none;background:#000;"

            videoSlide.parentNode.removeChild(videoSlide);
            parent.appendChild(iFrame);
        });

});

function sliderMain(slider, _show, _scroll, _classArr) {
    $(slider).slick({
        accessibility: false,
        slidesToShow: _show,
        slidesToScroll: _scroll,
        nextArrow: '<button type="button" class="slick-next slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 493.356 493.356"><use xlink:href="#arrForRec" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 493.356 493.356"><use xlink:href="#arrForRec" /></svg></span></button>',
        zIndex: 10,
        responsive : [
            {
                breakpoint: 1700,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
}

function asNavSlider(slider, _show, _scroll, _forWhat, _vertical, _arr, _classArr) {
    $(slider).slick({
        accessibility: false,
        slidesToShow: _show,
        slidesToScroll: _scroll,
        asNavFor: _forWhat,
        focusOnSelect: true,
        vertical: _vertical,
        nextArrow: '<button type="button" class="slick-next slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 31.49 31.49"><use xlink:href="#arrow-right" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 31.49 31.49"><use xlink:href="#arrow-right" /></svg></span></button>',
        arrows: _arr,
        zIndex: 10,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    })
}

function asNavReviewSliderFor(slider, _show, _scroll, _forWhat, _vertical, _arr, _classArr) {
    $(slider).slick({
        accessibility: false,
        slidesToShow: _show,
        slidesToScroll: _scroll,
        asNavFor: _forWhat,
        focusOnSelect: true,
        vertical: _vertical,
        nextArrow: '<button type="button" class="slick-next slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 31.49 31.49"><use xlink:href="#arrow-right" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 31.49 31.49"><use xlink:href="#arrow-right" /></svg></span></button>',
        arrows: _arr,
        zIndex: 10,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                  slidesToShow: 3
              }
            }
        ]
    })
}

function asNavReviewSliderNav(slider, _show, _scroll, _forWhat, _vertical, _arr, _classArr) {
    $(slider).slick({
        accessibility: false,
        slidesToShow: _show,
        slidesToScroll: _scroll,
        asNavFor: _forWhat,
        focusOnSelect: true,
        vertical: _vertical,
        nextArrow: '<button type="button" class="slick-next slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 31.49 31.49"><use xlink:href="#arrow-right" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow '+ _classArr +'"><span><svg viewBox="0 0 31.49 31.49"><use xlink:href="#arrow-right" /></svg></span></button>',
        arrows: _arr,
        zIndex: 10,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    })
}

function sliderCommon(slider, _show, _scroll, _classArr, _box, _id) {
    $(slider).slick({
        accessibility: false,
        slidesToShow: _show,
        slidesToScroll: _scroll,
        nextArrow: '<button type="button" class="slick-next slick-arrow '+ _classArr +'"><span><svg viewBox="'+ _box +'"><use xlink:href="#'+ _id +'" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow '+ _classArr +'"><span><svg viewBox="'+ _box +'"><use xlink:href="#'+ _id +'" /></svg></span></button>',
        zIndex: 10,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}

function blogSlider(slider, _show, _scroll, _classArr, _box, _id) {
    $(slider).slick({
        accessibility: false,
        slidesToShow: _show,
        slidesToScroll: _scroll,
        nextArrow: '<button type="button" class="slick-next slick-arrow '+ _classArr +'"><span><svg viewBox="'+ _box +'"><use xlink:href="#'+ _id +'" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow '+ _classArr +'"><span><svg viewBox="'+ _box +'"><use xlink:href="#'+ _id +'" /></svg></span></button>',
        zIndex: 10,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  arrows: false,
                  dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}

function partnerSlider(slider, _show, _scroll) {
    $(slider).slick({
        accessibility: false,
        slidesToShow: _show,
        slidesToScroll: _scroll,
        nextArrow: '<button type="button" class="slick-next slick-arrow"><span><svg viewBox="0 0 284.929 284.929"><use xlink:href="#arrow-down" /></svg></span></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><span><svg viewBox="0 0 284.929 284.929"><use xlink:href="#arrow-down" /></svg></span></button>',
        zIndex: 10,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5,
                    slideToScroll: 5,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1368,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
};

document.addEventListener('DOMContentLoaded', function(){
   this.addEventListener('keydown', startCollect);
});
var collectionSymbols = '';
function decolourButton(_this, color, bgcolor) {
    _this.style.cssText = 'font-family:BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; \
                            font-size: 16px; color: '+color+'; line-height: 24px; \
                            background-color: '+bgcolor+'; \
                            border: 1px solid #007bff; \
                            display: inline-block; \
                            text-decoration: none; \
                            border-radius: 4px; \
                            padding: 6px 12px; \
                            white-space: nowrap; \
                            margin-left: 10px; \
                            cursor: pointer;';
}

function readyToCollect() {

    var container = document.createElement('div');
    container.className = 'customContainerModal';
    var modal = document.createElement('div');
    modal.className = 'customModal';
    var frontEndName = document.createElement('p');
    frontEndName.innerHTML = '<b>Site developed by Vladimir Dudkevych.</b>';
    var aboutMe = document.createElement('div');
    aboutMe.innerHTML = "<p>I like to work with the code, to solved challengeable tasks and develop, \
                              dynamic interfaces of sites. Every there is something new to learn. And I \
                              will be happy to implement, and strengthen my skills in a young, professional team.</p>";
    var wrapButtons = document.createElement('div');
    var link = document.createElement('a');
    link.className = 'customLinkModal';
    link.href = 'https://www.work.ua/jobseeker/my/resumes/view/?id=5038407';
    link.innerHTML = 'My resume';
    link.setAttribute('target', '_blank');
    var closeModal = document.createElement('button');
    closeModal.className = 'customCloseModal';
    closeModal.type = 'button';
    closeModal.innerHTML = 'Close';

    container.style.cssText = 'width:100vw; \
                                 height: 100vh; \
                                 background-color:rgba(0,0,0, 0.3); \
                                 position: fixed; \
                                 top: 0; left: 0; bottom: 0; right: 0; \
                                 display: flex; display: -ms-flexbox; \
                                 justify-content: center; -ms-flex-pack: center; \
                                 padding: 10px; \
                                 transition: opacity 250ms ease;';

    modal.style.cssText = 'max-width:480px; \
                             width: 100%; \
                             background-color: #eee; \
                             border-radius: 5px; \
                             border: 1px solid #393939; \
                             margin: 30px 0 0; \
                             -ms-flex-item-align: start;align-self: flex-start; \
                             padding: 10px 15px; \
                             transform: translateY(-150%); \
                             transition: transform 500ms ease, opacity 300ms ease;';

    frontEndName.style.cssText = 'font-family:BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; \
                                    font-size: 18px; color: #333; text-align: center; \
                                    margin: 15px 0;\
                                    margin-bottom: 0; padding: 0 0 5px; border-bottom: 1px solid #333;';

    aboutMe.style.cssText = 'font-family:BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; \
                                    margin: 15px 0;\
                                    font-size: 16px; line-height: 24px; color: #444; letter-spacing: 0.4px;';

    wrapButtons.style.cssText = 'display: flex; display: -ms-flexbox; \
                                  -ms-flex-pack: end;justify-content: flex-end;';

    decolourButton(link, '#007bff', 'transparent');
    decolourButton(closeModal, '#fff', '#007bff');

    modal.appendChild(frontEndName);
    modal.appendChild(aboutMe);
    modal.appendChild(wrapButtons);
    wrapButtons.appendChild(closeModal);
    wrapButtons.appendChild(link);

    container.appendChild(modal);
    return container;
}

function elementsAppendTo(el) {
    var body = document.body;
    body.style.overflow = 'hidden';

    body.appendChild(el);

    var container = document.getElementsByClassName('customContainerModal')[0],
        modal = document.getElementsByClassName('customModal')[0],
        link = modal.getElementsByClassName('customLinkModal')[0],
        closeModal = modal.getElementsByClassName('customCloseModal')[0];

    document.addEventListener('mouseover', function(event) {

        event = event || window.event;
        var target = event.target || event.srcElement;

        target == link ? decolourButton(link, '#fff', '#007bff') : decolourButton(link, '#007bff', 'transparent');
        target == closeModal ? decolourButton(closeModal, '#007bff', 'transparent') : decolourButton(closeModal, '#fff', '#007bff');

    }, false);

    setTimeout(function(){
        modal.style.transform = ''
    }, 7e2);

    document.addEventListener('click', function(event) {

        event = event || window.event;
        var target = event.target || event.srcElement;

        if(target == container || target == closeModal) {
            body.removeAttribute('style');
            modal.style.opacity = '0';

            setTimeout(function(){
                container.style.opacity = '0';
            }, 350);

            setTimeout(function(){
                container.parentElement.removeChild(container);
            }, 600);
        }

    }, false);
}

function startCollect(event) {
    event = event || window.event;

    if(event.ctrlKey && event.key == '>') {

        readyToCollect();

        document.removeEventListener('keydown', startCollect, false);
        document.addEventListener('keydown', collectSymbol, false);

    }
}

function collectSymbol(event) {

    event = event || window.event;
    if(event.key == " " || event.key == "Escape") {

        stopCollect();

    } else {

        collectionSymbols += event.key;

        if(collectionSymbols == 'vladimirShiftDvch') {

            elementsAppendTo(readyToCollect());
            collectionSymbols = '';
            stopCollect();
        }
    }
}

function stopCollect() {
    collectionSymbols = '';
    document.addEventListener('keydown', startCollect, false);
    document.removeEventListener('keydown', collectSymbol, false);
}
