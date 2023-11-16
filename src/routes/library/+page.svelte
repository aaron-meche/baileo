<script>
    import { mediaDB } from "$lib/index"
    import MediaSection from "./MediaSection.svelte";


</script>

<!--  -->

<div class="page">
    <MediaSection title="Continue Watching" items={mediaDB.filter(item => item.type == "TV Show")} />
</div>

<!--  -->

<style>
    
</style>