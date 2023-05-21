<script>
	export let title, items

	import { 
		mediaDB, 
		handleMediaItemClick,
		shuffle
	} from '$lib/assets/main'

	import MediaItem from '$lib/trinkets/Media-Item.svelte'

	items = shuffle(items)
</script>

<!--  -->

<section>
	<div class="title">{title}</div>

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
		row-gap: 20px;
		padding: 0 20px;
		margin: 60px 0;
	}

	.title{
		width: fit-content;
		font-size: 12pt;
		font-weight: 600;
		text-transform: uppercase;
		color: var(--accent);
	}

	.media-grid{
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		align-items: flex-start;
		gap: 40px 20px;
	}

	@media screen and (max-width: 1000px) {
		section{
			display: grid;
			padding: 0 10px;
		}
		.media-grid{
			grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
			gap: 20px 10px;
		}
	}
</style>