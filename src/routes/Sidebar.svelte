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


    function resetData() {
        storage.clear()
    }
</script>

<!--  -->

<div class="sidebar">
    <a class="item {$page.url.pathname == '/' ? 'active' : ''}" href="/">
        <img class="icon" src="icons/book.svg" alt="">
        Explore
    </a>

    <!-- <a class="item {$page.url.pathname == '/library' ? 'active' : ''}" href="/library">
        <img class="icon" src="icons/history.svg" alt="">
        Library
    </a> -->

    {#if has_watched && $page.url.pathname == '/watch'}
        <a class="item {$page.url.pathname == '/watch' ? 'active' : ''}" href="/episode-selector">
            <img class="icon" src="icons/list.svg" alt="">
            {currently_watching}
        </a>
    {:else if has_watched}
        <a class="item {$page.url.pathname == '/watch' ? 'active' : ''}" href="/watch">
            <img class="icon" src="icons/play.svg" alt="">
            {currently_watching}
        </a>
    {/if}

    <a class="item {$page.url.pathname == '/search' ? 'active' : ''}" href="/search">
        <img class="icon" src="icons/search.svg" alt="">
        Search
    </a>

    <!-- <a href="/" on:click={resetData} class="item">
        <img class="icon" src="icons/delete.svg" alt="">
        Reset Data
    </a> -->
</div>

<!--  -->

<style>
    .sidebar{
        display: grid;
    }

    .item{
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        gap: 8pt;
        padding: 8pt;
        font-size: 10pt;
        font-weight: 500;
        text-transform: capitalize;
        opacity: 0.75;
        border-left: solid 2pt transparent;
        cursor: pointer;
    }

    .item:hover{
        opacity: 1;
    }

    @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    .item.active{
        opacity: 1;
        border-left-color: var(--accent);
        background: linear-gradient(to left, var(--l1), var(--l2));
        background-size: 200% 200%;
        animation: gradientAnimation 5s ease infinite;
    }

    img{
        height: 1em;
        aspect-ratio: 1 / 1;
    }
</style>