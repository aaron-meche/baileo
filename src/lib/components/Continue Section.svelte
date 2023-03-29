<script>
	import { mediaDB, handleMediaItemClick, storage } from '$lib/data'
	import MediaItem from '$lib/components/Media Item.svelte'

	let progressList = storage.search('progress')

	if (typeof window !== "undefined") {
		for (let i = 0; i < progressList.length; i++) {
			progressList[i] = progressList[i].replace(' progress', '')
		}
		console.log(progressList)
	}
</script>

<!--  -->

<section>
	<div class="title">Continue Watching</div>
	<div class="horizontal-scroll">
		{#each progressList as item}
			<!-- {#if mediaDB[elem][query] == condition}
				<button on:click={() => handleMediaItemClick(elem)}>
					<MediaItem title={elem} type={mediaDB[elem]['type']}/>
				</button>
			{/if} -->
			{item}
		{/each}
	</div>
</section>

<!--  -->

<style>
    /* button{
        all: unset;
    }

	section{
		margin-top: 50px;
	}

	section > .title{
		font-size: 12pt;
		font-weight: 600;
		text-transform: uppercase;
		padding-left: 25px;
		padding-bottom: 10px;
	}
	
	section > .horizontal-scroll{
		column-gap: 20px;
		padding-left: 20px;
		padding-right: 20px;
		align-items: first baseline;
	} */
</style>