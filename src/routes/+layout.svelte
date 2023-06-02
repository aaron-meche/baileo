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
        transition: opacity 0.25s;
    }

    .top-bar{
        position: sticky;
        top: 0;
        z-index: 5;
    }
</style>