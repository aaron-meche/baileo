<script>
    export let source, glow

	import { 
		storage, 
		mediaDB 
	} from '$lib/main'

	const restTime = 2
	let clock = restTime

	setInterval(() => {
		if (clock <= 0) {
			document.querySelector('.overlay').style.opacity = '0'
			document.querySelector('.overlay').style.cursor = 'none'
		}
		else {
			clock -= 0.5
		}
	}, 500)

	function mouseMove() {
		clock = restTime
		document.querySelector('.overlay').style.opacity = '1'
			document.querySelector('.overlay').style.cursor = 'default'
	}

	function mouseOut() {
		clock = restTime
		document.querySelector('.overlay').style.opacity = '0'
	}

	let media = {}
	media.title = storage.get('watching title')
	media.season = storage.get(`${media.title} season`)
	media.episode = storage.get(`${media.title} episode`)
	media.description = `S${media.season}, E${media.episode} - ${mediaDB[media.title]['s' + media.season][media.episode - 1]}`
	media.isFullscreen = false

	function togglePlay() { 
		if (document.querySelector('video').paused) {
			document.querySelector('video').play()
		}
		else {
			document.querySelector('video').pause()
		}
	} 

	function toggleFullScreen() {
		var doc = window.document
		var docEl = doc.querySelector('.player')

		var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen
		var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen

		if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
			requestFullScreen.call(docEl)
			document.querySelector('.information').style.opacity = '1'
		}
		else {
			cancelFullScreen.call(doc)
			document.querySelector('.information').style.opacity = '0'
		}
	}
</script>

<!--  -->

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- <div class="player"> -->
<div class="player" on:mousemove={mouseMove} on:mouseout={mouseOut} on:dblclick={toggleFullScreen}>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class='{glow == 'true' ? 'glow' : ''}' src={source} autoplay></video>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="overlay" on:click={togglePlay}>
		<div class="information">
			<div class="title">{media.title}</div>
			<div class="caption">{media.description}</div>
		</div>

		<div class="progress">
			<div class="bar">
				<div class="status"></div>
			</div>
			<div class="time">
				<div class="past">0:00</div>
				<div class="future">10:00</div>
			</div>
		</div>
	</div>
</div>

<!--  -->

<style>
	.player{
		position: relative;
		background: black;
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
		height: calc(100% - 50px);
		width: calc(100% - 50px);
		position: absolute;
		top: 0;
		left: 0;
		transition: opacity 500ms;
		background: linear-gradient(to top, rgb(0, 0, 0, 0.75), rgb(0, 0, 0, 0));
		z-index: 10;
		display: grid;
		grid-template-rows: auto min-content;
		row-gap: 15px;
		align-items: end;
		padding: 25px;
	}

	.information{
		opacity: 0;
		transition: opacity 250ms ease-in-out 250ms;
	}
	
	.title{
		font-size: 15pt;
		font-weight: 600;
	}
	
	.caption{
		font-size: 12pt;
		font-weight: 300;
		color: lightgray;
	}

	.bar{
		height: 5px;
		width: 100%;
		border-radius: 100vh;
		overflow: hidden;
		background: gray;
		transition: height 200ms;
	}

	.bar:hover{
		height: 10px;
	}

	.status{
		height: 100%;
		width: 50%;
		background: lightgray;
	}

	.time{
		display: grid;
		grid-template-columns: auto auto;
		margin-top: 2px;
		font-size: 10pt;
		font-weight: 300;
	}

	.future{
		text-align: right;
	}
</style>