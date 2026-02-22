<!-- created by Aaron Meche -->
<script>
    import { page } from '$app/stores';
    import { db, mediaDB } from "$lib/data";
    import { onMount } from 'svelte';

    export const prerender = false;
    export const ssr = false;

    let vidwrap, videlem;
    let query_title = null;
    let query_item = null;
    let source_url = null;
    let seasonep = [1, 1]
    let progression = null;
    let epname = null;

    $: {
        if (typeof window !== 'undefined') {
            query_title = $page.url.searchParams.get('q')
            query_item = mediaDB.find(item => item.title == query_title)
            source_url = "https://baileo.aaronmeche.com/videos/"
    
            // Handle Movies
            if (query_item.type == "Movie") {
                source_url += query_item.title + ".mp4"
            }
            // Handle TV Shows
            else {
                const prevprog = $db?.progress
                const progobj = prevprog?.[query_title]
                if (progobj) {
                    seasonep = [$db.progress[query_title]?.season, $db.progress[query_title]?.episode]
                    progression = $db.progress[query_title]?.progression || 0
                }
                else {
                    db.update(data => {
                        if (data?.progress) data.progress[query_title] = { season: 1, episode: 1, progression: 0 }
                        return data
                    })
                }
                epname = query_item.seasons[seasonep[0] - 1][seasonep[1] - 1]
                source_url += query_item.title + "/Season " + seasonep[0] + "/" + epname + ".mp4"
            }
        } 
    }
 
    const handleTimeInput = (t) => videlem.currentTime += t;
    const goToTime = (t) => videlem.currentTime = videlem.duration * (t / 10)

    function togglePause() {
        if (videlem.paused) videlem.play()
        else videlem.pause()
    }

    function toggleFullscreen() {
        const videoContainer = vidwrap
        if (!document.fullscreenElement) {
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
                videoContainer.mozRequestFullScreen();
            } else if (videoContainer.webkitRequestFullscreen) {
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) {
                videoContainer.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }

    function handleWindowKeydown(e) {
        const key = e.key
        console.log(key)
        if (key == "j")                 handleTimeInput(-10)
        else if (key == "ArrowLeft")    handleTimeInput(-10)
        else if (key == "J")            handleTimeInput(-30)
        else if (key == "k")            togglePause()
        else if (key == " ")            togglePause()
        else if (key == "l")            handleTimeInput(10)
        else if (key == "ArrowRight")   handleTimeInput(10)
        else if (key == "L")            handleTimeInput(30)
        else if (key == "0")            goToTime(0)
        else if (key == "1")            goToTime(1)
        else if (key == "2")            goToTime(2)
        else if (key == "3")            goToTime(3)
        else if (key == "4")            goToTime(4)
        else if (key == "5")            goToTime(5)
        else if (key == "6")            goToTime(6)
        else if (key == "7")            goToTime(7)
        else if (key == "8")            goToTime(8)
        else if (key == "9")            goToTime(9)
        else if (key == "f")            toggleFullscreen()
    }

</script>

<!--  -->

<svelte:window on:keydown={handleWindowKeydown} />

<div class='page'>
    <div bind:this={vidwrap} class="video">
        {#if source_url}
            <video bind:this={videlem} controls>
                <source src={source_url} type="video/mp4">
            </video>
        {/if}
    </div>
    <div class="information">
        <div class="media-title">{query_item?.title}</div>
        {#if query_item?.type == "TV Show"} 
        <div class="media-info">Season {seasonep[0]} Episode {seasonep[1]}</div>
        <div class="media-name">{epname}</div>
        {/if}
    </div>
</div>

<!--  -->

<style>
    .video{
        max-height: 75vh;
        width: 100%;
        aspect-ratio: 16 / 9;
        text-align: center;
        background: black;
    }

    video{
        all: unset;
        height: 100%;
        width: 100%;
        object-fit:contain;
    }

    .information{
        padding: 1rem;
    }

    .media-title{
        font-size: 16pt;
        font-weight: 500;
    }

</style>