<script>
    import "$lib/main.css"
    import "$lib/style.css"
    import Header from "./Header.svelte";
    import Sidebar from "./Sidebar.svelte";

</script>

<!--  -->

<div class="app">
    <div class="header">
        <Header />
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
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 160pt auto;
        grid-template-rows: min-content auto;
        overflow: hidden;
    }
    
    .app > *{
        height: 100%;
        overflow: auto;
    }

    .header{
        grid-column: 1 / 3;
    }
</style>