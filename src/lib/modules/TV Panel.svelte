<script>
    import { mediaDB, storage } from '$lib/data'
    export let title

    let season = storage.get(title + ' season')
    let episode = storage.get(title + ' episode')

    function openEpisode(season, episode) {
        storage.set(`${title} season`, season)
        storage.set(`${title} episode`, episode)
        storage.set(`${title} progress`, 0)
        window.open('/watch', '_self')
    }
</script>

<!--  -->

<div class="list">
    {#each {length: mediaDB[title]['sTotal']} as _, s}
        <div class="season">
            <div class='module-title s{s + 1} {s + 1 == storage.get(title + ' season') ? 'active-season-title' : ''}'>
                Season {s + 1}
            </div>
        
            {#each mediaDB[title]['s' + (s + 1)] as episode, e}
                <button class="item {(s + 1 == storage.get(title + ' season') && (e + 1 == storage.get(title + ' episode'))) ? 'active-episode' : ''}" on:click={() => openEpisode(s + 1, e + 1)}>
                    <div class="title">
                        <span class="count">S{s + 1}, E{e + 1}</span> {episode.replaceAll('-', "'")}
                    </div>
                </button>
            {/each}
        </div>
    {/each}
</div>

<!--  -->

<style>
    .season{
        display: grid;
        row-gap: 2pt;
        padding-bottom: 15pt;
    }

    button{
        all: unset;
        width: calc(100% - 20pt);
        padding: 10pt;
        border-radius: 10pt;
        cursor: pointer;
    }
    
    .item:hover{
        /* background: rgb(50, 50, 50, 0.5); */
        background: var(--light-gradient);
    }

    .item.active-episode{
        background: var(--bold-gradient);
    }

    .title{
        font-weight: 500;
    }

    .count{
        font-weight: 300;
        /* color: gray; */
        padding-right: 5pt;
    }
</style>