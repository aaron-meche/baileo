<script>
	import { mediaDB, storage } from '$lib/main'
	import MediaSection from '$lib/components/Media Section.svelte'

	function search() {
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

	function clearSearch() {
		document.querySelector('input').value = ''
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

<MediaSection title='TV Shows' query='type' condition='TV Show'/>
<MediaSection title='Movies' query='type' condition='Movie'/>

<!--  -->

<style>
	.search-wrapper{
		width: fit-content;
		box-shadow: var(--neu-rest);
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