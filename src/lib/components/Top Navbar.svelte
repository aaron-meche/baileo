<script>
    import { 
        page 
    } from '$app/stores'

    import { 
        storage
    } from '$lib/main'

    function openPage(page) {
        window.open(page, '_self')
    }

    const menu = {
        open: function() {
            document.querySelector('.menu-wrapper').style.display = 'block'
        },
        close: function() {
            document.querySelector('.menu-wrapper').style.display = 'none'
        },
        startPomodoro: function() {
            alert('Feature Inactive')
        },
        action: function() {
            alert('inactive')
        },
        clearData: function() {
            storage.clear()
            window.open('/', '_self')
        },
    }
</script>

<!--  -->

<div class="navbar">
    <div class="logo-display section">
        <button on:click={menu.open}>
            <img src="icons/menu.svg" alt="Icon">
        </button>

        <button on:click={() => openPage('/')} class='logo {$page.url.pathname === '/' ? 'active' : ''}'>
            <img src="logo.png" alt="Icon">
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

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu-wrapper" on:click={menu.close}>
    <div class="menu">
        <button on:click={() => openPage('/')} class='logo'>
            <img src="logo.png" alt="Icon">
            baileo
        </button>

        <div class="space"></div>

        <button on:click={menu.startPomodoro}>Pomodoro Timer</button>
        <!-- <button on:click={menu.action}>Pomodoro Timer</button> -->

        <div class="space"></div>

        <button on:click={menu.clearData} style='color: coral'>Clear All Data</button>
    </div>
</div>

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
            height: 100%;
            margin-right: 5px;
            float: left;
        }

    
    .menu-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgb(0, 0, 0, 0.5);
        display: none;
    }

    .menu{
        min-height: calc(100vh - 50px);
        width: fit-content;
        max-width: 75vw;
        padding: 25px;
        background: var(--background);
        box-shadow: 0 0 100px black;
    }

    .menu .space{
        height: 1px;
        background: var(--foreground);
        margin: 10px 0;
    }

    .menu button{
        height: 25px;
        width: calc(100% - 30px);
        padding: 10px 15px;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }

    .menu button:hover{
        background: var(--foreground);
    }
</style>