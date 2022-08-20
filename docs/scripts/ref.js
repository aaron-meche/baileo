function dom(id) {
    return document.getElementById(id);
}

function unspace(string) {
    return string.replace(/\s/g, '');
}

function isMobileDevice(){
    return window.matchMedia('(hover: none)').matches;
}

function removeThorns(string) {
    return string.replace(': ',' - ').replace("'",'');
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