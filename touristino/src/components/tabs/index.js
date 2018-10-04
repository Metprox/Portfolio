$(function() {

    // ==== services pages tabs one height
    /**
     * задаем default высоту для контентов табов
     * проверяем, если высота контента меньше default высоты, прячем кнопку "read__more", иначе устанавливаем attr для управления высотой при раскрыти таба
     * для всех контентов табов устанавливаем default высоту
     * по клику "read__more" управляем высотой контента из attr
     */
    var tabsContentHeight = 376;
    var tabsContent = document.querySelectorAll(".present-desc .tabs__content");

    for (var i = 0; i < tabsContent.length; i++) {

        var tabContentDiv = tabsContent[i].querySelector('div');
        var tabContentButton = tabsContent[i].querySelector('.read__more');

        tabContentDiv.offsetHeight < tabsContentHeight ? tabContentButton.style.visibility = "hidden" :
            tabContentDiv.setAttribute('data-default-height', tabContentDiv.offsetHeight);

        tabContentDiv.style.height = tabsContentHeight + "px";

        tabContentButton.addEventListener('click', function() {

            var prevItem = this.previousElementSibling;
            var defaultHeight = prevItem.getAttribute('data-default-height');

            if(prevItem.offsetHeight < defaultHeight) // проверяем, если контент закрыт
                prevItem.style.height = defaultHeight + "px";

            else
                prevItem.style.height = tabsContentHeight + "px";

        });

        if(!tabsContent[i].classList.contains('active')) tabsContent[i].style.display = "none"; // прячем не active контент
    };

    var switchersParent = document.getElementsByClassName('tabs__head')[0];
    var tabsContentParent = document.getElementsByClassName('tabs__body')[0];

    if (switchersParent) {

        var switchers = switchersParent.getElementsByClassName('tabs__switcher');
        var tabsContents = tabsContentParent.getElementsByClassName('tabs__content');

        /**
         * получаем index кнопки по которой был клик
         * устанавливаем стандартную высоту блока таба, даже если он был открыт
         * удаляем у всех кнопок класс active и назначаем той, по которому был клик
         * прячем все таб контенты и показываем соответствующий по index`у кнопки
         */
        switchersParent.addEventListener('click', function(event) {

            event = event || window.event;
            var target = event.target || event.srcElement;

            for(var i = 0; i < switchersParent.children.length; i++) {
                if(switchersParent.children[i] == target) {

                    for(var j = 0; j < switchers.length; j++) {

                        tabsContents[j].querySelector('div').style.height = tabsContentHeight + "px";
                        switchers[j].classList.remove('active');
                        tabsContents[j].style.display = "none";
                    }

                    target.classList.add('active');
                    tabsContentParent.children[i].style.display = "block";

                }
            }

        });

        /**
         * перестроение табов в аккордеон
         */

        var newChildrenButton = [];
        for(var i = 0; i < switchersParent.children.length; i++) {
            newChildrenButton[i] = switchersParent.children[i].cloneNode(true);
        }

        var mobSwitchers = tabsContentParent.getElementsByClassName('tabs__switcher');

        var tabMoveToAccordeon = function() {
            if(window.screen.width < 768 && mobSwitchers.length == 0) {

                for(var i = 0; i < tabsContents.length; ++i)
                    tabsContentParent.insertBefore(newChildrenButton[i], tabsContents[i]);

                for(var i = 0; i < tabsContentParent.children.length; i++) {

                    tabsContentParent.children[i].classList.remove('active');

                    if( i % 2 != 0 ) tabsContentParent.children[i].style.display = "none";
                    else tabsContentParent.children[i].classList.add('acc__switcher');

                }
                tabsContentParent.children[0].classList.add('active');
                tabsContentParent.children[1].style.display = '';
            } else if(window.screen.width >= 768 && mobSwitchers.length != 0) {

                for(var item of newChildrenButton) item.remove();
                tabsContentParent.children[0].classList.add('active');
                tabsContentParent.children[0].style.display = "block";
            }
        };

        tabMoveToAccordeon();
        window.addEventListener('resize', tabMoveToAccordeon);

    }

    /**
     * управление аккардеоном на мобильных устройствах
     * если контент кликнутой кнопки открыт - закрыть
     * иначе закрыть все открытые контенты
     * открыть тот, клик по кнопки которой был совершен
     */

    $(document).on('click', '.acc__switcher', function() {

        if($(window).width() < 768) {

            if($(this).next().is(':visible')) {

                $(this).removeClass('active').next().slideUp();
            } else {

                $(this).closest('.tabs__body').find('.tabs__content').slideUp();
                $(this).closest('.tabs__body').find('.acc__switcher').removeClass('active');
                $(this).addClass('active').next().slideDown();
            }
        }

    });


})