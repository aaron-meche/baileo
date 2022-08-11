function compile(code) {
    var canvas;
    var command;
    var entry;
    var entry_2;

    var content = '';
    var splitCode = code.split(/\n/);

    for (i = 0; i < splitCode.length; i++) {
        canvas = splitCode[i].split(' : ');
        // console.log(canvas);

        command = canvas[0].replace(/</g, '$startVector$').replace(/>/g, '$endVector$').replace(/\//g, '$fSlash$').replace(/:/g, '$colon$').replace(/-/g, '');

        // Check if just normal test
        if (command.includes('$colon$$colon$')) {
            let commend_without_starting_colon = command.replace('$colon$$colon$','').replace('$colon$',':');
            content = content + commend_without_starting_colon;
        } 
        // If not, remove spaces
        else {
            command = command.replace(/\s/g, '');
        }

        entry = canvas[1];
        entry_2 = canvas[2];

        const objects = {
            // Standard HTML Items
            title: {
                format: '<title' + convertToAttribute(entry_2) + '>' + entry + '</title>',
            },
            $fSlash$: {
                format: entry,
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
            break: {
                format: '<br>',
            },
            // Imports
            importcss: {
                format: '<link rel="stylesheet" href="' + entry + '" ' + convertToAttribute(entry_2) + '>',
            },
            importjs: {
                format: '<script src="' + entry + '"></script>',
            },
            importwebicon: {
                format: '<link rel="icon" type="image/x-icon" href="' + entry + '" ' + convertToAttribute(entry_2) + '>',
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
            textblock: {
                format: '<div ' + convertToAttribute(entry) + '>',
            },
            navblock: {
                format: '<div ' + convertToAttribute(entry) + '>',
            },
            block: {
                format: '<div ' + convertToAttribute(entry) + '>',
            },
            $fSlash$block: {
                format: '</div>',
            },
            // Span (link item)
            item: {
                format: '<span ' + convertToAttribute(entry) + '>',
            },
            $fSlash$item: {
                format: '</span>',
            },
            // Meta Tag
            importmeta: {
                format: '<meta ' + convertToAttribute(entry) + '>'
            },
            // Scripts
            initscript: {
                format: '<script>' 
            },
            conclscript: {
                format: '</script>' 
            },
            // Declarations
            declarevar: {
                format: '<div id="' + entry + '" style="display:none">' + entry_2 + '</div>'
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