<script>
	import { mediaDB, storage } from '$lib/data'
	import BoldButton from '$lib/components/Bold Button.svelte'

	let media = {}

	// Get Media Information
	if (typeof window !== 'undefined') {
		media.title = storage.get('watching title')
		media.type = mediaDB[media.title]['type']

		// Progress
		media.season_progress = Number(storage.exists(`${media.title} season`) ? storage.get(`${media.title} season`) : 1)
		media.episode_progress = Number(storage.exists(`${media.title} episode`) ? storage.get(`${media.title} episode`) : 0)
		media.watch_progress = Number(storage.exists(`${media.title} progress`) ? storage.get(`${media.title} progress`) : 0)
		
		// Watching
		media.path = media.type == 'TV Show' ? `${media.title}/Season ${media.season_progress}/${mediaDB[media.title]['s' + media.season_progress][media.episode_progress]}.mp4` : `${media.title}.mp4`
		media.description = media.type == 'TV Show' ? `S${media.season_progress}, E${media.episode_progress + 1} - ${mediaDB[media.title]['s' + media.season_progress][media.episode_progress]}` : 'Movie'
		media.isWatching = false
	
		console.log(storage.get('watching title'))

		setInterval(() => {
			storage.set(`${media.title} progress`, document.querySelector('video').currentTime)
		}, 750)
	}

	function nextEpisodePreview() {
		let season = media.season_progress
		let seasonLength = mediaDB[media.title]['s' + media.season_progress].length
		let seasonMax = mediaDB[media.title]['sTotal']
		let episode = media.episode_progress
		let returnString = ''
		if (episode == seasonLength) {
			if (season == seasonMax) {
				returnString = 'Finish Series'
			}
			else {
				returnString = `S${season + 1}, E1 - ${mediaDB[media.title]['s' + season + 1][0]}`
				storage.set(`${media.title} season`, season++)
				storage.set(`${media.title} episode`, 0)
			}
		}
		else {
			storage.set(`${media.title} episode`, episode++)
		}
	}

	function nextEpisode() {
		let season = media.season_progress
		let seasonLength = mediaDB[media.title]['s' + media.season_progress].length
		let seasonMax = mediaDB[media.title]['sTotal']
		let episode = media.episode_progress
		if (episode + 1 == seasonLength) {
			if (season == seasonMax) {
				alert('TV Show Complete!')
				storage.set(`${media.title} season`, 0)
				storage.set(`${media.title} episode`, 0)
				storage.set(`${media.title} completed`, 1)
				window.open('/', '_self')
			}
			else {
				storage.set(`${media.title} season`, season + 1)
				storage.set(`${media.title} episode`, 0)
				window.open('/watch', '_self')
			}
		}
		else {
			storage.set(`${media.title} episode`, episode + 1)
			window.open('/watch', '_self')
		}
	}

	function shuffle() {
		console.log('okk')
	}

	function infinity() {
		console.log('okkk')
	}

	function download() {
		var link = document.createElement("a")
		link.download = `S${media.season_progress}, E${media.episode_progress + 1} - ${mediaDB[media.title]['s' + media.season_progress][media.episode_progress]}.mp4`
		link.href = `http://192.168.1.69:5501/${media.path}`
		link.click()
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
			<video src='http://192.168.1.69:5501/{media.path}' controls autoplay></video>
	
			<div class="more-menu">
				<div class="info">
					<div class="title">{media.title}</div>
					<div class="description">{media.description}</div>
				</div>
	
				<div class="button-belt horizontal-scroll">
					{#if media.type == 'TV Show'}
						<button on:click={nextEpisode}>
							<BoldButton icon='next' text='Next Episode'/>
						</button>
					{/if}
				</div>
			</div>
		</div>
	
		<div class="side modules">
			Hello
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

	.side.content{
		grid-column: 1 / 3;
	}
	.side.modules{
		background: rgb(0, 0, 0, 0.25);
		padding: 15pt;
		border-radius: 15pt;
	}
		
	video{
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

	.button-belt{
		text-align: right;
		width: 100%;
	}
		button{
			all: unset;
			margin-right: 5pt;
		}
</style>