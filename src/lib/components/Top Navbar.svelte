<script>
    import { page } from '$app/stores';

    function toggleMenu() {
        alert('Menu')
    }

    function openPage(page) {
        window.open(page, '_self')
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

        <!-- <button on:click={() => openPage('/settings')} class='{$page.url.pathname === '/settings' ? 'active' : ''}'>
            <img src="icons/settings.svg" alt="Icon">
        </button> -->
    </div>

</div>

<!--  -->

<style>
    .navbar{
        padding: 12.5px 20px;
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

    button{
        display: inline-flex;
        align-items: center;
        padding: 5px;
    }
        button.active, button:hover{
            box-shadow: 0 1px var(--accent);
        }
        button img{
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
</style>