<script>
    import MediaGrid from "./MediaGrid.svelte";


</script>

<!-- -->

<div class="filters horizontal-scroll">
    <input type="text" class="search" placeholder="Search">
    <button class="option"><i class="fa-solid fa-filter"></i>Type</button>
    <button class="option"><i class="fa-solid fa-filter"></i>Category</button>
</div>

<div class="media-grid">
    <MediaGrid />
</div>

<!--  -->

<style>
    .filters{
        display: grid;
        grid-template-columns: auto min-content min-content;
        gap: 0.5rem;
        padding: 1rem var(--inline-moat);
    }

    .search{
        padding: 0.5rem 1rem;
        background: var(--l1);
        border-radius: 0.5rem;
    }

    .option{
        padding: 0.5rem 1rem;
        background: var(--l1);
        font-size: 10pt;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: background 200ms;
    }

    .option:hover{
        background: var(--l2);
        opacity: 1;
    }

    .option i{
        margin-right: 0.5rem;
    }

</style> 