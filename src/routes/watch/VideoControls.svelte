<script>
    export let currentTime, duration
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

<div class="scruff-bar">
    <div class="progress-bar">
        <div class="value" style="width: {100 * progress}%"></div>
    </div>
    <div class="info-grid">
        <div>{convertSecondsToMinSec(Math.floor(currentTime))}</div>
        <div style="text-align: right">{convertSecondsToMinSec(Math.floor(duration))}</div>
    </div>
</div>

<div class="horizontal-scroll">
    <!-- <a class="button" href="/watch" on:click={nextEpisode}>
        <img class="icon" src="icons/right.svg" alt="">
        Next Episode
    </a>

    <button class="button">
        <img class="icon" src="icons/video.svg" alt="">
        Save Moment
    </button>

    <button class="button" on:click={toggleLove}>
        <img class="icon alone" src="icons/{is_loved ? "love" : "unlove"}.svg" alt="">
    </button> -->
</div>

<!--  -->

<style>
    .button{
        display: flex;
        align-items: center;
        padding: 8pt 12pt;
        margin-right: 8pt;
        background: var(--l1);
        border: solid 1pt var(--l4);
        border-radius: 4pt;
        transition-duration: 200ms;
    }

    .button:hover{
        background: var(--l2);
        border-color: var(--l6);
    }

    .icon{
        margin-right: 8pt;
    }

    .icon.alone{
        margin: 0;
    }

    .scruff-bar:hover .progress-bar{
        height: 8pt;
        opacity: 1;
    }

    .progress-bar{
        height: 2pt;
        margin-bottom: 2pt;
        background: var(--contrast-transparent);
        border-radius: 2pt;
        overflow: hidden;
        opacity: 0.5;
        transition-duration: 200ms;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .progress-bar .value{
        height: 100%;
        background: var(--contrast);
    }

    .info-grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-size: 10pt;
    }
</style>