<script>
    // Imports
    import '$lib/assets/style.css'
    import SideNavbar from '$lib/components/Side-Navbar.svelte'

	import { 
        storage
    } from '$lib/assets/main'

    import { 
        page 
    } from '$app/stores'

    import { 
        initializeApp
    } from "firebase/app"



    // Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDDSQmLL5A756k_vWlc4Zk_ysZ5hd8cB-k",
        authDomain: "baileo-4009d.firebaseapp.com",
        projectId: "baileo-4009d",
        storageBucket: "baileo-4009d.appspot.com",
        messagingSenderId: "308681359309",
        appId: "1:308681359309:web:b57d82dc080ba772af4e84"
    }
    const app = initializeApp(firebaseConfig);



    // Go to login page if not logged in
    if (!storage.exists('is logged in') && $page.url.pathname !== '/login') {
        open_page('login')
    }



    // Safety storage functions
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



    // Left side bar open/close
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



    // Open url function
    function open_page(page) {
        if (typeof window == "undefined") return
        window.open(page, '_self')
    }
</script>

<!--  -->

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
        background: var(--l-fg);
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
        padding: 10px 20px;
        background: var(--bg);
        z-index: 8;
    }

    .top-bar > *{
        padding: 10px;
        border-bottom: solid 2px rgb(0, 0, 0, 0);
    }

    .top-bar > *:hover{
        border-color: var(--accent);
    }

    .top-bar img{
        height: 25px;
    }

    .top-bar .logo{
        display: inline-grid;
        grid-template-columns: min-content min-content;
        column-gap: 5px;
        align-items: center;
        font-size: 12pt;
        font-weight: 500;
        color: var(--accent);
    }
</style>