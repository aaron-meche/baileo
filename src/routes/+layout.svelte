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
        Baileo
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
        height: 100vh;
        width: 100vw;
    }

    .head{
        padding: 12pt;
        background: var(--l1);
    }

    .body{
        position: relative;
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