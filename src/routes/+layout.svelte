<script>
	import { storage } from '$lib/data'
    import TopNavbar from '$lib/components/Top Navbar.svelte'
    import '$lib/style.css'

    function protectStoragePref(attr, val) {
        if (!storage.exists(attr)) {
            storage.set(attr, val)
        }
    }

    protectStoragePref('watching title', 'Parks and Recreation')
    protectStoragePref('shuffle', 'false')
    protectStoragePref('autoplay', 'false')
    protectStoragePref('glow', 'false')
    protectStoragePref('autoplay buffer', 30)
</script>

<!--  -->

<div class="app">

    <!-- <div class="wallpaper"></div> -->
    <!-- <div class="wallpaper-filter"></div> -->

    <div class="top-navbar">   <TopNavbar/>   </div>
    <div class="app">   <slot/>   </div>

</div>

<!--  -->

<style>
    /* .wallpaper{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -100;
        background: url('$lib/assets/aqua.jpg') center center no-repeat;
        background-size: fixed;
    } */

    /* .wallpaper{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -100;
        background: linear-gradient(to bottom right, rgb(10 10 30), rgb(20 20 60))
    } */

    /* .wallpaper-filter{
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
    } */
</style>