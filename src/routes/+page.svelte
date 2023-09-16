<script>
    import { mediaDB, shuffle } from "$lib/index";
    import { db } from "$lib/data";
    import MediaSection from "./MediaSection.svelte";
    import UserSection from "./UserSection.svelte";

    let media_items = shuffle(mediaDB);

    const openMedia = (item) => {
        db.update(data => {
            data.currently_watching = item.title;
            return data;
        })
    }

</script>

<!--  -->

<div class="page moat-delete">
    <MediaSection title="Movies" items={mediaDB.filter(item => item.type == "Movie")} />
    <MediaSection title="TV Shows" items={mediaDB.filter(item => item.type == "TV Show")} />
    <MediaSection title="Comedies" items={mediaDB.filter(item => item.cat == "comedy")} />
    <MediaSection title="Animations" items={mediaDB.filter(item => item.cat == "animation")} />
    <MediaSection title="Dramas" items={mediaDB.filter(item => item.cat == "drama")} />
    <MediaSection title="Horror" items={mediaDB.filter(item => item.cat == "horror")} />
    <MediaSection title="Marvel" items={mediaDB.filter(item => item.cat == "marvel")} />
    <MediaSection title="Romantic Comedies" items={mediaDB.filter(item => item.cat == "romcom")} />
</div>

<!--  -->

<style>
    
</style>