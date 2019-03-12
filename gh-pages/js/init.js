
$(document).ready(function () {
    M.AutoInit();
    $("#webdev").show();
    $("#gdesign").toggle();
    $("#photography").toggle();


    $("#webdev-btn").click(function () {
        $("#webdev").fadeIn("slow");
        $("#gdesign").fadeOut();
        $("#photography").fadeOut();

    });

    $("#gdesign-btn").click(function () {
        $("#gdesign").fadeIn("slow");
        $("#webdev").fadeOut();
        $("#photography").fadeOut();
    });


    $("#photography-btn").click(function () {
        $("#photography").fadeIn("slow");
        $("#gdesign").fadeOut();
        $("#webdev").fadeOut();

    });

    $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;
      
          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
        });
      });
});

