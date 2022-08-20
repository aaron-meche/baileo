var videoLength;

let videoProgress = 0;
if (localStorage['savedProgress_' + localStorage['transport_title'].trim()]) {
    videoProgress = localStorage['savedProgress_' + localStorage['transport_title'].trim()];
}

function launchDesktopViewer() {
    let source = localStorage['transport_title'];
    if (localStorage['transport_type'] == 'tv') {
        source = localStorage['transport_title'] + '/Season ' + localStorage['transport_season'] + '/' + media_data[unspace(localStorage['transport_title'])]['s' + localStorage['transport_season']][localStorage['transport_episode']];
    }
    source = source.trim();
    let baseLink = 'https://50.58.218.209/media/';
    source = baseLink + source;
    dom('video').innerHTML = '<source src="' + source + '.mp4">';

    var interval = setInterval(function(){
        var countForVideo = document.getElementById('video').readyState;
        if (countForVideo == 4){
            videoLength = dom('video').duration;

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
    }, 100);
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
    
    document.getElementsByClassName('progress-bar-wrapper')[0].addEventListener('mousemove',function(event) {
        let mouseX = event.clientX;
        let progWidth = progBar.clientWidth;
    
        progScrub.style.width = mouseX - progLeft + 'px';
        progScrubData.style.left = 'calc(' + mouseX + 'px - 7.5vw)';
        progScrubData.style.visibility = 'visible';

        progScrubTime.innerHTML = simplifyTime(Math.floor((((mouseX - progLeft) / progWidth) * dom('video').duration)));
    })

    document.getElementsByClassName('progress-bar-wrapper')[0].addEventListener('mouseout',function() {
        let progScrubData = document.getElementsByClassName('progress-scrub-data')[0];

        progScrubData.style.visibility = 'hidden';
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