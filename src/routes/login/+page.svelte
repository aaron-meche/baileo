<script>
    import {
        auth
    } from '$lib/assets/main'
</script>

<!--  -->

<div class="card">
    <div class="title">
        Login to Baileo
        <div class="caption">You do not need to have an existing account to login!</div>
    </div>
    <div class="buttons">
        <button on:click={auth.google}>Google</button>
        <!-- <button>Github</button> -->
        <!-- <button>Microsoft</button> -->
        <!-- <button>Phone Number</button> -->
    </div>
</div>

<!--  -->

<style>
    .card{
        width: clamp(25vw, 500px, 90vw);
        display: grid;
        row-gap: 20px;
        padding: 20px;
        margin: 20px auto;
        border-radius: 10px;
        background: var(--fg);
    }

    .title{
        font-size: 15pt;
        font-weight: 800;
        text-align: center;
    }

    .caption{
        font-size: 10pt;
        font-weight: 300;
        opacity: 75%;
        text-align: center;
    }

    .buttons{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;
    }

    button{
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        background: var(--l-gradient);
    }

    button:hover{
        background: var(--b-gradient);
    }
</style>