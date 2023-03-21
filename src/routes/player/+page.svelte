<script>
	
</script>

<!--  -->

<svelte:head>
	<title>Player</title>
</svelte:head>

<div class="player">
    <div class="video"></div>
    <div class="interface">
        <div class="information">
            <div class="title">The Office</div>
            <div class="caption">S2 E4, Customer Relations</div>
        </div>
        <div class="progress-wrapper">
            <div class="bar-wrapper">
                <div class="bar"></div>
            </div>
            <div class="time-wrapper">
                <div class="past">10:00</div>
                <div class="future" style="text-align: right;">23:49</div>
            </div>
        </div>
    </div>
</div>

<!--  -->

<style>
	.player{
        position: relative;
        width: 80vw;
        aspect-ratio: 16 / 9;
        background: black;
        margin: auto;
    }

    .video{
        height: 100%;
        width: 100%;
        background: url('video.png') center center no-repeat;
        background-size: cover;
    }

    .interface{
        width: calc(100% - 30pt);
        padding: 25pt;
        padding-top: 100pt;
        background: linear-gradient(to top, black, rgb(0, 0, 0, 0));
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .information{
        margin-bottom: 10pt;
    }
    
    .title{
        font-size: 15pt;
        font-weight: 600;
    }

    .caption{
        font-size: 10pt;
        font-weight: 300;
    }
    
    .progress-wrapper{
        display: grid;
        row-gap: 2pt;
    }

    .bar-wrapper{
        background: gray;
        border-radius: 100vh;
        overflow: hidden;
    }

    .bar{
        width: 25%;
        padding: 3pt 0;
        background: lightgray;
    }

    .time-wrapper{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>