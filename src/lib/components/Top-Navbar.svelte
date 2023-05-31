<script>
    import Menu from '$lib/components/Menu.svelte'

    import {
        mediaDB,
        handleMediaItemClick
    } from '$lib/assets/main'

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
        result = []
    }

    let results = []
    function search() {
        let input = document.querySelector('.search-bar-wrapper input').value.toLowerCase()
        results = []
        
        for (let i = 0; i < Object.keys(mediaDB).length; i++) {
            if (Object.keys(mediaDB)[i].toLowerCase().includes(input)) {
                results.push(Object.keys(mediaDB)[i])
            }
        }
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
            <input type="text" placeholder="Search" on:keyup={search}>
            <button on:click={close_search}>
                <img src="icons/close.svg" alt="Icon">
            </button>

            <div class="search-window">
                {#each results as result}
                    <button class="item" on:click={() => handleMediaItemClick(result)}>
                        <img src="thumbnails/{result}.jpeg" alt="Thumbnail">
                        <div class="info">
                            <div class="title">{result}</div>
                            <div class="description">{mediaDB[result]['type']}</div>
                        </div>
                    </button>
                {/each}
            </div>
        </div>

        <button class='open-search-button' on:click={open_search}>
            <img src="icons/search.svg" class='nav-icon-button' alt="Icon">
        </button>
    </div>
</div>

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
        position: relative;
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

    .search-window{
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        max-height: 50vh;
        width: 100%;
        background: var(--fg);
        border-radius: 5px;
        overflow: auto;
    }

    .search-window .item{
        display: grid;
        grid-template-columns: 2fr 3fr;
        align-items: center;
        gap: 15px;
        padding: 5px;
    }

    .search-window .item:hover{
        background: var(--e-fg);
    }

    .search-window .item .title{
        font-size: 12pt;
        font-weight: 600;
    }

    .search-window .item .description{
        font-size: 10pt;
        font-weight: 500;
        color: gray;
    }

    .search-window img{
        height: auto; 
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 5px;
        object-fit: cover;
    }
</style>