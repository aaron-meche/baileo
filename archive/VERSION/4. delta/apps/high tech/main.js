function bodyScroll() {
    var scroll = document.getElementById('body').scrollTop;
    console.log(scroll);
    var wrapper = document.getElementById('screenContainer').style;
    if (scroll < 100) {
        wrapper.top = '0';
    } else if ((scroll >= 100) && (scroll < 200)) {
        wrapper.top = '-100vh';
    } else if ((scroll >= 200) && (scroll < 300)) {
        wrapper.top = '-200vh';
    }
}