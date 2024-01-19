import { db } from "$lib/data"
import { mediaDB } from "$lib/index"

export function prevEpisode() {
    db.update(data => {
        let library = data.library
        let lib_item = library.find(item => item.title == data.currently_watching)
        let media_item = mediaDB.find(item => item.title == data.currently_watching)

        if (lib_item.season == 1 && lib_item.episode == 1) {
            alert("...cannot go behind beinning...")
        }
        else if (lib_item.episode == 1) {
            lib_item.season -= 1
            lib_item.episode = media_item.seasons[lib_item.season - 1].length
        }
        else {
            lib_item.episode -= 1
        }
        
        lib_item.progress = 0

        return data
    })
}

export function nextEpisode() {
    db.update(data => {
        let library = data.library
        let lib_item = library.find(item => item.title == data.currently_watching)
        let media_item = mediaDB.find(item => item.title == data.currently_watching)

        let max_season = media_item.seasons.length
        let curr_season_length = media_item.seasons[lib_item.season - 1].length

        if (lib_item.season == max_season && lib_item.episode == curr_season_length) {
            lib_item.season = 1
            lib_item.episode = 1
            alert("Series Complete!")
        }
        else if (lib_item.episode == curr_season_length) {
            lib_item.season += 1
            lib_item.episode = 1
        }
        else {
            lib_item.episode += 1
        }
        
        lib_item.progress = 0

        return data
    })
}