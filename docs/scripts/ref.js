function dom(id) {
    return document.getElementById(id);
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function isMobileDevice(){
    return window.matchMedia('(hover: none)').matches;
}

function isLoggedIn() {
    if (uid == undefined) {
        return false;
    } else {
        return true;
    }
}