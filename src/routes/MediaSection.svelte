<script>
    export let title, items
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import MediaItem from "./MediaItem.svelte";
    // import MediaPanel from "./MediaPanel.svelte";

    let isMediaPanelOpen = false;
    function toggleMediaPanel() {
        isMediaPanelOpen = !isMediaPanelOpen
    }

    function selectItem(title) {
        db.update(data => {
            data.currently_watching = title
            return data
        })
    }
</script>

<!--  -->

<section>
    <div class="menu-title">{title}</div>
    
    <div class="menu list">
        {#each items as item}
            <a href="/watch" on:click={() => selectItem(item.title)}>
                <MediaItem item={item} />
            </a>
        {/each}
    </div>
</section>

<!--  -->

<style>
    .list{
        max-height: 300pt;
    }
</style>