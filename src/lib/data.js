


import { writable } from 'svelte/store'
import { storage } from '$lib/index'

let initial_db = {
    currently_watching: "The Office",
    library: [],
    theme_color: 240,
}

const app_title = "baileo-c.09/06/23"

export const db = storage.exists(`localDB-${app_title}`) ? writable(JSON.parse(storage.read(`localDB-${app_title}`))) : writable(initial_db)

db.subscribe(value => {
    storage.write(`localDB-${app_title}`, JSON.stringify(value))
})