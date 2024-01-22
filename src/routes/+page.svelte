<script>
    import MediaSection from "./MediaSection.svelte";
    import LibrarySection from "./LibrarySection.svelte";
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"

    let library
    db.subscribe(data => {
        library = data.library
    })

    function watchFeatured(title) {
        db.update(data => {
            data.currently_watching = title
        })
    }
</script>

<!--  -->

<div class="page inline-delete">
    <!-- <div class="showcase">
        <img src="thumbnails/The Hangover Part II.jpeg" alt="">

        <div class="showcase-info">
            <div class="media-title">The Hangover Part II</div>
            <a class="submit" href="/watch" on:click={() => watchFeatured("The Hangover Part II")}>Watch Now</a>
        </div>
    </div> -->
    
    {#if library.length > 0}
        <LibrarySection />
    {/if}

    <MediaSection title="Classic Comedies" items={mediaDB.filter(item => item.cat.includes("classic"))} />
    <MediaSection title="Animation Movies" items={mediaDB.filter(item => item.cat.includes("animation") && item.type == "Movie")} />
    <MediaSection title="Drama Movies" items={mediaDB.filter(item => item.cat.includes("drama") && item.type == "Movie")} />
    <MediaSection title="Horror Movies" items={mediaDB.filter(item => item.cat.includes("horror") && item.type == "Movie")} />
    <MediaSection title="TV Shows" items={mediaDB.filter(item => item.type == "TV Show")} />
    <MediaSection title="Movies" items={mediaDB.filter(item => item.type == "Movie")} />
</div>

<!--  -->

<style>
    .showcase{
        position: relative;
    }

    .showcase img{
        height: 60vh;
        width: 100vw;
        object-fit: cover;
    }

    .showcase-info{
        width: calc(100vw - (2 * var(--inline-moat) - 1rem));
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1rem calc(var(--inline-moat) + 1rem);
        padding-top: 5rem;
        background: linear-gradient(to top, var(--bg), transparent);
    }

    .media-title{
        font-size: 20pt;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .lower-shadow{
        position: absolute;
        top: 60vh;
        z-index: -5;
        transform: scaleY(-1)
    }

    .lower-shadow-blur{
        position: absolute;
        top: 60vh;
        height: 65vh;
        width: 100vw;
        background: linear-gradient(to bottom, var(--bg-transparent), var(--bg));
        backdrop-filter: blur(16pt);
        -webkit-backdrop-filter: blur(16pt);
        z-index: -4;
    }

    .submit{
        width: fit-content;
        padding: 0.5rem 1rem;
        background: var(--accent-transparent);
        font-weight: 500;
        border: solid 1pt var(--accent);
        border-radius: 0.5rem;
    }

    .submit:hover{
        background: var(--accent);
    }
</style>