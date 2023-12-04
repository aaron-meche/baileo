


import { writable } from 'svelte/store'
import { storage } from '$lib/index'

let initial_db = {
    username: "aaronmeche",
    auth_key: 100,

    currently_watching: null,
    library: [],
}

const app_title = "baileo 11/26/23 2"
const storage_ref = `localDB-${app_title}`

export const db = storage.exists(storage_ref) ? writable(JSON.parse(storage.read(storage_ref))) : writable(initial_db)

db.subscribe(db => {
    let data
    
    if (db == undefined) {
        data = initial_db
        if (typeof window !== "undefined") window.open("/", "_self")
    }
    else {
        data = JSON.stringify(db)
    }

    storage.write(storage_ref, data)
})