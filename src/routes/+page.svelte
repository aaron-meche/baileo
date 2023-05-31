<script>
	import { 
		mediaDB, 
		storage,
		db
	} from '$lib/assets/main'
	
	import MediaSection from '$lib/components/Media-Section.svelte'
  	import AccountStatusBar from '$lib/components/Account-Status-Bar.svelte';

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

<AccountStatusBar/>

<div class="media-selection-pool">
	<!-- {#if progressList.length !== 0}
		<MediaSection title='Continue Watching' items={progressList}/>
	{/if} -->

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

</style>