<script>
    import LeftPanel from "./Panel_Left.svelte";
    import MainPanel from "./Panel_Main.svelte";
</script>

<!--  -->

<<<<<<< HEAD
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
=======
<div class="section-grid">
    <section class="left">
        <LeftPanel />
    </section>

    <section>
        <MainPanel />
    </section>
>>>>>>> a5756be942876a06eeead388793ed88bd792824e
</div>

<!--  -->

<style>
    .section-grid{
        height: 100vh;
        display: grid;
<<<<<<< HEAD
        gap: 24pt;
=======
        grid-template-columns: 200pt auto;
    }

    section{
        padding: 24pt 0;
        overflow: auto;
    }

    section.left{
        background: var(--l1);
>>>>>>> a5756be942876a06eeead388793ed88bd792824e
    }
</style>