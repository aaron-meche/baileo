<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"
    import { prevEpisode, nextEpisode } from "./control"
    import Page from "../insomnia/+page.svelte";

    let progress = 0
    let is_loved // bool
    let should_prev_ep // bool
    let media_type // string
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

        let mediaitem = mediaDB.find(item => item.title == data.currently_watching)
        media_type = mediaitem.type
    })

    function convertSecondsToMinSec(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Padding the seconds with zero if it's less than 10
        const paddedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return minutes + ":" + paddedSeconds;
    }

    function openInsomnia() {
        function openWindow() {
            var windowFeatures = "menubar=no,toolbar=no,status=no,width=1000,height=600";
            var newWindow = window.open("/insomnia", "_blank", windowFeatures);

            if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') { 
                // Popup blocked or failed to open
                alert("Popup blocked or failed to open");
            }
        }

        openWindow()
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

    let next_episode_button
    function revealNextEpisode() {
        
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

<div class="horizontal-scroll default">
    {#if media_type == "TV Show"}
        {#if should_prev_ep}
            <a class="button" href="/watch" on:click={prevEpisode}>
                <i class="fa-solid fa-arrow-left alone"></i>
            </a>
        {/if}

        <a class="button" href="/watch" on:click={nextEpisode}>
            <i class="fa-solid fa-arrow-right"></i>
            Next Episode
        </a>
    {/if}

    <a class="button" on:click={trashHistory} href="/">
        <i class="fa-solid fa-trash"></i>
        Remove from Library
    </a>
</div>

<!--  -->

<style>
    .button{
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        margin-right: 0.5rem;
        background: var(--l1);
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 4pt;
    }

    .button:hover{
        background: var(--l2);
    }

    i{
        margin-right: 8pt;
    }

    i.alone{
        margin: 0;
    }
</style>