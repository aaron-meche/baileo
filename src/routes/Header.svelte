<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte'
    import { navigating } from "$app/stores"
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import SearchError from "./search/SearchError.svelte";
    import SearchMenu from './SearchMenu.svelte';

    let search_val = ""

    let library, currently_watching
    db.subscribe(data => {
        library = data.library
        currently_watching = data.currently_watching
    })

    let search_bar, search_window
    function updateWindowSize() {
        let xPos = search_bar.offsetLeft
        let yPos = search_bar.offsetTop
        search_window.style.top = yPos + "px"
        search_window.style.left = xPos + "px"
    }

    $: if ($navigating !== null) {
        console.log("chaing")
        search_val = ""
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
            <input type="text" placeholder="Search" bind:value={search_val}>
        {/if}
    </div>

    {#if search_val != ""}
        <div class="search-menu">
            <SearchMenu query={search_val}/>
        </div>
    {/if}
</div>



<!--  -->

<style>
    .wrapper{
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        gap: 1rem;
        padding: 1rem var(--inline-moat);
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

    input:focus{
        background: var(--l2);
    }

    .search-menu{
        position: absolute;
        top: 100%;
        right: var(--inline-moat);
        height: fit-content;
        max-height: 25rem;
        width: 17rem;
        padding: 0.5rem;
        background: var(--l1);
        border-radius: 0.25rem;
        overflow: auto;
    }
</style>