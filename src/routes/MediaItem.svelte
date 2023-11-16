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
        display: grid;
        grid-template-columns: min-content auto;
        align-items: center;
        gap: 8pt;
    }

    img{
        display: inline-block;
        width: 80pt;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: 2pt;
    }

    .info{
        display: inline-block;
        font-size: 12pt;
        font-weight: 500;
    }

    .caption{
        font-weight: 400;
        opacity: 0.5;
    }
</style>