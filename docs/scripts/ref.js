function dom(id) {
    return document.getElementById(id);
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function isMobileDevice(){
    return window.matchMedia('(hover: none)').matches;
}

function open_page(page) {
    window.open(page + '.html','_self')
}

function open_url(page) {
    window.open(page,'_self')
}