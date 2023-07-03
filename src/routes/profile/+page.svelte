<script>
    import {
        db,
        storage
    } from '$lib/assets/main'

    import { 
        onMount 
    } from 'svelte';

    $: accentColor = 0
    db.listen('users/' + storage.read('username') + '/preferences/accent color', (val) => {
        accentColor = val
    })

    onMount(() => {
        const accentColorSlider = document.querySelector('.color-range')

        accentColorSlider.addEventListener('change', () => {
            accentColor = accentColorSlider.value
            db.write('users/' + storage.read('username') + '/preferences/accent color', accentColorSlider.value)
        })
    })
</script>

<!--  -->

<div class="page">
    <h1>Preference Manager</h1>
    <div class="grid">
        <div class="module">
            <h2>Accent Color</h2>

            <div class="slider-wrapper">
                <input type="range" min="1" max="360" value={accentColor} class="color-range">
            </div>
        </div>

        <div class="module">
        </div>
    </div>
</div>

<!--  -->

<style>
    .page{
        display: grid;
        gap: 15px;
        padding: 50px 4vw;
    }

    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }

    .module{
        display: grid;
        row-gap: 15px;
        padding: 15px;
        background: var(--l1);
        border-radius: 5px;
    }

    .slider-wrapper{
        width: 100%;
        background: black;
    }

    .color-range{
        appearance: none;
        display: block;
        height: 5px;
        width: 100%;
        border-radius: 100vh;
        background: linear-gradient(to right, hsl(0, 100%, 50%), hsl(51, 100%, 50%), hsl(102, 100%, 50%), hsl(154, 100%, 50%), hsl(205, 100%, 50%), hsl(257, 100%, 50%), hsl(308, 100%, 50%), hsl(360, 100%, 50%));
        cursor: pointer;
    }

    .color-range::-webkit-slider-thumb{
        appearance: none;
        height: 20px;
        width: 5px;
        background: white;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-radius: 100vh;
    }
</style>