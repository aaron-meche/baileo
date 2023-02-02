function launch(applicationTitle) {
    document.getElementById(applicationTitle + '.app').style.display = 'block';
}

var mouseIsDown = false;
var selectedWindow;
var idTimeout;

var appTitles = document.querySelector('.title');

function titlePress(self) {
    mouseIsDown = true;
    selectedWindow = self;
    idTimeout = setTimeout(function() {
        if(mouseIsDown) {
            console.log('2 seconds')
        }
    }, 2000);
}

function titleUnpress(self) {
    clearTimeout(idTimeout);
    mouseIsDown = false;
}

function mouseMoved() {
    if (mouseIsDown) {
        console.log('moving window');
        self.style.top = '100vh';
    }
}
