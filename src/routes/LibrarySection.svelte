<script>
    import { db } from "$lib/data"

    let library
    db.subscribe(data => {
        library = data.library
    })

    function updateCurrentlyWatching(title) {
        db.update(data => {
            data.currently_watching = title
            return data
        })
    }
</script>

<!--  -->

<div class="wrapper">
    <div class="section-title">Continue Watching</div>
    
    <div class="horizontal-scroll">
        {#each library as item}
            <a href="/watch" on:click={() => updateCurrentlyWatching(item.title)} class="item">
                <img src="thumbnails/{item.title}.jpeg" alt="thumbnail">
                <div class="info">
                    <div class="media-title">{item.title}</div>
                    <div class="media-progress">{item.progress * 100}% complete</div>
                </div>
            </a>
        {/each}
    </div>
</div>
    

<!--  -->

<style>

    .section-title{
        padding: 0 var(--inline-moat);
        margin-left: 1rem;
        font-size: 1.4rem;
        font-weight: 700;
    }

    .item{
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
    }

    .item:hover{
        background: var(--l1);
    }

    .item img{
        height: 4rem;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: inherit;
    }

    .media-title{
        font-weight: 600;
    }

    .media-progress{
        opacity: 0.5;
    }
</style>