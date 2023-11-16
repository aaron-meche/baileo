export const tb = {
    http_req: async (URL) => {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json(); // If the server returns JSON
        } catch (error) {
            return {"error": error}
        }
    },

    connect: (URL, Password) => {
        return tb.http_req(`${URL}/connect/${Password}`)
    },

    read: (DB, Path) => {
        return tb.http_req(`${DB.URL}/${Path}`)
    },
    
    login: async (DB, user, pass) => {
        const response = await tb.http_req(`${DB.URL}/login/${user}/${pass}`)

        if (Object.keys(response).length > 0) {
            return true
        }
        else {
            return false
        }
    }
}