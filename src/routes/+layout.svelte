<script>
	import { storage, isServerConnected } from '$lib/data'
    import TopNavbar from '$lib/components/Top Navbar.svelte'
    import '$lib/style.css'

    function protectStoragePref(attr, val) {
        if (!storage.exists(attr)) {
            storage.set(attr, val)
        }
    }

    protectStoragePref('watching title', 'The Office')
    protectStoragePref('shuffle', 'false')
    protectStoragePref('autoplay', 'true')
    protectStoragePref('glow', 'true')
    protectStoragePref('autoplay buffer', 30)

    if (!isServerConnected('https://209.163.185.11/test.jpg')) {
        console.log('Server not connected')
        setTimeout(() => {
            if (typeof window !== 'undefined') {
                if (!isServerConnected('https://209.163.185.11/test.jpg')) {
                    window.open('https://209.163.185.11/confirm.html', '_self')
                }
            }
        }, 1000);
    }
</script>

<!--  -->

<div class="app">

    <!-- <div class="wallpaper"></div> -->
    <!-- <div class="wallpaper-filter"></div> -->

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