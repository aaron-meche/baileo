<script>
	import { 
		mediaDB, 
		storage
	} from '$lib/assets/main'
	
	import MediaSection from '$lib/components/Media-Section.svelte'

	function searchMedia(attr, val) {
		let collection = []
		for (let i = 0; i < Object.keys(mediaDB).length; i++) {
			if (mediaDB[Object.keys(mediaDB)[i]][attr] == val) collection.push(Object.keys(mediaDB)[i])
		}
		return collection
	}

	// GET Currently Watching
	let progressList = []
	if (typeof window !== "undefined") {
		progressList = storage.search('progress')

		for (let i = 0; i < progressList.length; i++) {
			progressList[i] = progressList[i].replace(' progress', '')
		}
	}

	// Startup Animation
	if (typeof window !== "undefined") {
		// if (storage.session.get('startup animation') !== 'true') {
			setTimeout(() => {
				document.querySelector('.intro .name').style.transform = 'translate(0, 0)'
				document.querySelector('.intro .name').style.opacity = '1'
			}, 100)
			setTimeout(() => {
				document.querySelector('.intro').style.opacity = '0'
			}, 500)
			setTimeout(() => {
				document.querySelector('.intro').style.visibility = 'hidden'
			}, 1000)
			// storage.session.set('startup animation', 'true')
		// }
		// else {
			// console.log(1)
			// document.querySelector('.intro').style.visibility = 'hidden'
			// console.log(2)
		// }
	}
</script>

<!--  -->

<svelte:head>
	<title>Baileo - Home</title>
</svelte:head>

<!--  -->

<div class="intro">
	<div class="brand">
		<img class='logo' src="logo.png" alt="Logo">
		<div class="name">baileo</div>
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
	<MediaSection title='Romantic Comedies' items={searchMedia('cat', 'romcom')}/>
	<MediaSection title='Christmas' items={searchMedia('cat', 'christmas')}/>
	<MediaSection title='TV Shows' items={searchMedia('type', 'TV Show')}/>
	<MediaSection title='Movies' items={searchMedia('type', 'Movie')}/>
</div>

<!--  -->

<style>
	.intro{
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background: var(--bg);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 50;
		transition: opacity 500ms;
	}

	.brand{
		width: fit-content;
		display: flex;
		align-items: center;
		padding: 10px;
	}

	.brand *{
		display: inline-block;
	}

	.brand img{
		height: 50px;
		margin-right: 5px;
	}

	.brand .name{
		transform: translate(-10%, 0);
		opacity: 0;
		font-size: 30pt;
		color: var(--accent);
		transition: transform 500ms, opacity 500ms;
	}
</style>