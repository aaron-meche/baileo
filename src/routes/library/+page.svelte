<script>
    import MediaGrid from "../MediaGrid.svelte";
    import { db } from "$lib/data"

    let library = []
    db.subscribe(data => {
        library = data.library
    })
</script>

<!--  -->

<div class="page">
    <MediaGrid items={library} />
</div>

<!--  -->

<style>

</style>