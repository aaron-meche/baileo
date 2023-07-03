<script>
    import MediaSection from '$lib/components/Media-Section.svelte';

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
        // alert('Your Account')
        console.log('empty button')
    }

    // Get Currently Watching
	let continue_watching = []
	if (typeof window !== "undefined") {
		db.listen('users/' + storage.read('username'), (user) => {
			if (user.library) {
				continue_watching = Object.keys(user.library)
			}
		})
	}
</script>

<!--  -->


<div class="wrapper">
    {#if storage.exists('username')}
        <div class="lateral-grid horizontal-scroll">
            <!-- Library -->
            <a clickable class="standard-button" href="/search">
                <img icon src="icons/search.svg" alt="Icon">
                Search
            </a>

            <!-- Random watch -->
            <button clickable class="standard-button" on:click={random_watch}>
                <img icon src="icons/shuffle.svg" alt="Icon">
                Random Watch
            </button>

            <!-- Account preferences -->
            <button clickable class="standard-button" on:click={your_account}>
                <img icon src="icons/profile.svg" alt="Icon">
                Your Account
            </button>

            <!-- Log out of account -->
            <button clickable class="standard-button" on:click={auth.logout}>
                <img icon src="icons/close.svg" alt="Icon">
                Log Out
            </button>
        </div>
    {:else}
        <div class="lateral-grid horizontal-scroll">
            <button clickable class="standard-button" on:click={account_prompt.yes}>
                <img icon src="icons/complete.svg" alt="Icon">
                Yes
            </button>
            
            <button clickable class="standard-button" on:click={account_prompt.no}>
                <img icon src="icons/close.svg" alt="Icon">
                No
            </button>
        </div>
    {/if}
</div>

<!--  -->

<style>
	.wrapper{
        width: fit-content;
        display: grid;
		row-gap: 50px;
        padding-inline: 4vw;
	}

    .lateral-grid{
        gap: 10px;
    }
</style>