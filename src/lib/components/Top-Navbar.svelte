<script>
    import Menu from '$lib/components/Menu.svelte'

    function open_menu() {
        alert('Menu Unavailable')
    }

    function close_menu() {
        alert('close')
    }

    function open_search() {
        let search = document.querySelector('.search-bar-wrapper')
        let input = document.querySelector('.search-bar-wrapper input')
        let button = document.querySelector('.open-search-button')
        
        search.style.position = 'relative'
        search.style.visibility = 'visible'
        button.style.display = 'none'
        input.focus()
    }

    function close_search() {
        let search = document.querySelector('.search-bar-wrapper')
        let input = document.querySelector('.search-bar-wrapper input')
        let button = document.querySelector('.open-search-button')
        
        search.style.position = 'absolute'
        search.style.visibility = 'hidden'
        button.style.display = 'block'
        input.value = ''
    }
</script>

<!--  -->

<div class="wrapper">
    <div class="section">
        <button on:click={() => open_menu()} class="menu-toggle">
            <img src="icons/menu.svg" class='nav-icon-button' alt="Icon">
        </button>
    </div>

    <button on:click={() => window.open('/', '_self')} class="logo" >
        <img src="logo.png" alt="Icon">
        baileo
    </button>
    
    <div class='search-section'>
        <div class="search-bar-wrapper">
            <img src="icons/search.svg" alt="Icon">
            <input type="text" placeholder="Search">
            <button on:click={close_search}>
                <img src="icons/close.svg" alt="Icon">
            </button>
        </div>

        <button class='open-search-button' on:click={open_search}>
            <img src="icons/search.svg" class='nav-icon-button' alt="Icon">
        </button>
    </div>
</div>

<!-- <div class="menu-wrapper">
    <button class="overlay" on:click={close_menu}></button>
    <div class="menu">
        <Menu/>
    </div>
</div> -->

<!--  -->

<style>
    .wrapper{
        position: relative;
        display: grid;
        grid-template-columns: 1fr min-content 1fr;
        gap: 15px;
        padding: 10px;
        background: var(--bg);
        box-shadow: 0 5px 25px black;
        border-bottom: solid 1px var(--e-fg);
    }

    .wrapper > * {
        display: grid;
        align-items: center;
    }

	@media screen and (orientation: portrait) {
        .wrapper{
            grid-template-columns: min-content min-content 1fr;
        }
    }

    img{
        height: 25px;
        padding: 5px;
    }

    button{
        width: fit-content;
    }

    input{
        height: 100%;
        width: 100%;
    }

    .nav-icon-button{
        cursor: pointer;
    }

    .logo{
        display: flex;
        align-items: center;
        font-size: 15pt;
        font-weight: 500;
        cursor: pointer;
    }
    .logo img{
        all: unset;
        height: 25px;
        margin-right: 5px;
    }

    .search-section{
        justify-content: right;
    }

    .search-bar-wrapper{
        display: grid;
        align-items: center;
        grid-template-columns: min-content 1fr min-content;
        border-radius: 5px;
        background: var(--fg);
        position: absolute;
        visibility: hidden;
    }
</style>