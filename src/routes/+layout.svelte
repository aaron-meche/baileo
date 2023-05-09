<script>
    import '$lib/assets/style.css'

	import { 
        storage, 
        isServerConnected 
    } from '$lib/assets/main'

    import TopNavbar from '$lib/components/Top-Navbar.svelte'
    import SideNavbar from '$lib/components/Side-Navbar.svelte'
    import Pomodoro from '$lib/components/Pomodoro.svelte'

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

    function open_menu() {
        let app = document.querySelector('.app')
        let side_menu = document.querySelector('.side-bar')
        let backdrop = document.querySelector('.backdrop')

        side_menu.style.transform = 'translate(100%, 0)'
        side_menu.style.opacity = '1'
        backdrop.style.display = 'block'
    }

    function close_menu() {
        let app = document.querySelector('.app')
        let side_menu = document.querySelector('.side-bar')
        let backdrop = document.querySelector('.backdrop')

        side_menu.style.transform = 'translate(0, 0)'
        side_menu.style.opacity = '0'
        backdrop.style.display = 'none'
    }

    function open_page(page) {
        window.open(page, '_self')
    }
</script>

<!--  -->

<!-- <div class="top-navbar">   <TopNavbar/>   </div> -->

<div class="app">  
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backdrop" on:click={close_menu}></div>
    <div class="side-bar">
        <SideNavbar/>
    </div> 
    
    <div class="content">
        <div class="top-bar">
            <button on:click={open_menu}>
                <img src="icons/menu.svg" alt="Icon">
            </button>

            <button on:click={() => open_page('/')} class="item logo">
                <img src="logo.png" alt="Icon">
                baileo
            </button>
        </div>

        <slot/>
    </div>

    <!-- <div class="pomodoro">
        <Pomodoro/>
    </div> -->
</div>

<!--  -->

<style>
    .app{
        position: relative;
    }

    .backdrop{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 9;
        background: rgb(0, 0, 0, 0.5);
        display: none;
    }

    .side-bar{
        position: fixed;
        top: 0;
        right: 100vw;
        height: 100vh;
        width: 300px;
        max-width: 90vw;
        background: var(--transparent-fg);
        z-index: 10;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        -moz-backdrop-filter: blur(15px);
        box-shadow: 0 0 25px black;
        opacity: 0;
        transition: transform 300ms, opacity 300ms;
    }

    .top-bar{
        position: sticky;
        top: 0;
        display: grid;
        grid-template-columns: min-content min-content;
        column-gap: 5px;
        padding: 10px 20px;
        background: var(--fg);
        z-index: 8;
        box-shadow: 0 0 25px black;
        font-size: 0;
    }

    .top-bar > *{
        padding: 5px 10px;
        border-radius: 5px;
    }

    .top-bar > *:hover{
        background: var(--l-gradient);
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

    .pomodoro{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        z-index: 10;
        background: rgb(0, 0, 0, 0.5);
    }
</style>