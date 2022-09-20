function bodyOnLoadFunctions() {
    var script = document.createElement("script");
    script.src = "scripts/bundle.js";
    script.type = "text/javascript";
    document.head.appendChild(script);
}

function isMobileDevice(){
    return window.matchMedia('(hover: none)').matches;
}