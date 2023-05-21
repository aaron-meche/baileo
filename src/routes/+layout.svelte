<script>
    import '$lib/assets/style.css'
    import TopNavbar from '$lib/components/Top-Navbar.svelte'
    // import SideNavbar from '$lib/components/Side-Navbar.svelte'

	import { storage } from '$lib/assets/main'
    import { page } from '$app/stores'
    import { initializeApp } from "firebase/app"



    // Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDDSQmLL5A756k_vWlc4Zk_ysZ5hd8cB-k",
        authDomain: "baileo-4009d.firebaseapp.com",
        projectId: "baileo-4009d",
        storageBucket: "baileo-4009d.appspot.com",
        messagingSenderId: "308681359309",
        appId: "1:308681359309:web:b57d82dc080ba772af4e84"
    }
    const app = initializeApp(firebaseConfig);



    // // Go to login page if not logged in
    // if (!storage.exists('is logged in') && $page.url.pathname !== '/login') {
    //     open_page('login')
    // }



    // Safety storage functions
    function default_storage_value(attr, val) {
        if (!storage.exists(attr)) {
            storage.set(attr, val)
        }
    }
    default_storage_value('watching title', 'The Office')
    default_storage_value('shuffle', 'false')
    default_storage_value('autoplay', 'true')
    default_storage_value('autoplay buffer', 30)
    default_storage_value('menu status', 'true')
</script>

<!--  -->

<div class="top-bar">
    <TopNavbar/>
</div>

<slot/>

<!--  -->

<style>
    .top-bar{
        position: sticky;
        top: 0;
        z-index: 5;
    }
</style>