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
        width: 16rem;
        display: grid;
        gap: 1rem;
        padding: 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
    }

    .media-item:hover{
        background: var(--l1);
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
        font-weight: 500;
    }

    .caption{
        opacity: 0.5;
    }
</style>