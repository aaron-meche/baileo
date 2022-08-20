// ----- Onloads, Event listners, and basic functions

function bodyOnLoadFunctions () {
    if (document.getElementsByClassName('building-block-media-click-object')[0]) {
        build_mediaClickObjects();
        inject_expandScreen();
    }
    if (sessionStorage['activePage'] == 'viewer-desktop') {
        launchDesktopViewer();
    }
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


// ----- Expand panel


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

    tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='item' onclick='open_url("https://50.58.218.209/media")'>View Source</div>`);

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

    tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='item' onclick='open_url("https://50.58.218.209/media")'>View Source</div>`);

    for (let i = 1; i <= media_data[titleUS]['s' + seasonNum].length; i++) {
        tvPanelEpisodeList.innerHTML = tvPanelEpisodeList.innerHTML + `
            <div class='listItemChoice' onclick='transport("tv","` + title + `","` + seasonNum + `","` + i + `")'>
                <div class='listItemTitle'>` + media_data[titleUS]['s' + seasonNum][i] + `</div>
                <div class='listItemLabel'>Episode ` + i + `</div>
            </div>`;
    }
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


// ----- Transportation to watch media


function transport(type, title, season, episode) {
    localStorage['transport_type'] = type;
    localStorage['transport_title'] = title;
    localStorage['transport_season'] = season;
    localStorage['transport_episode'] = episode;

    let transportPage = 'viewer-mobile';

    if (!isMobileDevice()) {
        transportPage = 'viewer-desktop'
    }

    open_page(transportPage);
}

function randomizeTv() {
    var title = sessionStorage['expandPanelTitle'];
    var sTotal = media_data[unspace(title)]['sTotal'];
    var randomSeason = Math.floor(Math.random() * sTotal) + 1;
    var randomEpisode = Math.floor(Math.random() * (media_data[unspace(title)]['s' + randomSeason]).length);
    transport('tv',sessionStorage['expandPanelTitle'],randomSeason,randomEpisode);
}


// -----


function filterMedia(self, string) {
    search(string);
    for (let i = 0; i < self.parentNode.childElementCount; i++) {
        self.parentNode.children[i].classList.remove("active");
    }
    self.classList.add("active");
}

function clearMediaFilter() {
    for (let i = 0; i < dom('media_filter').childElementCount; i++) {
        dom('media_filter').children[i].classList.remove("active");
    }
    dom('allMediaFilter').classList.add("active");
    dom('searchBar').value = '';
}

function search(string) {
    let newString = string.toLowerCase();
    let y = document.getElementsByClassName('media-slider-section');
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none";
    }
    searchMediaObjects(newString);
}

function searchMediaObjects(string) {
    let x = document.getElementsByClassName('building-block-media-click-object');
    console.log(x.length);
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(string)) {
            x[i].style.display = "none";
        }
        else {
            x[i].parentNode.parentNode.style.display = "block";
            x[i].style.display = "inline-block";
        }
    }
}


// -----


// Code