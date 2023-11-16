<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import { onMount } from "svelte";

    // finals
    const base_server_url = "http://209.163.185.11/videos"
    // strings
    let currently_watching // title of media
    let source_url // url of video
    // objects
    let item_object // media data
    let watch_progress // watch progress data

    // main
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

    // source url
    if (item_object.type == "TV Show") {
        item_object.episode_title = mediaDB.filter(object => object.title == item_object.title)[0].seasons[watch_progress.season - 1][watch_progress.episode - 1]
        source_url = `${base_server_url}/${currently_watching}/Season ${watch_progress.season}/${item_object.episode_title}.mp4`
    }
    else {
        source_url = `${base_server_url}/${currently_watching}.mp4`
    }

    // update progress
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

        <div class="menu-title">
            {currently_watching}
            {#if item_object.type == "TV Show"}
                <span class="menu-caption">S{watch_progress.season} E{watch_progress.episode}, {item_object.episode_title}</span>
            {/if}
        </div>
        
        <div class="menu scroll">
            {#if item_object.type == "TV Show"}
                <button class="button">Next Episode</button>
            {/if}
            <button class="button">Mark as Finished</button>
            <a class="button" href={source_url}>View Source</a>
        </div>
    </div>
</div>

<!--  -->

<style>
    video{
        width: calc(100vw - calc(var(--inline-moat) * 2));
        /* max-height: 65vh; */
        margin-bottom: 12pt;
        aspect-ratio: 16 / 9;
        background: var(--l1);
        border-radius: 4pt;
    }

    .menu-list{
        width: 360pt;
    }
</style>