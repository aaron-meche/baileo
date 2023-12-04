<script>
    import "$lib/main.css"
    import "$lib/style.css"
    import * as tb from "$lib/tigerbase";
    import Navbar from "./Navbar.svelte";
    import { onMount } from "svelte";

    let random_hue = Math.floor((Math.random() * 360))
    onMount(() => {
        document.documentElement.style.setProperty('--hue', random_hue);
    })
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