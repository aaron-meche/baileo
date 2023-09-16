<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import { onMount } from "svelte";
    import EpisodeSelector from "../EpisodeSelector.svelte";

    let base_server_url = "http://209.163.185.11/videos"

    // strings
    let currently_watching // title of media
    let source_url // url of video

    // objects
    let item_object // media data
    let watch_progress // watch progress data

    db.subscribe(data => {
        currently_watching = data.currently_watching
        item_object = mediaDB.filter(item => item.title == currently_watching)[0]
        watch_progress = data.library.filter(object => object.title == item_object.title)[0]

        // is not in library
        if (watch_progress == undefined) {
            // creating the object to push to library
            let object_to_push = {
                title: item_object.title,
                progress: 0,
            }
            if (item_object.type == "TV Show") {
                object_to_push = {
                    title: item_object.title,
                    progress: 0,
                    season: 1,
                    episode: 1,
                }
            }

            // push object to library
            db.update(data => {
                data.library.push(object_to_push)
                return data
            })
        }
    })

    if (item_object.type == "TV Show") {
        item_object.episode_title = mediaDB.filter(object => object.title == item_object.title)[0].seasons[watch_progress.season - 1][watch_progress.episode - 1]
        source_url = `${base_server_url}/${currently_watching}/Season ${watch_progress.season}/${item_object.episode_title}.mp4`
    }
    else {
        source_url = `${base_server_url}/${currently_watching}.mp4`
    }

    onMount(() => {
        let video = document.querySelector("video")
        video.addEventListener("timeupdate", () => {
            watch_progress.progress = video.currentTime / video.duration
        })
    })

</script>

<!--  -->

<div class="page">
    <div class="viewer">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video autoplay controls src={source_url}></video>

        <div class="info">
            <div class="media-title">{currently_watching}</div>

            {#if item_object.type == "TV Show"}
                <div class="media-caption">S{watch_progress.season} E{watch_progress.episode}, {item_object.episode_title}</div>
            {/if}
        </div>
        
        <div class="button-belt horizontal-scroll">
            {#if item_object.type == "TV Show"}
                <button class="button">Next Episode</button>
            {/if}
            <button class="button">Mark as Watched</button>
            <a class="button" href={source_url}>View Source</a>
            <!-- <button class="button">Add to Favorites</button> -->
        </div>

        {#if item_object.type == "TV Show"}
            <EpisodeSelector media_data={item_object} watch_progress={watch_progress}/>
        {/if}
    </div>
</div>

<!--  -->

<style>
    .viewer{
        display: grid;
        row-gap: 12pt;
    }

    video{
        width: 100%;
        background: black;
        border-radius: 4pt;
    }

    .media-title{
        font-size: 16pt;
        font-weight: 600;
    }
    
    .media-caption{
        font-size: 14pt;
        font-weight: 500;
        opacity: 0.5;
    }

    .button{
        padding: 4pt 12pt;
        margin-right: 8pt;
        background: linear-gradient(to top right, var(--l1), transparent);
        font-size: 10pt;
        font-weight: 599;
        border: solid 1pt var(--l2);
        border-radius: 4pt;
    }

    .button:hover{
        background: linear-gradient(to top right, var(--c2), var(--s2));
        border-color: var(--l3);
    }
</style>