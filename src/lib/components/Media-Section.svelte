<script>
	export let title, items

	import { 
		mediaDB, 
		handleMediaItemClick,
		shuffle
	} from '$lib/assets/main'

	import MediaItem from '$lib/components/Media-Item.svelte'

	items = shuffle(items)
</script>

<!--  -->

<section>
	<h2>{title}</h2>

	<div class="media-grid">
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
		row-gap: 10px;
		padding: 0 10px;
	}

	.media-grid{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		align-items: flex-start;
		row-gap: 15px;
	}

	@media screen and (orientation: portrait) {
		.media-grid{
			grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
		}
	}
</style>