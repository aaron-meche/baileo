<script>
    export let item
    import { mediaDB } from "$lib/index"
</script>

<!--  -->

<div class="media-item">
    <img src="thumbnails/{item.title}.jpeg" alt="Thumbnail">
    <div class="info">
        <div class="title">{item.title}</div>
        <div class="caption">{mediaDB.find(media_item => media_item.title == item.title).type}</div>
    </div>
</div>

<!--  -->

<style>
    .media-item{
        display: inline-grid;
        width: 160pt;
        row-gap: 12pt;
        padding: 8pt;
        margin-right: 8pt;
        border-radius: 4pt;
        /* background: var(--l1); */
        background: linear-gradient(to top right, var(--l1), transparent);
    }

    .media-item:hover{
        background: linear-gradient(to top right, var(--c2), var(--s2));
    }

    .media-item img{
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: inherit;
    }

    .media-item .info{
        font-weight: 599;
    }

    .media-item .caption{
        font-size: 10pt;
        opacity: 0.5;
    }
</style>