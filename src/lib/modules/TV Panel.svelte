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

<div class="content">
    {#each {length: mediaDB[title]['sTotal']} as _, s}
        <div class='module-title season-title season-{s + 1} {s + 1 == storage.get(title + ' season') ? 'active-season-title' : ''}'>
            Season {s + 1}
        </div>
        
        <div class="season">
            <div class="list">
                {#each mediaDB[title]['s' + (s + 1)] as episode, e}
                    <button class="episode-button {(s + 1 == storage.get(title + ' season') && (e + 1 == storage.get(title + ' episode'))) ? 'active-episode' : ''}" on:click={() => openEpisode(s + 1, e + 1)}>
                        <span class="count">S{s + 1}, E{e + 1}</span> {episode.replaceAll('-', "'")}
                    </button>
                {/each}
            </div>
        </div>
    {/each}
</div>

<!--  -->

<style>
    .content{
        padding-bottom: 50pt;
        border-radius: inherit;
    }

    .season{
        display: grid;
        background: linear-gradient(to bottom, var(--background), rgb(0, 0, 0, 0.25));
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }

    .season-title{
        position: sticky;
        top: 0;
        background: var(--background);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        -moz-backdrop-filter: blur(15px);
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    .list{
        padding: 15pt;
        padding-top: 0;
    }

    .episode-button{
        width: calc(100% - 20pt);
        padding: 10pt;
        border-radius: 5pt;
        cursor: pointer;
        font-weight: 500;
    }
    
    .episode-button:hover{
        background: var(--light-gradient);
    }

    .episode-button.active-episode{
        background: var(--bold-gradient);
    }

    .count{
        font-weight: 300;
        padding-right: 5pt;
    }

    .align-button:hover{
        text-decoration: underline;
    }
</style>