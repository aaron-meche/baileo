<script>
    export let title
    export let items = []
    import { db } from "$lib/data"
    import { mediaDB, shuffle } from "$lib/index"
    import MediaItem from "./MediaItem.svelte"

    let library
    db.subscribe(data => {
        library = data.library
    })

    function selectItem(item) {
        db.update(data => {
            data.currently_watching = item.title

            let template = {
                title: item.title,
                progress: 0
            }

            if (item.type == "TV Show") {
                template.season = 1
                template.episode = 1
            }

            let libitem = data.library.find(elem => elem.title == item.title)
            if (!libitem) {
                data.library.push(template)
            }
            
            return data
        })
    }
</script>

<!--  -->

<div class="menu">
    <div class="title">{title}</div>
    <div class="scroll">
        {#each items as item}
            <!-- {#if library.find(elem => elem.title == item.title) || item.type == "Movie"} -->
                <a class="item" on:click={() => selectItem(item)} href="/watch">
                    <MediaItem item={item} />
                </a>
            <!-- {:else}
                <a class="item" on:click={() => selectItem(item)} href="/episode-selector">
                    <MediaItem item={item} />
                </a>
            {/if} -->
        {/each}
    </div>
</div>

<!--  -->

<style>
</style>