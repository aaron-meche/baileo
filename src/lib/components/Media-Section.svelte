<script>
	export let title, items

	import { 
		mediaDB, 
		handleMediaItemClick,
		uniqueID,
		shuffle
	} from '$lib/assets/main'

	import MediaItem from '$lib/components/Media-Item.svelte'

	let ranId = uniqueID()
	let scrollFromLeft = 0

	items = shuffle(items)

	function updateScroll() {
		scrollFromLeft = document.querySelector('.horizontal-scroll.' + ranId).scrollLeft
	}

	function scrollLeft() {
		document.querySelector('.horizontal-scroll.' + ranId).scroll({
			top: 0, 
			left: document.querySelector('.horizontal-scroll.' + ranId).scrollLeft - (screen.width * 0.9), 
			behavior: 'smooth' 
		})
	}

	function scrollRight() {
		document.querySelector('.horizontal-scroll.' + ranId).scroll({
			top: 0, 
			left: document.querySelector('.horizontal-scroll.' + ranId).scrollLeft + (screen.width * 0.9), 
			behavior: 'smooth' 
		})
	}
</script>

<!--  -->

<section>
	<div class="title">{title}</div>

	<div class="media-grid" on:scroll={updateScroll}>
		{#each items as elem}
			<button on:click={() => handleMediaItemClick(elem)}>
				<MediaItem title={elem}/>
			</button>
		{/each}
	</div>
</section>

<!--  -->

<style>
	section{
		display: grid;
		row-gap: 20px;
		padding: 20px;
		margin: 20px;
		border-radius: 10px;
		margin-bottom: 75px;
		box-shadow: var(--neu-rest);
	}

	.title{
		width: fit-content;
		font-size: 12pt;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--accent);
	}

	.media-grid{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 40px 20px;
	}
</style>