$(function() {
    var originalBGplaypen = $("#playpen").css("background-color"),
        x, y, xy, bgWebKit, bgMoz,
        lightColor = "rgba(255,255,255,0.75)",
        gradientSize = 100;

        // Basic Demo
        $('#playpen').mousemove(function(e) {

            x  = e.pageX - this.offsetLeft;
            y  = e.pageY - this.offsetTop;
            xy = x + " " + y;

            bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBGplaypen;
            bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBGplaypen + " " + gradientSize + "px)";

            $(this)
                .css({ background: bgWebKit })
                .css({ background: bgMoz });

        }).mouseleave(function() {
            $(this).css({ background: originalBGplaypen });
        });




        var originalBG = $(".nav a").css("background-color");

        $('.nav li:not(".active") a')
        .mousemove(function(e) {

               x  = e.pageX - this.offsetLeft;
               y  = e.pageY - this.offsetTop;
               xy = x + " " + y;

               bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
               bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

                $(this)
                    .css({ background: bgWebKit })
                    .css({ background: bgMoz });


        }).mouseleave(function() {
            $(this).css({ background: originalBG });
        });

});