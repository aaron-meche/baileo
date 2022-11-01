function main() {
    if (sessionStorage['activePage'] == 'home') {
        buildMediaSelectView();
    }

    let url = new URLSearchParams(document.location.search);
    let bool_securityConfirm = url.get('security');
    if (bool_securityConfirm == 'confirm') {
        localStorage['securityConfirm'] = 'true';
    } else if (bool_securityConfirm) {
        alert('Security Confirmation Unsuccessful');
    }

}





function open_panel(name) {
    let panel = dom(name + '_panel');
    panel.style.visibility = 'visible';
    setTimeout(function() {
        panel.style.left = '0';
    }, 1);
}

function close_panel(panel) {
    panel.style.left = '100vw';
    setTimeout(function() {
        panel.style.visibility = 'hidden';
    }, 300);
}





function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}







function expand_tv(title) {
    let display = {
        image: dom('expandTvPanelImage'),
        title: dom('expandTvPanelTitle'),
        desc: dom('expandTvPanelDescription'),
        seasons: dom('expandTvPanelNavbar'),
        episodes: dom('expandTvPanelEpisodes'),
    }

    display.title.innerHTML = title;
    display.image.style.backgroundImage = `url("images/cover-image/${title}.jpeg")`;
    display.desc.innerHTML = '';

    buildSeason(1, title);

    open_panel('expand_tv');
}

function buildSeason(num, title, seasons) {
    let display = {
        seasons: dom('expandTvPanelNavbar'),
        episodes: dom('expandTvPanelEpisodes'),
    }
    display.seasons.innerHTML = '';
    display.episodes.innerHTML = '';
    for (let i = 0; i < mediaData[title.replaceAll(' ', '_')]['sTotal']; i++) {
        let classes = 'item';
        if (i + 1 == num) {
            classes = 'item active';
        }
        display.seasons.innerHTML += `
        <div class='${classes}' onclick='buildSeason(${i + 1}, "${title}")'>Season ${i + 1}</div>
        `
    }
    for (let i = 0; i < mediaData[title.replaceAll(' ', '_')]['s' + num].length; i++) {
        display.episodes.innerHTML += `
        <div class='item' onclick='watch("${title}", ${num}, ${i})'>
            <div class='left'>${mediaData[title.replaceAll(' ', '_')]['s' + num][i]}</div>
            <div class='right'>Episode ${i + 1}</div>
        </div>
        `
    }
}

function watch(title, season, episode) {
    if (localStorage['securityConfirm'] == 'true') {
        let display = {
            title: dom('watchMediaTitle'),
            description: dom('watchMediaDescription'),
            video: dom('video'),
        }
    
        let episodeTitle = '';
        let path = title;
        let description = '';
    
        if (mediaData[title.replaceAll(' ', '_')]['mediaType'] == 'tv') {
            episodeTitle = mediaData[title.replaceAll(' ', '_')]['s' + season][episode];
            path = `${title}/Season ${season}/${episodeTitle}`;
            description = `${episodeTitle} - S${season} E${episode + 1}`;
        }
    
        display.title.innerHTML = title;
        display.description.innerHTML = description;
    
        video.innerHTML = `<source src="https://209.163.185.11/media/${path}.mp4" type="video/mp4">`
        open_panel('watch');
    } else {
        alert("You must give permission to the file server to allow media to be shared over HTTP. You are about to be redirected, accept the security policy to allow viewing on Baileo.");
        open_url('https://209.163.185.11/redirect.html');
    }
}

function buildMediaSelectView() {
    function importMediaObject(title, data) {
        let importBox = dom('mediaImportSection');
        let mediaTitle = title.replaceAll('_', ' ');
        let mediaCategory = capitalizeFirstLetter(data['cat']);

        let mediaCaption = 'Movie';
        if (data['mediaType'] == 'tv') {
            mediaCaption = `TV Show - ${data['sTotal']} Seasons`
        }
        let onclickAction = `watch("${mediaTitle}")`;
        if (data['mediaType'] == 'tv') {
            onclickAction = `expand_tv("${mediaTitle}")`
        }
    
        // If no category, create
        if (!dom(`media_category_${mediaCategory}`)) {
            importBox.innerHTML += `
            <div class='section'>
                <div class='section-title'>${mediaCategory}</div>
                <div class='display-scroll x-scroll' id='media_category_${mediaCategory}'></div>
            </div>
            `
        }
    
        // Build object
        dom(`media_category_${mediaCategory}`).innerHTML += `
        <div class='item' onclick='${onclickAction}'>
            <div class='image landscape' style='background-image: url("images/thumbnails/${mediaTitle}.jpeg")'></div>
            <div class='title'>${mediaTitle}</div>
            <div class='caption'>${mediaCaption}</div>
        </div>
        `
    
    }

    for (let i = 0; i < Object.keys(mediaData).length; i++) {
        importMediaObject(Object.keys(mediaData)[i], Object.values(mediaData)[i]);
    }
}