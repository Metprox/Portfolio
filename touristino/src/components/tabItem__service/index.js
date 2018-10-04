(function() {
    $(document).ready(function() {


        $('.service__humb').on('click', function(event) {

            var target = event.target;

            console.log(target);
            console.log($(this).parent().parent());

            if ($(this).closest('.reserve__li')) {
                $(this).parent().parent().css('display', 'none');
            }

        });

    });
})();