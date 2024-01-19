import { writable } from 'svelte/store'
import { storage } from '$lib/index'

let initial_db = {
    currently_watching: null,
    hue: 280,
    library: [],
    credit_cards: [],
    income: []
}

const app_title = "baileo 12/26 3"
const storage_ref = `localDB-${app_title}`

export const db = storage.exists(storage_ref) ? writable(JSON.parse(storage.read(storage_ref))) : writable(initial_db)

db.subscribe(db => {
    let data
    
    if (Object.keys(db) == undefined) {
        data = initial_db
        if (typeof window !== "undefined") window.open("/", "_self")
    }
    else {
        data = JSON.stringify(db)
    }

    storage.write(storage_ref, data)
})







export function openMedia(title) {
    db.update(data => {
        data.currently_watching = title
    })
}