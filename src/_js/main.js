var storeForms = new storeForms();

$("#toggle").click(function(){
    $("#content").toggleClass("is--open");
    return false;
});

if ($(".feedback-form").length) {
    var $box = $('.feedback-form');

     // To center the box
    var boxLeft = ($(window).width()) / 2 - ($box.width() / 2),
    boxTop = ($(window).height()) / 2 - ($box.height() / 2);

    $box.css({
    left: boxLeft,
    top: boxTop
    });


    $(".feedback-form__close").click(function(){
        $('.feedback-form').hide();
        return false;
    });

});
