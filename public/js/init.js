M.AutoInit();
$("#webdev").toggle();
$("#gdesign").toggle();
$("#photography").toggle();
$(document).ready(function () {
    $("#webdev-btn").click(function () {
        $("#webdev").fadeToggle("slow");
        $("#gdesign").fadeOut();
        $("#photography").fadeOut();

    });
});

$(document).ready(function () {
    $("#gdesign-btn").click(function () {
        $("#gdesign").fadeToggle("slow");
        $("#webdev").fadeOut();
        $("#photography").fadeOut();
    });
});

$(document).ready(function () {
    $("#photography-btn").click(function () {
        $("#photography").fadeToggle("slow");
        $("#gdesign").fadeOut();
        $("#webdev").fadeOut();
    });
});