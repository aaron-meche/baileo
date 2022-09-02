var thumbnailPath = 'thumbnails';

function build_mediaClickObjects() {
    var mediaClickObjects = document.getElementsByClassName('building-block-media-click-object');
    if (mediaClickObjects) { 
        // console.log(shuffle(media_data))
        for (var i = 0; i < mediaClickObjects.length; i++) {
            var mediaTitle = mediaClickObjects[i].innerHTML;
            var mediaType = media_data[unspace(mediaTitle).replace(/'/g, '').replace(/:/g, '').replace(/-/g, '')]['mediaType'];
            var mediaCat = media_data[unspace(mediaTitle).replace(/'/g, '').replace(/:/g, '').replace(/-/g, '')]['cat'];
            var mediaTypeDescrip;

            if (mediaType == 'movie') {
                media_button_display = 'play';
                media_transport = 'transport("movie","' + mediaTitle + '")';
                mediaTypeDescrip = 'Movie';
            } else if (mediaType == 'tv') {
                media_button_display = 'continue';
                media_transport = 'expandTv("' + mediaTitle + '")';
                mediaTypeDescrip = 'TV Show';
            }

            mediaClickObjects[i].innerHTML = `
            <div class='media-button-panel'>
                <div class='media-button-object clickable' style="background-image: url('` + thumbnailPath + `/` + mediaTitle.replace(/-/g, '').replace(/\s/g, '').replace(/'/g, '').replace(/:/g, '').toLowerCase() + `.jpg')"  onclick='` + media_transport + `' ontouchstart="this.style.opacity = '0.5'" ontouchend="this.style.opacity = '1'">
                    <div class='image-shader'>
                        <img src='images/` + media_button_display + ` circle.png' class='image-shader-indicator'>
                    </div>
                    <div class='media_click_object_metadata'>
                        <div class='media_clicker_object_title'>` + mediaTitle + `</div>
                        <div class='media_clicker_object_category'>` + mediaCat + `</div>
                        <div class='media_clicker_object_type'>Media ` + mediaTypeDescrip + `</div>
                    </div>
                </div>
            </div>`
        }
    }
    document.body.style.display = 'block';
}

function theory() {
    var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var newarray = [];
    let maxrev = array.length;
    for (let i = 0; i <maxrev; i++) {
        let rannum = Math.floor(Math.random() * array.length);
        if (newarray.includes(array[rannum])) {
            maxrev++;
        } else {
            newarray.push(array[rannum]);
        }
    }
    console.log(newarray);
}

function inject_expandScreen() {
    localStorage['position of close_expand_panel icon'] = 'right: 0;';
    if (!localStorage['position of close_expand_panel icon']) {
    }
    document.body.insertAdjacentHTML('beforeend',`
    <div class='expand-screen-wrapper' id='expandScreen'>
        <div class='close-screen-clicker' onclick='closeTvScreen()'></div>
        <div class='expand-panel' id='tvPanel'>
            <div class='expand-panel-topbar center-content pull-down-tab'>
                <img src="images/close.png" class='close-panel-icon' onclick='closeTvScreen()' style='` + localStorage['position of close_expand_panel icon'] + `'>
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
                    <div id='tvPanelNavbarContents' class='horizontal-scroll horizontal-navbar'></div>
                </div>
                <div id='tvPanelEpisodeList' class='list'>
                </div>
            </div>
        </div>
    </div>`);

    dom('tvPanelNavbar').addEventListener('mousemove',function(event){
        var pos = dom('tvPanelNavbar').getBoundingClientRect();
        let width = dom('tvPanelNavbar').clientWidth;
        let mouseX = event.clientX;

        let boundLeft = pos.left;
        let boundRight = pos.left + width;

        let boundZone = 250;
        let zoneLeftBound = pos.left + boundZone;
        let zoneRightBound = boundRight - boundZone;

        if (mouseX < zoneLeftBound) {
            dom('tvPanelNavbarContents').scrollLeft = dom('tvPanelNavbarContents').scrollLeft - 2;
        } else if (mouseX > zoneRightBound) {
            dom('tvPanelNavbarContents').scrollLeft = dom('tvPanelNavbarContents').scrollLeft + 2;
        }
    })
}