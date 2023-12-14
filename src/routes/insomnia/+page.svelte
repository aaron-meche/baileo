<script>
    import { db } from "$lib/data"
    import { mediaDB } from "$lib/index"
    import { nextEpisode } from "../watch/control"
    import { onMount } from "svelte"

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
        updateTime();
        setInterval(updateTime, 1000); 

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

                if (currentTime > duration - 38) {
                    nextEpisode()
                }

                return data
            }
        })
    }

    function onLoadable() {
        video.play()
    }

    let displayClock = ''
    let dayProgress = 0

    function updateTime() {
        let now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let ampm = hours >= 12 ? 'PM' : 'AM'
        let formattedHours = hours % 12 || 12
        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes
        dayProgress = (hours + minutes / 60) / 24
        displayClock = `${formattedHours}:${formattedMinutes} ${ampm}`
    }
</script>

<!--  -->

<div class="window">
    <div class="ui">
    {#if loaded}
        <div class="clock">
            <div class="time">{displayClock}</div>
        </div>
        
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
    
            <div class="media-info">
                <div class="media-title">
                    {media_item.title}
                </div>
                {#if media_item.type == "TV Show"}
                    <div class="media-caption">
                        S{progress.season ? progress.season : 0} E{progress.episode ? progress.episode : 0}: {media_item.episode_title}
                    </div>
                {/if}
            </div>
        </div>
    {/if}
    </div>
</div>

<!--  -->

<style>
    .window{
        height: 100vmax;
        width: 100vmax;
        position: fixed;
        top: 0;
        left: 0;
        background: black;
    }

    .ui{
        display: grid;
        grid-template-columns: 2fr 3fr;
        color: red;
        font-size: 36pt;
        font-weight: 300;
        opacity: 0.5;
        cursor: none
    }

    .clock{
        height: 100%;
        font-family: LexendDeca;
        /* font-size: 80pt;  */
        text-align: center;
    }

    .time{
        padding-top: 36pt;
        margin: auto;
        font-size: 8vmax;
        font-weight: 600;
    }

    video{
        display: block;
        height: fit-content;
        width: 100%;
        aspect-ratio: 16 / 9;
        border-radius: 4pt;
        opacity: 0.5;
        background: black;
    }

    .media-info{
        font-size: 5vmax;
    }

    .media-caption{
        font-family: LexendDeca;
    }
</style>