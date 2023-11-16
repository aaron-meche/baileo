<script>
    export let title, items
    import MediaItem from "./MediaItem.svelte";

    console.log(items)
</script>

<!--  -->

<div class="wrapper">
    <div class="menu-title">{title}</div>
    <div class="menu scroll">
        {#each items as item} 
            <MediaItem item={item} />
        {/each}
    </div>
</div>

<!--  -->

<style>
    .scroll{
        width: calc(100vw - (var(--inline-moat) * 2));
    }
</style>