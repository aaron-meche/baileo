<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import MediaItem from "../MediaItem.svelte";
    import MediaSection from "../MediaSection.svelte";

    const full_list = mediaDB
    let refined_list = full_list

    function refineSearch(query) {
        let search_query = document.querySelector("#searchInput").value
        refined_list = []

        full_list.forEach(item => {
            console.log(item)
            if (item.title.toLowerCase().includes(search_query.toLowerCase())) {
                refined_list.push(item)
            }
        })
    }
</script>

<!--  -->

<div class="page moat-delete">
    <div class="search-wrapper">
        <input type="text" id="searchInput" on:input={refineSearch} placeholder="Search" value="">
    </div>
    
    <MediaSection title="TV Shows" items={refined_list.filter(item => item.type == "TV Show")} />
    <MediaSection title="Movies" items={refined_list.filter(item => item.type == "Movie")} />
</div>

<!--  -->

<style>
    .search-wrapper{
        margin: 0 var(--inline-moat);
    }

    input{
        width: calc(100% - 24pt);
        padding: 4pt 12pt;
        background: linear-gradient(to top right, var(--l1), transparent);
        font-size: 14pt;
        font-weight: 599;
        border: solid 1pt var(--l2);
        border-radius: 4pt;
    }

    input:focus{
        background: linear-gradient(to top right, var(--c2), var(--s2));
        border-color: var(--l4);
    }

    .media-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160pt, 1fr));
        gap: 8pt;
    }

    .media-item{
        width: 100pt;
    }
</style>