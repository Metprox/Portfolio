;$(function() {

    var popupContainer = $('.popup-container');

    $(document).on('click', '[data-action]', function(event) {

        var $action = $(this).attr('data-action');
        var $scope = $(this).attr('data-scope');

        if($action == 'popup') {

            popupContainer.load($scope, function() {

                var popupChildren = popupContainer.find('.popup');

                $('body').css({ overflow: "hidden" });

                $(this).addClass('open');
                setTimeout(function(){

                    popupChildren.addClass('open');

                },5e2);

            });

        };

        event.preventDefault();

    });

    $(document).on('click','.popup-container', '.popup__close',function(event) {

        if($(event.target).hasClass('popup-container') || $(event.target).hasClass('popup__close')  ) {

            var popupChildren = popupContainer.find('.popup');

            popupChildren.removeClass('open');

            setTimeout(function() {

                popupContainer.removeClass('open');
                popupChildren.remove();
                $('body').removeAttr('style');

            },5e2)

        }

    });

});