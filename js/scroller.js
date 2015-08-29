var SCROLL_SPEED = 400

$(function () {

    updateNavigation()

    $(window).on('scroll', function() { updateNavigation() })
    $(window).on('resize', function() { updateNavigation() })

    $('.scroll-nav a').on('click', function(event) {
        event.preventDefault()
        smoothScroll($(this.hash))
    })

    $('.nav-dot').on('click', function() {
        $('.nav-dot.selected').removeClass('selected')
        $(this).addClass('selected')
    })

    function updateNavigation () {
        $('.fullpane').each(function() {

        })
    }

    function smoothScroll (target) {
        $('body, html').animate({'scrollTop': target.offset().top}, SCROLL_SPEED)
    }
})
