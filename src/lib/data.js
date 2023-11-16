


import { writable } from 'svelte/store'
import { storage } from '$lib/index'

let initial_db = {
    currently_watching: "Mean Girls",
    library: [
        {
            title: "The Office",
            progress: 0.3,
            season: 1,
            episode: 1
        },
        {
            title: "Mean Girls",
            progress: 0.6
        }
    ]
}

const app_title = "baileo-c.09/06/23"
const storage_ref = `localDB-${app_title}`

// if (storage.exists(storage_ref)) {
//     if (storage.read(`localDB-${app_title}`))

// }

export const db = storage.exists(`localDB-${app_title}`) ? writable(JSON.parse(storage.read(`localDB-${app_title}`))) : writable(initial_db)

db.subscribe(value => {
    storage.write(`localDB-${app_title}`, JSON.stringify(value))
})