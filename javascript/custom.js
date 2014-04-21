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

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    var playerLink = $("#play-video-link");
    playerLink.addClass('play-button');
    playerLink.click(function () {
        player.playVideo();
        $('#video-preview-image').hide();
        $('#video-container').removeClass('hide');
    });
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && !done) {
        stopVideo();
        done = true;
    }
}

function stopVideo() {
    $('#video-container').addClass('hide');
    $('#video-preview-image').show();
}



