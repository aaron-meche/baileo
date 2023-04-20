<script>
	export let title, items

	import { 
		mediaDB, 
		handleMediaItemClick,
		uniqueID 
	} from '$lib/main'

	import MediaItem from '$lib/components/Media Item.svelte'

	let ranId = uniqueID()

	let scrollFromLeft = 0

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
	<div class="top-bar">
		<div class="title">{title}</div>

		<div class="navigation">
			{#if scrollFromLeft > 0}
				<button on:click={scrollLeft} class="left"><img src="icons/left.svg" alt="Icon"></button>
			{:else}
				<button class="left inactive"><img src="icons/left.svg" alt="Icon"></button>
			{/if}

			<button on:click={scrollRight} class="right"><img src="icons/right.svg" alt="Icon"></button>
		</div>
	</div>

	<div class="horizontal-scroll {ranId}" on:scroll={updateScroll}>
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
		position: relative;
		margin-top: 50px;
	}

	.top-bar{
		display: grid;
		grid-template-columns: auto min-content;
		align-items: end;
		margin: 0 20px;
		margin-bottom: 10px;
	}

	.title{
		font-size: 12pt;
		font-weight: 700;
		text-transform: uppercase;
	}
	
	.navigation{
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 10px;
	}

	.navigation button{
		height: 20px;
		padding: 5px;
		aspect-ratio: 1 / 1;
		background: var(--foreground);
		border-radius: 100vh;
		cursor: pointer;
	}
	.navigation button.inactive{
		opacity: 0.25;
	}

	.navigation img{
		height: 100%;
		display: block;
	}

	.horizontal-scroll{
		padding-left: 20px;
		align-items: first baseline;
	}
</style>