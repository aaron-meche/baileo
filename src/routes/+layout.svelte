<script>
    import Navbar from '$lib/components/Navbar.svelte'
    import '$lib/style.css'
</script>

<!--  -->

<div class="app">

    <div class="left hemisphere">   <Navbar/>   </div>
    <div class="right hemisphere">   <slot/>   </div>

</div>

<!--  -->

<style>
    .app{
        height: 100vh;
        width: 100vw;
        font-size: 0;
    }

    .hemisphere{
        height: 100vh;
        float: left;
        font-size: 12pt;
        overflow: auto;
    }

    :root{
        --navbar-width: 50pt;
    }

    .left{
        width: var(--navbar-width);
    }

    .right{
        width: calc(100vw - var(--navbar-width));
        background: var(--darker-bg);
        /* background: linear-gradient(160deg, var(--darker-bg) 10%, var(--dark-accent) 100%); */
    }
</style>