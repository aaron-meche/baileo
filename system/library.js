function open_page(page) {
    // window.open('index.html?p=' + page, '_self');
    sessionStorage['activePage'] = page;
    readTextFile(page);
}

function ext_link(page) {
    window.open(page, '_self')
}

function say(text) {
    console.log(text);
}

function getVar(id) {
    return document.getElementById(id).innerText;
}

function dom(id) {
    return document.getElementById(id)
}