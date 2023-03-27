<script>
	import { mediaDB, handleMediaItemClick, storage } from '$lib/data'
	import LargeMediaItem from '$lib/components/Large Media Item.svelte'

    let progressList = storage.search('progress')
    for (let i = 0; i < progressList.length; i++) {
        progressList[i] = progressList[i].replace(' progress', '')
    }
    console.log(progressList)
</script>

<!--  -->

<section>
	<div class="title">Continue Watching</div>
	<div class="horizontal-scroll">
		<!-- {#each Object.keys(mediaDB) as elem}
			{#if mediaDB[elem][query] == condition}
				<button on:click={() => handleMediaItemClick(elem)}>
					<LargeMediaItem title={elem} type={mediaDB[elem]['type']}/>
				</button>
			{/if}
		{/each} -->
        hello
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