<script>
    export let item
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"

    let progress
    let media_type = ""
    db.update(data => {
        let lib = data.library
        let libitem = lib.find(media => media.title == item.title)
        if (libitem) {
            progress = libitem.progress * 100
        }
        media_type = mediaDB.find(media => media.title == item.title).type
        return data
    })
</script>

<!--  -->

<div class="media-item">
    <div class="image">
        <img src="thumbnails/{item.title}.jpeg" alt="Thumbnail" loading="lazy">
    </div>
    
    <div class="info">
        <div class="title">{item.title}</div>
        <div class="caption">{media_type}</div>
    </div>

    {#if progress}
        <div class="progress">
            <div class="value" style="width: {progress}%"></div>
        </div>
    {/if}
</div>

<!--  -->

<style>
    .media-item{
        position: relative;
        width: 160pt;
        display: grid;
        gap: 8pt;
        padding: 8pt;
        /* text-align: center; */
    }

    img{
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 2pt;
        overflow: hidden;
    }

    .progress{
        height: 2pt;
        background: var(--l2);
        border-radius: 100vh;
        overflow: hidden;
    }

    .value{
        height: 100%;
        background: var(--contrast);
        border-radius: inherit;
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