$(document).ready(function(){

    $('.modal').modal();

    $('#one').fadeIn(1500, function () {
        $('#two').fadeIn(1500, function () {
            $('#three').fadeIn(2500, function () {
                var days = $('#countdown').text();
                var progress = (60 - days.substring(0, 2)) * 1.6;
                $('#progress-bar').css('width', + progress + '%');
            });
        })
    });
});