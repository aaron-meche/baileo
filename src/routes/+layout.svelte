<script>
    import '$lib/assets/style.css'
    import SideNavbar from '$lib/components/Side-Navbar.svelte'

	import { 
        db,
        storage,
        user
    } from '$lib/assets/main'

    import { 
        page 
    } from '$app/stores'

    import { 
        beforeUpdate, 
        onMount
    } from 'svelte'

    beforeUpdate(() => {
        user.gather((data) => {
            document.querySelector('.loading').style.opacity = 0

            setTimeout(() => {
                document.querySelector('.loading').style.visibility = 'hidden'
            }, 500)
        
            document.querySelectorAll('[clickable]').forEach((button) => {
                button.addEventListener('click', (e) => {
                    let ripple = document.createElement('span')
                    button.style.position = 'relative'
                    button.style.overflow = 'hidden'
                    button.appendChild(ripple)

                    ripple.style.height = '10px'
                    ripple.style.width = '10px'
                    ripple.style.position = 'absolute'
                    ripple.style.top  = (e.clientY - button.offsetTop - 5) + 'px'
                    ripple.style.left = (e.clientX - button.offsetLeft - 5) + 'px'
                    ripple.style.background = 'var(--accent)'
                    ripple.style.opacity = 0.25
                    ripple.style.borderRadius = '100vh'

                    ripple.style.transitionDuration = '400ms'
                    ripple.style.scale = '20'
                    ripple.style.opacity = 0

                    // setTimeout(() => {
                        // ripple.remove()
                    // }, 400)
                })
            })
        })
	})
</script>

<!--  -->

<div class="loading">
    <h1>Loading...</h1>
</div>

<div class="app">
    <div class="side-bar">
        <SideNavbar/>
    </div>
    
    <div class="content">
        <slot/>
    </div>
</div>

<!--  -->

<style>
    .app{
        display: grid;
        grid-template-columns: min-content auto;
        position: fixed;
        height: 100vh;
        width: 100vw;
    }

    .side-bar{
        z-index: 5;
        background: var(--l1);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0 0 4vw var(--bg);
    }

    .content{
        overflow: auto;
        padding-bottom: 100px;
    }

    .loading{
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        background: var(--bg);
        transition: opacity 500ms;
    }
</style>