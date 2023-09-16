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

<!-- <div id="mediaPanel"> -->
    <!-- <MediaPanel isMediaPanelOpen={isMediaPanelOpen} /> -->
<!-- </div> -->

<section>
    <div class="media-section-title">{title}</div>
    
    <div class="horizontal-scroll">
        {#each items as item}
            <a href="/watch" on:click={() => selectItem(item.title)} class="media-item">
                <MediaItem item={item} />
            </a>
        {/each}
    </div>
</section>

<!--  -->

<style>
    section{
        width: 100vw;
    }

    .media-section-title{
        font-size: 16pt;
        font-weight: 600;
        padding: 0 var(--inline-moat);
        margin-left: 8pt;
        margin-bottom: 4pt;
    }

    .horizontal-scroll{
        padding: 0 var(--inline-moat);
        border-radius: 4pt;
    }
</style>