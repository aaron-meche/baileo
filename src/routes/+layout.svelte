<script>
    import "$lib/main.css"
    import "$lib/style.css"
    import Header from "./Header.svelte";
    import Sidebar from "./Sidebar.svelte";

</script>

<!--  -->

<div class="app">
    <div class="header">
        <!-- <Header /> -->
    </div>

    <div class="sidebar">
        <Sidebar />
    </div>

    <div class="content">
        <slot />
    </div>
</div>

<!--  -->

<style>
    .app{
        position: relative;
        height: 100vh;
        display: grid;
        grid-template-columns: 160pt auto;
        gap: 8pt;
        padding-inline: 8pt;
    }
    
    .app > *{
        height: 100%;
        overflow: auto;
    }

    .header{
        height: 12pt;
        grid-column: 1 / 3;
    }

    .content{
        min-height: 100vh;
    }
</style>