<script>
    import Menu from '$components/Menu.svelte'

    import {
        db,
        storage,
        mediaDB,
        handleMediaItemClick
    } from '$assets/main'

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
    <div class="nav-bar horizontal-scroll">
        <a href='/' class="logo">
            <img src="logo.png" alt="Logo">
            baileo
        </a>

        <a href='/' class="nav-item {$page.url.pathname == '/' ? 'active' : ''}">
            <img src="icons/home.svg" alt="Icon">
            <span class="text">Home</span>
        </a>

        <a href='/search' class="nav-item {$page.url.pathname == '/search' ? 'active' : ''}">
            <img src="icons/search.svg" alt="Icon">
            <span class="text">Search</span>
        </a>

        {#if currently_watching}
            <a href='/watch' class="nav-item {$page.url.pathname == '/watch' ? 'active' : ''}">
                <img src="icons/play.svg" alt="Icon">
                <span class="text">{currently_watching}</span>
            </a>
        {/if}

    </div>
</div>

<!--  -->

<style>
    .wrapper{
        display: grid;
        align-items: center;
        padding: 20px 0;
        background: var(--bg);
        border-bottom: solid 2px var(--e-fg);
    }

    .nav-bar{
        display: flex;
        align-items: center;
    }

    .horizontal-scroll{
        padding: 0 4%;
    }

    .logo{
        display: inline-flex;
        align-items: center;
        margin-right: 20px;
    }

    .logo img{
        height: 20px;
        margin-right: 5px;
    }

    .nav-item{
        display: inline-flex;
        align-items: center;
        margin-right: 20px;
        border-radius: 5px;
        font-size: 10pt;
        opacity: 75%;
        cursor: pointer;
        transition: opacity 0.25s;
    }

    .nav-item.active, .nav-item:hover{
        opacity: 100%;
    }

    .nav-item img{
        float: left;
        height: 15px;
        margin-right: 5px;
    }
</style>