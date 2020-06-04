$(function() {

    var pathname_url = window.location.pathname;
    var href_url = window.location.href;

    $(".menu__list-item").each(function() {
        var link = $(this).find("a").attr("href");
        if (pathname_url == link || href_url == link) {
            $(this).addClass("active");
        }
    });

    var dropDownButton = $(".lines");
    var menuDropDown = $(".menu__list-dropdown")

    dropDownButton.click(function() {
        if (dropDownButton.hasClass("active")) {
            dropDownButton.removeClass("active");
        } else {
            (dropDownButton.addClass("active"));
        }
        menuDropDown.animate({ width: 'toggle' }, 350);

    });




});