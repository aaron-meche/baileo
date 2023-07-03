<script>
    export let media

    import { 
        mediaDB, 
        media_controls,
        serverTypeConversion,
        storage 
    } from '$lib/assets/main'

    function previousSeason() {
        media_controls.open_episode(media.title, media.season - 1, 0)
    }

    function nextSeason() {
        media_controls.open_episode(media.title, media.season + 1, 0)
    }
</script>

<!--  -->

<div class="top-bar">
    <div class="title">Season {media.season + 1} <span style='font-size: 10pt; color: gray;'>of {mediaDB[media.title].seasons.length}</span></div>

    <div class="navigation">
        {#if media.season !== 0}
            <button clickable on:click={previousSeason} class="left"><img src="icons/left.svg" alt="Icon"></button>
        {:else}
            <button clickable class="left inactive"><img src="icons/left.svg" alt="Icon"></button>
        {/if}

        {#if media.season + 1 !== mediaDB[media.title].seasons.length}
            <button clickable on:click={nextSeason} class="right"><img src="icons/right.svg" alt="Icon"></button>
        {:else}
            <button clickable class="right inactive"><img src="icons/right.svg" alt="Icon"></button>
        {/if}
    </div>
</div>

<div class="episode-list">
    {#each mediaDB[media.title]['seasons'][media.season] as episode, e}
        <button clickable class="item {e == media.episode ? 'active' : ''}" on:click={() => media_controls.open_episode(media.title, media.season, e)}>
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
		background: var(--l2);
		border-radius: 100vh;
		cursor: pointer;
	}

	.navigation button.inactive{
		opacity: 25%;
        cursor: default;
	}

	.navigation img{
		height: 100%;
		display: block;
	}

    .episode-list .item{
        display: grid;
        grid-template-columns: auto min-content;
        column-gap: 10px;
        align-items: center;
        width: calc(100% - 20px);
        padding: 10px;
        border-radius: 5px;
    }

    .episode-list .item:hover{
        background: var(--l1);
    }
    
    .episode-list .item.active{
        background: var(--l1);
        color: var(--accent) !important;
        font-weight: 600;
    }

    .episode-list .title{
        font-weight: 400;
        color: lightgray;
    }

    .episode-list .count{
        font-size: 10pt;
        font-weight: 400;
        padding-left: 5px;
        color: gray;
        border-left: solid 2px gray;
    }
</style>