var thumbnailPath = 'thumbnails';

function build_mediaClickObjects() {
    var mediaClickObjects = document.getElementsByClassName('building-block-media-click-object');
    if (mediaClickObjects) { 
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
            <div class='media-slider-object' style="background-image: url('` + thumbnailPath + `/` + mediaTitle.replace(/-/g, '').replace(/\s/g, '').replace(/'/g, '').replace(/:/g, '').toLowerCase() + `.jpg')">
                <div class='image-shader' onclick='` + media_transport + `'>
                    <img src='images/` + media_button_display + ` circle.png' class='image-shader-indicator'>
                </div>
                <div class='media_click_object_metadata'>
                    <div class='media_clicker_object_title'>` + mediaTitle + `</div>
                    <div class='media_clicker_object_category'>` + mediaCat + `</div>
                    <div class='media_clicker_object_type'>Media ` + mediaTypeDescrip + `</div>
                </div>
            </div>`
        }
    }
    document.body.style.display = 'block';
}

function inject_expandScreen() {
    document.body.insertAdjacentHTML('beforeend',`
    <div class='expand-screen' id='tvExpandScreen'>
        <div class='expand-screen-contents' id='tvScreenContents'>
            <div class='close-screen-clicker' onclick='closeTvScreen()'></div>
            <div class='expand-panel' id='tvPanel'>
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
                        <div id='tvPanelNavbarContents' class='horizontal-scroll horizontal-navbar'></div>
                    </div>
                    <div id='tvPanelEpisodeList' class='list'>
                    </div>
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