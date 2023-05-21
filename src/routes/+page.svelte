<script>
	import { 
		mediaDB, 
		storage,
		db,
		handleMediaItemClick
	} from '$lib/assets/main'
	
	import MediaSection from '$lib/components/Media-Section.svelte'

	function searchMedia(attr, val) {
		let collection = []
		for (let i = 0; i < Object.keys(mediaDB).length; i++) {
			if (mediaDB[Object.keys(mediaDB)[i]][attr].includes(val)) collection.push(Object.keys(mediaDB)[i])
		}
		return collection
	}

	// Get Currently Watching
	let progressList = []
	if (typeof window !== "undefined") {
		progressList = storage.search('progress')

		for (let i = 0; i < progressList.length; i++) {
			progressList[i] = progressList[i].replace(' progress', '')
		}
	}
</script>

<!--  -->

<svelte:head>
	<title>Baileo - Home</title>
</svelte:head>

<!--  -->

<div class="featured">
	<div class="photo"></div>
	<div class="overlay">
		<div class="info">
			<div class="title">The Intern</div>
			<div class="buttons">
				<button class='primary' on:click={() => handleMediaItemClick('The Intern')}>Play Now</button>
				<button on:click={() => window.open('https://www.imdb.com/title/tt2361509/', '_self')}>View More</button>
			</div>
		</div>
	</div>
</div>

<div class="media-selection-pool">
	{#if progressList.length !== 0}
		<MediaSection title='Continue Watching' items={progressList}/>
	{/if}

	<MediaSection title='Comedies' items={searchMedia('cat', 'comedy')}/>
	<MediaSection title='Animations' items={searchMedia('cat', 'animation')}/>
	<MediaSection title='Dramas' items={searchMedia('cat', 'drama')}/>
	<MediaSection title='Marvel' items={searchMedia('cat', 'marvel')}/>
	<MediaSection title='Horror' items={searchMedia('cat', 'horror')}/>
	<MediaSection title='Romantic Comedies' items={searchMedia('cat', 'romcom')}/>
	<MediaSection title='Christmas' items={searchMedia('cat', 'christmas')}/>
	<MediaSection title='TV Shows' items={searchMedia('type', 'TV Show')}/>
	<MediaSection title='Movies' items={searchMedia('type', 'Movie')}/>
</div>

<!--  -->

<style>
	.featured{
		position: relative;
		height: 50vh;
		background: url('action/The Intern.png');
		background-position-x: center;
		background-size: cover;
	}

	.overlay{
		display: grid;
		align-items: flex-end;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: linear-gradient(to top, var(--bg), rgb(0,0,0,0));
	}
	
	.info{
		display: grid;
		row-gap: 10px;
		padding: 10px;
		margin: 10px;
	}

	.info .title{
		font-size: 20pt;
		font-weight: 600;
	}

	.info .buttons{
		font-size: 0;
	}

	.info .buttons .primary{
		color: black;
		background: var(--accent);
	}

	.info .buttons button{
		padding: 10px 20px;
		margin-right: 10px;
		font-size: 12pt;
		font-weight: 500;
		border-radius: 5px;
		background: black;
		cursor: pointer;
	}
</style>