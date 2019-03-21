$(document).ready(function () {
    $(".offer").click(function () {
        PopUpShow($(this).html());
    });

    $(".modal-layout").click(function () {
        var el = jQuery(event.target);
        if (el.hasClass('modal-layout'))
            PopUpHide();
    });

    $(".modal-cross").click(function () {
        PopUpHide();
    });
});

function PopUpShow(content) {
    $(".modal-main").html(content);
    $("#modal").fadeIn(250);
}

function PopUpHide() {
    $("#modal").hide();
}