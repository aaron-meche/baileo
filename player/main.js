// Declare variables

var urlParams = new URLSearchParams(document.location.search);
var loadKey = urlParams.get('key');

var mediaType = '';
var mediaTitle = '';
var videoPath = '';
var season = '';
var episodeTitle = '';
var episodeNumber = '';
var episodeNumberRaw = '';
var username = '';
var idleTimer = 0;
var loadTime = new Date().getTime();

var database = '';
var linkData = '';
var userData = '';

firebase.database().ref().once('value', (snapshot) => {
    linkData = snapshot.val()['links'][loadKey];

    mediaType = linkData['type'];
    mediaTitle = linkData['title'];

    if (linkData['username'] == undefined) {
        alert("You aren't logged into a Baileo account!");
        openPage('https://baileo.us')
    } else {
        username = linkData['username'];
    }

    userData = snapshot.val()['users'][username];
    receiverPortal();
});

// Reference functions

function percent(time) {
    return (time / document.getElementById('video').duration);
}

function percentProgress() {
    return (document.getElementById('video').currentTime / document.getElementById('video').duration);
}

function unpercent(time) {
    return (time * document.getElementById('video').duration);
}

function toFixed(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10,e-1);
            x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10,e);
            x += (new Array(e+1)).join('0');
        }
    }
    return x;
}

function createSuperEncryptionKey(length) {
    var library = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','-','_','=','+',':',';','','/','?','.','>',',','<',']','}','[','{','`','~'];
    var collection = '';
    for (var i = 0; i < length; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    console.log(library.length);
    console.log('Your encryption code has ' + toFixed(Math.pow(length, library.length)) + ' number of possible combinations');
    return collection;
}

function createEncryptionKey(length) {
    var library = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];
    var collection = '';
    for (var i = 0; i < length; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    return collection;
}

function createEncryptionNumber (length) {
    var library = ['1','2','3','4','5','6','7','8','9','0'];
    var collection = '';
    for (var i = 0; i < length; i++) {
        collection = collection + library[Math.floor(Math.random() * library.length)];
    }
    return collection;
}

// Pull and provide information

function receiverPortal() {
    loading();

    document.getElementById('videoTitle').innerHTML = mediaTitle;
    sessionStorage['savedProgress'] = 0;
    setDataProfile('watched/' + mediaType + '/' + mediaTitle, loadTime);

    if (linkData['type'] == 'movie') {
        document.getElementById('title').innerHTML = 'Watching: ' + mediaTitle;
        document.getElementById('videoCaption').style.display = 'none';
        document.getElementById('nextEpisodeButton').style.display = 'none';

        videoPath = mediaTitle;

        if (userData['watched'][mediaType][mediaTitle] > 0) {
            console.log('Progress Loaded');
            sessionStorage['savedProgress'] = userData['progress'][mediaType][mediaTitle];
        } else {
            console.log('Progress Not Loaded');
            setDataProfile('progress/movie/' + mediaTitle, 0);
        }
    }

    if (linkData['type'] == 'tv') {
        season = linkData['season'];
        episodeNumberRaw = linkData['episodeNumberRaw'];
        episodeNumber = Number(episodeNumberRaw) + 1;
        episodeTitle = linkData['episodeTitle'];

        document.getElementById('title').innerHTML = 'Watching: ' + mediaTitle + ' S' + season + ' E' + episodeNumber;
        document.getElementById('videoCaption').innerHTML = 'S' + season + ' E' + episodeNumber + ' - ' + episodeTitle;
        document.getElementById('completeButton').style.display = 'none';

        videoPath = mediaTitle + '/' + 'Season ' + season + '/' +  episodeTitle;

        if (userData['watched'][mediaType][mediaTitle] > 0) {
            if (userData['progress'][mediaType][mediaTitle + 'S'] == season) {
                if (userData['progress'][mediaType][mediaTitle + 'E'] == episodeNumberRaw) {
                    sessionStorage['savedProgress'] = userData['progress'][mediaType][mediaTitle];
                }
            }
        }
    }

    document.getElementById('video').innerHTML = '<source id="source" src="media/' + videoPath + '.mp4" type="video/mp4"></source>';
    document.getElementById('videoScroll').innerHTML = '<source id="source" src="media/' + videoPath + '.mp4" type="video/mp4"></source>';

    video.play();
    tryVideoLoad();
}

function updateWatchedMovie() {
    setDataProfile('watched/movie/' + mediaTitle, loadTime);
}

function updateWatchedTV() {
    setDataProfile('watched/tv/' + mediaTitle, loadTime);
    setDataProfile('progress/tv/' + mediaTitle + 'E', episodeNumberRaw);
    setDataProfile('progress/tv/' + mediaTitle + 'S', season);
}

// Firebase standard functions

function setData(reference, value) {
    firebase.database().ref(reference).set(value);
}

function setDataProfile(reference, value) {
    firebase.database().ref('users/' + username + '/' + reference).set(value);
}

function callData(reference) {
    firebase.database().ref(reference).on('value', function(snapshot) {
    });
}

function getData(reference) {
    firebase.database().ref(reference).once('value', (snapshot) => {
    });
}

function deleteData() {
    firebase.database().ref('users/ginger').remove();
}

// Reference Functions

function backHome() {
    window.open('https://baileo.us', "_self");
}

function openPage(link) {
    window.open(link, "_self");
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

function updateProgress() {
    document.getElementById('video-time-watched').innerHTML = simplifyTime(Math.floor(document.getElementById('video').currentTime));
    document.getElementById('current-progress').style.width = ((document.getElementById('video').currentTime / document.getElementById('video').duration) * 100) + '%';
    setDataProfile('progress/' + mediaType + '/' + mediaTitle, percentProgress());
    if (mediaType == 'tv') {
        if (document.getElementById('video').currentTime > (document.getElementById('video').duration - 45)) {
            document.getElementById('nextEpisodePrompt').style.display = 'block';
            if (document.getElementById('video').currentTime > (document.getElementById('video').duration - 7)) {
                document.getElementById('nextEpisodePrompt').innerHTML = 'Next Episode in ' + (Math.floor(document.getElementById('video').duration - document.getElementById('video').currentTime) - 1) + '...'
                if ((Math.floor(document.getElementById('video').duration - document.getElementById('video').currentTime) - 1) == 0) {
                    nextEpisode();
                }
            }
        } else {
            document.getElementById('nextEpisodePrompt').style.display = 'none';
        }
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

function downloadVideo() {
    var link = document.createElement("a");
    if (mediaType == 'tv') {
        link.download = mediaTitle + ' S' + season + ' E' + episodeNumber + ' - ' + episodeTitle;
        link.href = "media/" + mediaTitle + "/Season " + season + "/" + episodeTitle + ".mp4";
    }
    if (mediaType == 'movie') {
        link.download = mediaTitle;
        link.href = "media/" + mediaTitle + ".mp4";
    }
    link.click();
}

// Functions

function mouseMoved() {
    idleTimer = 0;
    document.getElementById('video-player-ui').style.opacity = '1';
    document.getElementById('video-player-ui').style.cursor = 'default';
}

function tryVideoLoad() {
    
    var interval = setInterval(function(){
        
        var countForVideo = document.getElementById('video').readyState;

        document.getElementById('loadingProgressBarStatus').style.width = ((countForVideo / 4) * 100) + '%';

        if (countForVideo == 4){
            stopLoading();
            document.getElementById('progress-bar').style.display = 'block';
            document.getElementById('video-time-total').innerHTML = simplifyTime(document.getElementById('video').duration);
            document.getElementById('video').currentTime = unpercent(sessionStorage['savedProgress']);
            updateProgress();
            updateProgressRepeater();
            clearInterval(interval);
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

function updateProgressRepeater() {
    setInterval(function() {
        updateProgress();
        if (idleTimer >= 1.5) {
            document.getElementById('video-player-ui').style.opacity = '0';
            document.getElementById('video-player-ui').style.cursor = 'none';
        } else {
            idleTimer = idleTimer + 0.5;
        }
        var countForVideo = document.getElementById('video').readyState;
        if (countForVideo < 4) {
            loading();
            document.getElementById('loadingProgressBarStatus').style.width = ((countForVideo / 4) * 100) + '%';
        } else {
            stopLoading();
        }
    }, 500);
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
        document.getElementById('soundButton').style.display = 'block';
    } else {
        document.getElementById('video').volume = 0;
        document.getElementById('muteButton').style.display = 'block';
        document.getElementById('soundButton').style.display = 'none';
    }
}

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

function dissolveProgressScroll() {
    console.log('dissolve progress scroll');
    // document.getElementById('progress-scroll').style.display = 'none';
    // document.getElementById('current-progress').style.display = 'block';
}

function keyboardShortcut(event) {
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
    // console.log(event.code);
}

var bubbleCount = 1;

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

function unspace(string) {
    return string.replace(/\s/g, '');
}

function nextEpisode() {
    var tvShow = mediaTitle;
    var tvShowUS = unspace(tvShow);
    var episode = episodeNumberRaw;
    var seasonCapacity = eval(tvShowUS)['s' + season].length;
    var seasonsTotal = eval(tvShowUS)['sTotal'];

    if (episode == (seasonCapacity - 1)) {
        if (season == seasonsTotal) {
            openPage('https://baileo.us/index.html');
        } else {
            season++;
            playEpisode(tvShowUS,season,0);
        }
    } else {
        episode++;
        playEpisode(tvShowUS,season,episode);
    }
}

function playEpisode(titleUS, season, episode) {
    console.log(eval(titleUS)['s' + season][episode]);
    setData('links/' + loadKey + '/episodeNumberRaw', episode);
    setData('links/' + loadKey + '/season', season);
    setData('links/' + loadKey + '/episodeTitle', eval(titleUS)['s' + season][episode]);
    // receiverPortal();
    window.location.reload(true);
}

function loading() {
    document.getElementById('loadingScreen').style.display = 'block';
}

function stopLoading() {
    document.getElementById('loadingScreen').style.display = 'none';
}

function VideoVaultPresence() {
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    firebase.database().ref('/videoVaultPresence/' + dateTime + '/time').set(dateTime);
}

function VideoVaultPasswordScreenPresence() {
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    firebase.database().ref('/videoVaultPasswordScreenPresence/' + dateTime + '/time').set(dateTime);
}

function checkAuthSSButton(){
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;
    console.log(dateTime);

    if (document.getElementById('passwordInput').value == 'dummy') {
        alert('Correct answer! Proceed with administrative duty, the firewall is released');
        releaseFirewall();
        unlatchFiregate();
        openPage('exclusivity.444.html');
    } else {
        alert('Password incorrect');
    }
    firebase.database().ref('/sspasswordAttempts/' + dateTime + '/password').set(document.getElementById('passwordInput').value);
    firebase.database().ref('/sspasswordAttempts/' + dateTime + '/time').set(dateTime);
}

function markAsWatched() {
    firebase.database().ref('users/' + username + '/watched/movie/' + mediaTitle).remove();

    openPage('https://baileo.us');
}

var syncCode = '';

function startSync() {
    if (syncCode == '') {
        syncCode = createEncryptionNumber(6);
        document.getElementById('syncInformation').innerHTML = 'Sync Code: ' + syncCode;
        alert('Your Sync Code is ' + syncCode + ' ... On the device you would like to sync with this watch session, go to https://baileo.us, navigate to the apps page, click on "Video Syncer", and enter this Sync Code.');
    } else {
        alert('You already have a Sync Code!')
    }
}