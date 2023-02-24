<script>
	import {media_info} from '$lib/data'
	const listOf_mediaTitles = Object.keys(media_info)
	
	import MediaItem from '$lib/components/Media Item.svelte'

	function handleMediaItemClick(title, type) {
		if (type == 'TV Show') alert('Media Type Not Supported')
		else alert('Media Type Not Supported')
	}

	function openTvPanel(title) {
		activeTvShow = title
		document.querySelector('#tvPanel').style.display = 'block'
		// document.querySelector('#tvPanel .top-bar').innerHTML = title
	}
</script>

<!--  -->

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--  -->

<section>
	<div class="section-title">Comedies</div>
	<div class="horizontal-scroll section">
		{#each listOf_mediaTitles as elem}
			{#if media_info[elem]['cat'] == 'comedy'}
				<button on:click={() => handleMediaItemClick(elem, media_info[elem]['mediaType'])}>
					<MediaItem title={elem} type={media_info[elem]['mediaType']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="section-title">Dramas</div>
	<div class="horizontal-scroll section">
		{#each listOf_mediaTitles as elem}
			{#if media_info[elem]['cat'] == 'drama'}
				<button on:click={() => handleMediaItemClick(elem, media_info[elem]['mediaType'])}>
					<MediaItem title={elem} type={media_info[elem]['mediaType']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="section-title">Animations</div>
	<div class="horizontal-scroll section">
		{#each listOf_mediaTitles as elem}
			{#if media_info[elem]['cat'] == 'animation'}
				<button on:click={() => handleMediaItemClick(elem, media_info[elem]['mediaType'])}>
					<MediaItem title={elem} type={media_info[elem]['mediaType']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="section-title">TV Shows</div>
	<div class="horizontal-scroll section">
		{#each listOf_mediaTitles as elem}
			{#if media_info[elem]['mediaType'] == 'TV Show'}
				<button on:click={() => handleMediaItemClick(elem, media_info[elem]['mediaType'])}>
					<MediaItem title={elem} type={media_info[elem]['mediaType']}/>
				</button>
			{/if}
		{/each}
	</div>
</section>

<section>
	<div class="section-title">Movies</div>
	<div class="horizontal-scroll section">
		{#each listOf_mediaTitles as elem}
			{#if media_info[elem]['mediaType'] == 'Movie'}
				<button on:click={() => handleMediaItemClick(elem, media_info[elem]['mediaType'])}>
					<MediaItem title={elem} type={media_info[elem]['mediaType']}/>
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

	.section-title{
		font-size: 15pt;
		padding: 15pt;
	}

	.horizontal-scroll{
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		padding: 0 10pt;
	}

	.horizontal-scroll::-webkit-scrollbar{
		display: none;
	}
</style>