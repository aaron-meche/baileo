<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"

    let progress = 0
    let is_loved // bool
    db.subscribe(data => {
        let library = data.library
        let item = library.find(item => item.title == data.currently_watching)
        progress = item.progress

        item.love = item.love ? item.love : false
        is_loved = item.love
    })

    function convertSecondsToMinSec(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Padding the seconds with zero if it's less than 10
        const paddedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return minutes + ":" + paddedSeconds;
    }

    function nextEpisode() {
        db.update(data => {
            let library = data.library
            let lib_item = library.find(item => item.title == data.currently_watching)
            let media_item = mediaDB.find(item => item.title == data.currently_watching)
            console.log(library)
            let max_season = media_item.seasons.length
            let curr_season_length = media_item.seasons[lib_item.season - 1].length
    
            if (season == max_season && episode == curr_season_length) {
                lib_item.season += 1
                lib_item.episode = 1
                alert("Season Complete!")
            }
            else if (episode == curr_season_length) {
                lib_item.season += 1
                lib_item.episode = 0
            }
            else {
                lib_item.episode += 1
            }

            console.log(library)

            return data
        })
    }

    function trashHistory() {
        db.update(data => {
            data.library = data.library.filter(elem => elem.title !== data.currently_watching)
            return data
        })
    }

    function toggleLove() {
        db.update(data => {
            let library = data.library
            let item = library.find(item => item.title == data.currently_watching)
            item.love = !item.love
            return data
        })
    }
</script>

<!--  -->

<div class="horizontal-scroll">
    <a class="button" href="/watch" on:click={nextEpisode}>
        <img class="icon" src="icons/right.svg" alt="">
        Next Episode
    </a>
    
    <button class="button">
        <img class="icon" src="icons/video.svg" alt="">
        Record
    </button>

    <a class="button" on:click={trashHistory} href="/">
        <img class="icon" src="icons/trash.svg" alt="">
        Remove from Library
    </a>

    <button class="button" on:click={toggleLove}>
        <img class="icon alone" src="icons/{is_loved ? "love" : "unlove"}.svg" alt="">
    </button>
</div>

<!--  -->

<style>
    .button{
        display: flex;
        align-items: center;
        padding: 4pt 8pt;
        margin-right: 8pt;
        background: var(--l1);
        font-size: 10pt;
        border: solid 1pt var(--l2);
        border-radius: 4pt;
        transition-duration: 200ms;
    }

    .button:hover{
        background: var(--l2);
        border-color: var(--l4);
    }

    .icon{
        margin-right: 8pt;
    }

    .icon.alone{
        margin: 0;
    }
</style>