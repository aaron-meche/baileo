<script>
    export let item
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"

    let progressObj
    let progress
    $: media_type = mediaDB.find(media => media.title == item.title).type
    db.update(data => {
        let lib = data.library
        let libitem = lib.find(media => media.title == item.title)
        if (libitem) {
            progress = libitem.progress * 100
        }
        progressObj = libitem
        return data
    })
    let library
    db.subscribe(data => {
        library = data.library
    })

    function selectItem() {
        db.update(data => {
            data.currently_watching = item.title

            let template = {
                title: item.title,
                progress: 0
            }

            if (item.type == "TV Show") {
                template.season = 1
                template.episode = 1
            }

            let libitem = data.library.find(elem => elem.title == item.title)
            if (!libitem) {
                data.library.push(template)
            }
            
            return data
        })
    }
</script>

<!--  -->

<a on:click={selectItem} href="/watch" class="media-item">
    <div class="image">
        <img src="thumbnails/{item.title}.jpeg" alt="Thumbnail" loading="lazy">
    </div>
    
    <div class="info">
        <div class="title">{item.title}</div>
        <!-- {#if progress && media_type == "TV Show"} -->
            <!-- <div class="caption">S{progressObj.season} E{progressObj.episode} - {mediaDB.find(elem => elem.title == item.title).seasons[progressObj.season - 1][progressObj.episode - 1]}</div> -->
        <!-- {:else} -->
            <div class="caption">{media_type}</div>
        <!-- {/if} -->
    </div>

    {#if progress}
        <div class="progress">
            <div class="value" style="width: {progress}%"></div>
        </div>
    {/if}
</a>

<!--  -->

<style>
    .media-item{
        position: relative;
        max-width: 240pt;
        display: grid;
        gap: 8pt;
        padding: 8pt;
        border-radius: 4pt;
        cursor: pointer;
    }

    .media-item:hover{
        background: var(--l1);
        outline: solid 1pt var(--l4);
    }

    img{
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 4pt;
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