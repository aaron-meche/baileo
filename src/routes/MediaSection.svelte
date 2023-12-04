<script>
    export let title
    export let items = []
    import { db } from "$lib/data"
    import { mediaDB, shuffle } from "$lib/index"
    import MediaItem from "./MediaItem.svelte";

    items = shuffle(items)

    function selectItem(title) {
        db.update(data => {
            data.currently_watching = title
            return data
        })
    }
</script>

<!--  -->

<div class="menu">
    <div class="title">{title}</div>
    <div class="scroll">
        {#each items as item}
            {#if item.type == "TV Show"}
                <a class="item" href="/episode-selector" on:click={() => selectItem(item.title)}>
                    <MediaItem item={item} />
                </a>
            {:else}
                <a class="item" href="/watch" on:click={() => selectItem(item.title)}>
                    <MediaItem item={item} />
                </a>
            {/if}
        {/each}
    </div>
</div>

<!--  -->

<style>
</style>