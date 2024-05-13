<script>
    import { mediaDB } from "$lib/index"
    import Header from "../Header.svelte";

</script>

<!-- -->

<div class="media-grid">
    {#each mediaDB as item}
        <div class="item">
            <img src="thumbnails/{item.title}.jpeg" alt="">
            <div class="data">
                <div class="media-title">{item.title}</div>
                <div class="media-type">{item.type}</div>
            </div>
        </div>
    {/each}
</div>

<!--  -->

<style>
    .media-grid{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
        padding: 0 var(--inline-moat);
    }

    .item{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        opacity: 0.85;
        transition: opacity 200ms;
    }

    .item:hover{
        background: var(--l1);
        opacity: 1;
    }

    img{
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        overflow: hidden;
        border-radius: 0.5rem;
    }

    .media-title{
        font-size: 16pt;
        font-weight: 600;
    }
</style>