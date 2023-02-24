<script>
	import { page } from '$app/stores'
	let urlParams = $page.params.slug
	let mediaTitle = urlParams.split('-')[0]
	let mediaSeason = urlParams.split('-')[1]
	let mediaEpisode = urlParams.split('-')[2]

	import video from '$lib/videos/prom.mp4'
</script>

<!--  -->

<svelte:head>
	<title>Watch</title>
</svelte:head>

<!--  -->

<div class="title-bar">
	{mediaTitle}
	{#if mediaSeason}
		: S{mediaSeason}E{mediaEpisode}
	{/if}
</div>

<!-- svelte-ignore a11y-media-has-caption -->
<video src={video} controls autoplay></video>

<!--  -->

<style>
	.title-bar{
		background: var(--lighter-bg);
		padding: 10pt;
		text-align: center;
	}

	video{
		height: 80vh;
		width: 100%;
		background: black;
	}
</style>