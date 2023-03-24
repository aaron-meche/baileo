<script>
	import { storage } from '$lib/data'
    export let source, glow

	let clock = 0

	setInterval(() => {
		clock += 0.5
		if (clock > 2) {
			document.querySelector('.overlay').style.opacity = '0'
		}
		console.log(clock)
	}, 500)

	function mouseMove() {
		clock = 0
		document.querySelector('.overlay').style.opacity = '1'
	}

	let mediaTitle = storage.get('watching title')
	let mediaSeason = storage.get(`${mediaTitle} season`)
	let mediaEpisode = storage.get(`${mediaTitle} episode`)
	let mediaDescription = `S${mediaSeason}, E${mediaEpisode}`
</script>

<!--  -->

<div class="player" on:mousemove={mouseMove}>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class='{glow == 'true' ? 'glow' : ''}' src={source} autoplay></video>

	<div class="overlay">
		<div class="title">{mediaTitle}</div>
		<div class="caption">{mediaDescription}</div>
	</div>
</div>

<!--  -->

<style>
	.player{
		position: relative;
		background: red;
	}

	video{
		height: 100%;
		width: 100%;
		display: block;
		z-index: 5;
	}
	video.glow{
		box-shadow: var(--accent-shadow);
	}

	.overlay{
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 500ms;
		background: linear-gradient(to top, rgb(0, 0, 0, 0.75), rgb(0, 0, 0, 0));
		z-index: 10;
	}
</style>