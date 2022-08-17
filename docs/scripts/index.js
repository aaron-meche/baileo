// Functions

var uid;

function bodyOnLoadFunctions() {
    build_mediaClickObjects();
    inject_expandScreen();
    displayCorrentAccountWrapper();
}

function displayCorrentAccountWrapper() {
    if (isLoggedIn()) {
        uid = localStorage['uid'];
        updateAccountPreviewInformation();
        if (dom('accountDetectedWrapper')) {
            dom('accountDetectedWrapper').style.display = 'block';
        }
    } else {
        if (dom('noAccountDetectedWrapper')) {
		    dom('noAccountDetectedWrapper').style.display = 'block';
        }
	}
}

function updateAccountPreviewInformation() {
    dom('accountDisplayName').innerHTML = localStorage['display name'];

    let name = localStorage['display name'];
    name = name.split(' ');
    let firstInitial = name[0][0];
    let lastInitial = name[1][0];
    let initals = firstInitial + lastInitial;

    dom('accountDisplayInitials').innerHTML = initals;
    if (localStorage['pfp url']) {
        dom('accountDisplayInitials').innerHTML = '';
        dom('accountDisplayInitials').style.background = 'url("' + localStorage['pfp url'] + '") center center no-repeat';
        dom('accountDisplayInitials').style.backgroundSize = 'cover';
    }
}

function displayVersionInfo() {
    console.log('o');
    let version = '5.0.0 U';
    let release = 'Epsilon';
    alert('Version: ' + release + ' ' + version);
}

function expandTv(mediaTitle) {
    var tvScreen = document.getElementById('tvExpandScreen');
    var tvNavbarContent = document.getElementById('tvPanelNavbarContents');
    var tvPanelTitle = document.getElementById('tvPanelTitle');
    var tvPanelEpisodeList = document.getElementById('tvPanelEpisodeList');
    var tvPanelCoverImage = document.getElementById('tvPanelCoverImage');
    var tvPanel = document.getElementById('tvPanel');
    var title = mediaTitle;
    var titleUS = unspace(mediaTitle);

    sessionStorage['expandPanelTitle'] = title;
    sessionStorage['activeSeasonTab'] = 1;

    tvScreen.style.display = 'block';
    tvPanel.scrollTop = '0';
    tvNavbarContent.scrollLeft = '0';
    tvPanelTitle.innerHTML = title;
    tvNavbarContent.innerHTML = '';
    tvPanelEpisodeList.innerHTML = '';
    tvPanelCoverImage.style.backgroundImage = 'url("cover-image/' + title.replace(/-/g, '').replace(/\s/g, '').replace(/'/g, '').replace(/:/g, '').toLowerCase() + '.jpg")';

    for (let i = 1; i <= media_data[titleUS]['sTotal']; i++) {
        if (i == sessionStorage['activeSeasonTab']) {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='item active'>Season ` + i + `</div>`
        } else {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='item' onclick='selectSeason("` + i + `")'>Season ` + i + `</div>`
        }
    }

    tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='item' onclick='openPage("http://50.58.218.209/media/` + title + `")'>View Source</div>`);

    for (let i = 1; i <= media_data[titleUS]['s1'].length; i++) {
        tvPanelEpisodeList.insertAdjacentHTML('beforeend',`
            <div class='listItemChoice' onclick='transport("tv","` + title + `","1","` + i + `")'>
                <div class='listItemTitle'>` + (media_data[titleUS]['s1'])[i] + `</div>
                <div class='listItemLabel'>Episode ` + i + `</div>
            </div>`);
    }

    if (localStorage['hasWatched_' + title] == undefined) {
        document.getElementById('startWatchingTvButton').style.display = 'block';
    } else {
        document.getElementById('continueWatchingButton').style.display = 'block';
        document.getElementById('continueWatchingButton').innerHTML = 'Continue - S' +  localStorage[title + '_saved_season'] + ':E' + (Number(localStorage[title + '_saved_episode']) + 1);
    }
    
    tvScreenContents.style.top = '0';
    tvScreenContents.style.opacity = '1';
}

function selectSeason(seasonNum) {
    var tvNavbarContent = document.getElementById('tvPanelNavbarContents');
    var tvPanelEpisodeList = document.getElementById('tvPanelEpisodeList');
    var title = sessionStorage['expandPanelTitle'];
    var titleUS = unspace(title);

    sessionStorage['activeSeasonTab'] = seasonNum;

    tvPanelEpisodeList.innerHTML = '';
    tvNavbarContent.innerHTML = '';

    for (let i = 1; i <= media_data[titleUS]['sTotal']; i++) {
        if (i == sessionStorage['activeSeasonTab']) {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='item active'>Season ` + i + `</div>`
        } else {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='item' onclick='selectSeason("` + i + `")'>Season ` + i + `</div>`
        }
    }
    
    tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item' onclick='openPage("http://50.58.218.209/media/` + title + `")'>View Source</div>`);

    for (let i = 1; i <= media_data[titleUS]['s' + seasonNum].length; i++) {
        tvPanelEpisodeList.innerHTML = tvPanelEpisodeList.innerHTML + `
            <div class='listItemChoice' onclick='transport("tv","` + title + `","` + seasonNum + `","` + i + `")'>
                <div class='listItemTitle'>` + media_data[titleUS]['s' + seasonNum][i] + `</div>
                <div class='listItemLabel'>Episode ` + i + `</div>
            </div>`;
    }
}

sessionStorage['savedScrollLocation22838'] = 0;

function tvExpandPanelScrolled() {
    var scrollTop = document.getElementById('tvPanelNavbar').getBoundingClientRect().top;
    if (scrollTop == sessionStorage['savedScrollLocation22838']) {
        // document.getElementById('tvPanelNavbar').style.backgroundColor = 'var(--royalPurple)';
        document.getElementById('tvPanelNavbar').style.borderBottom = 'solid 1pt gray';
    } else {
        sessionStorage['savedScrollLocation22838'] = scrollTop;
        // document.getElementById('tvPanelNavbar').style.background = 'none';
        document.getElementById('tvPanelNavbar').style.borderBottom = 'none';
    }
}

function continueWatching(title) {
    var mediaType = media_data[unspace(title)]['mediaType'];
    
    if (mediaType == 'tv') {
        transport('tv',title,localStorage[title + '_saved_season'],localStorage[title + '_saved_episode'])
    } else if (mediaType == 'movie') {
        transport('movie',title);
    }
}

function transport(type, title, season, episode) {
    let baseLink = 'http://50.58.218.209/media/';
    let newTitle = title.trim();
    if (type == 'tv') {
        let generatedLink = baseLink + newTitle + '/' + 'Season ' + season + '/' + media_data[unspace(title)]['s' + season][episode] + '.mp4';
        open_url(generatedLink);
    } else if (type == 'movie') {
        let generatedLink = baseLink + newTitle + '.mp4';
        open_url(generatedLink);
    }
    // let landing_page = 'receiver.html';
    // if (isMobileDevice()) {
    //     landing_page = 'mobile-viewer.html';
    // }
    // let generatedLink = 'player/' + landing_page + '?type=' + type + '&title=' + title + '&season=' + season + '&episode=' + episode;
    // open_url(generatedLink);
}

function closeTvScreen() {
    var tvExpandScreen = document.getElementById('tvExpandScreen');
    var tvScreenContents = document.getElementById('tvScreenContents');

    tvScreenContents.style.top = '100vh';
    tvScreenContents.style.opacity = '0';
    setTimeout(function() {
        tvExpandScreen.style.display = 'none';
    }, 100);


    document.getElementById('continueWatchingButton').style.display = 'none';
    document.getElementById('startWatchingTvButton').style.display = 'none';
}

var mobileNavMenuExpanded = false;

function mobileNavMenu() {
    if (mobileNavMenuExpanded) {
        document.getElementById('mobileNavbarDropMenu').style.display = 'none';
        document.getElementById('expandMobileNavMenu').style.display = 'block';
        document.getElementById('closeMobileNavMenu').style.display = 'none';
        mobileNavMenuExpanded = false;
    } else {
        document.getElementById('mobileNavbarDropMenu').style.display = 'block';
        document.getElementById('expandMobileNavMenu').style.display = 'none';
        document.getElementById('closeMobileNavMenu').style.display = 'block';
        mobileNavMenuExpanded = true;
    }
}

function search(string) {
    searchTitleBars(string);
    let input = string;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('media_click_object_metadata');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerText.toLowerCase().includes(input)) {
            x[i].parentNode.style.display = "none";
        }
        else {
            x[i].parentNode.style.display = "inline-block";
        }
    }
}

function searchTitleBars(string) {
    let input = string;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('media-slider-section');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerText.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}

function readSearchUrl() {
    var urlParams = new URLSearchParams(document.location.search);
    search(urlParams.get('search').replace(/%20/g, ' '));
    document.getElementById('searchBar').value = urlParams.get('search').replace(/%20/g, ' ');
}

function randomizeTv() {
    var title = sessionStorage['expandPanelTitle'];
    var sTotal = media_data[unspace(title)]['sTotal'];
    var randomSeason = Math.floor(Math.random() * sTotal) + 1;
    var randomEpisode = Math.floor(Math.random() * (media_data[unspace(title)]['s' + randomSeason]).length);
    transport('tv',sessionStorage['expandPanelTitle'],randomSeason,randomEpisode);
}

function toggleLeftNavbar() {
    let navbar = document.getElementsByClassName('left-navbar')[0];
    let content = document.getElementsByClassName('content')[0];
    console.log(navbar.offsetLeft);
    if (navbar.offsetLeft >= 0) {
        navbar.style.left = '-250pt';
        content.style.left = '0';
        content.style.width = '100vw';
    } else {
        navbar.style.left = '0';
        content.style.left = '250pt';
        content.style.width = 'calc(100vw - 250pt)';
    }
}