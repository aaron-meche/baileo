<script>
	import { mediaDB, handleMediaItemClick } from '$lib/data'
	import MediaItem from '$lib/components/Media Item.svelte'

    export let title, query, condition
</script>

<!--  -->

<section>
	<div class="title">{title}</div>
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
    button{
        all: unset;
    }

	section{
		padding-top: 50px;
	}

	section > .title{
		font-size: 12pt;
		font-weight: 600;
		text-transform: uppercase;
		padding-left: 25px;
		padding-bottom: 10px;
	}
	
	section > .horizontal-scroll{
		padding-left: 25px;
		align-items: first baseline;
	}
</style>