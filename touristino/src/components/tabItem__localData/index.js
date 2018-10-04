(function() {
    $(document).ready(function() {

        var idListSelect = document.getElementById('idListSelect');
        var idListLang = document.getElementById('idListLang');

        $('.tabItem__listSelect').on('click', function() {

            $('.tabItem__arrowSlide').toggleClass('toggle__arrow');
            $('.tabItem__ul').toggle().css("display:block");
        });

        $('.tabItem__listSelect--lang').on('click', function() {

            $('.tabItem__arrowSlide--lang').toggleClass('toggle__arrow');
            $('.tabItem__ul--lang').toggle().css("display:block");
        });

        $('.tabItem__li').on('click', function() {
            idListSelect.dataset.communication = $(this).html();
        });

        $('.tabItem__li--lang').on('click', function() {
            idListLang.dataset.language = $(this).html();
        });




        $('#repeatPassword').on('focusout', function() {

            if ($('#newPassword').val() == $('#repeatPassword').val()) {
                $('.tabItem__label--green').html('Пароль подтвержден').css('color', 'green');
                $('#newPassword, #repeatPassword').css('border-color', 'green');
            } else {
                $('.tabItem__label--green').html('Пароль не подтвержден').css('color', 'red');
                $('#newPassword, #repeatPassword').css('border-color', 'red');
            }
        });

        $('#newPassword').mask('AAAAAAAAAAAAAAAAAA');
        $('#repeatPassword').mask('AAAAAAAAAAAAAAAAAA');
        $('#names').mask('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS', { 'translation': { S: { pattern: /[a-zA-Z\s]/ } } });
        $('#tabItem__input--email').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', { 'translation': { A: { pattern: /[a-zA-Z0-9\.\-\@\-\+\$]/ } } });
        $('.tabItem__input--tel').mask('(000) 000-00-00');
    });
})();