<script>
    import { page } from '$app/stores'
    import { db } from "$lib/data"
    import { storage, mediaDB } from "$lib/index"

    let currently_watching
    db.subscribe(data => {
        currently_watching = data.currently_watching
    })

    let media_obj = mediaDB.find(item => item.title == currently_watching)


    function resetData() {
        storage.clear()
        window.open("/", "_self")
    }
</script>

<!--  -->

<div class="navbar">
    <a class="item {$page.url.pathname == '/' ? 'active' : ''}" href="/">
        <img class="icon" src="icons/book.svg" alt="">
        Explore
    </a>

    <!-- <a class="item {$page.url.pathname == '/library' ? 'active' : ''}" href="/library">
        <img class="icon" src="icons/history.svg" alt="">
        Library
    </a> -->

    {#if currently_watching !== null}
        {#if $page.url.pathname == '/watch' && media_obj.type == "TV Show"}
            <a class="item active" href="/episode-selector">
                <img class="icon" src="icons/list.svg" alt="">
                {currently_watching}
            </a>
        {:else}
            <a class="item {$page.url.pathname == '/watch' ? 'active' : ''}" href="/watch">
                <img class="icon" src="icons/play.svg" alt="">
                {currently_watching}
            </a>
        {/if}
    {/if}

    <button class="item">
        <img class="icon" src="icons/search.svg" alt="">
        Search
    </button>

    <button on:click={resetData} class="item">
        <img class="icon" src="icons/delete.svg" alt="">
    </button>
</div>

<!--  -->

<style>
    .navbar{
        height: fit-content;
        display: flex;
        align-items: center;
        position: relative;
        padding-inline: var(--inline-moat);
        text-align: center;
        background: var(--bg);
        font-size: 0;
        transition: height 500ms, margin-bottom 500ms, background 500ms;
    }

    .item{
        display: inline-flex;
        align-items: center;
        padding: 8pt 16pt;
        font-size: 10pt;
        font-weight: 500;
        text-transform: capitalize;
        opacity: 0.75;
        border-top: solid 2pt transparent;
        cursor: pointer;
    }

    .item:hover{
        opacity: 1;
    }

    .item.active{
        opacity: 1;
        background: var(--l1);
        border-top-color: var(--accent);
    }

    img{
        display: inline-block;
        height: 1em;
        aspect-ratio: 1 / 1;
        margin-right: 8pt;
    }
</style>