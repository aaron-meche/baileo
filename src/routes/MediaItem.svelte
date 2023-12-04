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
        width: 160pt;
        display: grid;
        gap: 8pt;
        padding: 8pt;
    }

    img{
        display: inline-block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 2pt;
        overflow: hidden;
    }

    .info{
        display: inline-block;
        font-weight: 500;
    }

    .caption{
        font-weight: 400;
        opacity: 0.5;
    }
</style>