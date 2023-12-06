<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"
    import { onMount } from "svelte"

    let media_item = {} // object
    let media_title = "" // string
    let seasons = [] // array of seasons
    let episodes = [] // array of episodes
    let active_season = 1 // num selected season
    let progress_season // num current season
    let progress_episode // num current episode
    onMount(() => {
        db.update(data => {
            media_item = mediaDB.find(item => item.title == data.currently_watching)
            refreshData(media_item)
            return data
        })

        let focus_season = 1
        db.update(data => {
            let library = data.library
            let item = library.find(item => item.title == media_title)
            if (item) {
                focus_season = item.season
            }
            return data
        })
    })

    function refreshData(item) {
        media_title = item.title
        seasons = item.seasons
        episodes = item.seasons[active_season - 1]
    }

    function openSeason(num) {
        active_season = num
        refreshData(media_item)
    }

    function openEpisode(s, e) {
        db.update(data => {
            let library = data.library
            let item = library.find(item => item.title == media_title)
            if (item) {
                item.title = media_title
                item.season =  s
                item.episode = e
                item.progress = 0
            }
            else {
                library.push({
                    title: media_title,
                    season:  s,
                    episode: e,
                    progress: 0,
                })
            }
            return data
        })
    }
</script>

<!--  -->

<div class="page moat-delete">
    <div>
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
                    <a href="/watch" on:click={() => openEpisode(active_season, i + 1)} class="item {active_season == progress_season && (i + 1) == progress_episode ? "active" : ""}">
                    <!-- <a on:click={() => openEpisode(active_season, i + 1)} class="item {active_season == progress_season && (i + 1) == progress_episode ? "active" : ""}"> -->
                        <div class="label">S{active_season} E{i + 1}</div>
                        <div class="title">{episode}</div>
                    </a>
                {/each}
            </div>
        </div>
    </div>
    </div>

<!--  -->

<style>
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
    }
    .episode-selector > *{
        height: fit-content;
        padding: 4pt;
        background: var(--l1);
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