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
    <!-- <a href='/' class="logo">
        <img src="logo.png" alt="Logo">
    </a> -->

    <a href='/' class="standard-button {$page.url.pathname == '/' ? 'active' : ''}">
        <img src="icons/explore.svg" alt="Icon">
    </a>

    <a href='/search' class="standard-button {$page.url.pathname == '/search' ? 'active' : ''}">
        <img src="icons/search.svg" alt="Icon">
    </a>

    {#if currently_watching}
        <a href='/watch' class="standard-button {$page.url.pathname == '/watch' ? 'active' : ''}">
            <img src="icons/play.svg" alt="Icon">
        </a>
    {/if}
</div>

<!--  -->

<style>
    .wrapper{
        display: grid;
        row-gap: 10px;
        padding: 50px 10px;
    }

    a{
        border-radius: 5px;
    }

    a.active{
        background: var(--l2);
        border-color: var(--l3);
    }

    img{
        height: 30px;
    }
</style>