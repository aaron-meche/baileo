<script>
    import { mediaDB } from "$lib/index";
    import { db } from "$lib/data";
    import MediaGrid from "./MediaGrid.svelte";

    let library_items = []
    db.update(data => {
        let items = []
        data.library.forEach(item => {
            items.push(mediaDB.find(elem => elem.title == item.title))
        })
        library_items = items
        return data
    })

    let items = mediaDB
    let searchBar
    function updateSearch() {
        items = mediaDB.filter(item => (`${item.title} ${item.type} ${item.cat}`).toLowerCase().includes(searchBar.value.toLowerCase()))
    }

    function addFilter(key, val) {
        // items = mediaDB.filter(item => item[key] == val)
        searchBar.value = val
        updateSearch()
    }
</script>

<!--  -->

<div class="page">
    <div class="filters horizontal-scroll">
        <input type="text" placeholder="Search" bind:this={searchBar} on:keyup={updateSearch}>
    </div>

    <MediaGrid items={items} />
</div>

<!--  -->

<style>
    .filters{
        /* background: var(--l1); */
    }

    input{
        height: 1em;
        width: 20em;
        margin: auto;
        padding: 0.75em;
        background: var(--l1);
        border: solid 1pt var(--l5);
        border-radius: 0.2em;
    }

    input:hover{
        border-color: var(--l6);
    }

    input:focus{
        background: var(--l1);
        color: var(--accent);
        border-bottom-color: var(--accent);
    }
</style>