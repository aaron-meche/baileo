<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte'
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import SearchError from "./search/SearchError.svelte";

    let search_bar
    let val
    let items_to_display = mediaDB
    function keyPress(e) {
        val = search_bar.value
        items_to_display = mediaDB.filter(item => item.title.toLowerCase().includes(val.toLowerCase()))
        db.update(data => {
            data.search_result = items_to_display
            return data
        })
    }

    let library, currently_watching
    db.subscribe(data => {
        library = data.library
        currently_watching = data.currently_watching
    })

    function watchMedia(title) {
        db.update(data => {
            data.currently_watching = title
            return data
        })
        if ($page.url.pathname == "/watch") window.location.reload()
    }
</script>

<!--  -->

<div class="bar">
    <a href="/" class="logo">
        baileo
    </a>

    <div class="tabs scroll">
        {#each library as item}
            <a href="/watch" on:click={() => watchMedia(item.title)} class="tab {$page.url.pathname == "/watch" && currently_watching == item.title ? "active" : ""}">
                {item.title}
            </a>
        {/each}

        <!-- <div class="search">
            <input type="text" placeholder="Search...">
        </div> -->
    </div>
</div>


<!--  -->

<style>
    .bar{
        display: grid;
        grid-template-columns: 160pt auto;
        align-items: center;
        padding: 4pt;
        overflow: visible;
    }

    .logo{
        text-align: center;
        font-size: 14pt;
        font-weight: 500;
        color: var(--accent);
    }

    .tab{
        display: inline-flex;
        align-items: center;
        padding: 4pt 12pt;
        margin-right: 8pt;
        font-size: 10pt;
        font-weight: 500;
        border: solid 1pt transparent;
        border-radius: 4pt;
    }

    .tab.active{
        background: var(--l2);
        border-color: var(--l4);
    }

    .search{
        font-size: 10pt;
        font-weight: 500;
    }

    input{
        padding: 4pt 12pt;
        background: var(--l1);
        border-bottom: solid 2pt var(--l4);
    }
</style>