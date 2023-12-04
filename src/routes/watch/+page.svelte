<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import { onMount } from "svelte"

    // finals
    const base_server_url = "http://209.163.185.11/videos"
    // strings
    let source_url // url of video
    let currently_watching = "The Office" // title of media
    // objects
    let media_item
    let progress = {}

    db.subscribe(data => {
        currently_watching = data.currently_watching
        media_item = mediaDB.find(item => item.title == currently_watching)
        progress = data.library.find(item => item.title == currently_watching)

        // if not in library
        if (progress == undefined) {
            // creating the object to push to library
            // ...
            // only fit for movies, tv shows are
            // protected by episode selector
            let object_to_push = {
                title: media_item.title,
                progress: 0,
            }

            // push object to library
            db.update(data => {
                data.library.push(object_to_push)
                return data
            })
        }

        // switch (media_item.type) {
        //     case "TV Show":
        //         media_item.episode_title = mediaDB.find(object => object.title == media_item.title).seasons[progress.season - 1][progress.episode - 1]
        //         source_url = `${base_server_url}/${currently_watching}/Season ${progress.season}/${media_item.episode_title}.mp4`
        //         break
        //     case "Movie":
        //         source_url = `${base_server_url}/${currently_watching}.mp4`
        //         break
        //     default:
        //         source_url = `${base_server_url}/Mean Girls.mp4`
        //         break
        // }
        // // source url
        if (media_item.type == "TV Show") {
            media_episode_title = mediaDB.find(object => object.title == media_item.title).seasons[progress.season - 1][progress.episode - 1]
            source_url = `${base_server_url}/${currently_watching}/Season ${progress.season}/${media_item.episode_title}.mp4`
        }
        else {
            source_url = `${base_server_url}/${currently_watching}.mp4`
        }
    })
    // main

    // update progress
    onMount(() => {
        let video = document.querySelector("video")
        video.addEventListener("timeupdate", () => {
            progress.progress = video.currentTime / video.duration
        })
    })
</script>

<!--  -->

<div class="page">
    <div class="viewer">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video autoplay controls src={source_url}></video>
        
        <div class="media-data">
            <div class="media-title">
                {currently_watching}
            </div>
            
            {#if media_item.type == "TV Show"}
                <div class="media-caption">
                    S{progress.season} E{progress.episode}, {media_item.episode_title}
                </div>
            {/if}
        </div>
    </div>
</div>

<!--  -->

<style>
    video{
        width: calc(100vw - calc(var(--inline-moat) * 2));
        aspect-ratio: 16 / 9;
        background: black;
        border-radius: 4pt;
    }

    .media-data{
        margin-top: 8pt;
        margin-bottom: 4pt;
    }

    .media-title{
        font-size: 16pt;
        font-weight: 600;
    }

    .media-caption{
        opacity: 0.75;
    }
</style>