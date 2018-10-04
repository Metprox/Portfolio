;$(function() {

    $(document).on('click', ".counter__button", function() {
        var input = $(this).parent().find('.count'),
            val = input.val();

        ($(this).hasClass('plus')) ? val++ : val--;

        if(val < 0) val = 0;

        input.val(val);
    });


});