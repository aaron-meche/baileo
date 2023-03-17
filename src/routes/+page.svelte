<script>
	import { mediaDB, storage } from '$lib/data'
	import MediaItem from '$lib/components/Media Item.svelte'

	const listOf_mediaTitles = Object.keys(mediaDB)

	function handleMediaItemClick(title, type) {
		storage.set('watching title', title)
		window.open('/watch/', '_self')
	}
</script>

<!--  -->

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--  -->

<section>
	<div class="title">Comedies</div>
	<div class="horizontal-scroll">
		{#each listOf_mediaTitles as elem}
			{#if mediaDB[elem]['cat'] == 'comedy'}
				<button on:click={() => handleMediaItemClick(elem, mediaDB[elem]['type'])}>
					<MediaItem title={elem} type={mediaDB[elem]['type']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="title">Dramas</div>
	<div class="horizontal-scroll">
		{#each listOf_mediaTitles as elem}
			{#if mediaDB[elem]['cat'] == 'drama'}
				<button on:click={() => handleMediaItemClick(elem, mediaDB[elem]['type'])}>
					<MediaItem title={elem} type={mediaDB[elem]['type']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="title">Animations</div>
	<div class="horizontal-scroll">
		{#each listOf_mediaTitles as elem}
			{#if mediaDB[elem]['cat'] == 'animation'}
				<button on:click={() => handleMediaItemClick(elem, mediaDB[elem]['type'])}>
					<MediaItem title={elem} type={mediaDB[elem]['type']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="title">TV Shows</div>
	<div class="horizontal-scroll">
		{#each listOf_mediaTitles as elem}
			{#if mediaDB[elem]['type'] == 'TV Show'}
				<button on:click={() => handleMediaItemClick(elem, mediaDB[elem]['type'])}>
					<MediaItem title={elem} type={mediaDB[elem]['type']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="title">Movies</div>
	<div class="horizontal-scroll">
		{#each listOf_mediaTitles as elem}
			{#if mediaDB[elem]['type'] == 'Movie'}
				<button on:click={() => handleMediaItemClick(elem, mediaDB[elem]['type'])}>
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
		column-gap: 15pt;
		padding-left: 25pt;
	}
</style>