var loadKey;

window.addEventListener('load', function () {
    let urlParams = new URLSearchParams(document.location.search);
    let urlPageRequest = urlParams.get('p');
    let loadPage = sessionStorage['activePage']

    if (urlPageRequest == undefined) {
        if (loadPage == undefined) {
            sessionStorage['activePage'] = 'home';
            readTextFile('home');
        } else {
            readTextFile(loadPage);
        }
    } else {
        readTextFile(urlPageRequest);
    }

    loadPage = sessionStorage['activePage'];
})

function readTextFile(fileName) {
    loadedFile = fileName;
    let rawFile = new XMLHttpRequest();
    // Here you can change the path to your .by files
    rawFile.open("GET", "pages/" + fileName + ".tgr", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            buildPage(rawFile.responseText);
        }
    }
    rawFile.send();
}

function buildPage(code) {
    document.getElementById('body').innerHTML = compile(code);
    document.getElementById('backbone').innerHTML = '';

    document.getElementById('bodyDOM').style.display = 'block';
    bodyOnLoadFunctions();
}