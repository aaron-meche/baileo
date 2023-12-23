<script>
    import { page } from '$app/stores'
    import { db } from "$lib/data"
    import { storage, mediaDB } from "$lib/index"

    let currently_watching
    let library
    $: has_watched = library.find(item => item.title == currently_watching) ? true : false

    db.subscribe(data => {
        currently_watching = data.currently_watching
        library = data.library
    })

    function continueWatching(item) {
        db.update(data => {
            data.currently_watching = item.title
            return data
        })
    }

    function resetData() {
        storage.clear()
    }
</script>

<!--  -->

<div class="sidebar">

    <section>
        <div class="label">baileo by Aaron Meche</div>
    
        <a class="item {$page.url.pathname == '/' ? 'active' : ''}" href="/">
            <img class="icon" src="icons/compass.svg" alt="">
            Explore
        </a>

        <a class="item {$page.url.pathname == '/library' ? 'active' : ''}" href="/library">
            <img class="icon" src="icons/history.svg" alt="">
            Your Library
        </a>

        <!-- <a class="item {$page.url.pathname == '/insomnia' ? 'active' : ''}" href="/insomnia">
            <img class="icon" src="icons/moon.svg" alt="">
            Insomnia
        </a> -->

        <!-- <button class="item" on:click={resetData}>
            <img class="icon" src="icons/delete.svg" alt="">
            Delete Data
        </button> -->
    </section>

    <section>
        <div class="label">Continue Watching</div>
    
        {#each library as item}
            <a class="item play {$page.url.pathname == '/watch' && currently_watching == item.title ? 'active' : ''}" on:click={() => continueWatching(item)} href="/watch">
                <img src="thumbnails/{item.title}.jpeg" alt="">
                <div>
                    <div class="title">{item.title}</div>
                    {#if mediaDB.find(elem => elem.title == item.title).type == "TV Show"}
                        <div class="caption">S{item.season} E{item.episode} - {mediaDB.find(elem => elem.title == item.title).seasons[item.season - 1][item.episode - 1]}</div>
                    {/if}

                    <div class="progress">
                        <div class="value" style="width: {Math.floor(item.progress * 100)}%"></div>
                    </div>
                </div>
            </a>
        {/each}
    </section>

    <!-- {#if has_watched && mediaDB.find(item => item.title == currently_watching).type == "TV Show" && $page.url.pathname == '/watch'}
        <a class="item {$page.url.pathname == '/watch' ? 'active' : ''}" href="/episode-selector">
            <img class="icon" src="icons/list.svg" alt="">
            {currently_watching}
        </a>
    {:else if has_watched}
        <a class="item {$page.url.pathname == '/watch' ? 'active' : ''}" href="/watch">
            <img class="icon" src="icons/play.svg" alt="">
            {currently_watching}
        </a>
    {/if} -->
</div>

<!--  -->

<style>
    .sidebar{
        display: grid;
        padding: 12pt;
        overflow: auto;
    }

    section{
        margin-bottom: 12pt;
    }

    .label{
        margin-left: 8pt;
        margin-bottom: 4pt;
        font-weight: 600;
    }

    .item{
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        gap: 8pt;
        padding: 8pt;
        font-size: 10pt;
        font-weight: 500;
        border-radius: 4pt;
        cursor: pointer;
    }

    .item:hover{
        background: var(--l1);
    }

    /* @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    } */
    .item.active{
        /* opacity: 1;
        border-left-color: var(--accent);
        background: linear-gradient(to left, var(--l1), var(--l2));
        background-size: 200% 200%;
        animation: gradientAnimation 5s ease infinite; */
        opacity: 1;
        background: var(--l2);
    }

    img{
        height: 1em;
        aspect-ratio: 1 / 1;
    }

    .play img{
        height: 3em;
        aspect-ratio: 16 / 9;
        border-radius: 0.2em;
    }

    .caption{
        font-weight: 400;
        opacity: 0.75;
    }

    .progress{
        height: 2pt;
        margin-top: 0.5em;
        background: var(--l2);
        border-radius: 100vh;
        overflow: hidden;
    }

    .value{
        height: 100%;
        background: var(--contrast);
        border-radius: inherit;
    }
</style>