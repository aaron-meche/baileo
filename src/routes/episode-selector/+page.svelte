<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"
    import { onMount } from "svelte"

    let media_title = ""
    let active_season = 1
    let seasons = []
    $: episodes = []
    let progress = {}

    function openSeason(s) {
        active_season = s
        episodes = seasons[s - 1]
    }

    function openEpisode(s, e) {
        db.update(data => {
            let item = data.library.find(item => item.title == media_title)
            item.season = s
            item.episode = e
            item.progress = 0
            return data
        })
    }

    onMount(() => {
        db.update(data => {
            media_title = data.currently_watching
            seasons = mediaDB.find(item => item.title == media_title).seasons
            
            let libitem = data.library.find(item => item.title == media_title)
            openSeason(libitem.season)
            progress.season = libitem.season
            progress.episode = libitem.episode
            return data
        })
    })
</script>

<!--  -->

<div class="wrapper">
    <img src="thumbnails/{media_title}.jpeg" alt="">
    <div class="section-title">{media_title}</div>
    <div class="episode-selector">
        <div class="season-list">
            {#each seasons as season, i}
                <button on:click={() => openSeason(i + 1)} class="item {active_season - 1 == i ? "active" : ""}">
                    Season {i + 1}
                </button>
            {/each}
        </div>

        <div class="episode-list">
            {#each episodes as episode, i}
                <a href="/watch" on:click={() => openEpisode(active_season, i + 1)} class="item {active_season == progress.season && (i + 1) == progress.episode ? "active" : ""}">
                <!-- <a on:click={() => openEpisode(active_season, i + 1)} class="item {active_season == progress_season && (i + 1) == progress_episode ? "active" : ""}"> -->
                    <div class="label">S{active_season} E{i + 1}</div>
                    <div class="title">{episode}</div>
                </a>
            {/each}
        </div>
    </div>
</div>

<!--  -->

<style>
    .wrapper{
        width: 50vw;
    }

    img{
        width: 100%;
    }

    .section-title{
        margin-left: 12pt;
        margin-bottom: 4pt;
        font-size: 16pt;
        font-weight: 600;
    }

    .episode-selector{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12pt;
        border-radius: 2pt;
        background: red;
    }
    .episode-selector > *{
        height: fit-content;
        padding: 4pt;
        background: var(--l1);
        border-radius: 4pt;
    }
    .item{
        width: calc(100% - 16pt);
        padding: 8pt;
        border-radius: 2pt;
        cursor: pointer;
    }
    .item:hover{
        background: var(--l2);
    }
    .item .label{
        font-size: 10pt;
    }
    .item.active{
        color: var(--accent);
        background: var(--l2);
    }
</style>