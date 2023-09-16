<script>
    import { page } from '$app/stores'
</script>

<!--  -->

<div class="wrapper">
    <a class="logo" href="/">baileo</a>
    <a class="{$page.url.pathname == '/' ? 'active' : ''}" href="/">Explore</a>
    <a class="{$page.url.pathname == '/search' ? 'active' : ''}" href="/search">Search</a>
    <a class="{$page.url.pathname == '/watch' ? 'active' : ''}" href="/watch">Watch</a>
    <a class="{$page.url.pathname == '/settings' ? 'active' : ''}" href="/settings">Settings</a>
</div>

<!--  -->

<style>
    .wrapper{
        padding: 8pt var(--inline-moat);
        /* background: linear-gradient(to bottom, var(--l1), transparent); */
        background: var(--bg);
        font-size: 0;
    }

    .logo{
        color: var(--accent);
        opacity: 1;
        font-weight: 600;
    }

    a{
        display: inline-block;
        padding: 4pt 8pt;
        margin-right: 4pt;
        font-size: 10pt;
        font-weight: 599;
        opacity: 0.5;
    }

    a:hover{
        opacity: 1;
    }

    a.active{
        opacity: 1;
        background: linear-gradient(to bottom left, var(--l1), transparent);
        background: var(--l1);
        color: var(--accent);
        
        border-radius: 4pt;
    }
</style>