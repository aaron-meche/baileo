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

    // function checkForPerfectSearch() {
    //     if (mediaDB.filter(item => item.title.toLowerCase() == val.toLowerCase()).length == 1) {
    //         db.update(data => )
    //     }
    // }
</script>

<!--  -->

<div class="bar">
    <div class="logo">
        <img src="icons/logo.png" alt="">
        baileo
    </div>

    <input class="search" bind:this={search_bar} on:keyup={() => keyPress()} type="text" placeholder="What do you want to watch?">
</div>


<!--  -->

<style>
    .bar{
        display: grid;
        grid-template-columns: 160pt auto;
        align-items: center;
        width: 100vw;
        /* background: var(--background-transparent); */
        padding: 4pt;
        overflow: visible;
    }

    .logo{
        display: grid;
        grid-template-columns: min-content auto;
        gap: 8pt;
        padding: 0 8pt;
        font-size: 1.2em;
        font-weight: 600;
        color: var(--accent);
    }

    .logo img{
        display: inline-block;
        height: 1.5em;

    }

    .search{
        width: 40%;
        margin: auto;
        padding: 8pt 12pt;
        background: var(--l1);
        border-radius: 4pt;
        transition-duration: 200ms;
    }

    .search:focus{
        background: var(--l2);
    }
</style>