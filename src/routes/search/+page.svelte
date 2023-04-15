<script>
	import { mediaDB, storage } from '$lib/main'
	import MediaSection from '$lib/components/Media Section.svelte'

	const listOf_mediaTitles = Object.keys(mediaDB)

	function handleMediaItemClick(title, type) {
		storage.set('watching title', title)
		window.open('/watch/', '_self')
	}

	function search(value) {
		let string = document.querySelector('input').value.toLowerCase().replaceAll(' ', '')
		document.querySelectorAll('[type="media-item"]').forEach((elem) => {
			let content = elem.innerText.toLowerCase().replaceAll(' ', '')
			if (content.includes(string)) {
				elem.style.display = 'inline-block'
			}
			else {
				elem.style.display = 'none'
			}
		})
	}
</script>

<!--  -->

<svelte:head>
	<title>Search</title>
</svelte:head>

<!--  -->

<div class="search-wrapper">
	<img src="icons/search.svg" alt="">
	<input type="text" on:keyup={search}>
</div>

<MediaSection title='TV Shows' query='type' condition='TV Show'/>
<MediaSection title='Movies' query='type' condition='Movie'/>

<!--  -->

<style>
	.search-wrapper{
		width: fit-content;
		background: rgb(0, 0, 0, 0.25);
		box-shadow: inset -1px -1pt 5px rgb(150, 150, 150, 0.5), inset 2px 2pt 5px rgb(0, 0, 0);
		border-radius: 10pt;
		margin: 5pt auto;
		display: grid;
		grid-auto-flow: column;
		align-items: center;
	}

	img{
		height: 15pt;
		display: inline-block;
		margin: 10pt;
	}

	input{
		all: unset;
		height: 100%;
		width: clamp(25vw, 250pt, 75vw);
		display: inline-block;
	}
</style>