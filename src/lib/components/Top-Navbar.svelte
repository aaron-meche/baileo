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

    function clear_search() {
        let input = document.querySelector('.search-bar-wrapper input')
        
        input.value = ''
    }
</script>

<!--  -->

<div class="wrapper">
    <button on:click={() => open_menu()} class="menu-toggle">
        <img src="icons/menu.svg" class='nav-icon-button' alt="Icon">
    </button>

    <button on:click={() => window.open('/', '_self')} class="logo" >
        <img src="logo.png" alt="Icon">
        baileo
    </button>
    
    <div class='search-section'>
        <div class="search-bar-wrapper">
            <img src="icons/search.svg" alt="Icon">
            <input type="text" placeholder="Search">
            <button on:click={clear_search}>
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
        column-gap: 15px;
        padding: 5px 15px;
        background: var(--fg);
    }

	@media screen and (orientation: portrait) {
        .wrapper{
            grid-template-columns: min-content min-content 1fr;
        }
    }

    img{
        height: 25px;
    }

    .nav-icon-button{
        padding: 10px;
        cursor: pointer;
    }

    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15pt;
        font-weight: 500;
        cursor: pointer;
    }
    .logo img{
        margin-right: 5px;
    }

    .search-section{
        display: grid;
        align-items: center;
        justify-content: right;
    }

    .search-bar-wrapper{
        display: grid;
        align-items: center;
        grid-template-columns: min-content 1fr min-content;
        border-radius: 5px;
        background: var(--e-fg);
        position: absolute;
        visibility: hidden;
    }

    .search-bar-wrapper img{
        height: 20px;
        padding: 10px;
    }

    input{
        height: 100%;
        width: 100%;
    }
</style>