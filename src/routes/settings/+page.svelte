<script>
    import { db } from "$lib/data";
    import { onMount } from "svelte";

    let initial_theme_color
    db.subscribe(data => {
        initial_theme_color = data.theme_color
    })

    onMount(() => {
        document.querySelector('.color-bar').addEventListener('input', () => {
            db.update(data => {
                data.theme_color = document.querySelector('.color-bar').value
                return data
            })
        })
    })
</script>

<!--  -->

<div class="page">
    <section>
        <div class="label">Theme Color</div>
        <div class="selector">
            <input class="color-bar" type="range" min=0 max=360 value={initial_theme_color}>
        </div>
    </section>
</div>

<!--  -->

<style>
    .label{
        font-size: 16pt;
        font-weight: 600;
        margin-left: 8pt;
        margin-bottom: 4pt;
    }

    .selector{
        padding: 8pt;
        background: linear-gradient(to top right, var(--l1), transparent);
        border: solid 1pt var(--l2);
        border-radius: 4pt;
    }

    .color-bar{
        --sat: 64%;
        --light: 64%;
        height: 12pt;
        width: 100%;
        background: linear-gradient(to right, hsl(0, var(--sat), var(--light)), hsl(40, var(--sat), var(--light)), hsl(80, var(--sat), var(--light)), hsl(120, var(--sat), var(--light)), hsl(160, var(--sat), var(--light)), hsl(200, var(--sat), var(--light)), hsl(240, var(--sat), var(--light)), hsl(280, var(--sat), var(--light)), hsl(320, var(--sat), var(--light)), hsl(360, var(--sat), var(--light)));
        border-radius: 4pt;
        overflow: hidden;
    }

    .color-bar::-webkit-slider-thumb{
        -webkit-appearance: none;
        appearance: none;
        height: 12pt;
        width: 12pt;
        background: var(--accent);
        border: solid 1pt var(--bg);
        box-shadow: 0 0 24pt black;
    }
</style>