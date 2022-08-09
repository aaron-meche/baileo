var urlParams = new URLSearchParams(document.location.search);
var mediaType = urlParams.get('type');
var mediaTitle = urlParams.get('title');
var mediaSeason = urlParams.get('season');
var mediaEpisode = urlParams.get('episode');

var loadProgress = 0;
var idleTimer = 0;
var bubbleCount = 1;

console.log(mediaType);
console.log(mediaTitle);
console.log(mediaSeason);
console.log(mediaEpisode);

function unspace(string) {
    return string.replace(/\s/g, '');
}

function dom(id) {
    return document.getElementById(id);
}

window.addEventListener('load',function () {
    dom('videoTitle').innerHTML = mediaTitle;

    if (mediaType == 'tv') {
        if ((localStorage['hasWatched_' + mediaTitle]) && (localStorage[mediaTitle + '_saved_episode'] == mediaEpisode) && (localStorage[mediaTitle + '_saved_season'] == mediaSeason)) {
            loadProgress = localStorage[mediaTitle + '_progress'];
        } else {
            localStorage['hasWatched_' + mediaTitle] = true;
        }

        let epTitle = eval(unspace(mediaTitle))['s' + mediaSeason][mediaEpisode];

        localStorage[mediaTitle + '_saved_season'] = mediaSeason;
        localStorage[mediaTitle + '_saved_episode'] = mediaEpisode;
        dom('title').innerHTML = 'Watching: ' + mediaTitle + ' S' + mediaSeason + ' E' + (Number(mediaEpisode) + 1);
        dom('videoCaption').innerHTML = 'S' + mediaSeason + ' E' + (Number(mediaEpisode) + 1) + ' - ' + epTitle;
        videoPath = mediaTitle + '/' + 'Season ' + mediaSeason + '/' +  epTitle;

        dom('nextEpisodeButton').style.display = 'inline-flex';
    } else if (mediaType == 'movie') {
        if (localStorage['hasWatched_' + mediaTitle]) {
            loadProgress = localStorage[mediaTitle + '_progress'];
        } else {
            localStorage['hasWatched_' + mediaTitle] = true;
        }
        dom('title').innerHTML = 'Watching: ' + mediaTitle;
        dom('nextEpisodeButton').style.display = 'none';
        videoPath = mediaTitle;

    } else {
        alert('Error! Media type not recognized, please try again')
    }

    dom('video').innerHTML = '<source id="source" src="http://50.58.218.209/media/' + videoPath + '.mp4" type="video/mp4"></source>';
    dom('videoScroll').innerHTML = '<source id="source" src="http://50.58.218.209/media/' + videoPath + '.mp4" type="video/mp4"></source>';

    tryVideoLoad();
})

function tryVideoLoad() {
    var interval = setInterval(function(){
        var countForVideo = document.getElementById('video').readyState;
        document.getElementById('loadingProgressBarStatus').style.width = ((countForVideo / 4) * 100) + '%';
        if (countForVideo == 4){
            dom('loadingScreen').style.display = 'none';
            document.getElementById('progress-bar').style.display = 'block';
            document.getElementById('video-time-total').innerHTML = simplifyTime(document.getElementById('video').duration);
            document.getElementById('video').currentTime = loadProgress;
            updateProgress();
            updateProgressRepeater();
            clearInterval(interval);
        }

    }, 100);
}

function updateProgressRepeater() {
    setInterval(function(){
        updateProgress();
        if (document.getElementById('video-player-ui')) {
            if (idleTimer >= 2) {
                document.getElementById('video-player-ui').style.opacity = '0';
                document.getElementById('video-player-ui').style.cursor = 'none';
            } else {
                idleTimer = idleTimer + 0.5;
            }
        }
    }, 500);
}

function updateProgress() {
    if (document.getElementById('video-player-ui')) {
        document.getElementById('video-time-watched').innerHTML = simplifyTime(Math.floor(document.getElementById('video').currentTime));
        document.getElementById('current-progress').style.width = ((document.getElementById('video').currentTime / document.getElementById('video').duration) * 100) + '%';
    }
    localStorage[mediaTitle + '_progress'] = dom('video').currentTime;
}

window.addEventListener('dblclick', function () {
    fullScreen();
})

window.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        togglePlayPause();
    }
    if (event.code === 'ArrowLeft') {
        document.getElementById('video').currentTime = document.getElementById('video').currentTime - 10;
        updateProgress();
        updateBubble('left','-10');
    }
    if (event.code === 'ArrowRight') {
        document.getElementById('video').currentTime = document.getElementById('video').currentTime + 10;
        updateProgress();
        updateBubble('right','+10');
    }
    if (event.code === 'KeyJ') {
        document.getElementById('video').currentTime = document.getElementById('video').currentTime - 15;
        updateProgress();
        updateBubble('left','-15');
    }
    if (event.code === 'KeyK') {
        togglePlayPause();
    }
    if (event.code === 'KeyL') {
        document.getElementById('video').currentTime = document.getElementById('video').currentTime + 15;
        updateProgress();
        updateBubble('right','+15');
    }
    if (event.code === 'KeyF') {
        fullScreen();
    }
    if (event.code === 'KeyM') {
        toggleMute();
    }
    if (event.code === 'KeyH') {
        idleTimer = 5;
    }
    if (event.code === 'Digit0') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 0;
        updateProgress();
    }
    if (event.code === 'Digit1') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 1;
        updateProgress();
    }
    if (event.code === 'Digit2') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 2;
        updateProgress();
    }
    if (event.code === 'Digit3') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 3;
        updateProgress();
    }
    if (event.code === 'Digit4') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 4;
        updateProgress();
    }
    if (event.code === 'Digit5') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 5;
        updateProgress();
    }
    if (event.code === 'Digit6') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 6;
        updateProgress();
    }
    if (event.code === 'Digit7') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 7;
        updateProgress();
    }
    if (event.code === 'Digit8') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 8;
        updateProgress();
    }
    if (event.code === 'Digit9') {
        document.getElementById('video').currentTime = (document.getElementById('video').duration / 10) * 9;
        updateProgress();
    }
    if (event.code === 'KeyN') {
        if (mediaType == 'tv') {
            nextEpisode();
        }
    }
})

function updateBubble(direction, text) {
    document.getElementById(direction + 'UpdateBubbleContainer').innerHTML = document.getElementById(direction + 'UpdateBubbleContainer').innerHTML + "<div id='bubble" + bubbleCount + "' class='update-bubble " + direction + "-bubble'>" + text + "</div>";
    setTimeout(function() {
        if (direction == 'left') {
            document.getElementById(('bubble' + bubbleCount)).style.right = '20%';
        } else {
            document.getElementById(('bubble' + bubbleCount)).style.left = '20%';
        }
        document.getElementById(('bubble' + bubbleCount)).style.opacity = '0';
        bubbleCount++;
    }, 1);
}

window.addEventListener('mousemove', function () {
    if (document.getElementById('video-player-ui')) {
        idleTimer = 0;
        document.getElementById('video-player-ui').style.opacity = '1';
        document.getElementById('video-player-ui').style.cursor = 'default';
    }
})

function progressScroll(event) {
    var x = event.clientX;
    // var y = event.clientY;
    var width = document.getElementById('possible-progress').clientWidth;
    var marginLeft = document.getElementById('possible-progress').getBoundingClientRect().left;
    document.getElementById('progress-scroll').style.width = (((x - marginLeft) / width) * 100) + '%';
    var secondsScroll = Math.floor((((x - marginLeft) / width) * document.getElementById('video').duration));
    document.getElementById('video-time-scroll').innerHTML = simplifyTime(secondsScroll);
    document.getElementById('videoScroll').currentTime = Math.round(secondsScroll);
}

function progressScrollClick() {
    var x = event.clientX;
    var width = document.getElementById('possible-progress').clientWidth;
    var marginLeft = document.getElementById('possible-progress').getBoundingClientRect().left;
    document.getElementById('video').currentTime = ((x - marginLeft) / width) * document.getElementById('video').duration;
    updateProgress();
}

function togglePlayPause() {
    var video = document.getElementById('video');
    if (document.getElementById('video').paused) {
        video.play();
        document.getElementById('pauseIcon').style.display = 'none';
    } else {
        video.pause();
        document.getElementById('pauseIcon').style.display = 'block';
    }
}

function toggleMute() {
    if (document.getElementById('video').volume == 0) {
        document.getElementById('video').volume = 1;
        document.getElementById('muteButton').style.display = 'none';
        document.getElementById('soundButton').style.display = 'inline-block';
    } else {
        document.getElementById('video').volume = 0;
        document.getElementById('muteButton').style.display = 'inline-block';
        document.getElementById('soundButton').style.display = 'none';
    }
}

function fullScreen() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function simplifyTime(seconds) {
    var sec = 0;
    var min = Math.floor(seconds / 60);
    if (min >= 60) {
        var hour = Math.floor(min / 60);
        min = min - (hour * 60); 
        sec = Math.floor(seconds - ((hour * 3600) + (min * 60)));
        if (min.toString().length == 1) {
            min = '0' + min;
        }
        if (sec.toString().length == 1) {
            sec = '0' + sec;
        }
        return hour + ':' + min + ':' + sec;
    }
    if (min < 60) {
        sec = Math.floor(seconds - (min * 60));
        if (min.toString().length == 1) {
            min = '0' + min;
        }
        if (sec.toString().length == 1) {
            sec = '0' + sec;
        }
        return min + ':' + sec;
    }
}

function transport_local(type, title, season, episode) {
    let landing_page = 'receiver.html';
    if (isMobileDevice()) {
        landing_page = 'mobile-viewer.html';
    }
    let generatedLink = landing_page + '?type=' + type + '&title=' + title + '&season=' + season + '&episode=' + episode;
    openPage(generatedLink);
}

function nextEpisode() {
    var tvShow = mediaTitle;
    var tvShowUS = unspace(tvShow);
    var seasonCapacity = eval(tvShowUS)['s' + mediaSeason].length;
    var seasonsTotal = eval(tvShowUS)['sTotal'];

    if (mediaEpisode == (seasonCapacity - 1)) {
        if (mediaSeason == seasonsTotal) {
            alert('You have finished the series, congratulations')
            openPage('../index.html');
        } else {
            transport_local('tv',mediaTitle,Number(mediaSeason) + 1, 1);
        }
    } else {
        transport_local('tv',mediaTitle,1, Number(mediaEpisode) + 1);
    }
}