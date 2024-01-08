<script>
    import "$lib/main.css"
    import "$lib/style.css"
    import Header from "./Header.svelte";
    import Sidebar from "./Sidebar.svelte";
    import { db } from "$lib/data"
    import { beforeUpdate, onMount } from "svelte";

    beforeUpdate(() => {
        db.subscribe(data => {
            document.documentElement.style.setProperty("--hue", data.hue)
        })
    })
</script>

<!--  -->

<div class="app">
    <div class="head">
        <Header />
    </div>

    <div class="body">
        <div class="sidebar">
            <Sidebar />
        </div>
    
        <div class="content">
            <slot />
        </div>
    </div>

</div>

<!--  -->

<style>
    .app{
        position: relative;
        display: grid;
        grid-template-rows: min-content auto;
        height: 100svh;
        width: 100svw;
    }

    .head{
        position: sticky;
        top: 0;
        box-shadow: 0 0 4pt var(--contrast-transparent);
        background: var(--bg);
        z-index: 2;
    }

    .body{
        position: relative;
        z-index: 1;
        overflow: auto;
    }

    .sidebar{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 200pt;
        overflow: auto;
    }
    
    .content{
        margin-left: 200pt;
    }
</style>