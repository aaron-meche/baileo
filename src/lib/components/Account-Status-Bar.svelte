<script>
    import {
        auth,
        db,
        storage,
        mediaDB
    } from '$lib/assets/main'

    let username = storage.exists('username') ? storage.read('username') : 'guest'
    if (username.includes('guest')) {
        username = 'guest'
    }
    username = username.charAt(0).toUpperCase() + username.slice(1)

    // let last_watched = {}
    // if (typeof window !== 'undefined') {
        // db.read('users/' + storage.read('username'), (user) => {
        //     if (user.watching && user.library?.[user.watching]) {
        //         last_watched.title = user.watching
        //         last_watched.progress = Math.floor(user.library[user.watching].progress * 100)
        //     }
        // })
    // }

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

    function watch_library() {
        alert('Invalid')
    }

    function random_watch() {
        let rannum = Math.floor(Math.random() * Object.keys(mediaDB).length)
        let random_title = Object.keys(mediaDB)[rannum]
        db.write('users/' + storage.read('username') + '/watching', random_title, () => {
            window.open('/watch', '_self')
        })
    }

    function your_account() {
        alert('Your Account')
    }
</script>

<!--  -->


<div class="wrapper">
    {#if storage.exists('username')}
        <h1>Welcome back, {username}</h1>
        
        <div class="section">
            <!-- Library -->
            <button on:click={watch_library}>
                <img icon src="icons/history.svg" alt="Icon">
                <div>
                    <h3>Your Library</h3>
                    <h4>Watch history and saved lists</h4>
                </div>
            </button>

            <!-- Random watch -->
            <button on:click={random_watch}>
                <img icon src="icons/shuffle.svg" alt="Icon">
                <div>
                    <h3>Random Watch</h3>
                    <h4>Pick something random to watch</h4>
                </div>
            </button>

            <!-- Account preferences -->
            <button on:click={your_account}>
                <img icon src="icons/profile.svg" alt="Icon">
                <div>
                    <h3>Your Account</h3>
                    <h4>Account preferences</h4>
                </div>
            </button>

            <!-- Log out of account -->
            <button on:click={auth.logout}>
                <img icon src="icons/close.svg" alt="Icon">
                <div>
                    <h3>Log Out</h3>
                    <h4>Log out of this account</h4>
                </div>
            </button>
        </div>
    {:else}
        <h1>Want to use a login?</h1>

        <div class="section">
            <button on:click={account_prompt.yes}>
                <img icon src="icons/complete.svg" alt="Icon">
                <div>
                    <h3>Yes</h3>
                    <h4>Online account</h4>
                </div>
            </button>
            
            <button on:click={account_prompt.no}>
                <img icon src="icons/close.svg" alt="Icon">
                <div>
                    <h3>No</h3>
                    <h4>Local account</h4>
                </div>
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
		padding: 0 15px;
	}

    h1{
        text-align: center;
    }

    .section{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }

    button{
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        column-gap: 15px;
        padding: 15px;
        border: solid 2px var(--fg);
        border-radius: 10px;
        font-size: 10pt;
        font-weight: 400;
    }

    button:hover{
        background: var(--fg);
        border-color: var(--e-fg);
    }

    button img{
        margin: auto;
    }
</style>