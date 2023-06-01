<script>
    import '$lib/assets/style.css'
    import TopNavbar from '$lib/components/Top-Navbar.svelte'

	import { 
        db,
        storage
    } from '$lib/assets/main'

    import { 
        page 
    } from '$app/stores'

    import { 
        onMount 
    } from 'svelte'

    onMount(async () => {
        document.querySelector('.app').style.opacity = 1
	})

    


    // if (typeof window !== 'undefined') {
    //     // If logged in, check uid and key authenticity
    //     if (storage.read('username').length > 0) {
    //         db.read('users/' + storage.read('username'), val => {
    //             if (storage.read('uid') !== val.uid || storage.read('auth_key') !== val.auth_key) {
    //                 console.warn('fatal! authentication error, key/uid false')
    //             }
    //         })
    //     }
    // }

    // Go to login page if not logged in
    // if (storage.read('user_id') == undefined) { // if no id
    //     if (typeof window !== 'undefined' && $page.url.pathname !== '/account') {
    //         window.open('/account', '_self')
    //     }
    // } else { // verify id and key
    //     db.user.read((user) => {
    //         if (storage.read('user_key') !== user.key) {
    //             alert('Account Lockout: Client key invalid')
    //             auth.logout()
    //         }
    //     })
    // }



    // Safety storage functions
    // function default_storage_value(attr, val) {
    //     if (!storage.exists(attr)) {
    //         storage.set(attr, val)
    //     }
    // }
    // default_storage_value('watching title', 'The Office')
    // default_storage_value('shuffle', 'false')
    // default_storage_value('autoplay', 'true')
    // default_storage_value('autoplay buffer', 30)
    // default_storage_value('menu status', 'true')
</script>

<!--  -->

<div class="app">
    <div class="top-bar">
        <TopNavbar/>
    </div>
    
    <slot/>
</div>

<!--  -->

<style>
    .app{
        opacity: 0;
        transition: opacity 0.5s;
    }

    .top-bar{
        position: sticky;
        top: 0;
        z-index: 5;
    }
</style>