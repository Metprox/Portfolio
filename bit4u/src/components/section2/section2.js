$(document).ready(function() {
    $('#active').click(function() {
        var scroll_el = $(this); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 2000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});