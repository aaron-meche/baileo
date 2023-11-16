<script>
    import { page } from '$app/stores'

    const pages = [
        {
            path: "/",
            title: "Explore"
        },
        {
            path: "/watch",
            title: "Watch"
        },
        {
            path: "/library",
            title: "Library"
        },
        {
            path: "/settings",
            title: "Settings"
        }
    ]

    let list_of_paths = []
    pages.forEach(path => {
        list_of_paths.push(path)
    })
    if (!list_of_paths.includes($page.url.pathname)) {
        console.log("does not work")
    }
</script>

<!--  -->

<div class="wrapper">

    {#each pages as item}
        <a class="{$page.url.pathname == item.path ? 'active' : ''}" href="{item.path}">
            {item.title}
        </a>
    {/each}

    <!-- {#if pages.filten(item)} -->
   
</div>

<!--  -->

<style>
    .wrapper{
        padding: 0 var(--inline-moat);
        text-align: center;
        background: var(--bg-transparent);
        backdrop-filter: blur(12pt);
        -webkit-backdrop-filter: blur(12pt);
        font-size: 0;
    }

    .logo{
        color: var(--accent);
        opacity: 1;
        font-weight: 700;
    }

    a{
        display: inline-block;
        padding: 8pt 16pt;
        font-size: 10pt;
        font-weight: 500;
        opacity: 0.75;
    }

    a:hover{
        opacity: 1;
    }

    a.active{
        opacity: 1;
        /* background: linear-gradient(to bottom left, var(--l1), transparent); */
        /* background: var(--l1); */
        color: var(--accent);
        border-top: solid 2pt var(--accent);
    }
</style>