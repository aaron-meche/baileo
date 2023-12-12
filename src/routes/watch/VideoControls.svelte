<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"
    import { prevEpisode, nextEpisode } from "./control"

    let progress = 0
    let is_loved // bool
    let should_prev_ep // bool
    db.subscribe(data => {
        let library = data.library
        let item = library.find(item => item.title == data.currently_watching)
        progress = item.progress

        item.love = item.love ? item.love : false
        is_loved = item.love

        if (item.season == 1 && item.episode == 1) {
            should_prev_ep = false
        }
        else { 
            should_prev_ep = true
        }
    })

    function convertSecondsToMinSec(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Padding the seconds with zero if it's less than 10
        const paddedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return minutes + ":" + paddedSeconds;
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

<!-- <div class="scroll">
    <a class="button" href="/watch" on:click={nextEpisode}>
        <img class="icon" src="icons/left.svg" alt="">
        <div class="info">
            Back
            <div class="caption">S1 E3, Episodes</div>
        </div>
    </a>

    <a class="button" href="/watch" on:click={nextEpisode}>
        <img class="icon" src="icons/right.svg" alt="">
        <div class="info">
            Next
            <div class="caption">S1 E5, Pamagic</div>
        </div>
    </a>
</div> -->

<div class="scroll">
    {#if should_prev_ep}
        <a class="button" href="/watch" on:click={prevEpisode}>
            <img class="icon alone" src="icons/left.svg" alt="">
        </a>
    {/if}

    <a class="button" href="/watch" on:click={nextEpisode}>
        <img class="icon" src="icons/right.svg" alt="">
        Next Episode
    </a>

    <a class="button" href="/episode-selector">
        <img class="icon" src="icons/list.svg" alt="">
        Episodes
    </a>
    
    <button class="button">
        <img class="icon" src="icons/video.svg" alt="">
        Clip
    </button>

    <a class="button" on:click={trashHistory} href="/">
        <img class="icon" src="icons/trash.svg" alt="">
        Remove
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