<script>
    import '$lib/assets/style.css'

	import { 
        storage, 
        isServerConnected 
    } from '$lib/assets/main'

    import TopNavbar from '$lib/components/Top-Navbar.svelte'
    import SideNavbar from '$lib/components/Side-Navbar.svelte'

    function default_storage_value(attr, val) {
        if (!storage.exists(attr)) {
            storage.set(attr, val)
        }
    }

    default_storage_value('watching title', 'The Office')
    default_storage_value('shuffle', 'false')
    default_storage_value('autoplay', 'true')
    default_storage_value('autoplay buffer', 30)
    default_storage_value('menu status', 'true')

    function toggle_menu() {
        let app = document.querySelector('.app')
        let side_menu = document.querySelector('.side-bar')

        if (storage.get('menu status') == 'true') {
            app.style.gridTemplateColumns = '0 100vw'
            side_menu.style.visibility = 'hidden'
            storage.set('menu status', 'false')
        }
        else {
            app.style.gridTemplateColumns = '300px calc(100vw - 300px)'
            setTimeout(() => {
                side_menu.style.visibility = 'visible'
            }, 400);
            storage.set('menu status', 'true')
        }
    }

    function open_page(page) {
        window.open(page, '_self')
    }
</script>

<!--  -->

<!-- <div class="top-navbar">   <TopNavbar/>   </div> -->

<div class="app">  
    <div class="side-bar">
        <SideNavbar/>
    </div> 
    
    <div class="content">
        <div class="top-bar">
            <button on:click={toggle_menu}>
                <img src="icons/menu.svg" alt="Icon">
            </button>

            <button on:click={() => open_page('/')} class="item logo">
                <img src="logo.png" alt="Icon">
                baileo
            </button>
        </div>

        <slot/>
    </div>
</div>

<!--  -->

<style>
    .app{
        position: relative;
        display: grid;
        grid-template-columns: 300px calc(100vw - 300px);
        transition: grid-template-columns 400ms;
    }

    .side-bar{
        position: sticky;
        top: 0;
        height: 100vh;
        width: 100%;
        background: var(--foreground);
        box-shadow: 0 0 25px black;
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

    .top-bar{
        display: grid;
        grid-template-columns: min-content min-content;
        column-gap: 5px;
        padding: 10px 25px;
        background: var(--foreground);
        box-shadow: 0 0 25px black;
        font-size: 0;
    }

    .top-bar > *{
        padding: 5px 10px;
        border-radius: 5px;
    }

    .top-bar > *:hover{
        background: var(--light-gradient);
    }

    .top-bar img{
        height: 25px;
    }

    .top-bar .logo{
        display: inline-grid;
        grid-template-columns: min-content min-content;
        column-gap: 5px;
        align-items: center;
        color: var(--accent);
        font-size: 12pt;
        font-weight: 500;
    }
</style>