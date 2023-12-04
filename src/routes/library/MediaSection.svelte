<script>
    export let title, items
    import MediaItem from "./MediaItem.svelte";

    console.log(items)
</script>

<!--  -->

<div class="wrapper">
    <div class="menu">
        <div class="title">{title}</div>
        <div class="scroll">
            {#each items as item} 
                <div class="item">
                    <MediaItem item={item} />
                </div>
            {/each}
        </div>
    </div>
</div>

<!--  -->

<style>
    .scroll{
        width: calc(100vw - (var(--inline-moat) * 2));
    }

    .item{
        padding: 8pt;
    }
</style>