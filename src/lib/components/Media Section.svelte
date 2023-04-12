<script>
	import { mediaDB, handleMediaItemClick } from '$lib/data'
	import MediaItem from '$lib/components/Media Item.svelte'

    export let title, query, condition

	function scrollLeft() {
		document.querySelector('.horizontal-scroll').scroll({
			top: 0, 
			left: document.querySelector('.horizontal-scroll').scrollLeft - (screen.width * 0.9), 
			behavior: 'smooth' 
		})
	}

	function scrollRight() {
		document.querySelector('.horizontal-scroll').scroll({
			top: 0, 
			left: document.querySelector('.horizontal-scroll').scrollLeft + (screen.width * 0.9), 
			behavior: 'smooth' 
		})
	}
</script>

<!--  -->

<section>
	<div class="top-bar">
		<div class="title">{title}</div>

		<div class="navigation">
			<button on:click={scrollLeft} class="left"><img src="icons/left.svg" alt="Icon"></button>
			<button on:click={scrollRight} class="right"><img src="icons/right.svg" alt="Icon"></button>
		</div>
	</div>

	<div class="horizontal-scroll">
		{#each Object.keys(mediaDB) as elem}
			{#if mediaDB[elem][query] == condition}
				<button on:click={() => handleMediaItemClick(elem)}>
					<MediaItem title={elem} type={mediaDB[elem]['type']}/>
				</button>
			{/if}
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
		height: 25px;
		display: grid;
		grid-template-columns: auto min-content;
		align-items: end;
		margin: 0 25px;
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
		height: 25px;
		padding: 0 10px;
		border-bottom: solid 1pt var(--accent);
		text-align: center;
	}

	.navigation img{
		height: 80%;
	}

	.horizontal-scroll{
		padding-left: 25px;
		align-items: first baseline;
	}
</style>