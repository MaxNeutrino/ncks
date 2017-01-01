$(document).ready(function(){

    $('.modal').modal();

    $('#one').fadeIn(1500, function () {
        $('#two').fadeIn(1500, function () {
            $('#three').fadeIn(3000, function () {
                var days = $('#countdown').text();
                var progress = 100 / (60 / days.substring(0, 2));
                $('#progress-bar').css('width', + progress + '%');
            });
        })
    });
    /*var h = $(document).height();
    h = h - 455;

    $("#first-left").animate({
        width: "100%"
    },1500,
        function() {
        $("#first-content").fadeIn(1000,

        function () {
            $("#second-right").animate({
                width: "100%"
            }, 1500,

                function(){
                $("#second-content").fadeIn(1000,

                function () {
                    $("#up").animate({
                        height: h

                    }, 1500,

                        function () {
                        $("#up-fade-in").fadeIn(1000,

                            function () {
                            $("body").attr("background-color", "white");
                        });
                    });
                });
            });
        });
    });*/
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}