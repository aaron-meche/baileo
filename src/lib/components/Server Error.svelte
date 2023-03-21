<script>
    function openFileServer() {
        window.open('https://209.163.185.11/confirm.html', '_self')
    }
</script>

<!--  -->

<div class="card">
    <div class="title">
        Connection Error
    </div>
    <div class="description">
        It seems that there is an error with your connection to the file server, please click the button below and accept the security risks to begin watching content.
    </div>
    <button on:click={openFileServer}>
        Open File Server
    </button>
</div>

<!--  -->

<style>
    .card{
        height: auto;
        width: clamp(25vw, 350pt, 90vw);
        position: fixed;
        bottom: 15pt;
        left: 50vw;
        transform: translate(-50%, 0);
        z-index: 10;
        display: grid;
        row-gap: 10pt;
        padding: 20pt;
        text-align: center;
        border-radius: 20pt;
        background: rgb(0, 0, 0, 0.5);
        backdrop-filter: blur(50px);
        -webkit-backdrop-filter: blur(50px);
        -mox-backdrop-filter: blur(50px);
        box-shadow: var(--accent-shadow);
    }

    .title{
        font-weight: 600;
    }

    .description{
        font-weight: 400;
    }

    button{
        font-weight: 500;
        padding: 10pt;
        margin: auto;
        border-radius: 100vh;
        background: var(--bold-gradient);
    }

    button:hover{
        opacity: 0.9;
    }
</style>