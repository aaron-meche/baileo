<script>
    import '$assets/style.css'
    import TopNavbar from '$components/Top-Navbar.svelte'

	import { 
        db,
        storage
    } from '$assets/main'

    import { 
        page 
    } from '$app/stores'

    import { 
        onMount 
    } from 'svelte'

    onMount(async () => {
        document.querySelector('.app').style.visibility = 'visible'
        document.querySelector('.loading').style.visibility = 'hidden'
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

<div class="loading">
    <img src="loading.gif" alt="Loading">
</div>

<div class="app">
    <div class="top-bar">
        <TopNavbar/>
    </div>
    <div class="top-bar-border"></div>
    
    <slot/>
</div>

<!--  -->

<style>
    .app{
        visibility: hidden;
    }

    .top-bar{
        position: sticky;
        top: 0;
        z-index: 5;
    }

    .top-bar-border{
        height: 2px;
        width: 100vw;
        background: var(--fg);
    }

    .loading{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .loading img{
        height: 50px;
    }
</style>