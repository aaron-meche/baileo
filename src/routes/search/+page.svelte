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

	function search() {
		let string = document.querySelector('input').value.toLowerCase().replaceAll(' ', '')
		document.querySelectorAll('[type="media-item"]').forEach((elem) => {
			let content = elem.innerText.toLowerCase().replaceAll(' ', '')
			if (content.includes(string)) {
				elem.style.display = 'grid'
			}
			else {
				elem.style.display = 'none'
			}
		})
	}

	function clearSearch() {
		document.querySelector('input').value = ''
		search()
	}
</script>

<!--  -->

<svelte:head>
	<title>Search</title>
</svelte:head>

<!--  -->

<div class="search-wrapper">
	<img src="icons/search.svg" alt="Icon">
	<input type="text" on:keyup={search} placeholder="Search">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<img class='clear-button' on:click={clearSearch} src="icons/close.svg" alt="Icon">
</div>

<div class="media-selection-pool">
	<MediaSection title='TV Shows' items={searchMedia('type', 'TV Show')}/>
	<MediaSection title='Movies' items={searchMedia('type', 'Movie')}/>
</div>

<!--  -->

<style>
	.search-wrapper{
		width: fit-content;
		background: var(--fg);
		border-radius: 10px;
		margin: auto;
		margin-top: 20px;
		display: grid;
		grid-auto-flow: column;
		align-items: center;
	}

	img{
		height: 20px;
		display: inline-block;
		margin: 15px;
		cursor: default;
	}

	input{
		all: unset;
		height: 100%;
		width: clamp(25vw, 250pt, 75vw);
		display: inline-block;
	}

	.clear-button{
		cursor: pointer;
	}
</style>