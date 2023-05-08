<script>
    import { 
        page 
    } from '$app/stores'

    import { 
        storage
    } from '$lib/assets/main'

    function openPage(page) {
        window.open(page, '_self')
    }
</script>

<!--  -->

<div class='wrapper'>
    <!-- <button on:click={() => openPage('/')} class="item logo">
        <img src="logo.png" alt="Icon">
        baileo
    </button> -->

    <button on:click={() => openPage('/')} class="item {$page.url.pathname === '/' ? 'active' : ''}">
        <img src="icons/home.svg" alt="Icon">
        Home
    </button>

    <button on:click={() => openPage('/search')} class="item {$page.url.pathname === '/search' ? 'active' : ''}">
        <img src="icons/search.svg" alt="Icon">
        Search
    </button>

    <button on:click={() => openPage('/watch')} class="item {$page.url.pathname === '/watch' ? 'active' : ''}">
        <img src="icons/play.svg" alt="Icon">
        Watch
    </button>
</div>

<!--  -->

<style>
    .wrapper{
        display: grid;
        padding: 25px;
    }

    .item{
        display: grid;
        align-items: center;
        grid-template-columns: min-content auto;
        column-gap: 10px;
        padding: 10px 20px;
        border-radius: 10px;
        font-size: 12pt;
        font-weight: 400;
        cursor: pointer;
    }

    .item:hover{
        background: var(--light-gradient);
    }

    .item.active{
        background: var(--bold-gradient);
    }

    .item.active:hover{
        background: var(--bold-gradient);
    }

    .item img{
        height: 25px;
        display: inline-block;
    }
</style>