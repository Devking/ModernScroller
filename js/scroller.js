var SCROLL_SPEED = 400

$(function () {

    updateNavigation()

    $(window).on('scroll', function() { updateNavigation() })
    $(window).on('resize', function() { updateNavigation() })

    $('.fn-scroll-nav a').on('click', function(event) {
        event.preventDefault()
        smoothScroll($(this.hash))
    })

    function updateNavigation () {
        $('.fn-fullpane').each(function() {
            var thisSection = $(this).attr('id').split('-')[1]
            if ( ( $(this).offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $(this).offset().top + $(this).height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                $('.fn-dot-'+thisSection).addClass('selected')
            } else {
                $('.fn-dot-'+thisSection).removeClass('selected')
            }
        })
    }

    function smoothScroll (target) {
        $('body').animate({'scrollTop': target.offset().top}, SCROLL_SPEED)
    }
})
