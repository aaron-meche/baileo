<script>
    import '$lib/style.css'

	import { 
        storage, 
        isServerConnected 
    } from '$lib/main'

    import TopNavbar from '$lib/components/Top Navbar.svelte'

    function protectStoragePref(attr, val) {
        if (!storage.exists(attr)) {
            storage.set(attr, val)
        }
    }

    protectStoragePref('watching title', 'The Office')
    protectStoragePref('shuffle', 'false')
    protectStoragePref('autoplay', 'true')
    protectStoragePref('autoplay buffer', 30)
</script>

<!--  -->

<div class="app">

    <!-- <div id="serverError" style='opacity: {isServerConnected('https://209.163.185.11/test.jpg') ? 0 : 1}'>
        <ServerError/>
    </div> -->

    <div class="top-navbar">   <TopNavbar/>   </div>
    <div class="app">   <slot/>   </div>

</div>

<!--  -->

<style>
    .top-navbar{
        position: sticky;
        top: 0;
        z-index: 10;
        background: var(--background);
    }
</style>