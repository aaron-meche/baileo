<script>
    import '$lib/assets/style.css'

	import { 
        storage, 
        isServerConnected 
    } from '$lib/assets/main'

    import TopNavbar from '$lib/components/Top-Navbar.svelte'
    import SideNavbar from '$lib/components/Side-Navbar.svelte'

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

<!-- <div class="top-navbar">   <TopNavbar/>   </div> -->

<div class="app">  
    <div class="side-bar">
        <SideNavbar/>
    </div> 
    
    <div class="content">
        <slot/>   
    </div>
</div>

<!--  -->

<style>
    .top-navbar{
        z-index: 10;
        background: var(--background);
    }

    .app{
        position: relative;
        display: grid;
        grid-template-columns: 300px calc(100vw - 300px);
    }

    .side-bar{
        position: sticky;
        top: 0;
        height: 100vh;
        width: 100%;
        background: var(--foreground);
    }

    @media screen and (max-width: 1000px) {
        .app{
            grid-template-columns: 100vw;
        }

        .side-bar{
            position: fixed;
            top: 0;
            left: -100vw;
        }
    }
</style>