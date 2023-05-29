<script>
    import {
        storage
    } from '$lib/assets/main'

    import { 
        page 
    } from '$app/stores'

    function open_page(url) {
        window.open(url, '_self')
    }
</script>

<!--  -->

<div class="wrapper">
    <button class="item {$page.url.pathname === '/' ? 'active' : ''}" on:click={() => open_page('/')}><img src="icons/home.svg" alt="Icon"> Home</button>
    <button class="item {$page.url.pathname === '/search' ? 'active' : ''}" on:click={() => open_page('/search')}><img src="icons/search.svg" alt="Icon"> Search</button>
    <button class="item {$page.url.pathname === '/watch' ? 'active' : ''}" on:click={() => open_page('/watch')}><img src="icons/play.svg" alt="Icon"> Watch</button>

    {#if storage.read('user_id') !== undefined}
        <button class="item" on:click={() => auth.logallout()}><img src="icons/trash.svg" alt="Icon">Clear All Logins</button>
        <button class="item" on:click={() => auth.logout()}><img src="icons/close.svg" alt="Icon">Log Out</button>
    {/if}
</div>

<!--  -->

<style>
    .wrapper{
        height: 100%;
        margin: auto;
        background: var(--e-fg);
        border-radius: 5px;
        overflow: auto;
        cursor: default;
        box-shadow: 0 5px 20px black;
    }

    .list{
        display: grid;
    }

    .item{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px;
        cursor: pointer;
    }

    .item:hover{
        color: var(--accent);
    }

    .item img{
        height: 20px;
        margin-right: 10px;
    }

    /* .divider{
        height: 2px;
        width: 100%;
        margin: 5px auto;
        background: var(--bg);
    } */
</style>