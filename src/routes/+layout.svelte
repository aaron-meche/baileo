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
    <div class="sidebar">
        <Sidebar />
    </div>

    <div class="content">
        <slot />
    </div>
</div>

<!--  -->

<style>
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 200pt;
        overflow: auto;
    }
    
    .content{
        margin-left: 200pt;
    }
</style>