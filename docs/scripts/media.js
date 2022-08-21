var videoLength;

let videoProgress = 0;
if (localStorage['savedProgress_' + localStorage['transport_title'].trim()]) {
    if ((localStorage['transport_type'] == 'tv') && (localStorage['progress_season_' + localStorage['transport_title']] == localStorage['transport_season']) && (localStorage['progress_episode_' + localStorage['transport_title']] == localStorage['transport_episode'])) {
        videoProgress = localStorage['savedProgress_' + localStorage['transport_title'].trim()];
    } else if (localStorage['transport_type'] == 'movie') {
        videoProgress = localStorage['savedProgress_' + localStorage['transport_title'].trim()];
    }
}

function launchDesktopViewer() {
    let source = localStorage['transport_title'];
    if (localStorage['transport_type'] == 'tv') {
        source = localStorage['transport_title'] + '/Season ' + localStorage['transport_season'] + '/' + media_data[unspace(localStorage['transport_title'])]['s' + localStorage['transport_season']][localStorage['transport_episode']] + '.mp4';

        localStorage['progress_season_' + localStorage['transport_title']] = localStorage['transport_season'];
        localStorage['progress_episode_' + localStorage['transport_title']] = localStorage['transport_episode'];
        document.getElementsByClassName('media-caption')[0].innerHTML = 'S' + localStorage['transport_season'] + ' E' + localStorage['transport_episode'] + ' - ' + media_data[unspace(localStorage['transport_title'])]['s' + localStorage['transport_season']][localStorage['transport_episode']];
    }

    source = source.trim();
    let baseLink = 'https://50.58.218.209/media/';
    source = baseLink + source;
    dom('video').innerHTML = '<source src="' + source + '">';
    dom('videoScrub').innerHTML = '<source src="' + source + '">';
    document.getElementsByClassName('media-title')[0].innerHTML = localStorage['transport_title'];

    var interval = setInterval(function(){
        var countForVideo = document.getElementById('video').readyState;
        if (countForVideo == 4){
            videoLength = dom('video').duration;
            dom('loading').style.display = 'none';

            document.getElementsByClassName('progress-watched')[0].innerHTML = simplifyTime(videoProgress);
            document.getElementsByClassName('progress-total')[0].innerHTML = simplifyTime(videoLength);

            clearInterval(interval);
            launchProgressBar();
            if (document.getElementById('video').paused) {
                video.pause();
                document.getElementById('pauseIcon').style.display = 'block';
            } else {
                video.play();
                document.getElementById('pauseIcon').style.display = 'none';
            }
        }
    }, 500);
}

function launchProgressBar() {
    let progBar = document.getElementsByClassName('progress-bar')[0];
    let progCurrent = document.getElementsByClassName('progress-current')[0];
    let progScrub = document.getElementsByClassName('progress-scrub')[0];
    let progScrubData = document.getElementsByClassName('progress-scrub-data')[0];
    let progScrubTime = document.getElementsByClassName('progress-scrub-time')[0];
    let progPos = document.getElementsByClassName('progress-bar-wrapper')[0].getBoundingClientRect();
    let progLeft = progPos.left;
    
    dom('videoPlayerUi').style.opacity = '1';

    progCurrent.style.width = 100 * (videoProgress / videoLength) + '%';
    dom('video').currentTime = videoProgress;

    var timeScrub = 0;
    
    document.getElementsByClassName('progress-bar-wrapper')[0].addEventListener('mousemove',function(event) {
        let mouseX = event.clientX;
        let progWidth = progBar.clientWidth;
    
        progScrub.style.width = mouseX - progLeft + 'px';
        progScrubData.style.left = 'calc(' + mouseX + 'px - 7.5vw)';
        progScrubData.style.visibility = 'visible';

        timeScrub = Math.floor((((mouseX - progLeft) / progWidth) * dom('video').duration))
        progScrubTime.innerHTML = simplifyTime(timeScrub);
        dom('videoScrub').currentTime = timeScrub;

        document.getElementsByClassName('media-data-text')[0].style.opacity = '0';
        document.getElementsByClassName('media-data-text')[0].style.bottom = '15vh';
    })

    document.getElementsByClassName('progress-bar-wrapper')[0].addEventListener('click',function(event) {
        dom('video').currentTime = timeScrub;
        togglePlay();
    })

    document.getElementsByClassName('progress-bar-wrapper')[0].addEventListener('mouseout',function() {
        let progScrubData = document.getElementsByClassName('progress-scrub-data')[0];

        progScrubData.style.visibility = 'hidden';

        document.getElementsByClassName('media-data-text')[0].style.opacity = '1';
        document.getElementsByClassName('media-data-text')[0].style.bottom = '11vh';
    })

    dom('videoPlayerUi').addEventListener('mousemove',function() {
        console.log('mouse move');
    })
}

function togglePlay() {
    let video = dom('video');

    setInterval(function(){
        localStorage['savedProgress_' + localStorage['transport_title'].trim()] = video.currentTime;
        document.getElementsByClassName('progress-current')[0].style.width = (100 * (dom('video').currentTime / dom('video').duration)) + '%';
        document.getElementsByClassName('progress-watched')[0].innerHTML = simplifyTime(dom('video').currentTime);
    }, 300);

    if (video.paused) {
        video.play();
        dom('pauseIcon').style.display = 'none';
        dom('video').style.height = '100vh';
        dom('video').style.width = '100vw';
        dom('video').style.top = '0';
        dom('video').style.left = '0';
        document.getElementsByClassName('viewer-background')[0].style.backgroundColor = 'black';
    } else {
        video.pause();
        dom('pauseIcon').style.display = 'block';
        dom('video').style.height = '80vh';
        dom('video').style.width = '80vw';
        dom('video').style.top = '10vh';
        dom('video').style.left = '10vw';
        document.getElementsByClassName('viewer-background')[0].style.backgroundColor = 'var(--darkAqua)';
    }
}