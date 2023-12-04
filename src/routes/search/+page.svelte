<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"

    function openMedia(item) {
        db.update(data => {
            data.currently_watching = item.title
            return data
        })
    }
</script>

<!--  -->

<div class="page">
    <input class="search" type="text" placeholder="Search...">

    <div class="media-grid">
        {#each mediaDB as item}
            <a href="/{item.type == "TV Show" ? "episode-selector" : "watch"}" on:click={() => openMedia(item)} class="item">
                <img class="thumbnail" src="thumbnails/{item.title}.jpeg" alt="">
                <div class="info">
                    <div class="media-title">{item.title}</div>
                    <div class="media-caption">{item.type}</div>
                </div>
            </a>
        {/each}
    </div>
</div>

<!--  -->

<style>
    .search{
        width: 240pt;
        padding: 8pt 12pt;
        margin: auto;
        background: var(--l1);
        border-bottom: solid 2pt transparent;
    }

    .search:focus{
        background: var(--l2);
        border-bottom-color: var(--accent);
    }

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