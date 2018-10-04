(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }
  // Your custom JavaScript goes here

})();
var isIE = (function () {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf("msie") > 0 || ua.indexOf("trident") > 0 ) {
        return true;
    }

    else {
        return false;
    }
}());

var dataList = {};

platformDef();

function platformDef() {

    // vars to identify the platform
    var hl = $('html'),
        ua = navigator.userAgent;

    // desktop platform
    if (ua.search(/Trident/) > -1 || ua.search(/MSIE/) > -1) {
        hl.addClass('ie');
        // return false;
    }

    // mobile platform
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4))) {
        hl.addClass('mobile');
        return true;
    }
};

function elementScrolled(elem) {
    if(mainScroll){
        var docViewTop = mainScroll.offset.y;
        var docViewBottom = docViewTop + $(window).height()/1.2;
        var elemTop = mainScroll.offset.y+$(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    else{
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height()/1.2;
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
}

var mainScroll;
var selectScroll;
var selectScroll2;
var list;
var newsArr;
var $orderRowArr;

var termsArr;
var textArr;

newsArr2 = document.querySelectorAll('.news-list li');
var $textArr = $('.text-content p');
var $termsArr = $('.terms-item');
var $faqArrElm = $('.page-about-inner .faq-list li > *');
termsArr = document.querySelectorAll('.terms-item');
textArr = document.querySelectorAll('.text-content p');
var faqArr =  document.querySelectorAll('.faq-list li');


var formRowArr = document.querySelectorAll('.form-row');
var $newsArrElem = $('.news-list li > div');
var $faqLiArr = $('.faq-list li');

var $formAnimEl = $('.form-row  > label, .input-wrap, .qr-code, .dropdwn-wrap, .fee-arrow, .fee-btn, .fee-total, .rate-block,.bottom-row .row-left .radio-btn, .bottom-row .row-left > label, .bottom-row .row-right, .bottom-row .input-top');
var $orderDetAnimEl = $('.order-details, .block-title, .det-send-to, .det-receive, .det-rate');
var newsDelay = 1.5;
var formRomDelay;
if(window.innerWidth < 1020) {
    formRomDelay = 1.5;
} else {
    formRomDelay = 2;
}
var textDelay = 1.8;
var termsDelay = 1.4;
var faqDelay = 1.2;


$newsArrElem.each(function (k,e) {
    $(e).css('transition-delay', newsDelay + 's');
    newsDelay += 0.15;
})

$textArr.each(function(k,e) {
    $(e).css('transition-delay', textDelay + 's');
    textDelay += 0.15;
})

$termsArr.each(function(k,e) {
    $(e).css('transition-delay', termsDelay + 's');
    termsDelay += 0.15;
})

$faqArrElm.each(function(k,e) {
    $(e).css('transition-delay', faqDelay + 's');
    faqDelay += 0.15;
})

// MODAL COPY


var timer;
var curTimerMin;
var orderTimer;

$(document).ready(function () {

    setTimeout(function () {
        $('html').addClass('loaded');
    }, 200);

    if($('.cookies-modal-wrap').length) {
        setTimeout(function() {
            $('.cookies-modal-wrap').addClass('show');
        },100)

        $('.cookies-modal-wrap .close-btn').on('click', function() {
            $('.cookies-modal-wrap').removeClass('show');
        })
        $('.got-btn').on('click', function() {
            $('.cookies-modal-wrap').removeClass('show');
        })
    }

    setTimeout(function () {
        $termsArr.each(function(k,e) {
            if(mainScroll.isVisible(e)) {
                e.classList.add('show');
            }
            else{
                $(e).css('transition-delay', '');
            }
        });
    }, 500);

    newsArr = $('.news-list li');
    formRowArr = $('.form-row');
    $orderRowArr = $('.order-page .page-left > div');

    setTimeout(function () {
        $('.header').addClass('show');
        $('.head-menu-wrap').addClass('show');
    }, 300)
    setTimeout(function () {
        $('.form-title').addClass('show');
        $('.order-page .page-left > .row').addClass('show');
        $('.order-timeline').addClass('show');
        $('.order-info').addClass('show');
        $('.cancel-order').addClass('show');
        $('.page-title').addClass('show');
        $('.update-info').addClass('show');
        $('.terms-title').addClass('show');
        $('.about-page .page-about-inner').addClass('show');

    }, 1)

    setTimeout(function () {
        $('.hamburger div').css('transition-delay', '0s');
    },1000)

    var orderDetdelay;
    var startOrderTimerMin;
    var startOrderTimerSec;

    if($('.order-page').length) {
        if(elementScrolled($('.order-details'))) {
            orderDetdelay = parseFloat($('.timeline-top').css('transition-delay'));
            // console.log($orderDetAnimEl);
            $orderDetAnimEl.each(function (k,e) {
                $(e).css('transition-delay', orderDetdelay + 's');
                // console.log($(e).css('transition-delay'));
                orderDetdelay += 0.15;
            })
        }
    }


    if($('.home-page').length) {
        localStorage.removeItem('formData');
    }

    if (localStorage.getItem('formData')) {
        list = JSON.parse(localStorage.getItem('formData'));

    }

    if($('.order-page').length) {
        startOrderTimerMin = +list.timerMin;
        startOrderTimerSec = +list.timerSec;
        $('.send-curr').addClass(list.sellCurr.toLowerCase());
        $('.send-curr').html(list.sellCurr);
        // $('.order-id p').html(list.sendFrom);
        $('.order-from-txt').html(list.sendFrom);
        $('.send-val').html(list.sellVal);
        $('.order-receive-txt').html(list.wallet);
        $('#copy-id').attr('value', 'https://bit4u.co/exchange/' + $('.order-id-num').text());
        // $('#copy-id').val('https://bit4u.co/exchange/' + $('.order-id-num').text());
    }


    // MAIN TIMER


    timer = new Timer();
    var MAINTIMERMIN = 10;
    timer.start({countdown: true, startValues: {minutes: MAINTIMERMIN, seconds: 0}, precision: 'minutes'});
    $('#main-timer .minutes').html(timer.getTimeValues().minutes);
    timer.addEventListener('minutesUpdated', function (e) {
        $('#main-timer .minutes').html(timer.getTimeValues().minutes.toString());
    });
    timer.addEventListener('targetAchieved', function (e) {
        $('#submit-btn').addClass('disabled');
        $("#agree").attr("disabled", true);
        $('.wrap-check').addClass('disabled');
    });

    // ORDER TIMER
    $('.time-info-start').addClass('show');

    orderTimer = new Timer();
    var startOrderSec = 0;
    var totalOrderTime = startOrderTimerMin * 60 + startOrderSec;
    var step = 100 / totalOrderTime;
    var lineWidth = 0;

    orderTimer.start({countdown: true, startValues: {minutes: startOrderTimerMin, seconds: startOrderSec}, precision: 'seconds'});
    $('#order-timer .order-sec').html(orderTimer.getTimeValues().seconds);
    $('#order-timer .order-min').html(orderTimer.getTimeValues().minutes);
    orderTimer.addEventListener('secondsUpdated', function (e) {
        curTimerMin = $('#main-timer .minutes').html();
        $('#order-timer .order-min').html(orderTimer.getTimeValues().minutes.toString());
        $('#order-timer .order-sec').html(orderTimer.getTimeValues().seconds.toString());
    });

    orderTimer.addEventListener('targetAchieved', function (e) {
        setTimeout(function () {
            // $('.time-info-end').addClass('show');
            $('.timeline-timer').addClass('hidden');
            $('.timeline-expired').removeClass('hidden');
            $('.time-dot').removeClass('colored');
            $('.timeline-inner').css('transition', '0s');
            $('.timeline-inner').css('width', '');
            $('.dot-middle').hide();
            $('.timeline').addClass('disabled');
        },700)
    });

    // SELECT

    function formatState1 (state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "../images";
        var $state = $(
            '<img src="' + baseUrl + '/' + state.element.value.slice(0,state.element.value.indexOf(" ")).toLowerCase() + '.png" class="curr-ico" /> ' + '<div>' + '<span class="curr-abbr">' +  state.element.value.slice(0,state.element.value.indexOf(" ")).toUpperCase() +  '</div>'
        );
        return $state;
    }

    function formatState (state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "../images";
        var $state = $(
            '<div class="sel-ico"><img src="' + baseUrl + '/' + state.element.value.slice(0,state.element.value.indexOf(" ")).toLowerCase() + '.png" class="curr-ico" />' + '</div>' + '<div>' + '<span class="curr-abbr">' +  state.element.value.slice(0,state.element.value.indexOf(" ")).toUpperCase() + '</span>' + state.element.value.slice(state.element.value.indexOf(" ")) +  '</div>'
        );
        return $state;
    }


    var testSelect = $('.sell-select').select2({
        templateResult: formatState,
        templateSelection: formatState1,
        width: '108px',
        dropdownParent: $('.sell-dropdwn')
    });

    $('.receive-select').select2({
        templateResult: formatState,
        templateSelection: formatState1,
        width: '108px',
        dropdownParent: $('.receive-dropdwn')
    });

    $('.select2-selection__rendered').hover(function () {
        $(this).removeAttr('title');
    });

    $('.sell-select').on('select2:open', function() {
        if(isIE === false) {
            $('.select2-search--dropdown .select2-search__field').attr('placeholder', 'Type a currency');
        }
        $('.select2-search input').prop('focus',false);

        $('.select2-dropdown').addClass('show');
        setTimeout(function() {
            $('.select2-results').addClass('show');
        }, 300)


        setTimeout(function () {
            selectScroll = Scrollbar.init($('#smooth-select .select2-results ul')[0], {
                alwaysShowTracks: true
            });

        }, 100)
    });
    $('.sell-select').on('select2:closing', function(e) {
        $('.select2-dropdown').removeClass('show');
        $('.select2-results').removeClass('show');
    })


    var self1;

    $('.sell-select').on('select2:close', function(e) {
                selectScroll.destroy();
    })



    $('.receive-select').on('select2:open', function() {
        if(isIE === false) {
            $('.select2-search--dropdown .select2-search__field').attr('placeholder', 'Type a currency');
        }
        $('.select2-search input').prop('focus',false);


        $('.select2-dropdown').addClass('show');
        setTimeout(function() {
            $('.select2-results').addClass('show');
        }, 300)

        setTimeout(function () {
            selectScroll2 = Scrollbar.init($('#smothselect2 .select2-results ul')[0], {
                alwaysShowTracks: true
            });
        },100)
    });

    $('.receive-select').on('select2:closing', function() { {
    }   $('.select2-dropdown').removeClass('show');
        $('.select2-results').removeClass('show');
    })


    $('.receive-select').on('select2:close', function() {
        selectScroll2.destroy();
    });

    // FEE DROPDOWN

    var feeH = 0;
    $('.fee-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.fee-block').toggleClass('unrolled');
        if($(this).next().hasClass('show')) {
            feeH= 0;
        } else {
            feeH += parseFloat($(this).next().css('margin-top'));
            // $(this).next().children().each(function(k,e) {
            feeH += $(this).next().children('ul').height();
            // })
        }
        $(this).next().css('height', feeH + 'px');
        $(this).next().toggleClass('show');
    })


    // TEXT SLIDEDOWN

    var textH;
    $('.terms-title').each(function(kk,ee) {

         $(ee).on('click', function() {
             $(this).toggleClass('clicked')
             textH = 0;
             if($(this).next().hasClass('show')) {
                 textH = 0;
             } else {
                 textH += parseFloat($(this).next().css('margin-top'));
                 textH += parseFloat($(this).next().css('margin-bottom'))*2;
                 $(this).next().children().each(function(key,elem) {
                     textH += $(elem).height();
                     textH += parseFloat($(elem).css('margin-top'));
                 })
             }
             $(this).next().toggleClass('show');
             $(this).next().css('height', textH + 'px');

         })

    })


    // FORM BUTTON

    $('#agree').on('change', function () {
        $('#order-form .btn').toggleClass('disabled');
    })


    $('.radio-btn').on('click', function() {
        $('.bottom-row label').click();
    })
    // MODAL

    $('.copy-btn').on('click',function() {
        $('.modal-copy-wrap').addClass('show');
    })

    $('.modal-close').on('click', function () {
        $('.modal-copy-wrap').removeClass('show');
    })

    $('.modal-copy-wrap').on('click', function() {
        $(this).removeClass('show');
    })

    $('.modal-copy-inner').on('click', function(e) {
        e.stopPropagation();
    })



    $(document).on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            if($('.modal-copy-wrap').length) {
                if($('.modal-copy-wrap').hasClass('show')) {
                    $('.modal-close').click();
                }
            }
        }
    });


// MODAL COPY

    if($('#copy-btn').length) {
        document.getElementById("copy-btn").addEventListener("click", function() {
            copyToClipboard(document.getElementById("copy-id"));
        });
    }


    function copyToClipboard(elem) {
        // create hidden text element, if it doesn't already exist
        var targetId = "_hiddenCopyText_";
        var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        var origSelectionStart, origSelectionEnd;
        if (isInput) {
            // can just use the original source element for the selection and copy
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            // must use a temporary form element for the selection and copy
            target = document.getElementById(targetId);
            if (!target) {
                var target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
        } catch(e) {
            succeed = false;
        }
        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }

        if (isInput) {
            // restore prior selection
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            // clear temporary content
            target.textContent = "";
        }
        return succeed;
    }

    // SELECT LANGUAGE

    $('.lang-select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        var curLang;
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.addClass('' + $this.children('option:selected').val().toLowerCase().slice(0,2));
        $styledSelect.text($this.children('option').eq(0).val());
        $styledSelect.append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#globe"></use></svg>');
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            var a = document.createElement('a');
            var li = document.createElement('li');
            a.setAttribute('href', '#');
            a.innerHTML = $this.children('option').eq(i).text();
            $(li).append(a);
            li.setAttribute('class', $this.children('option').eq(i).val().toLowerCase().slice(0,2));
            $($list).append(li);
            curLang = $this.children('option:selected').val().toLowerCase().slice(0,2);
        }

        var $listItems = $list.children('li');
        $styledSelect.click(function(e) {

            e.stopPropagation();
            $('.select-options').children('.' + curLang).hide();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').removeClass('show');
            });
            $(this).toggleClass('active').next('ul.select-options').toggleClass('show');
        });

        $listItems.click(function(e) {

            $styledSelect.removeClass(curLang);
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $styledSelect.append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#globe"></use></svg>');
            $this.val($(this).attr('rel'));
            $list.removeClass('show');
            curLang = $(this).attr('class');
            setTimeout(function () {
                $('.select-options').children().show();
            },100)
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.removeClass('show');
        });
    });

    // $('.select-styled').addClass($('.select-styled').text().toLowerCase().slice(0,2));

    $('.input-top').css('transition-delay', $('.input-wrap').css('transiiotn-delay'));
    $('.fee-block:before').css('transition-delay', '2s');


    $formAnimEl.each(function(k,e) {
        $(e).css('transition-delay', formRomDelay + 's');
        formRomDelay += 0.15;
    })


    var showTracks;
    if(!platformDef()) {
        showTracks = true;
    } else {
        showTracks = false;
    }
    mainScroll = Scrollbar.init(document.querySelector('#scrollbar'), {
        alwaysShowTracks: showTracks
    });


    for(var i = 0; i < formRowArr.length; i++) {
        if(mainScroll.isVisible(formRowArr[i])) {
            formRowArr[i].classList.add('show');
        } else {
            $formAnimEl.each(function(k,e) {
                $(e).css('transition-delay', '');
            })
        }
    }

    for(var m = 0; m < newsArr2.length; m++) {
        if(mainScroll.isVisible(newsArr2[m])) {
            newsArr2[m].classList.add('show');
        } else {
            newsArr2[m].firstElementChild.style.transitionDelay = '';
            newsArr2[m].lastElementChild.style.transitionDelay = '';
        }
    }


    for(var tt = 0; tt < textArr.length; tt++) {
        if(mainScroll.isVisible(textArr[tt])) {
            textArr[tt].classList.add('show');
        } else {
            $textArr.each(function(k,e) {
                $(e).css('transition-delay', '');
            })
        }
    }

    for(var fi = 0; fi < faqArr.length; fi++) {
        if(mainScroll.isVisible(faqArr[fi])) {
            faqArr[fi].classList.add('show');
        } else {
            $faqArrElm.each(function(fk,fe) {
                $(fe).css('transition-delay', '');
            })
        }
    }

    var foot = document.querySelector('.footer')
    if(mainScroll.isVisible(foot)) {
        $('.footer').addClass('show');
    }
    if ($('.order-details').length) {
        if(mainScroll.isVisible(document.querySelector('.order-details'))) {
            setTimeout(function () {
                $('.order-details').addClass('show');
            },10)

        }
    }

    mainScroll.addListener(function (status) {

        newsArr.each(function (key,elem) {
            if(elementScrolled($(elem))) {
                $(elem).addClass('show');
            }
        })

        formRowArr.each(function(k,e) {
            if(elementScrolled($(e))) {
                $(e).addClass('show');
            }
        })

        if(elementScrolled( $('.footer'))) {
            $('.footer').addClass('show');
        }

        $orderRowArr.each(function(k,e) {
            if(elementScrolled($(e))) {
                $(e).addClass('show');
            }
        })

        $termsArr.each(function(k,e) {
            if(elementScrolled($(e))) {
                $(e).addClass('show');
            }
        })

        $textArr.each(function(k,e) {
            if(elementScrolled($(e))) {
                $(e).addClass('show');
            }
        })
        $faqLiArr.each(function(k,e) {
            if(elementScrolled($(e))) {
                $(e).addClass('show');
            }
        })

        var foot = document.querySelector('.footer')
        if(mainScroll.isVisible(foot)) {
            $('.footer').addClass('show');
        }
    })

    // FORM VALIDATION

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }


    $('.val-input').unbind('keyup change input paste').bind('keyup change input paste',function(e){
            var $this = $(this);
        var val = $this.val();
        if(isNumber($this.val()) === false){
            $this.val($this.val().slice(0,-1));
        }
    });

    $('.receive-val').on('input', function() {
        $(this).val('');
    });
    var $inputArr = $('#order-form .val-input, #order-form .code-input');

    $(document).on('submit', '#order-form', function(event) {

        var sellAmm = $('#sell-am');
        var sendFrom = $('#send-from');
        var receiveAm = $('#receive-am');
        var wallet = $('#wallet');


        var error = false;
        event.preventDefault();

        var sellAmmVal = $('#sell-am').val();
        var sendFromVal = $('#send-from').val();
        var receiveAmVal = $('#receive-am').val();
        var walletVal = $('#wallet').val();

        $('.val-input').each(function (k,e) {
            // console.log(isNumber($(e).val()));
            if (isNumber($(e).val()) === false || $(e).val() == '' || $(e).val().length > 11) {
                $(e).parent().parent().children('.error-msg').addClass('show');
                $(e).addClass('error');
                if($(e).val() == '') {
                    $(e).parent().parent().children('.error-msg').html('<p>Amount is below the minimum limit.</p>');
                } else if ($(e).val().length > 11) {
                    $(e).parent().parent().children('.error-msg').html('<p>Amount is above the maximum limit.</p>');
                }
                error = true;
            } else {
                $(e).parent().parent().children('.error-msg').removeClass('show');
                $(e).removeClass('error');
            }
        })

        $inputArr.each(function(key,elem) {
            setTimeout(function() {
                $(elem).parent().parent().children('.error-msg').removeClass('show');
                $(elem).removeClass('error');
            }, 3000)
        })

        $('.code-input').each(function (k,e) {
            if($(e).val().length > 42 || $(e).val() == '') {
                $(e).parent().parent().children('.error-msg').addClass('show');
                $(e).addClass('error');
                if($(e).val() == '') {
                    $(e).parent().parent().children('.error-msg').html('<p>Address cannot be empty.</p>');
                } else if($(e).val().length > 42) {
                    $(e).parent().parent().children('.error-msg').html('<p>Address provided is invalid.</p>');
                }
                error = true;
            } else {
                $(e).parent().parent().children('.error-msg').removeClass('show');
                $(e).removeClass('error');
            }
        })

        if (!error) {
            dataList.sellVal = $('#sell-am').val();
            dataList.sellCurr = $('.sell-dropdwn .select2-selection__rendered .curr-abbr').text();
            dataList.sendFrom = $('#send-from').val();

            dataList.receiveVal = $('#receive-am').val();
            dataList.receiveCurr = $('.receive-dropdwn .select2-selection__rendered .curr-abbr').text();
            dataList.wallet = $('#wallet').val();

            dataList.timerMin = $('#main-timer .minutes').text();
            dataList.timerSec = timer.getTimeValues().seconds.toString();

            localStorage.setItem('formData',JSON.stringify(dataList));
            //

            $.post("#", function (request){
                // sellAmm: sellAmm.val(),
                // sendFrom: sendFrom.val(),
                // receiveAm: receiveAm.val(),
                // wallet: wallet.val()
            })
            .always(function() {
                action: window.location.href = 'order.html';
            });
        }
    })
})


// MENU MOBILE

$('.hamburger').on('click', function () {
    $('.header').toggleClass('menu-show');
    $('.right-head').toggleClass('show');
    $('body').toggleClass('menu-show');
})

$(document).on('click', function (e) {
    if(!$(e.target).closest('.head-menu-wrap').length && $('.header').hasClass('menu-show') && !$(e.target).closest('.hamburger').length){
        $('.header').removeClass('menu-show');
        $('.right-head').removeClass('show');
        $('body').removeClass('menu-show');
    }
})

// CANCEL ORDER


$('.cancel-order').on('click', function() {
    orderTimer.stop();
    $('.timeline-timer').html('<p class="cancelled">Transaction cancelled</p>');
    $('.dot-middle').hide();
    $('.timeline').addClass('disabled');
})

$('.cancel-order-btn').on('click', function() {
    orderTimer.stop();
    $('.timeline-timer').html('<p class="cancelled">Transaction cancelled</p>');
    $('.dot-middle').hide();
        $('.timeline').addClass('disabled');
})






