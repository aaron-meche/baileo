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
    <div class="title">Page Navigation</div>
    <div class="list">
        <button class="item {$page.url.pathname === '/' ? 'active' : ''}" on:click={() => open_page('/')}><img src="icons/home.svg" alt="Icon"> Home</button>
        <button class="item {$page.url.pathname === '/search' ? 'active' : ''}" on:click={() => open_page('/search')}><img src="icons/search.svg" alt="Icon"> Search</button>
        <button class="item {$page.url.pathname === '/watch' ? 'active' : ''}" on:click={() => open_page('/watch')}><img src="icons/play.svg" alt="Icon"> Watch</button>
    </div>

    <div class="title">Quick Actions</div>
    <div class="list">
        <button class="item {$page.url.pathname === '/data-link' ? 'active' : ''}" on:click={() => open_page('/data-link')}><img src="icons/link.svg" alt="Icon"> Data Link</button>
        <!-- <button class="item {$page.url.pathname === '/apps/notes' ? 'active' : ''}" on:click={() => open_page('/apps/notes')}><img src="icons/note.svg" alt="Icon"> Notes</button> -->
    </div>
</div>

<!--  -->

<style>
    .wrapper{
        max-height: calc(100vh - 40px);
        width: clamp(25vw, 400px, calc(100vw - 40px));
        padding: 20px;
        margin: auto;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background: var(--bg);
        overflow: auto;
        cursor: default;
    }

    .title{
        font-size: 10pt;
        font-weight: 500;
        text-align: center;
        color: var(--accent);
        padding: 10px;
    }

    .list{
        display: grid;
    }

    .list .item{
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }

    .list .item:hover{
        background: var(--fg);
        color: var(--accent);
    }

    .list .item.active{
        background: var(--fg);
    }

    .list .item img{
        height: 20px;
        margin-right: 10px;
    }
</style>