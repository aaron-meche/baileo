<script>
    export let title
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"

    let data = mediaDB.find(item => item.title == title)
    let active_season = 1
    $: seasons = data.seasons
    $: episodes = data.seasons[active_season - 1]
    
    function openSeason(season) {
        active_season = season + 1
    }

    function openEpisode(season, episode) {
        db.update(data => {
            let selected = data.library.find(item => item.title == title)
            if (selected == undefined) {
                data.library.push({
                    title: title,
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
    <section>
        <div class="section-title">{title}</div>

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
    </section>
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