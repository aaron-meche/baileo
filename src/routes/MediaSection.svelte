<script>
    export let title, items
    import MediaItem from "./MediaItem.svelte"
    import { shuffle } from "$lib/index"

</script>

<!--  -->

<section>
    <div class="section-title">{title}</div>
    
    <div class="horizontal-scroll">
        {#each shuffle(items) as item}
            <div class="item">
                <MediaItem item={item} />
            </div>
        {/each}
    </div>
</section>

<!--  -->

<style>
    .section-title{
        padding: 0 var(--inline-moat);
        margin-left: 1rem;
        font-size: 16pt;
        font-weight: 700;
    }
</style>