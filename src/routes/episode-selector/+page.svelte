<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"

    let media_title = ""
    let active_season
    $: seasons = mediaDB.find(item => item.title == media_title).seasons
    $: episodes = mediaDB.find(item => item.title == media_title).seasons[active_season - 1]
    db.subscribe(data => {
        media_title = data.currently_watching
        openSeason(0)
    })
    
    function openSeason(season) {
        active_season = season + 1
    }

    function openEpisode(season, episode) {
        db.update(data => {
            let selected = data.library.find(item => item.title == data.currently_watching)
            if (selected == undefined) {
                data.library.push({
                    title: data.currently_watching,
                    season: season,
                    episode: episode,
                    progress: 0
                })
            }
            else {
                selected.season = season
                selected.episode = episode
                selected.progress = 0
            }
            return data
        })
    }
</script>

<!--  -->

<div class="page">
<div>
    <div class="section-title">{media_title}</div>

    <div class="episode-selector">
        <div class="season-list">
            {#each seasons as season, i}
                <button on:click={() => openSeason(i)} class="item {active_season - 1 == i ? "active" : ""}">
                    Season {i + 1}
                </button>
            {/each}
        </div>

        <div class="episode-list">
            {#each episodes as episode, i}
                <a href="/watch" on:click={() => openEpisode(active_season, i + 1)} class="item">
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