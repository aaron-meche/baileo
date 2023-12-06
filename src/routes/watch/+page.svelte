<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import { onMount } from "svelte"
    import VideoControls from "./VideoControls.svelte";

    // finals
    const base_server_url = "http://209.163.185.11/videos"
    // strings
    let video // html video
    let video_url // url of video
    let media_item // obj media item
    let progress // obj library item
    let playing = false // bool livestream
    let currentTime = 0 // int live
    let duration = 0 // int live

    onMount(() => {
        db.update(data => {
            media_item = mediaDB.find(item => item.title == data.currently_watching)
            progress = data.library.find(item => item.title == data.currently_watching)
    
            // source url
            if (media_item.type == "TV Show") {
                media_item.episode_title = mediaDB.find(object => object.title == media_item.title).seasons[progress.season - 1][progress.episode - 1]
                video_url = `${base_server_url}/${media_item.title}/Season ${progress.season}/${media_item.episode_title}.mp4`
            }
            else {
                video_url = `${base_server_url}/${media_item.title}.mp4`
            }
    
            return data
        })
    })

    function videoTimeUpdate() {
        currentTime = video.currentTime
        duration = video.duration
        db.update(data => {
            let library = data.library
            let item = library.find(item => item.title == media_item.title)
            item.progress = (video.currentTime / video.duration).toFixed(2)
            return data
        })
    }

    function videoLoaded() {
        video.currentTime = progress.progress * video.duration
    }
</script>

<!--  -->

{#if media_item !== undefined}
<div class="page">
    <div class="viewer">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video 
            bind:this={video} 
            on:timeupdate={videoTimeUpdate}
            on:loadeddata={videoLoaded}
            controls
            src={video_url}
        ></video>

        <div class="media-data">
            <div class="media-title">
                {media_item.title}
            </div>
            {#if media_item.type == "TV Show"}
                <div class="media-caption">
                    S{progress.season} E{progress.episode}, {media_item.episode_title}
                </div>
            {/if}
        </div>
        
        <VideoControls currentTime={currentTime} duration={duration} />
    </div>
</div>
{/if}

<!--  -->

<style>
    .viewer{
        display: grid;
        row-gap: 16pt;
    }

    video{
        display: block;
        height: fit-content;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 4pt;
        background: black;
    }

    .media-title{
        font-size: 16pt;
        font-weight: 600;
    }

    .media-caption{
        opacity: 0.75;
    }
</style>