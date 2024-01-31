
let head = ""
let body = ""

export function newHeading(text) {
    return "<h1>" + text + "</h1>"
}

export function buildHTML(object, content) {
    console.log(content_array)
    function sumArray(array) {
        let base = ""
        array.forEach(elem => base += elem)
        return base
    }
    object.innerHTML = sumArray(content)
}