<script>
    import {
        auth,
        db,
        storage
    } from '$lib/assets/main'

    let username = storage.exists('username') ? storage.read('username') : 'guest'
    if (username.includes('guest')) {
        username = 'Guest'
    }

    const account_prompt = {
        yes: () => {
            alert('Login unavailable')
        },
        no: () => {
            const key_generator = (length) => {
                let canvas = ''
                let lib = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
                for (let i = 0; i < length; i++) {
                    canvas += lib[Math.floor(Math.random() * lib.length)]
                }
                return canvas
            }
            let username = 'guest_' + key_generator(50)

            auth.register(username, 'guest', () => {
                auth.login(username, 'guest', () => {
                    window.location.reload()
                })
            })
        }
    }

    function continue_watching() {
        alert('Continue Watching')
    }

    function watch_history() {
        alert('Watch History')
    }

    function random_watch() {
        alert('Random Watch')
    }

    function your_account() {
        alert('Your Account')
    }
</script>

<!--  -->


<div class="wrapper">
    {#if storage.exists('username')}
        <div class="title">Welcome back, {username}</div>
        <div class="section">
            <button on:click={continue_watching}>
                <img src="icons/play.svg" alt="Icon">
                Continue Watching
            </button>
            
            <button on:click={watch_history}>
                <img src="icons/history.svg" alt="Icon">
                Watch History
            </button>

            <button on:click={random_watch}>
                <img src="icons/shuffle.svg" alt="Icon">
                Random Watch
            </button>
            
            <button on:click={your_account}>
                <img src="icons/profile.svg" alt="Icon">
                Your Account
            </button>
        </div>
    {:else}
        <div class="title">Want to link an account?</div>

        <div class="section">
            <button on:click={account_prompt.yes}>
                <img src="icons/complete.svg" alt="Icon">
                Yes
                <div class="caption">Your watch data will synced between devices</div>
            </button>
            
            <button on:click={account_prompt.no}>
                <img src="icons/close.svg" alt="Icon">
                No
                <div class="caption">Your watch data will not be saved</div>
            </button>
        </div>
    {/if}
</div>

<!--  -->

<style>
	.wrapper{
        position: relative;
        display: grid;
        gap: 15px;
		padding: 30px 15px;
	}

    .title{
        font-size: 20pt;
        font-weight: 600;
    }

    .section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 10px;
    }

    button{
        display: grid;
        row-gap: 5px;
        padding: 15px;
        border: solid 1px var(--e-fg);
        border-bottom-color: var(--accent) !important;
        border-radius: 10px;
        font-size: 10pt;
        font-weight: 400;
        text-align: center;
    }

    button:hover{
        background: var(--fg);
        border-color: gray;
    }

    button img{
        height: 25px;
        margin: auto;
        display: block;
    }

    button .caption{
        font-weight: 300;
        color: gray;
    }

    form{
        /* grid-template-columns: 1fr !important; */
    }

    .label{
        font-size: 10pt;
    }

    input{
        width: 100%;
        padding: 5px 0;
        border-bottom: solid 2px white;
        color: white;
        font-size: 12pt;
        font-weight: 500;
    }

    input:focus{
        border-color: var(--accent);
    }

    .submit{
        justify-content: center;
        font-weight: bold;
    }
</style>