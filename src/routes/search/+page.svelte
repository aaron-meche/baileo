<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"
    import { onMount } from "svelte"
    import SearchError from "./SearchError.svelte";

    function openMedia(item) {
        db.update(data => {
            data.currently_watching = item.title
            return data
        })
    }

    let search_result = []
    db.subscribe(data => {
        search_result = data.search_result
    })

    onMount(() => {
        db.update(data => {
            data.search_result = mediaDB
            return data
        })
    })
</script>

<!--  -->

<div class="page moat-delete">
    <div class="search-bar">
        <input type="text" placeholder="I want to watch...">
    </div>

    <div class="media-grid">
        {#each search_result as item}
            <a href="/{item.type == "TV Show" ? "episode-selector" : "watch"}" on:click={() => openMedia(item)} class="item">
                <img class="thumbnail" src="thumbnails/{item.title}.jpeg" alt="">
                <div class="info">
                    <div class="media-title">{item.title}</div>
                    <div class="media-caption">{item.type}</div>
                </div>
            </a>
        {/each}
    </div>

    {#if search_result.length == 0}
        <SearchError />
    {/if}
</div>

<!--  -->

<style>
    .media-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160pt, 1fr));
        row-gap: 8pt;
    }
    
    .item{
        display: grid;
        grid-gap: 8pt;
        padding: 8pt;
    }

    .item:hover{
        background: var(--l2);
    }

    .info{
        font-weight: 500;
    }

    .media-caption{
        font-weight: 400;
        opacity: 0.5;
    }

    .thumbnail{
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
    }
</style>