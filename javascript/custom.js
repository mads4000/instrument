$(function () {
    $('#menu-toggle').on('click', function (e) {
        e.preventDefault();
        $('#content').toggleClass('move-left');
    });

    $('.exit-off-canvas').on('click', function (e) {
        e.preventDefault();
        $("#content").removeClass("move-left");
    });
});
