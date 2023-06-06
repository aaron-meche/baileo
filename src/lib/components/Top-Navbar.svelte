<script>
    import Menu from '$lib/components/Menu.svelte'

    import {
        db,
        storage,
        mediaDB,
        handleMediaItemClick
    } from '$lib/assets/main'

    import { 
        page 
    } from '$app/stores'

    let currently_watching = ''
    db.listen('users/' + storage.read('username'), (user) => {
        if (user.watching && user.library?.[user.watching]) {
            currently_watching = user.watching
        }
    })

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
    <button on:click={() => window.open('/', '_self')} class="logo" >
        <img src="logo.png" alt="Icon">
        baileo
    </button>

    <div class="nav-bar horizontal-scroll">
        <a href='/' class="item {$page.url.pathname == '/' ? 'active' : ''}">
            <img src="icons/home.svg" alt="Icon">
            <span class="text">Home</span>
        </a>

        <!-- <a href='/search' class="item {$page.url.pathname == '/search' ? 'active' : ''}">
            <img src="icons/search.svg" alt="Icon">
            <span class="text">Search</span>
        </a> -->

        {#if currently_watching}
            <a href='/watch' class="item {$page.url.pathname == '/watch' ? 'active' : ''}">
                <img src="icons/play.svg" alt="Icon">
                <span class="text">Watch: {currently_watching}</span>
            </a>
        {/if}

    </div>
</div>

<!--  -->

<style>
    .wrapper{
        display: grid;
        row-gap: 15px;
        padding: 15px 0;
        background: var(--bg);
        box-shadow: 0 0 15px rgb(0, 0, 0);
    }

    @media screen and (orientation: landscape) {
        .wrapper{
            grid-template-columns: min-content auto;
            padding: 15px;
        }
    }

    .logo{
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        padding: 0 15px;
        margin: auto;
        font-size: 15pt;
        font-weight: 500;
        color: var(--accent);
    }

    .logo img{
        height: 20px;
        margin-right: 5px;
    }

    .horizontal-scroll{
        padding: 0 15px;
    }

    .horizontal-scroll .item{
        display: inline-flex;
        align-items: center;
        padding: 10px;
        margin-right: 10px;
        border-radius: 5px;
        background: var(--fg);
        cursor: pointer;
    }
    
    .horizontal-scroll .item:hover, .horizontal-scroll .item.active{
        background: var(--e-fg);
    }

    .horizontal-scroll .item img{
        float: left;
        height: 20px;
        margin-right: 10px;
    }
</style>