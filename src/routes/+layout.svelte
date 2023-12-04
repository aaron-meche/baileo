<script>
    import "$lib/main.css"
    import "$lib/style.css"
<<<<<<< HEAD
    import * as tb from "$lib/tigerbase";
    import Navbar from "./Navbar.svelte";
    import { onMount } from "svelte";

    let random_hue = Math.floor((Math.random() * 360))
    onMount(() => {
        document.documentElement.style.setProperty('--hue', random_hue);
    })
=======
    // import * as tb from "$lib/tigerbase";

    // tb.connect("http://localhost:2005", "GingerLSU19", () => {
    //     tb.auth(() => {
    //         // logged in

    //     }, () => {
    //         // not logged in

    //     })
    // })
>>>>>>> a5756be942876a06eeead388793ed88bd792824e
</script>

<!--  -->

<div class="app">
    <slot />
</div>

<!--  -->

<style>

</style>