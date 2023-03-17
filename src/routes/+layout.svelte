<script>
    import TopNavbar from '$lib/components/Top Navbar.svelte'
    import '$lib/style.css'
</script>

<!--  -->

<div class="app">

    <div class="wallpaper"></div>
    <div class="wallpaper-filter"></div>

    <div class="top-navbar">   <TopNavbar/>   </div>
    <div class="app">   <slot/>   </div>

</div>

<!--  -->

<style>
    .wallpaper{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -100;
        background: url('new purple.jpg') center center no-repeat fixed;
        background-size: fixed;
    }

    .wallpaper-filter{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -90;
        backdrop-filter: blur(100px);
        -webkit-backdrop-filter: blur(100px);
        -moz-backdrop-filter: blur(100px);
        background: rgba(0, 0, 0, 0.75);
    }
</style>