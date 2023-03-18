<script>
    import { mediaDB, storage } from '$lib/data'
    import { space } from 'svelte/internal';
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
            <div class='season-title s{s + 1} {s + 1 == storage.get(title + ' season') ? 'active-season-title' : ''}'>
                Season {s + 1}
            </div>
        
            {#each mediaDB[title]['s' + (s + 1)] as episode, e}
                <button class="item {(s + 1 == storage.get(title + ' season') && (e + 1 == storage.get(title + ' episode'))) ? 'active-episode' : ''}" on:click={() => openEpisode(s + 1, e + 1)}>
                    <div class="title">
                        <span class="count">S{s + 1}, E{e + 1}</span> {episode}
                    </div>
                </button>
            {/each}
        </div>
    {/each}
</div>

<!--  -->

<style>
    .season{
        margin-bottom: 15pt;
        background: linear-gradient(to top, rgb(0, 0, 0, 0.25), rgb(0, 0, 0, 0));
    }

    .season-title{
        font-size: 15pt;
        font-weight: 500;
        text-align: center;
        padding: 10pt;
    }

    button{
        all: unset;
        width: calc(100% - 20pt);
        padding: 10pt;
        margin: 2pt 0;
        border-radius: 5pt;
        cursor: pointer;
    }
    
    .item:hover{
        background: rgb(50, 50, 50, 0.5);
    }

    .item.active-episode{
        background: linear-gradient(to right, var(--accent), rgba(214, 23, 221, 0.4), rgba(255, 0, 93, 0.2));
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