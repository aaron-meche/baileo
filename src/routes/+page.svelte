<script>
	import { 
		mediaDB, 
		storage,
		db
	} from '$assets/main'
	
	import MediaSection from '$components/Media-Section.svelte'
  	import AccountStatusBar from '$components/Account-Status-Bar.svelte';

	function searchMedia(attr, val) {
		let collection = []
		for (let i = 0; i < Object.keys(mediaDB).length; i++) {
			if (mediaDB[Object.keys(mediaDB)[i]][attr].includes(val)) collection.push(Object.keys(mediaDB)[i])
		}
		return collection
	}

	// Get Currently Watching
	let continue_watching = []
	if (typeof window !== "undefined") {
		db.listen('users/' + storage.read('username'), (user) => {
			if (user.library) {
				continue_watching = Object.keys(user.library)
			}
		})
	}
</script>

<!--  -->

<svelte:head>
	<title>Baileo - Home</title>
</svelte:head>

<!--  -->


<div class="content">
	<AccountStatusBar/>

	{#if continue_watching.length > 0}
		<MediaSection title='Continue Watching' items={continue_watching}/>
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
	.content{
		display: grid;
		row-gap: 40px;
		padding: 40px 0;
	}
</style>