<script>
    import overview from '$lib/overview.svg'
    import time_table from '$lib/agenda.svg'
    import settings from '$lib/settings.svg'
    import manage from '$lib/manage.svg'
    import zen from '$lib/zen.svg'

    import { page } from '$app/stores';

</script>

<!--  -->

<div class="navbar">

    <a href='/' class="item" active={$page.url.pathname === '/' ? 'true' : undefined}>
        All Media
    </a>

    <a href='/tv-shows' class="item" active={$page.url.pathname === '/tv-shows' ? 'true' : undefined}>
        TV Shows
    </a>

    <a href='/movies' class="item" active={$page.url.pathname === '/movies' ? 'true' : undefined}>
        Movies
    </a>

</div>

<!--  -->

<style>
    a{
        color: inherit;
        text-decoration: none;
    }

    .navbar{
        font-size: 0;
        padding: 15pt;
        background: rgb(20 20 20);
        text-align: center;
    }

    .navbar .item{
        font-size: 12pt;
        padding: 5pt;
        margin: 5pt;
        border: solid 1pt gray;
        border-radius: 2pt;
    }

    .navbar .item:hover{
        background: rgb(50 50 50);
    }

    .navbar .item[active='true']{
        border-color: lightpink;
    }
</style>