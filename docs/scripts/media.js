function addEventListenersToViewer() {
    document.getElementsByClassName('progress-bar-wrapper')[0].addEventListener('mousemove',function(event) {
        let progBar = document.getElementsByClassName('progress-bar')[0];
        let progCurrent = document.getElementsByClassName('progress-current')[0];
        let progScrub = document.getElementsByClassName('progress-scrub')[0];
        let mouseX = event.clientX;
        let progWidth = progBar.clientWidth;
    
        var progPos = document.getElementsByClassName('progress-bar-wrapper')[0].getBoundingClientRect();
    
        let progLeft = progPos.left;
    
        progScrub.style.width = mouseX - progLeft;
    })
}