<script>
	import { 
		mediaDB, 
		storage
	} from '$lib/assets/main'
	
	import MediaSection from '$lib/components/Media-Section.svelte'
	import Footer from '$lib/components/Footer.svelte';

	function searchMedia(attr, val) {
		let collection = []
		for (let i = 0; i < Object.keys(mediaDB).length; i++) {
			if (mediaDB[Object.keys(mediaDB)[i]][attr] == val) collection.push(Object.keys(mediaDB)[i])
		}
		return collection
	}

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

<div class="media-selection-pool">
	{#if progressList.length !== 0}
		<MediaSection title='Continue Watching' items={progressList}/>
	{/if}

	<!-- <MediaSection title='Featured Favorites' items={searchMedia('featured_favorites', 'true')}/> -->
	<MediaSection title='Comedies' items={searchMedia('cat', 'comedy')}/>
	<MediaSection title='Animations' items={searchMedia('cat', 'animation')}/>
	<MediaSection title='Dramas' items={searchMedia('cat', 'drama')}/>
	<MediaSection title='Marvel' items={searchMedia('cat', 'marvel')}/>
	<MediaSection title='Romantic Comedies' items={searchMedia('cat', 'romcom')}/>
	<MediaSection title='Christmas' items={searchMedia('cat', 'christmas')}/>
	<MediaSection title='TV Shows' items={searchMedia('type', 'TV Show')}/>
	<MediaSection title='Movies' items={searchMedia('type', 'Movie')}/>
</div>

<Footer/>

<!--  -->

<style>
</style>