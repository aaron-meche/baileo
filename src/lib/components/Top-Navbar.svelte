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
    <div class="nav-bar horizontal-scroll">
        <a href='/' class="item {$page.url.pathname == '/' ? 'active' : ''}">
            <img src="icons/home.svg" alt="Icon">
            <span class="text">Home</span>
        </a>

        <!-- <a href='/search' class="item {$page.url.pathname == '/search' ? 'active' : ''}">
            <img src="icons/search.svg" alt="Icon">
            <span class="text">Search</span>
        </a> -->

        <!-- <a href='/search' class="item {$page.url.pathname == '/utility' ? 'active' : ''}">
            <img src="icons/utility.svg" alt="Icon">
            <span class="text">Utility</span>
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
        align-items: center;
        padding: 10px 0;
        background: var(--bg);
        box-shadow: 0 0 15px rgb(0, 0, 0);
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
        border: solid 2px var(--e-fg);
        font-size: 10pt;
        cursor: pointer;
    }
    
    .horizontal-scroll .item:hover{
        background: var(--fg);
    }

    .horizontal-scroll .item.active{
        background: var(--fg);
        border-bottom-color: var(--accent);
    }

    .horizontal-scroll .item img{
        float: left;
        height: 15px;
        margin-right: 5px;
    }
</style>