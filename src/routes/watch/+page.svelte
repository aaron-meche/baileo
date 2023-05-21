<script>
	import { 
		mediaDB, 
		media_controls,
		serverTypeConversion,
		storage
	} from '$lib/assets/main'

	import TvModule from '$lib/modules/TV-Panel.svelte'
	import MoreToWatchModule from '$lib/modules/More-to-Watch.svelte'
	import BoldButton from '$lib/trinkets/Bold-Button.svelte'
	import Toggle from '$lib/trinkets/Toggle.svelte'
    import VideoPlayer from '$lib/components/Video-Player.svelte'

	let media = {}

	// Get Media Information
	if (typeof window !== 'undefined') {
		media.title = storage.get('watching title')
		media.type = mediaDB[media.title]['type']

		if (storage.exists(`${media.title} progress`)) {
			media.progress = Number(storage.get(`${media.title} progress`))

			if (media.type == 'TV Show') {
				media.season = Number(storage.get(`${media.title} season`))
				media.episode = Number(storage.get(`${media.title} episode`))
			}
		}
		else {
			media.progress = 0
			storage.set(`${media.title} progress`, 0)

			if (media.type == 'TV Show') {
				media.season = 1
				storage.set(`${media.title} season`, 1)
	
				media.episode = 1
				storage.set(`${media.title} episode`, 1)
			}
		}

		let interval = setInterval(() => { // Load progress
			if (document.querySelector('video').readyState == 4) {
				document.querySelector('video').currentTime = media.progress * document.querySelector('video').duration
				clearInterval(interval)
			}
		}, 250)

		// Media Path + Descriptions
		if (media.type == 'TV Show') {
			media.episodeTitle = mediaDB[media.title]['s' + media.season][media.episode - 1]
			media.episodeDisplayTitle = serverTypeConversion(mediaDB[media.title]['s' + media.season][media.episode - 1])
			
			media.path = `${media.title}/Season ${media.season}/${media.episodeTitle}.mp4`
			media.description = `S${media.season}, E${media.episode} - ${media.episodeDisplayTitle}`
		}
		else {
			media.path = `${media.title}.mp4`
			media.description = 'Movie'
		}

		// Keep saving progress...
		setInterval(() => {
			if (document.querySelector('video').readyState == 4) {
				let currentTime = document.querySelector('video').currentTime
				let maxTime = document.querySelector('video').duration
				storage.set(`${media.title} progress`, currentTime / maxTime)

				if ((currentTime > (maxTime - storage.get('autoplay buffer'))) && (storage.get('autoplay') == 'true')) {
					continueWatching()
				}
			}
		}, 750)
	}

	let statePref = {}

	function createStatePref(title) {
		statePref[title] = storage.get(title)
	}

	createStatePref('shuffle')
	createStatePref('autoplay')
	createStatePref('autoplay buffer')

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

	const actions = {
		continueWatching: function() {
			if (media.type == 'TV Show') {
				if (statePref['shuffle'] == 'true') actions.nextShuffleEpisode()
				else actions.nextEpisode()
			}
			else window.open('/', '_self')
		},
		nextEpisode: function() {
			let seasonLength = mediaDB[media.title]['s' + media.season].length
			let seasonMax = mediaDB[media.title]['sTotal']
			storage.set(`${media.title} progress`, '0')

			if (media.episode == seasonLength) {
				if (media.season == seasonMax) {
					actions.markAsWatched()
				}
				else {
					storage.set(`${media.title} season`, Number(media.season) + 1)
					storage.set(`${media.title} episode`, '1')
					storage.confirm(`${media.title} progress`, '0', () => {
						window.location.reload()
					})
					window.location.reload()
				}
			}
			else {
				storage.set(`${media.title} episode`, Number(media.episode) + 1)
				storage.confirm(`${media.title} progress`, '0', () => {
					window.location.reload()
				})
			}
		},
		nextShuffleEpisode: function() {
			let randomSeason = Math.floor(Math.random() * mediaDB[media.title]['sTotal']) + 1
			let randomEpisode = Math.floor(Math.random() * mediaDB[media.title]['s' + randomSeason].length) + 1
			storage.set(`${media.title} season`, randomSeason)
			storage.set(`${media.title} episode`, randomEpisode)
			storage.set(`${media.title} progress`, '0')
			storage.confirm(`${media.title} progress`, '0', () => {
				window.location.reload()
			})
		},
		download: function() {
			var link = document.createElement("a")
			link.download = media.description
			link.href = `https://209.163.185.11/videos/${media.path}`
			link.click()
		},
		markAsWatched: function() {
			storage.delete(media.title + ' progress')
			storage.delete(media.title + ' season')
			storage.delete(media.title + ' episode')
			window.open('/', '_self')
		}
	}
</script>

<!--  -->

<svelte:head>
	{#if media.type == 'TV Show'}
		<title>{media.episodeDisplayTitle}</title>
	{:else}
		<title>{media.title}</title>
	{/if}
</svelte:head>

<!--  -->

{#if typeof window !== 'undefined'}
<div class="app">

	<div class="side content">
		<div class="video-wrapper">
			<!-- {#if storage.get('is touch screen') == 'true'} -->
				<!-- svelte-ignore a11y-media-has-caption -->
				<video src='https://209.163.185.11/videos/{media.path}' controls autoplay></video>
			<!-- {:else} -->
				<!-- <VideoPlayer source='https://209.163.185.11/videos/{media.path}'/> -->
			<!-- {/if} -->
		</div>

		<!-- Description Belt -->
		<div class="more-menu">
			<!-- Watching Information -->
			<div class="info">
				<div class="title">{media.title}</div>
				<div class="description">{media.description}</div>
			</div>

			{#if media.type == 'TV Show'}
				<!-- Next Episode Button -->
				<div style='text-align: right;'>
					<button on:click={actions.continueWatching}>
						<BoldButton icon='next' text='Next Episode'/>
					</button>
				</div>
			{/if}
		</div>

		<!-- Action Button Belt -->
		<div class="action-buttons horizontal-scroll">
			<button on:click={actions.download}>
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

			<button on:click={actions.markAsWatched}>
				<img src="icons/complete.svg" alt="Icon">
				Mark as Complete
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
		grid-template-columns: 2fr 1fr;
		gap: 20px;
		padding: 20px;
	}

	.side{
		height: fit-content;
	}

	.side.content{
		display: grid;
		row-gap: 20px;
	}

	.side.modules{
		display: grid;
		row-gap: 20px;
	}

	@media screen and (max-width: 1000px) {
		.app{
			grid-template-columns: 1fr;
		}
	}

	.module{
		/* background: var(--fg); */
		border: solid 5px var(--fg);
		border-radius: 10px;
		padding: 20px;
	}

	.video-wrapper{
		position: relative;
		height: fit-content;
		border-radius: 10px;
		overflow: hidden;
	}

	video{
		width: 100%;
		display: block;
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
		font-size: 12pt;
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
		margin-right: 30px;
	}

	.action-buttons button:hover{
		color: var(--accent);
	}

	.action-buttons img{
		height: 20px;
		margin-right: 5px;
	}
</style>