<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"
    import SearchError from "./SearchError.svelte";

    function openMedia(item) {
        db.update(data => {
            data.currently_watching = item.title
            return data
        })
    }

    let search_bar
    let val
    let items_to_display = mediaDB
    function keyPress(e) {
        val = search_bar.value
        items_to_display = mediaDB.filter(item => item.title.toLowerCase().includes(val.toLowerCase()))
    }
</script>

<!--  -->

<div class="page moat-delete">
    <input class="search" bind:this={search_bar} on:keyup={() => keyPress()} type="text" placeholder="What do you want to watch?">

    <div class="media-grid">
        {#each items_to_display as item}
            <a href="/{item.type == "TV Show" ? "episode-selector" : "watch"}" on:click={() => openMedia(item)} class="item">
                <img class="thumbnail" src="thumbnails/{item.title}.jpeg" alt="">
                <div class="info">
                    <div class="media-title">{item.title}</div>
                    <div class="media-caption">{item.type}</div>
                </div>
            </a>
        {/each}
    </div>

    {#if items_to_display.length == 0}
        <SearchError val={val} />
    {/if}
</div>

<!--  -->

<style>
    .search{
        padding: 8pt 12pt;
        border: solid 1pt var(--l2);
        border-color: var(--contrast-transparent);
        border-radius: 4pt;
        transition-duration: 200ms;
    }

    .search:focus{
        background: var(--l1);
    }

    .media-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140pt, 1fr));
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