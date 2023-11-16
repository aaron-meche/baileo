<script>
    import "$lib/main.css"
    import "$lib/style.css"
    import { db } from "$lib/data";
    import Navbar from "./Navbar.svelte";
    import { onMount } from "svelte";

    // onMount(() => {
    //     db.subscribe(data => {
    //         document.documentElement.style.setProperty("--hue", data.theme_color)
    //     })
    // })
</script>

<!--  -->

<div class="app">
    <div class="navbar">
        <Navbar />
    </div>

    <slot />
</div>

<!--  -->

<style>
    .navbar{
        position: sticky;
        top: 0;
        z-index: 100;
    }
</style>