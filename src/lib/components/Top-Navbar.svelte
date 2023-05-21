<script>
    import Menu from '$lib/components/Menu.svelte'

    function open_menu() {
        document.querySelector('.menu').style.transform = 'translate(0, 100%)'
        document.querySelector('.menu').style.opacity = '1'
    }
    function close_menu() {
        document.querySelector('.menu').style.transform = 'translate(0, 0)'
        document.querySelector('.menu').style.opacity = '0'
    }
</script>

<!--  -->

<div class="wrapper">
    <button on:click={open_menu} class="item logo">
        <img src="logo.png" alt="Icon">
        baileo
    </button>
</div>

<div class="menu">
    <button class="overlay" on:click={close_menu}></button>
    <Menu/>
</div>

<!--  -->

<style>
    .wrapper{
        padding: 10px 20px;
        text-align: center;
        background: var(--bg);
        border-bottom: solid 4px var(--fg);
        z-index: 10;
    }

    .wrapper > *{
        padding: 5px 10px;
        border-radius: 5px;
    }

    .wrapper > *:hover{
        background: var(--fg);
    }

    img{
        height: 25px;
    }

    .logo{
        display: inline-grid;
        grid-template-columns: min-content min-content;
        column-gap: 5px;
        align-items: center;
        font-size: 12pt;
        font-weight: 500;
        color: var(--accent);
    }

    .menu{
        position: fixed;
        top: -100vh;
        left: 0;
        height: 100vh;
        width: 100vw;
        opacity: 0;
        transition: transform 200ms, opacity 200ms;
        touch-action: none;
    }

    .overlay{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgb(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        -moz-backdrop-filter: blur(5px);
        z-index: -5;
    }
</style>