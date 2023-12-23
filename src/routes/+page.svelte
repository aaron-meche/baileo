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
        items = mediaDB.filter(item => item[key] == val)
        console.log(items, mediaDB.filter(item => item.type == "TV Show"))
    }

    function arraysAreEqual(array1, array2) {
        // Check if the arrays are the same length
        if (array1.length !== array2.length) {
            return false;
        }

        // Compare each element
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }

        // If all elements are equal
        return true;
    }
</script>

<!--  -->

<div class="page">
    <div class="filters horizontal-scroll">
        <input type="text" placeholder="Search" bind:this={searchBar} on:keyup={updateSearch}>

        <div class="horizontal-selector horizontal-scroll">
            <button class="item {arraysAreEqual(items, mediaDB.filter(item => item.type == "TV Show")) ? "active" : ""}" on:click={() => addFilter("type", "TV Show")}>TV Show</button>
            <button class="item {arraysAreEqual(items, mediaDB.filter(item => item.type == "Movie")) ? "active" : ""}" on:click={() => addFilter("type", "Movie")}>Movie</button>
        </div>

        <div class="horizontal-selector horizontal-scroll">
            <button class="item {arraysAreEqual(items, mediaDB.filter(item => item.cat == "comedy")) ? "active" : ""}" on:click={() => addFilter("cat", "comedy")}>Comedy</button>
            <button class="item {arraysAreEqual(items, mediaDB.filter(item => item.cat == "animation")) ? "active" : ""}" on:click={() => addFilter("cat", "animation")}>Animations</button>
            <button class="item {arraysAreEqual(items, mediaDB.filter(item => item.cat == "drama")) ? "active" : ""}" on:click={() => addFilter("cat", "drama")}>Dramas</button>
            <button class="item {arraysAreEqual(items, mediaDB.filter(item => item.cat == "horror")) ? "active" : ""}" on:click={() => addFilter("cat", "horror")}>Horror</button>
        </div>
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
        margin-right: 1.25em;
        padding: 0.75em 1.25em;
        /* background: var(--l1); */
        border: solid 1pt var(--l3);
        border-radius: 0.5em;
    }

    input:focus{
        background: var(--l1);
        border-color: var(--accent);
    }

    .horizontal-selector{
        line-height: 1em;
        width: fit-content;
        margin-right: 1.25em;
        border: solid 1pt var(--l3);
        border-radius: 0.5em;
    }

    .horizontal-selector .item{
        height: 1em;
        padding: 0.75em 1.25em;
        opacity: 0.75;
        border-radius: inherit;
    }

    .horizontal-selector .item:hover{
        background: var(--l1);
        opacity: 1;
    }

    .horizontal-selector .item.active{
        background: var(--l2);
        color: var(--accent);
        opacity: 1;
    }
</style>