<script>
	import { mediaDB } from '$lib/assets/main'
	import { onMount } from 'svelte'
	import MediaSection from '$lib/components/Media-Section.svelte'
  	import AccountStatusBar from '$lib/components/Account-Status-Bar.svelte';

	function filterMedia(attr, val) {
		let collection = []
		for (let i = 0; i < Object.keys(mediaDB).length; i++) {
			if (mediaDB[Object.keys(mediaDB)[i]][attr].includes(val)) collection.push(Object.keys(mediaDB)[i])
		}
		return collection
	}

	// let library = []
	// let userData = user.read()
	// console.log('\n\n\n\n\n\n\n\n\n\n---> app <---')
	// console.log('page read', userData)

	// if (userData?.library) {
	// 	library = Object.keys(userData.library)
	// }
</script>

<!--  -->

<svelte:head>
	<title>Baileo - Home</title>
</svelte:head>

<!--  -->

<div class="top-bar">
	<h1>Explore</h1>
</div>

<AccountStatusBar/>

<div class="content">
	<!-- {#if library.length > 0}
		<MediaSection title='Your Library' items={library}/>
	{/if} -->

	<MediaSection title='Comedies' items={filterMedia('cat', 'comedy')}/>
	<MediaSection title='Animations' items={filterMedia('cat', 'animation')}/>
	<MediaSection title='Dramas' items={filterMedia('cat', 'drama')}/>
	<MediaSection title='Marvel' items={filterMedia('cat', 'marvel')}/>
	<MediaSection title='Horror' items={filterMedia('cat', 'horror')}/>
	<MediaSection title='Romantic Comedies' items={filterMedia('cat', 'romcom')}/>
	<MediaSection title='Christmas' items={filterMedia('cat', 'christmas')}/>
	<MediaSection title='TV Shows' items={filterMedia('type', 'TV Show')}/>
	<MediaSection title='Movies' items={filterMedia('type', 'Movie')}/>
</div>


<!--  -->

<style>
	.search-bar-wrapper{
		display: grid;
		grid-template-columns: min-content auto min-content;
		gap: 10px;
		align-items: center;
		background: var(--l1);
		padding: 5px 10px;
		border: solid 2px var(--l2);
		border-radius: 5px;
	}
	.search-bar-wrapper input{
		width: 150px;
		font-size: 14px;
	}
	.search-bar-wrapper img{
		height: 16px;
	}
	
	.content{
		top: -5vh;
		display: grid;
		row-gap: 50px;
		padding: 50px 0;
	}
</style>