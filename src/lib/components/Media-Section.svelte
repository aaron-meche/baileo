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

	<div class="horizontal-scroll">
		{#each items as items}
			<button clickable on:click={() => handleMediaItemClick(items)}>
				<div class="item"><MediaItem title={items}/></div>
			</button>
		{/each}
	</div>
</section>

<!--  -->

<style>
	section{ 
		display: grid;
		height: fit-content;
		row-gap: 10px;
	}

	h2{
		padding: 0 4vw;
		margin-left: 10px;
	}

	.horizontal-scroll{
		padding: 0 4vw;
	}

	button{
		cursor: default;
		margin-right: 15px;
	}
</style>