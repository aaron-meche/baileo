<script>
	import { mediaDB, storage } from '$lib/main'
	import BoldButton from '$lib/components/Bold Button.svelte'
	import TvModule from '$lib/modules/TV Panel.svelte'
	import MoreToWatchModule from '$lib/modules/More to Watch.svelte'
	import Toggle from '$lib/components/Toggle.svelte'
    import VideoPlayer from '$lib/components/Video Player.svelte';

	let media = {}

	// Get Media Information
	if (typeof window !== 'undefined') {
		media.title = storage.get('watching title')
		media.type = mediaDB[media.title]['type']

		media.season = storage.exists(`${media.title} season`) ? Number(storage.get(`${media.title} season`)) : 1
		media.episode = storage.exists(`${media.title} episode`) ? Number(storage.get(`${media.title} episode`)) : 1

		media.progress = storage.exists(`${media.title} progress`) ? Number(storage.get(`${media.title} progress`)) : 0

		let interval = setInterval(() => { // Load progress
			if (document.querySelector('video')) {
				// if (media.type == 'TV Show') {
					// 	document.querySelector(`.tv-episode-module`).scroll({
						// 		// top: document.querySelector(`.active-episode`).offsetTop - (5 * document.querySelector(`.active-episode`).offsetHeight), 
						// 		top: document.querySelector(`.active-episode`).offsetTop - (document.querySelector(`.tv-episode-module`).offsetHeight / 2), 
						// 		left: 0, 
						// 		behavior: 'smooth' 
						// 	});
						// }
				document.querySelector('video').currentTime = media.progress
				clearInterval(interval)
			}
		}, 750)

		// // Progress
		// if (storage.exists(`${media.title} progress`)) { // YES watch progress
		// 	media.progress = storage.get(`${media.title} progress`)
			
		// 	let interval = setInterval(() => { // Load progress
		// 		if (document.querySelector('video')) {
		// 			document.querySelector('video').currentTime = media.progress
		// 			// if (media.type == 'TV Show') {
		// 			// 	document.querySelector(`.tv-episode-module`).scroll({
		// 			// 		// top: document.querySelector(`.active-episode`).offsetTop - (5 * document.querySelector(`.active-episode`).offsetHeight), 
		// 			// 		top: document.querySelector(`.active-episode`).offsetTop - (document.querySelector(`.tv-episode-module`).offsetHeight / 2), 
		// 			// 		left: 0, 
		// 			// 		behavior: 'smooth' 
		// 			// 	});
		// 			// }
		// 			clearInterval(interval)
		// 		}
		// 	}, 750)

		// 	if (media.type == 'TV Show') {
		// 		media.season = storage.get(`${media.title} season`)
		// 		media.episode = storage.get(`${media.title} episode`)
		// 	}
		// }
		// else { // NO watch progress
		// 	media.progress = 0

		// 	if (media.type == 'TV Show') {
		// 		media.season = 1
		// 		media.episode = 1
		// 		storage.set(`${media.title} season`, 1)
		// 		storage.set(`${media.title} episode`, 1)
		// 	}
		// }

		// Media Path + Descriptions
		if (media.type == 'TV Show') {
			media.episodeTitle = mediaDB[media.title]['s' + media.season][media.episode - 1]
			media.episodeDisplayTitle = mediaDB[media.title]['s' + media.season][media.episode - 1].replaceAll('-', "'")
			
			media.path = `${media.title}/Season ${media.season}/${media.episodeTitle}.mp4`
			media.description = `S${media.season}, E${media.episode} - ${media.episodeDisplayTitle}`
		}
		else {
			media.path = `${media.title}.mp4`
			media.description = 'Movie'
		}

		// Keep saving progress...
		setInterval(() => {
			if (document.querySelector('video')) {
				let currentTime = document.querySelector('video').currentTime
				let maxTime = document.querySelector('video').duration
				storage.set(`${media.title} progress`, currentTime)

				if ((currentTime > (maxTime - storage.get('autoplay buffer'))) && (storage.get('autoplay') == 'true')) {
					continueWatching()
				}
			}
		}, 750)
	}

	function continueWatching() {
		if (media.type == 'TV Show') {
			if (storage.get('shuffle') == 'true') nextShuffleEpisode()
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

	function download() {
		var link = document.createElement("a")
		link.download = media.description
		link.href = `https://209.163.185.11/videos/${media.path}`
		link.click()
	}

	let statePref = {}

	function createStatePref(title) {
		statePref[title] = storage.get(title)
	}

	createStatePref('shuffle')
	createStatePref('autoplay')

	function toggleStatePref(title) {
		let current = storage.get(title)
		if (current == 'false') {
			storage.set(title, 'true')
			statePref[title] = 'true'
		}
		else {
			storage.set(title, 'false')
			statePref[title] = 'false'
		}
	}
</script>

<!--  -->

<svelte:head>
	<title>{media.episodeDisplayTitle}</title>
</svelte:head>

{#if typeof window !== 'undefined'}
<div class="app">

	<div class="side content">
		<!-- {#if storage.get('is touch screen') == 'true'} -->
			<!-- svelte-ignore a11y-media-has-caption -->
			<video class='{statePref['glow'] == 'true' ? 'glow' : ''}' src='https://209.163.185.11/videos/{media.path}' controls autoplay></video>
		<!-- {:else} -->
			<!-- <VideoPlayer source='https://209.163.185.11/videos/{media.path}' glow={statePref['glow']}/> -->
		<!-- {/if} -->

		<!-- Description Belt -->
		<div class="more-menu">
			<!-- Watching Information -->
			<div class="info">
				<div class="title">{media.title}</div>
				<div class="description">{media.description}</div>
			</div>

			{#if media.type == 'TV Show'}
				<!-- Next Episode Button -->
				<div style='text-align: right'>
					<button on:click={continueWatching}>
						<BoldButton icon='next' text='Next Episode'/>
					</button>
				</div>
			{/if}
		</div>

		<!-- Action Button Belt -->
		<div class="action-buttons horizontal-scroll">
			<button on:click={download}>
				<img src="icons/download.svg" alt="Icon">
				Download
			</button>

			<button on:click={() => toggleStatePref('shuffle')}>
				<img src="icons/shuffle.svg" alt="Icon">
				Shuffle
				<Toggle active={statePref['shuffle']}/>
			</button>

			<button on:click={() => toggleStatePref('autoplay')}>
				<img src="icons/infinity.svg" alt="Icon">
				Autoplay
				<Toggle active={statePref['autoplay']}/>
			</button>
		</div>
	</div>



	<div class="side modules">
		{#if media.type == 'TV Show'}
			<div class="module tv-episode-module">
				<TvModule title={media.title} media={media}/>
			</div>
		{/if}

		<div class="module">
			<MoreToWatchModule title={media.title}/>
		</div>
	</div>

</div>
{/if}

<!--  -->

<style>
	.app{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: 25px;
		column-gap: 25px;
	}
	
	.side.content{
		grid-column: 1 / 3;
	}
	.side.modules{
		grid-column: 3 / 4;
	}

	@media screen and (max-width: 1000px) {
		.app{
			margin: 0;
		}
		.more-menu{
			margin: 0 25px;
		}
		.horizontal-scroll{
			padding-left: 25px;
		}

		.side.content{
			grid-column: 1 / 4;
		}
		.side.modules{
			grid-column: 1 / 4;
			margin: 0 25px;
		}
	}

	.side{
		height: min-content;
		display: grid;
		row-gap: 25px;
		padding-bottom: 25px;
	}

	.module{
		height: min-content;
		overflow: hidden;
		/* background: var(--foreground); */
		box-shadow: var(--neu-rest);
		border-radius: 25px;
		padding: 25px;
	}

	video{
		width: 100%;
		display: block;
		background: black;
	}

	.more-menu{
		display: grid;
		align-items: center;
		grid-template-columns: 1fr 1fr;
		column-gap: 10px;
	}
	.title{
		font-size: 15pt;
		font-weight: 500;
	}
	.description{
		font-size: 13pt;
		font-weight: 400;
		color: gray;
	}

	.action-buttons{
		cursor: default;
	}
	.action-buttons button{
		display: inline-flex;
		align-items: center;
		font-size: 10pt;
		font-weight: 500;
		text-transform: uppercase;
		margin-right: 25px;
		transition: box-shadow 200ms;
	}
	.action-buttons button:hover{
		text-decoration: underline;
		text-decoration-color: var(--accent);
		text-underline-offset: 5px;
	}
	.action-buttons img{
		height: 15pt;
		margin-right: 5px;
	}
</style>