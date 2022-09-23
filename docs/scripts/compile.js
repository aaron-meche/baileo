// MAIN JAVASCRIPT



let version = '1.8';

var loadKey;

window.addEventListener('load', function () {
    let urlParams = new URLSearchParams(document.location.search);
    let urlPageRequest = urlParams.get('p');

    if (urlPageRequest == undefined) {
        if (sessionStorage['activePage'] == undefined) {
            sessionStorage['activePage'] = 'home';
        }
        readTextFile(sessionStorage['activePage']);
    } else {
        readTextFile(urlPageRequest);
        open_url('index.html');
    }
})

function readTextFile(fileName) {
    loadedFile = fileName;
    let rawFile = new XMLHttpRequest();

    var filePath;
    if (document.head.innerHTML.includes('<meta name="encrypt-tiger">')) {
        filePath = '../pages/';
    } else {
        filePath = 'pages/';
    }

    rawFile.open("GET", filePath + fileName + ".tgr", true);
    rawFile.onreadystatechange = function() {
        // console.log(rawFile.responseText);
        if (rawFile.readyState === 4) {
            if (rawFile.responseText.includes('<pre>Cannot GET')) {
                open_page('404')
            } else {
                if (!dom('loadWindow')) {
                    sessionStorage['activePage'] = fileName;
                }
                buildPage(rawFile.responseText);
            }
        }
    }
    rawFile.send();
}

function buildPage(code) {
    let convertedCode = compile(code)
    if (dom('loadWindow')) {
        dom('loadWindow').innerHTML = convertedCode;
    } else {
        document.body.innerHTML = convertedCode;

        if (convertedCode.includes('<meta name="import-js"')) {
            var script = document.createElement("script");
            script.src = document.querySelector('meta[name="import-js"]').content;
            script.type = "text/javascript";
            document.head.appendChild(script);
        };
    }
    // console.log(convertedCode);
    document.body.style.display = 'block';
    bodyOnLoadFunctions();
    if (convertedCode.includes("<meta name='tiger-ui'>")) {
        initiateUI();
    }
}



// COMPILER



let compileTime = 0;

function compile(code) {
    var canvas;
    var command;
    var entry;
    var entry_2;

    var content = '';
    var splitCode = code.split(/\n/);

    console.time('Compiler Time');

    for (i = 0; i < splitCode.length; i++) {
        canvas = splitCode[i].split(' : ');
        // console.log(canvas);

        command = canvas[0].replace(/:/g, '$colon$');

        // Check if just normal text
        if (command.includes('$colon$$colon$')) {
            let commend_without_starting_colon = command.replace('$colon$$colon$ ','').replace('$colon$',':');
            content = content + commend_without_starting_colon;
        } 
        // If not, remove spaces
        else {
            command = command.toLowerCase().replace(/\s/g, '').replace(/</g, '$startVector$').replace(/>/g, '$endVector$').replace(/\//g, '$fSlash$').replace(/-/g, '');
        }

        entry = canvas[1];
        entry_2 = canvas[2];

        const objects = {
            // Standard HTML Items
            title: {
                format: '<title' + convertToAttribute(entry_2) + '>' + entry + '</title>',
            },
            button: {
                format: '<button ' + convertToAttribute(entry_2) + '>' + entry + '</button>',
            },
            image: {
                format: '<img src="' + entry + '" ' + convertToAttribute(entry_2) + '>',
            },
            link: {
                format: ' <a href="' + entry + '" ' + convertToAttribute(entry_2) + '>',
            },
            $fSlash$link: {
                format: '</a> ',
            },
            h: {
                format: '<h1 ' + convertToAttribute(entry_2) + '>' + entry + '</h1>',
            },
            hh: {
                format: '<h2 ' + convertToAttribute(entry_2) + '>' + entry + '</h2>',
            },
            hhh: {
                format: '<h3 ' + convertToAttribute(entry_2) + '>' + entry + '</h3>',
            },
            p: {
                format: '<p>',
            },
            $fSlash$p: {
                format: '</p>',
            },
            break: {
                format: '<br>',
            },
            form: {
                format: '<form ' + convertToAttribute(entry) + '>',
            },
            $fSlash$form: {
                format: '</form>',
            },
            input: {
                format: '<input ' + convertToAttribute(entry) + '>',
            },
            video: {
                format: '<video ' + convertToAttribute(entry_2) + '><source src="' + entry + '"></video>',
            },
            videoskin: {
                format: '<video ' + convertToAttribute(entry) + '>',
            },
            $fSlash$videoskin: {
                format: '</video>',
            },
            source: {
                format: '<source src="' + entry + '"' + ' ' + convertToAttribute(entry_2) + '>',
            },
            portal: {
                format: '<iframe src="' + convertToAttribute(entry) + '" + ' + convertToAttribute(entry_2) + '></iframe>',
            },


            // Imports
            importcss: {
                format: '<link rel="stylesheet" href="' + entry + '" ' + convertToAttribute(entry_2) + '>',
            },
            importstandlib: {
                format: '<link rel="stylesheet" href="style/main.css">',
            },
            importjs: {
                format: '<meta name="import-js" content="' + entry + '"></script>',
            },
            importwebicon: {
                format: '<link rel="shortcut icon" type="image/jpg" href="' + entry + '" ' + convertToAttribute(entry_2) + '>',
            },
            importmeta: {
                format: '<meta ' + convertToAttribute(entry) + '>',
            },
            importtigerui: {
                format: "<meta name='tiger-ui'>",
            },
            importmodule: {
                format: "<meta name='import-module' content='" + entry + "'>",
            },


            // Modules
            moduleinfo: {
                format: "<item moduleInfo='" + entry + "'>",
            },


            // Import Apple Mobile Web App
            importapplewebapp: {
                format: '<meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="' + entry + '">',
            },
            importapplewebappicon: {
                format: '<link rel="apple-touch-icon" href="' + entry + '">',
            },
            importapplewebapptitle: {
                format: '<meta name="apple-mobile-web-app-title" content="' + entry + '">',
            },


            // Div (block item)
            block: {
                format: '<div ' + convertToAttribute(entry) + '>',
            },
            lnb: {
                format: '<div ' + convertToAttribute(entry) + '>' + entry_2 + '</div>',
            },
            $fSlash$block: {
                format: '</div>',
            },


            // Span (link item)
            item: {
                format: '<span ' + convertToAttribute(entry) + '>',
            },
            lni: {
                format: '<span ' + convertToAttribute(entry) + '>' + entry_2 + '</span>',
            },
            $fSlash$item: {
                format: '</span>',
            },
        }

        
        // Ignore blank lines
        if (command == '') {
            void(0);
        } 
        // Ignore comments
        else if (command == '##'){
            void (0);
        } 
        // If command exists
        else if (objects[command] !== undefined) {
            let format = objects[command]['format'];
            content = content + format;
        } 
        else {
            if (!command.includes('$colon$$colon$')) {
                console.warn('Syntax Error: "' + canvas + '"');
            }
        }
    }
    console.timeEnd('Compiler Time');
    return content;
}

function convertToAttribute(attributes) {
    if (attributes !== undefined) {
        return attributes.replace(/\[/g, '="').replace(/\]/g, '"');
    } else {
        return '';
    }
}

function unspace(string) {
    let newstring = string.replace(/\s/g, '')
    return newstring;
}



// LIBRARY



function open_page(page) {
    readTextFile(page);
}

function open_url(page) {
    window.open(page, '_self')
}

function say(text) {
    console.log(text);
}

function getVar(id) {
    return document.getElementById(id).innerText;
}

function dom(id) {
    return document.getElementById(id);
}

function dom_s(id) {
    return document.getElementById(id).style;
}

function dom_html(id) {
    return document.getElementById(id).innerHTML;
}

function dom_c(className) {
    return document.getElementsByClassName(className);
}

function dom_ci(className, index) {
    return document.getElementsByClassName(className)[index];
}

function dom_qa(reference) {
    return document.querySelectorAll(reference);
}

function testCompileSpeed(repeat) {
    for (let i = 0; i < repeat; i++) {
        pageOnloadTiger();
    }
}

function generateNum(amount) {
    let library = [0,1,2,3,4,5,6,7,8,9];
    // let ranNum = Math.floor(Math.random() * library.length);
    var generatedKey = '';
    for (let i = 0; i < amount; i++) {
        generatedKey = generatedKey + Math.floor(Math.random() * 10);
    }
    say(generatedKey);
}

function generateKey(amount) {
    let library = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9];
    // let ranNum = Math.floor(Math.random() * library.length);
    var generatedKey = '';
    for (let i = 0; i < amount; i++) {
        generatedKey = generatedKey + library[Math.floor(Math.random() * library.length)];
    }
    return generatedKey;
}



window.addEventListener('keydown', function (event) {
    // console.log(event.code);
    // if (event.code == 'Backquote') unlockBox();
    if (event.code == 'Backslash') open_page(prompt("Enter Destination Page"));
})

// Mobile alternative ^^^
window.addEventListener('touchstart', (e) => {
    if (e.touches.length == 4) {
        open_page(prompt("Enter Destination Page"));
    }
})











// BEGIN TIGER UI LIBRARY











// This javascript file was designed to be as sophisticated as possible
// The Tiger UI library is inteded to be as powerful as any other UI library on the market!
// Designed to make beautiful, easier, and faster UIs

function initiateUI() {
    say('Tiger UI Version ' + version);
    initClickables();
    initPullDownTabs();
    initCursorFollowers();
    initRightClickMenus();
}

function initClickables() {
    let clickables = dom_qa('.clickable');
    if (clickables) {
        clickables.forEach(x => {
            x.addEventListener('mousedown', function() {
                x.style.opacity = '0.65';
            });
            x.addEventListener('mouseup', function() {
                x.style.opacity = '1';
            });

            x.addEventListener('touchstart', function() {
                x.style.opacity = '0.65';
            });
            x.addEventListener('touchend', function() {
                x.style.opacity = '1';
            });
        });
    }
}

function initPullDownTabs() {
    let pullTabs = dom_qa('.pull-down-tab');
    if (pullTabs) {
        pullTabs.forEach(x => {
            var offsets = x.parentNode.parentNode.getBoundingClientRect();
            var top = offsets.top;

            // Declare editable variables
            // var startPos = top;
            var dragOffset;
            var transDuration = x.parentNode.parentNode.style.transitionDuration;

            var mouseDown = false;
            var initBackground = x.parentNode.parentNode.style.background;

            x.parentNode.parentNode.style.position = 'fixed';

            // MOBILE
            x.addEventListener('touchstart', function(event) {
                dragOffset = event.pageY - x.parentNode.parentNode.offsetTop;
                x.parentNode.parentNode.style.transitionDuration = '0ms';
            });

            x.addEventListener('touchmove', function(event) {
                x.parentNode.parentNode.style.top = event.pageY - dragOffset + 'px';
            });

            x.addEventListener('touchend', function() {
                if (x.parentNode.parentNode.offsetTop > 50) {
                    // If pulled down more than 50 pixels, push down
                    x.parentNode.parentNode.style.transitionDuration = '500ms';
                    x.parentNode.parentNode.style.top = '100vh';

                    setTimeout(function () {
                        x.parentNode.parentNode.style.transitionDuration = transDuration;
                    }, 500);
                } else {
                    // Revert back to the start if not pulled down enough
                    x.parentNode.parentNode.style.transitionDuration = '200ms';
                    x.parentNode.parentNode.style.top = '0';

                    setTimeout(function () {
                        x.parentNode.parentNode.style.transitionDuration = transDuration;
                    }, 200);
                }
            });
            
            // DESKTOP
            x.addEventListener('mousedown', function(event) {
                dragOffset = event.pageY - x.parentNode.parentNode.offsetTop;
                x.parentNode.parentNode.style.transitionDuration = '0ms';
                mouseDown = true;
            });
            window.addEventListener('mousemove', function(event) {
                if (mouseDown) {
                    x.parentNode.parentNode.style.top = event.pageY - dragOffset + 'px';
                    x.parentNode.parentNode.style.background = 'none';
                }
            });
            x.addEventListener('mouseup', function() {
                mouseDown = false;
                if (x.parentNode.parentNode.offsetTop > 50) {
                    // If pulled down more than 50 pixels, push down
                    x.parentNode.parentNode.style.transitionDuration = '500ms';
                    x.parentNode.parentNode.style.top = '100vh';
                    setTimeout(function () {
                        x.parentNode.parentNode.style.transitionDuration = transDuration;
                        x.parentNode.parentNode.style.background = initBackground;
                    }, 500);
                } else {
                    // Revert back to the start if not pulled down enough
                    x.parentNode.parentNode.style.transitionDuration = '200ms';
                    x.parentNode.parentNode.style.top = '0';
                    setTimeout(function () {
                        x.parentNode.parentNode.style.transitionDuration = transDuration;
                        x.parentNode.parentNode.style.background = initBackground;
                    }, 200);
                }
            });
        });
    }
}

function initCursorFollowers() {
    let cursorFollowers = dom_qa('.cursor-follower');
    if (cursorFollowers) {
        cursorFollowers.forEach(x => {
            window.addEventListener('mousemove', function (event) {
                x.style.opacity = '1'
                x.style.position = 'fixed';
                x.style.top = (event.clientY - (x.offsetHeight * 0.5)) + 'px';
                x.style.left = (event.clientX - (x.offsetWidth * 0.5)) + 'px';
            })
            window.addEventListener('mouseout', function () {
                x.style.opacity = '0';
            })
        });
    }
}

function initRightClickMenus() {
    let rightClickMenu = dom_qa('.right-click-menu');
    if (rightClickMenu) {
        rightClickMenu.forEach(x => {
            x.addEventListener('mouseover', function() {
                x.style.display = 'block';
            })

            x.addEventListener('mouseout', function() {
                x.style.display = 'none';
            })

            window.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                x.style.display = 'block';
                x.style.position = 'absolute';
                x.style.zIndex = '100000000000';
                x.style.top = event.pageY - 5 + 'px';
                x.style.left = event.pageX - 5 + 'px';
            })

            window.addEventListener('click', function () {
                x.style.display = 'none';
            })

            window.addEventListener('scroll', function () {
                x.style.display = 'none';
            })
        });
    }
}