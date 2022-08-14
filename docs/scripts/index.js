// Reference Functions

function openPage(location) {
    window.open(location, "_self");
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function isMobileDevice(){
    return window.matchMedia('(hover: none)').matches;
}

// Functions

var thumbnailPath = 'thumbnails';

function build_mediaClickObjects() {
    var mediaClickObjects = document.getElementsByClassName('building-block-media-click-object');
    if (mediaClickObjects) { 
        for (var i = 0; i < mediaClickObjects.length; i++) {
            var mediaTitle = mediaClickObjects[i].innerHTML;
            var mediaType = eval(unspace(mediaTitle).replace(/'/g, '').replace(/:/g, '').replace(/-/g, ''))['mediaType'];
            var mediaCat = eval(unspace(mediaTitle).replace(/'/g, '').replace(/:/g, '').replace(/-/g, ''))['cat'];

            if (mediaType == 'movie') {
                media_button_display = 'play';
                media_transport = 'transport("movie","' + mediaTitle + '")';
            } else if (mediaType == 'tv') {
                media_button_display = 'continue';
                media_transport = 'expandTv("' + mediaTitle + '")';
            }

            mediaClickObjects[i].innerHTML = `
            <div class='media-slider-object media_` + mediaType + `' style="background-image: url('` + thumbnailPath + `/` + mediaTitle.replace(/-/g, '').replace(/\s/g, '').replace(/'/g, '').replace(/:/g, '').toLowerCase() + `.jpg')" onclick='` + media_transport + `'>
                <div class='image-shader'>
                    <img src='images/` + media_button_display + ` circle.png' class='image-shader-indicator'>
                </div>
                <div class='media_click_object_metadata'>
                    <div class='media_clicker_object_title'>` + mediaTitle + `</div>
                    <div class='media_clicker_object_category'>` + mediaCat + `</div>
                </div>
            </div>`
        }
    }
}

function build_mediaClickListItems() {
    var mediaClickListItems = document.getElementsByClassName('building-block-media-click-list-item');
    if (mediaClickListItems) {
        for (var i = 0; i < mediaClickListItems.length; i++) {
            var mediaTitle = mediaClickListItems[i].innerText;
            var mediaCat = eval(unspace(mediaTitle).replace(/'/g, '').replace(/:/g, '').replace(/-/g, ''))['cat'];
            var mediaType = eval(unspace(mediaTitle).replace(/'/g, '').replace(/:/g, '').replace(/-/g, ''))['mediaType'];
    
            if (mediaType == 'movie') {
                mediaClickListItems[i].innerHTML = `
                <div class='listItemChoice searchItemChoice transport-button' onclick='transport("movie", "` + mediaTitle + `")'>
                    <div class='listItemTitle'>
                        <div class="listItemImageFrame" style="background-image: url('` + thumbnailPath + `/` + mediaTitle.replace(/-/g, '').replace(/\s/g, '').replace(/'/g, '').replace(/:/g, '').toLowerCase() + `.jpg')"></div>
                        ` + mediaTitle + `
                    </div>
                    <div class='listItemLabel'>Movie</div>
                    <div style='display: none'>type:movie category:` + mediaCat + `</div>
                </div>`
            } else if (mediaType == 'tv') {
                mediaClickListItems[i].innerHTML = `
                <div class='listItemChoice searchItemChoice tv-expand-link' onclick="expandTv('` + mediaTitle + `')">
                    <div class='listItemTitle'>
                        <div class="listItemImageFrame" style="background-image: url('` + thumbnailPath + `/` + mediaTitle.replace(/-/g, '').replace(/\s/g, '').replace(/'/g, '').replace(/:/g, '').toLowerCase() + `.jpg')"></div>
                        ` + mediaTitle + `
                    </div>
                    <div class='listItemLabel'>TV Show</div>
                    <div style='display: none'>type:tv category:` + mediaCat + `</div>
                </div>`
            }
        }
    }
}

function inject_expandScreen() {
    document.getElementById('body').insertAdjacentHTML('beforeend',`
    <div class='expand-screen' id='tvExpandScreen'>
        <div class='expand-screen-contents' id='tvScreenContents'>
            <div class='close-screen-clicker' onclick='closeTvScreen()'></div>
            <div class='expand-panel' id='tvPanel' onscroll='tvExpandPanelScrolled()'>
                <div class='expand-panel-topbar center-content' onclick='closeTvScreen()'>
                    <img src="images/close.png" class='close-panel-icon' onclick='closeTvScreen()'>
                    <span class='expand-panel-title' id='tvPanelTitle'>Tv Title</span>
                </div>
                <div class='expand-panel-impression-image' id="tvPanelCoverImage">
                    <div class='action-button-container absolute bottom'>
                        <div class='activity-button filled-activity-button transport-button' id='startWatchingTvButton' style='display:none' onclick='transport("tv",sessionStorage["expandPanelTitle"],1,0)'>Start Watching</div>
                        <div class='activity-button filled-activity-button transport-button' id='continueWatchingButton' style='display:none' onclick='continueWatching(sessionStorage["expandPanelTitle"])'>Continue</div>
                        <div class='activity-button transport-button' onclick='randomizeTv()'>Random Episode</div>
                    </div>
                </div>
                <div class='expand-panel-contents'>
                    <div class='expand-panel-navbar' id='tvPanelNavbar'>
                        <div id='tvPanelNavbarContents' class='expand-panel-navbar-contents horizontal-scroll'></div>
                    </div>
                    <div id='tvPanelEpisodeList' class='list'>
                    </div>
                </div>
            </div>
        </div>
    </div>`);
}

function bodyOnLoadFunctions() {
    build_mediaClickObjects();
    build_mediaClickListItems();
    inject_expandScreen();
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

    var a = 1;
    while (a <= eval(titleUS)['sTotal']) {
        if (a == sessionStorage['activeSeasonTab']) {
            tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item active-navbar-link-item'>Season ` + a + `</div>`);
        } else {
            tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item new-season-button' onclick='selectSeason("` + a + `")'>Season ` + a + `</div>`);
        }
        a++;
    }

    tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item' onclick='openPage("http://50.58.218.209/media/` + title + `")'>View Source</div>`);

    var b = 0;
    while (b < (eval(titleUS)['s1']).length) {
        tvPanelEpisodeList.insertAdjacentHTML('beforeend',`
            <div class='listItemChoice transport-button' onclick='transport("tv","` + title + `","1","` + b + `")'>
                <div class='listItemTitle'>` + (eval(titleUS)['s1'])[b] + `</div>
                <div class='listItemLabel'>Episode ` + (b + 1) + `</div>
            </div>`);
        b++;
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

    var a = 1;
    while (a <= eval(titleUS)['sTotal']) {
        if (a == sessionStorage['activeSeasonTab']) {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='navbar-link-item active-navbar-link-item'>Season ` + a + `</div>`
        } else {
            tvNavbarContent.innerHTML = tvNavbarContent.innerHTML + `<div class='navbar-link-item new-season-button' onclick='selectSeason("` + a + `")'>Season ` + a + `</div>`
        }
        a++;
    }

    tvNavbarContent.insertAdjacentHTML('beforeend',`<div class='navbar-link-item' onclick='openPage("http://50.58.218.209/media/` + title + `")'>View Source</div>`);

    var b = 0;
    while (b < (eval(titleUS)['s' + seasonNum]).length) {
        tvPanelEpisodeList.innerHTML = tvPanelEpisodeList.innerHTML + `
            <div class='listItemChoice transport-button' onclick='transport("tv","` + title + `","` + seasonNum + `","` + b + `")'>
                <div class='listItemTitle'>` + (eval(titleUS)['s' + seasonNum])[b] + `</div>
                <div class='listItemLabel'>Episode ` + (b + 1) + `</div>
            </div>`;b++;
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
    var mediaType = eval(unspace(title))['mediaType'];
    
    if (mediaType == 'tv') {
        transport('tv',title,localStorage[title + '_saved_season'],localStorage[title + '_saved_episode'])
    } else if (mediaType == 'movie') {
        transport('movie',title);
    }
}

function transport(type, title, season, episode) {
    let landing_page = 'receiver.html';
    if (isMobileDevice()) {
        landing_page = 'mobile-viewer.html';
    }
    let generatedLink = 'player/' + landing_page + '?type=' + type + '&title=' + title + '&season=' + season + '&episode=' + episode;
    openPage(generatedLink);
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
    let x = document.getElementsByClassName('media_clicker_object_metadata');
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
    var sTotal = eval(unspace(title))['sTotal'];
    var randomSeason = Math.floor(Math.random() * sTotal) + 1;
    var randomEpisode = Math.floor(Math.random() * (eval(unspace(title))['s' + randomSeason]).length);
    transport('tv',sessionStorage['expandPanelTitle'],randomSeason,randomEpisode);
}

function readFile() {
    var fr=new FileReader();
    fr.onload=function(){
        console.log(fr.result);
    }
    fr.readAsText(this.files[0]);
}

function dom(id) {
    return document.getElementById(id);
}

function toggleLeftNavbar() {
    let navbar = document.getElementsByClassName('left-navbar')[0];
    let content = document.getElementsByClassName('content')[0];
    console.log(navbar.offsetLeft);
    if (navbar.offsetLeft >= 0) {
        navbar.style.left = '-250pt';
        content.style.left = '0';
    } else {
        navbar.style.left = '0';
        content.style.left = '250pt';
    }
}