let URL

async function http_req(URL) {
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        return await response.json()
    } catch (error) {
        return {"error": error}
    }
}

export async function connect(url, password, success, failure) {
    URL = url
    return http_req(`${URL}/connect/${password}`).then(response => {
        if (response !== undefined) success()
        else failure()
    })
}

export async function auth() {
    return true
}

export async function login() {
    const response = await http_req(`${URL}`)

    return http_req(`${URL}`).then(response => {
        if (success) success(response)
    }).catch(error => {
        if (failure) failure(error)
    })
}

export async function read(DB, Path) {
    return http_req(`${DB.URL}/${Path}`)
}