<script>
    import { mediaDB } from "$lib/index"
    import { db } from "$lib/data"
    import EpisodeSelector from "./EpisodeSelector.svelte"

    let currently_watching
    db.subscribe(data => {
        currently_watching = data.currently_watching
    })
</script>

<!--  -->

<div class="page">
    <EpisodeSelector title={currently_watching} />
</div>

<!--  -->

<style>
    .section-title{
        margin-left: 12pt;
        margin-bottom: 4pt;
        font-size: 16pt;
        font-weight: 600;
    }

    .episode-selector{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12pt;
        border-radius: 2pt;
    }

    .episode-selector > *{
        height: fit-content;
        padding: 4pt;
        background: var(--l1);
    }

    .item{
        width: calc(100% - 16pt);
        padding: 4pt 8pt;
        border-radius: 2pt;
        cursor: pointer;
    }

    .item:hover{
        background: var(--l2);
    }

    .item .label{
        font-size: 10pt;
    }

    .item.active{
        color: var(--accent);
        background: var(--l2);
    }
</style>