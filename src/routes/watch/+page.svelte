<script>
	import { mediaDB, storage } from '$lib/data'
	import BoldButton from '$lib/components/Bold Button.svelte'
	import TvModule from '$lib/components/TV Module.svelte'

	let media = {}

	// Get Media Information
	if (typeof window !== 'undefined') {
		media.title = storage.get('watching title')
		media.type = mediaDB[media.title]['type']

		// Progress
		if (storage.exists(`${media.title} progress`)) {
			media.season = storage.get(`${media.title} season`)
			media.episode = storage.get(`${media.title} episode`)
			media.progress = storage.get(`${media.title} progress`)
			console.log('gpr')

			let interval = setInterval(() => {
				if (document.querySelector('video')) {
					document.querySelector('video').currentTime = media.progress
					document.querySelector(`.active-episode`).scrollIntoView()
					document.querySelector(`.tv-episode-module`).scrollTop -= 100
					clearInterval(interval)
				}
			}, 750)
		}
		else {
			media.season = 1
			media.episode = 1
			media.progress = 0
			storage.set(`${media.title} season`, 1)
			storage.set(`${media.title} episode`, 1)
			storage.set(`${media.title} progress`, 0)
		}

		if (media.type == 'TV Show') {
			media.path = `${media.title}/Season ${media.season}/${mediaDB[media.title]['s' + media.season][media.episode - 1]}.mp4`
			media.description = `S${media.season}, E${media.episode} - ${mediaDB[media.title]['s' + media.season][media.episode - 1]}`
		}
		else {
			media.path = `${media.title}.mp4`
			media.description = 'Movie'
		}

		setInterval(() => {
			if (document.querySelector('video')) {
				let currentTime = document.querySelector('video').currentTime
				let maxTime = document.querySelector('video').duration
				storage.set(`${media.title} progress`, currentTime)
				if (currentTime > (maxTime - 30)) autoplay()
			}
		}, 750)
	}

	function autoplay() {
		if (media.type == 'TV Show') {
			nextEpisode()
		}
		else {
			window.open('/', '_self')
		}
	}

	function nextEpisode() {
		let seasonLength = mediaDB[media.title]['s' + media.season].length
		let seasonMax = mediaDB[media.title]['sTotal']
        storage.set(`${media.title} progress`, 0)

		if (media.episode == seasonLength) {
			if (media.season == seasonMax) {
				alert('TV Show Complete!')
				storage.set(`${media.title} season`, 1)
				storage.set(`${media.title} episode`, 1)
				storage.set(`${media.title} completed`, 1)
				window.open('/', '_self')
			}
			else {
				storage.set(`${media.title} season`, Number(media.season) + 1)
				storage.set(`${media.title} episode`, 1)
				window.open('/watch', '_self')
			}
		}
		else {
			storage.set(`${media.title} episode`, Number(media.episode) + 1)
			window.open('/watch', '_self')
		}
	}
</script>

<!--  -->

<svelte:head>
	<title>{storage.get('watching title')}</title>
</svelte:head>

{#if typeof window !== 'undefined'}
	<div class="app">
		<div class="side content">
			<div class="video-shell">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video src='https://209.163.185.11/videos/{media.path}' controls autoplay></video>
			</div>
	
			<div class="more-menu">
				<!-- Watching Information -->
				<div class="info">
					<div class="title">{media.title}</div>
					<div class="description">{media.description}</div>
				</div>
	
				<!-- Next Episode Button -->
				<div class="bold-button-section">
					{#if media.type == 'TV Show'}
						<button on:click={nextEpisode}>
							<BoldButton icon='next' text='Next Episode'/>
						</button>
					{/if}
				</div>
			</div>
		</div>
	
		<div class="side modules">
			<div class="module tv-episode-module">
				<TvModule title={media.title}/>
			</div>
		</div>
	</div>
{/if}

<!--  -->

<style>
	.app{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		padding: 25pt;
		column-gap: 25pt;
	}

	@media screen and (min-width: 1000px) {
		.side.content{
			grid-column: 1 / 3;
		}
		.side.modules{
			grid-column: 3 / 4;
		}
	}
	@media screen and (max-width: 1000px) {
		.side.content{
			grid-column: 1 / 4;
		}
		.side.modules{
			grid-column: 1 / 4;
		}
	}

	.side.modules{
		display: grid;
		row-gap: 15pt;
	}
	.module{
		min-height: 25vh;
		background: rgb(0, 0, 0, 0.1);
		box-shadow: inset -1px -1pt 5px rgb(150, 150, 150, 0.5), inset 2px 2pt 5px rgb(0, 0, 0);
		padding: 15pt;
		border-radius: 10pt;
		overflow: auto;
	}
	.tv-episode-module{
		max-height: 70vh;
	}

	.video-shell{
		position: relative;
		overflow: hidden;
		border-radius: 10pt;
	}
	video{
		display: block;
		width: 100%;
	}

	.more-menu{
		display: grid;
		align-items: center;
		grid-template-columns: repeat(2, 1fr);
		padding: 15pt 0;
	}

	.info{
		font-weight: 400;
	}
	.title{
		font-size: 18pt;
		font-weight: 600;
	}
	.description{
		font-size: 14pt;
		font-weight: 500;
		color: gray;
	}

	.bold-button-section{
		text-align: right;
		width: 100%;
	}
	button{
		all: unset;
	}
</style>