<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import { nextEpisode } from "./control"
    import { onMount } from "svelte"
    import VideoControls from "./VideoControls.svelte";

    let loaded = false
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
        db.subscribe(data => {
            media_item = mediaDB.find(item => item.title == data.currently_watching)
            progress = data.library.find(item => item.title == data.currently_watching)
            
            media_item = media_item ? media_item : { title: "" }
            progress = progress ? progress : { season: 1, episode: 1 }
    
            // source url
            if (media_item.type == "TV Show") {
                media_item.episode_title = mediaDB.find(object => object.title == media_item.title).seasons[progress.season - 1][progress.episode - 1]
                video_url = `${base_server_url}/${media_item.title}/Season ${progress.season}/${media_item.episode_title}.mp4`
            }
            else {
                video_url = `${base_server_url}/${media_item.title}.mp4`
            }
    
            loaded = true
            return data
        })
    })


    function onLoad() {
        video.currentTime = progress.progress * video.duration
    }

    function onTimeUpdate() {
        currentTime = video.currentTime
        duration = video.duration
        db.update(data => {
            if (loaded) {
                let library = data.library
                let item = library.find(item => item.title == media_item.title)
                if (item) {
                    item.progress = (video.currentTime / video.duration).toFixed(2)
                }

                if (currentTime > duration - 30) {
                    nextEpisode()
                }

                return data
            }
        })
    }

    function onLoadable() {
        video.play()
    }
</script>

<!--  -->

<div class="page">
    {#if loaded}
        <div class="viewer">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video 
                bind:this={video} 
                on:loadeddata={onLoad}
                on:timeupdate={onTimeUpdate}
                on:canplay={onLoadable}
                controls
                src={video_url}
            ></video>

            <div class="media-data">
                <div class="media-title">
                    {media_item.title}
                </div>
                {#if media_item.type == "TV Show"}
                    <div class="media-caption">
                        S{progress.season ? progress.season : 0} E{progress.episode ? progress.episode : 0}, {media_item.episode_title}
                    </div>
                {/if}
            </div>
            
            <VideoControls />
        </div>
    {:else}
        <h2>.....</h2>
    {/if}
</div>

<!--  -->

<style>
    .page{
        padding-right: 24pt;
    }

    .viewer{
        display: grid;
        row-gap: 12pt;
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