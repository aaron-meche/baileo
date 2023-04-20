<script>
    import { 
        page 
    } from '$app/stores'

    import { 
        storage 
    } from '$lib/main'

    function toggleMenu() {
        alert('Menu')
    }

    function openPage(page) {
        window.open(page, '_self')
    }

    function clearAllData() {
        storage.clear()
    }
</script>

<!--  -->

<div class="navbar">
    <div class="logo-display section">
        <button on:click={toggleMenu}>
            <img src="icons/menu.svg" alt="Icon">
        </button>

        <button on:click={() => openPage('/')} class='logo {$page.url.pathname === '/' ? 'active' : ''}'>
            <img src="logo.svg" alt="Icon">
            baileo
        </button>
    </div>
    
    <div class="actions section">
        <button on:click={() => openPage('/watch')} class='{$page.url.pathname === '/watch' ? 'active' : ''}'>
            <img src="icons/play.svg" alt="Icon">
        </button>

        <button on:click={() => openPage('/search')} class='{$page.url.pathname === '/search' ? 'active' : ''}'>
            <img src="icons/search.svg" alt="Icon">
        </button>
    </div>
</div>

<!-- <div class="menu">
    <button on:click={clearAllData}>Clear All Data</button>
    <div class="space"></div>
    <button on:click={clearAllData} style='color: coral'>Clear All Data</button>
</div> -->

<!--  -->

<style>
    .navbar{
        padding: 15px 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .section{
        display: grid;
        align-items: center;
        grid-auto-flow: column;
        column-gap: 10px;
    }
        .logo-display{
            justify-content: left;
        }
        .actions{
            justify-content: right;
        }

    .navbar button{
        display: inline-flex;
        align-items: center;
        padding: 5px;
    }
        .navbar button.active, .navbar button:hover{
            box-shadow: 0 1px var(--accent);
        }
        .navbar button img{
            height: 22.5px;
        }

    .logo{
        font-size: 12pt;
        font-weight: 600;
        opacity: 1;
        color: var(--accent);
    }
        .logo img{
            margin-right: 7.5px;
        }

    .menu{
        position: absolute;
        top: 100%;
        left: 20px;
        max-width: 75vw;
        display: grid;
        border-radius: 5px;
        background: var(--foreground);
    }

    .menu .space{
        /* height: 1px; */
        margin: 5px 0;
        background: var(--extra-foreground);
    }

    .menu button{
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 10pt;
        font-weight: 400;
    }

    .menu button:hover{
        background: var(--extra-foreground);
    }
</style>