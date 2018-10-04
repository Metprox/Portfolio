(function() {

    $(document).ready(function() {
        setTimeout(function() {

            $('.xdsoft_date').each(function(index) {
                if (index == 24) {
                    $(this).addClass('calendar__lock').css('background-image', 'linear-gradient(169deg, #0d9e51, #18ed0d)');
                }
                if (index == 9) {
                    $(this).addClass('calendar__heart').css('background', 'rgb(191, 72, 176)');
                }
                if (index == 33) {
                    $(this).addClass('calendar__ticket').css('background', 'rgb(93, 28, 179)');
                }
                if (index == 10) {
                    $(this).addClass('calendar__romb');

                }
            });

        }, 300);

        setTimeout(function() {
            $('.xdsoft_time').each(function(index) {

                var detailName = 'Abu Dhabi City Tour';
                var heightTime = 50;
                console.log('xdsoft_time: ' + index);

                if (index >= 4 && index <= 8) {
                    $(this).addClass('postForTime');

                    heightTime *= index;


                    if (index == 4) {
                        $(this).addClass('firstLock');
                        $(this).append(`<div class="postForTime--block" style="height: ${heightTime}px">
                        <h4>${ detailName }</h4>
                        <p>Excursion Tour</p>
                        <div class="postForTime--detail">
                        <span>3+ year</span>
                        <span>2,5 hours</span>
                        <span>Delta, 48 Boulevard</span>
                        </div>
                        </div>`);
                    }

                    if (index == 8) {
                        $(this).addClass('lastLock');
                    }
                }

            });
        }, 300);

    });
})();