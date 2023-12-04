<script>
    import { mediaDB, shuffle } from "$lib/index";
    import { db } from "$lib/data";
    import MediaSection from "./MediaSection.svelte";
    import UserActionButtons from "./UserActionButtons.svelte";

</script>

<!--  -->

<div class="page moat-delete">
    <!-- <div class="user-section">
        <div class="heading">
            Welcome back, Aaron
        </div>

        <div class="user-section">
            <UserActionButtons />
        </div>
    </div> -->

    <div class="media-grid">
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
    .user-section{
        width: 360pt;
        margin: auto;
        text-align: center;
    }

    .heading{
        margin-bottom: 8pt;
        font-size: 24pt;
        font-weight: 700;
    }

    .media-grid{
        display: grid;
        gap: 24pt;
    }
</style>