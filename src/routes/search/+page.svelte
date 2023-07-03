<script>
	import { mediaDB } from '$lib/assets/main'
	import { onMount } from 'svelte'
	import MediaItem from '$lib/components/Media-Item.svelte'
	import MediaSection from '$lib/components/Media-Section.svelte'

	onMount(() => search())

	$: tv_results = []
	$: console.log(tv_results)
	$: movie_results = []

	function search() {
		let searchQuery = document.querySelector('input').value.toLowerCase().replaceAll(' ', '')
		if (searchQuery == '') {
			tv_results = []
			movie_results = []

			let pool = Object.keys(mediaDB)
			for (let i = 0; i < pool.length; i++) {
				if (mediaDB[pool[i]]['type'] == 'TV Show') tv_results = [...tv_results, pool[i]]
				else  movie_results = [...movie_results, pool[i]]
			}
		}
		else {
			tv_results = []
			movie_results = []

			let pool = Object.keys(mediaDB)
			for (let i = 0; i < pool.length; i++) {
				// pool[i] = pool[i].toLowerCase().replaceAll(' ', '')
				if (mediaDB[pool[i]]['type'] == 'TV Show' && pool[i].toLowerCase().replaceAll(' ', '').includes(searchQuery)) tv_results = [...tv_results, pool[i]]
				else if (pool[i].toLowerCase().replaceAll(' ', '').includes(searchQuery)) movie_results = [...movie_results, pool[i]]
			}
		}
	}
</script>

<!--  -->

<div class="top-bar">
	<h1>Search</h1>
</div>

<div class="bar">
	<img src="icons/search.svg" alt="Icon">
	<input type="text" on:keyup={search} placeholder="What are you looking for?">
</div>

<div class="content">
	<MediaSection title='TV Shows' items={tv_results} />
	<MediaSection title='Movies' items={movie_results} />
</div>

<!--  -->

<style>
	.bar{
		display: grid;
		grid-template-columns: min-content auto;
		align-items: center;
		margin: 0 4vw;
		background: var(--l1);
		border: solid 2px var(--l2);
		border-radius: 10px;
		font-size: 20px;
	}

	img{
		height: 25px;
		cursor: default;
		padding: 10px;
	}

	input{
		all: unset;

		height: 100%;
		width: 100%;
		font-size: 20px;
		font-weight: 500;
	}

	.content{
		display: grid;
		row-gap: 50px;
		padding: 50px 0;
	}
</style>