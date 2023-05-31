<script>
    import {
        auth,
        db,
        storage,
        mediaDB
    } from '$lib/assets/main'

    let username = storage.exists('username') ? storage.read('username') : 'guest'
    if (username.includes('guest')) {
        username = 'Guest'
    }

    let last_watched = {}
    if (typeof window !== 'undefined') {
        db.read('users/' + storage.read('username'), (user) => {
            if (user.watching && user.library?.[user.watching]) {
                last_watched.title = user.watching
                last_watched.progress = Math.floor(user.library[user.watching].progress * 100)
            }
        })
    }

    const account_prompt = {
        yes: () => {
            window.open('/account', '_self')
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

    function resume_watching() {
        window.open('/watch', '_self')
    }

    function random_watch() {
        let rannum = Math.floor(Math.random() * Object.keys(mediaDB).length)
        let random_title = Object.keys(mediaDB)[rannum]
        db.write('users/' + storage.read('username') + '/watching', random_title, () => {
            window.open('/watch', '_self')
        })
    }

    function utility() {
        alert('Utility Unavailable')
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
            {#if last_watched.title}
                <button on:click={resume_watching}>
                    <img src="icons/play.svg" alt="Icon">
                    Resume Watching
                    <div class="caption">{last_watched.title} ({last_watched.progress}%)</div>
                </button>
            {/if}
            
            <button on:click={random_watch}>
                <img src="icons/shuffle.svg" alt="Icon">
                Random Watch
                <div class="caption">Pick something random to watch</div>
            </button>
            
            <button on:click={utility}>
                <img src="icons/utility.svg" alt="Icon">
                Utility
                <div class="caption">Embedded convenience features</div>
            </button>

            <button on:click={your_account}>
                <img src="icons/profile.svg" alt="Icon">
                Your Account
                <div class="caption">Account preferences</div>
            </button>
        </div>
    {:else}
        <div class="title">Want to use a login?</div>

        <div class="section">
            <button on:click={account_prompt.yes}>
                <img src="icons/complete.svg" alt="Icon">
                Yes
                <div class="caption">Online account</div>
            </button>
            
            <button on:click={account_prompt.no}>
                <img src="icons/close.svg" alt="Icon">
                No
                <div class="caption">Local account</div>
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
        font-size: 12pt;
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
        font-size: 10pt;
        color: gray;
    }
</style>