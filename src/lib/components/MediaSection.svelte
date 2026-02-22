<!-- created by Aaron Meche -->
<script>
    import { mediaDB } from "$lib/data"
    import MediaItem from "./MediaItem.svelte";

    const { label, key, val } = $props()
    const mediaList = mediaDB.filter(item => item[key] == val)

</script>

<!--  -->

<section>
    <div class="section-label">{label}</div>
    <div class="horizontal-scroll">
        {#each mediaList as item}
            <MediaItem item={item} />
        {/each}
    </div>
</section>

<!--  -->

<style>
    section{
        padding: 2rem 0;
    }
    
    .section-label{
        margin-left: 2rem;
        margin-bottom: 0.5rem;
        font-size: 12pt;
        font-weight: 500;
    }

    .horizontal-scroll{
        padding: 1pt 1rem;
    }
</style>