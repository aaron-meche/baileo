<script>
    export let items
    import MediaItem from "./MediaItem.svelte"

</script>

<!--  -->

<div class="grid">
    {#each items as item}
        <MediaItem item={item} />
    {/each}
</div>

<!--  -->

<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160pt, 1fr));
        row-gap: 16pt;
    }
</style>