<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"

    let library, currently_watching
    db.subscribe(data => {
        library = data.library
        currently_watching = data.currently_watching
    })

    let seasons = mediaDB.find(item => item.title == currently_watching).seasons
    let active_season = library.find(item => item.title == currently_watching).season
    let viewing_season = active_season
    $: episode_list = seasons[viewing_season - 1]

    function updateViewingSeason(num) {
        viewing_season = num
    }
</script>

<!--  -->

<div class="selector">
    <div class="horizontal-scroll">
        {#each seasons as season, i}
            <button class="item {viewing_season == i + 1 ? "active" : ""}" on:click={() => updateViewingSeason(i + 1)}>Season {i + 1}</button>
        {/each}
    </div>
    
    <div class="episodes list">
        {#each episode_list as episode, i}
            <button class="item">
                <span style="margin-right: 1rem;">E{i + 1}</span>
                {episode}
            </button>
        {/each}
    </div>
</div>

<!--  -->

<style>
    .selector{
        height: fit-content;
        width: calc(100vw - (2 * var(--inline-moat)));
        padding: 0.5rem;
        margin-bottom: 50vh;
        background: var(--l1);
        border: solid 1pt var(--l3);
        border-radius: 4pt;
    }

    .horizontal-scroll{
        max-width: 100%;
        padding: 0;
        margin-bottom: 1rem;
        background: var(--l2);
        border-radius: 4pt;
    }

    .item{
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 4pt;
    }

    .item:hover{
        background: var(--l3);
    }

    .item.active{
        background: var(--l4);
        font-weight: 600;
        color: var(--accent);
    }

    .list .item{
        width: calc(100% - 2rem);
        padding: 0.5rem 1rem;
    }
</style>