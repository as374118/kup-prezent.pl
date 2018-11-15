var scrolled = false;
$(window).scroll(function (event) {
    if (!scrolled) {
        event.preventDefault();
        scrolled = true;
        moveToAnswer();
    }
})

function moveToAnswer() {
    scrollToElement('#answer-section');
}

function moveToTheBestGiftSection() {
    scrollToElement('#best-gift-section');
}

function scrollToElement(selector) {
    var height = $(selector).offset().top;
    $('html, body').animate({ scrollTop: height }, 1000);
}