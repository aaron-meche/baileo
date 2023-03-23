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
		padding: 20pt 0;
	}

	section >  .title{
		font-size: 15pt;
		font-weight: 500;
		padding: 10pt;
		padding-left: 25pt;
	}

	section > .horizontal-scroll{
		padding: 0 25pt;
	}
</style>