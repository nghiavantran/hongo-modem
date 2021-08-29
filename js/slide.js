function slide() {
    $(function () {

        $('.slider__btn-link').click(function () {
            $('.slider__btn-link').removeClass('slider__btn-active')
            $(this).addClass('slider__btn-active')

            // $('.slider__active').addClass('upslider')
            // // $('.upslider').addClass('dowslider')

            $('.slider__active').addClass('upslider').one('webkitAnimationEnd', function (event) {
                $('.upslider').removeClass('upslider');
            });
            // console.log($(this).index() + 1 );

            $('.slider__content .slider__content-item:nth-child('+($(this).index() + 1 )+')').addClass('dowslider').one('webkitAnimationEnd', function (event) {
                $('.slider__active').removeClass('slider__active');
                $('.dowslider').addClass('slider__active').removeClass('dowslider');
            });
        });
    });
}

export default slide;