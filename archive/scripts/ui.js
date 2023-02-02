window.addEventListener('load', () => {
    document.querySelectorAll('module').forEach((request) => {
        let moduleContentToImport = fetchData(request.getAttribute('src'))

        request.getAttributeNames().forEach((attr) => {
            let attrName = attr
            let attrValue = request.getAttribute(attr)

            moduleContentToImport = moduleContentToImport.replaceAll(`_${attrName}_`, attrValue)
            
            moduleContentToImport = moduleContentToImport.replaceAll('{Page Title}', document.title)
            moduleContentToImport = moduleContentToImport.replaceAll('{URL}', document.URL)
        })

        request.innerHTML += moduleContentToImport;
    })
    main()
})

function fetchData(url) {
    let xmlhttp = new XMLHttpRequest()

    xmlhttp.addEventListener('readystatechange', function( ){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            return xmlhttp.responseText
        }
    })

    xmlhttp.open("GET", url, false)
    xmlhttp.send()

    return xmlhttp.response
}