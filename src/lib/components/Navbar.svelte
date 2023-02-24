<script>
    import { page } from '$app/stores';

    import homeIcon from '$lib/svg/home.svg'
    import playIcon from '$lib/svg/play.svg'
    import historyIcon from '$lib/svg/history.svg'
    import settingsIcon from '$lib/svg/settings.svg'
    import searchIcon from '$lib/svg/search.svg'
</script>

<!--  -->

<div class="navbar">

    <a href='/'>
        <img class='icon {$page.url.pathname === '/' ? 'active' : ''}' src={homeIcon} alt="Home">
    </a>

    <a href='/watch/$continue'>
        <img class='icon {$page.url.pathname.split('/')[1] === 'watch' ? 'active' : ''}' src={playIcon} alt="Watch">
    </a>
    
    <a href='/history'>
        <img class='icon {$page.url.pathname === '/history' ? 'active' : ''}' src={historyIcon} alt="History">
    </a>

    <a href='/settings'>
        <img class='icon {$page.url.pathname === '/settings' ? 'active' : ''}' src={settingsIcon} alt="Settings">
    </a>

    <a href='/search'>
        <img class='icon {$page.url.pathname === '/search' ? 'active' : ''}' src={searchIcon} alt="Search">
    </a>


</div>

<!--  -->

<style>
    .navbar{
        padding: 15pt 0;
        text-align: center;
    }

    .icon{
        width: 25pt;
        padding: 7pt;
        border-radius: 10pt;
        margin-bottom: 15pt;
    }

    .icon.active{
        background: var(--hover-bg);
        box-shadow: inset 0 -2pt 0 0 var(--accent);
    }

    .icon:hover{
        background: var(--hover-bg);
    }
</style>