<script>
    import { mediaDB } from "$lib/index";
    import { db } from "$lib/data";
    import MediaSection from "./MediaSection.svelte";

    let library_items = []
    db.update(data => {
        let items = []
        data.library.forEach(item => {
            items.push(mediaDB.find(elem => elem.title == item.title))
        })
        library_items = items
        return data
    })
</script>

<!--  -->

<div class="page">
    <div class="media-grid">
        {#if library_items.length > 0}
            <MediaSection title="Continue Watching" items={library_items} />
        {/if}
        <MediaSection title="Movies" items={mediaDB.filter(item => item.type == "Movie")} />
        <MediaSection title="TV Shows" items={mediaDB.filter(item => item.type == "TV Show")} />
        <MediaSection title="Comedies" items={mediaDB.filter(item => item.cat == "comedy")} />
        <MediaSection title="Animations" items={mediaDB.filter(item => item.cat == "animation")} />
        <MediaSection title="Dramas" items={mediaDB.filter(item => item.cat == "drama")} />
        <MediaSection title="Horror" items={mediaDB.filter(item => item.cat == "horror")} />
        <MediaSection title="Marvel" items={mediaDB.filter(item => item.cat == "marvel")} />
        <MediaSection title="Romantic Comedies" items={mediaDB.filter(item => item.cat == "romcom")} />
    </div>
</div>

<!--  -->

<style>
    .media-grid{
        display: grid;
        gap: 24pt;
    }
</style>