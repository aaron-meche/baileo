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

<div class="wrapper">
    <a href="/" class="logo">
        <img src="logo.png" alt="logo">
        baileo
    </a>

    <div class="right" style="margin-left: auto">
        {#if currently_watching}
            <input type="text" placeholder="Search">
        {/if}
    </div>
</div>


<!--  -->

<style>
    .wrapper{
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        gap: 1rem;
        padding: 1rem var(--inline-moat);
        margin: 0 1rem;
    }

    .logo{
        display: grid;
        grid-template-columns: min-content auto;
        gap: 8pt;
        align-items: baseline;
        line-height: 1;
        font-size: 20pt;
        font-weight: 600;
        text-transform: lowercase;
    }

    .logo img{
        height: 0.7em;
    }

    input{
        width: 16rem;
        padding: 0.5rem 1rem;
        background: var(--l1);
        border-radius: 0.25rem;
    }
</style>