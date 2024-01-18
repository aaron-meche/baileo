<script>
    import "$lib/main.css"
    import "$lib/style.css"
    import Header from "./Header.svelte";
    import { db } from "$lib/data"
    import { beforeUpdate, onMount } from "svelte";

    beforeUpdate(() => {
        // db.subscribe(data => {
        //     document.documentElement.style.setProperty("--hue", data.hue)
        // })
    })
</script>

<!--  -->

<div class="app">
    <div class="head">
        <Header />
    </div>

    <div class="body">
        <slot />
    </div>
</div>

<!--  -->

<style>
    .head{
        position: sticky;
        top: 0;
        background: var(--bg-transparent);
        backdrop-filter: blur(16pt);
        -webkit-backdrop-filter: blur(16pt);
        z-index: 2;
    }
</style>