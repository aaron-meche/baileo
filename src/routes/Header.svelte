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
    <input class="search" bind:this={search_bar} on:keyup={() => keyPress()} type="text" placeholder="What do you want to watch?">
    <div class="results">
    
    </div>
</div>


<!--  -->

<style>
    .bar{
        position: relative;
        width: 100vw;
        /* background: var(--background-transparent); */
        padding: 4pt;
        overflow: visible;
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