<script>
    import { page } from '$app/stores'
    import { onMount } from 'svelte'
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import SearchError from "./search/SearchError.svelte";

    let search_bar
    let val
    let items_to_display = mediaDB
    function keyPress(e) {
        val = search_bar.value
        items_to_display = mediaDB.filter(item => item.title.toLowerCase().includes(val.toLowerCase()))
        db.update(data => {
            data.search_result = items_to_display
            return data
        })
    }

    let library, currently_watching
    db.subscribe(data => {
        library = data.library
        currently_watching = data.currently_watching
    })

    function watchMedia(title) {
        db.update(data => {
            data.currently_watching = title
            return data
        })
        if ($page.url.pathname == "/watch") window.location.reload()
    }
</script>

<!--  -->

<div class="wrapper">
    <a href="/" class="logo">
        baileo 24.0 dev
    </a>
</div>


<!--  -->

<style>
    .wrapper{
        padding: 8pt 20pt;
    }

    .logo{
        font-weight: 600;
        text-transform: lowercase;
    }
</style>