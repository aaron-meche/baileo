<script>
    import { 
        mediaDB, 
        serverTypeConversion,
        storage 
    } from '$lib/main'
    export let title, media

    let season = media.season
    let episode = media.episode

    let maxSeason = mediaDB[media.title]['sTotal']

    function openEpisode(episode) {
        storage.set(`${title} season`, media.season)
        storage.set(`${title} episode`, episode)
        storage.set(`${title} progress`, 0)
        window.open('/watch', '_self')
    }

    function previousSeason() {
        storage.set(`${title} season`, Number(media.season) - 1)
        storage.set(`${title} episode`, 1)
        storage.set(`${title} progress`, 0)
        window.open('/watch', '_self')
    }

    function nextSeason() {
        storage.set(`${title} season`, Number(media.season) + 1)
        storage.set(`${title} episode`, 1)
        storage.set(`${title} progress`, 0)
        window.open('/watch', '_self')
    }
</script>

<!--  -->

<div class="top-bar">
    <div class="title">Season {media.season} <span style='font-size: 10pt; font-weight: 300; color: lightgray;'>of {maxSeason}</span></div>

    <div class="navigation">
        {#if media.season !== 1}
            <button on:click={previousSeason} class="left"><img src="icons/left.svg" alt="Icon"></button>
        {:else}
            <button class="left inactive"><img src="icons/left.svg" alt="Icon"></button>
        {/if}

        {#if media.season !== maxSeason}
            <button on:click={nextSeason} class="right"><img src="icons/right.svg" alt="Icon"></button>
        {:else}
            <button class="right inactive"><img src="icons/right.svg" alt="Icon"></button>
        {/if}
    </div>
</div>

<div class="episode-list">
    {#each mediaDB[title]['s' + media.season] as episode, e}
        <button class="item {e + 1 == media.episode ? 'active' : ''}" on:click={() => openEpisode(e + 1)}>
            <div class="title">{serverTypeConversion(episode)}</div>
            <div class="count">E{e + 1}</div>
        </button>
    {/each}
</div>

<!--  -->

<style>
	.top-bar{
		display: grid;
		grid-template-columns: auto min-content;
		align-items: center;
        margin-bottom: 15px;
	}

	.top-bar .title{
		font-size: 15pt;
		font-weight: 500;
	}
	
	.navigation{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 10px;
	}

	.navigation button{
		height: 20px;
		padding: 5px;
		aspect-ratio: 1 / 1;
		background: var(--foreground);
		border-radius: 100vh;
		cursor: pointer;
	}

	.navigation button.inactive{
		opacity: 0.25;
        cursor: default;
	}

	.navigation img{
		height: 100%;
		display: block;
	}

    .episode-list .item{
        position: relative;
        display: grid;
        grid-template-columns: auto min-content;
        column-gap: 20px;
        align-items: center;
        width: calc(100% - 20px);
        padding: 10px;
        border-radius: 10px;
    }

    .episode-list .item:hover{
        background: var(--foreground);
    }

    .episode-list .item.active{
        background: var(--light-gradient);
    }

    .episode-list .title{
        color: lightgray;
        font-weight: 300;
    }

    .episode-list .active .title{
        color: white;
        font-weight: 500;
    }

    .episode-list .count{
        font-size: 10pt;
        font-weight: 200;
        text-align: right;
        padding: 1px 4px;
        background: var(--background);
        border: solid 1px var(--extra-foreground);
        border-radius: 5px;
    }
</style>