<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import { onMount } from "svelte"

    // finals
    const base_server_url = "http://209.163.185.11/videos"
    // strings
    let source_url // url of video
    let media_obj
    let progress_obj

    onMount(() => {
        db.update(data => {
            media_obj = mediaDB.find(item => item.title == data.currently_watching)
            progress_obj = data.library.find(item => item.title == data.currently_watching)
    
            // source url
            if (media_obj.type == "TV Show") {
                media_obj.episode_title = mediaDB.find(object => object.title == media_obj.title).seasons[progress_obj.season - 1][progress_obj.episode - 1]
                source_url = `${base_server_url}/${media_obj.title}/Season ${progress_obj.season}/${media_obj.episode_title}.mp4`
            }
            else {
                source_url = `${base_server_url}/${media_obj.title}.mp4`
            }
    
            return data
        })
    })


    // // update progress
    // onMount(() => {
    //     let video = document.querySelector("video")
    //     video.addEventListener("timeupdate", () => {
    //         db.update(data => {
    //             data.library.find(item => item.title == library_obj.title)
    //         })
    //         progress.progress = video.currentTime / video.duration
    //     })
    // })
</script>

<!--  -->

{#if media_obj !== undefined}
<div class="page">
    <div class="viewer">
        <!-- svelte-ignore a11y-media-has-caption -->
        <video autoplay controls src={source_url}></video>
        
        <div class="media-data">
            <div class="media-title">
                {media_obj.title}
            </div>
            {#if media_obj.type == "TV Show"}
                <div class="media-caption">
                    S{progress_obj.season} E{progress_obj.episode}, {media_obj.episode_title}
                </div>
            {/if}
        </div>
    </div>
</div>
{/if}

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