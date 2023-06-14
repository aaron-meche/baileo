<script>
	export let title, items

	import { 
		mediaDB, 
		handleMediaItemClick,
		shuffle
	} from '$assets/main'

	import MediaItem from '$components/Media-Item.svelte'

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
		padding: 0 4%;
	}

	.media-grid{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
		align-items: flex-start;
		row-gap: 20px;
		column-gap: 10px;
	}

	@media screen and (orientation: portrait) {
		.media-grid{
			grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
		}
	}
</style>