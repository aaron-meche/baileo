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
			media.episodeTitle = media.type == 'TV Show' ? mediaDB[media.title]['s' + media.season][media.episode - 1] : ''
			media.episodeDisplayTitle = media.type == 'TV Show' ? mediaDB[media.title]['s' + media.season][media.episode - 1].replaceAll('-', "'") : ''
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

		// Media Path + Descriptions
		if (media.type == 'TV Show') {
			media.path = `${media.title}/Season ${media.season}/${media.episodeTitle}.mp4`
			media.description = `S${media.season}, E${media.episode} - ${media.episodeDisplayTitle}`
		}
		else {
			media.path = `${media.title}.mp4`
			media.description = 'Movie'
		}

		if (!storage.exists('shuffle')) {
			storage.set('shuffle', 'Off')
		}
		if (!storage.exists('autoplay')) {
			storage.set('autoplay', 'On')
		}

		// Keep saving progress...
		setInterval(() => {
			if (document.querySelector('video')) {
				let currentTime = document.querySelector('video').currentTime
				let maxTime = document.querySelector('video').duration
				storage.set(`${media.title} progress`, currentTime)

				if ((currentTime > (maxTime - 30)) && (storage.get('autoplay') == 'On')) continueWatching()
			}
		}, 750)
	}

	function continueWatching() {
		if (media.type == 'TV Show') {
			if (storage.get('shuffle') == 'On') nextShuffleEpisode()
			else nextEpisode()
		}
		else {
			window.open('/', '_self')
		}
	}

	function nextShuffleEpisode() {
		let randomSeason = Math.floor(Math.random() * mediaDB[media.title]['sTotal']) + 1
		let randomEpisode = Math.floor(Math.random() * mediaDB[media.title]['s' + randomSeason].length) + 1
		storage.set(`${media.title} season`, randomSeason)
		storage.set(`${media.title} episode`, randomEpisode)
        storage.set(`${media.title} progress`, 0)
		window.location.reload()
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
				window.location.reload()
			}
		}
		else {
			storage.set(`${media.title} episode`, Number(media.episode) + 1)
			window.location.reload()
		}
	}

	let shuffleStatus = storage.get('shuffle')
	function toggleShuffle() {
		let current = storage.get('shuffle')
		if (current == 'Off') {
			storage.set('shuffle', 'On')
			shuffleStatus = 'On'
		}
		else {
			storage.set('shuffle', 'Off')
			shuffleStatus = 'Off'
		}
	}

	let autoplayStatus = storage.get('autoplay')
	function toggleAutoplay() {		
		let current = storage.get('autoplay')
		if (current == 'Off') {
			storage.set('autoplay', 'On')
			autoplayStatus = 'On'
		}
		else {
			storage.set('autoplay', 'Off')
			autoplayStatus = 'Off'
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
		<!-- svelte-ignore a11y-media-has-caption -->
		<video src='https://209.163.185.11/videos/{media.path}' controls autoplay></video>

		<!-- Description Belt -->
		<div class="more-menu">
			<!-- Watching Information -->
			<div class="info">
				<div class="title">{media.title}</div>
				<div class="description">{media.description}</div>
			</div>

			<!-- Next Episode Button -->
			<div class="bold-button-section" style='text-align: right;'>
				{#if media.type == 'TV Show'}
					<button on:click={continueWatching}>
						<BoldButton icon='next' text='Next Episode'/>
					</button>
				{/if}
			</div>
		</div>

		<!-- Action Button Belt -->
		<div class="action-buttons horizontal-scroll">
			<button>
				<img src="icons/download.svg" alt="Icon">
				Download
			</button>
			<button on:click={toggleShuffle}>
				<img src="icons/shuffle.svg" alt="Icon">
				Shuffle
				<div class="toggle {shuffleStatus == 'On' ? 'active' : ''}">
					<div class="coin"></div>
				</div>
			</button>
			<button on:click={toggleAutoplay}>
				<img src="icons/infinity.svg" alt="Icon">
				Autoplay
				<div class="toggle {autoplayStatus == 'On' ? 'active' : ''}">
					<div class="coin"></div>
				</div>
			</button>
			<!-- <button on:click={saveAsClip}>
				<img src="icons/camera.svg" alt="Icon">
				Save as Clip
			</button> -->
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
		padding: 20pt;
		column-gap: 20pt;
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

	.side{
		display: grid;
		row-gap: 20pt;
		padding-bottom: 20pt;
	}

	.module{
		height: 50vh;
		min-height: 25vh;
		max-height: 50vh;
		background: rgb(0, 0, 25, 0.25);
		border: solid 1pt rgb(50, 50, 100);
		padding: 15pt;
		border-radius: 15pt;
		overflow: auto;
	}

	video{
		box-shadow: -1px -1px 50px -25px var(--accent), 1px 1px 50px -25px var(--compliment);
		width: 100%;
	}

	.more-menu{
		display: grid;
		align-items: center;
		grid-template-columns: repeat(2, 1fr);
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

	.action-buttons{
		cursor: default;
	}
	.action-buttons button{
		display: inline-flex;
		align-items: center;
		padding: 10pt 15pt;
		background: rgb(0, 0, 0, 0.5);
		border-radius: 10pt;
		margin-right: 10pt;
	}
	.action-buttons img{
		height: 15pt;
		margin-right: 5pt;
	}
	.action-buttons .toggle{
		margin-left: 5pt;
		padding: 2pt;
		border-radius: 100vh;
		background: rgb(255, 255, 255, 0.15);
	}
	.action-buttons .toggle .coin{
		padding: 5pt;
		border-radius: inherit;
		transition: margin 500ms;
		background: gray;
		margin-left: 0;
		margin-right: 10pt;
	}
	.action-buttons .toggle.active .coin{
		background: var(--accent);
		margin-left: 10pt;
		margin-right: 0;
	}
	.action-buttons button:hover {
		box-shadow: inset 0 -32pt 0 -30pt var(--accent);
	}
	button{
		all: unset;
	}
</style>