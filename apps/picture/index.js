window.addEventListener('load', function () {
    let pixelContainer = document.getElementById('pixelObjectContainer');
    let r = 0;
    let g = 0;
    let b = 0;

    for (var i = 0; i < 50; i++) {
        for (var o = 0; o < 50; o++) {
            r = r + 5.1;
            let bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            pixelContainer.innerHTML = pixelContainer.innerHTML + '<div class="pixel-object" style="background-color: ' + bgColor + '"></div>';
        }
        r = 0;
        b = b + 5.1;
    }
})