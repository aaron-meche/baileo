<script>
	import { 
		db,
		mediaDB, 
		media_controls,
		serverTypeConversion,
		storage
	} from '$lib/assets/main'

	import TvModule from '$lib/modules/TV-Panel.svelte'
	import MoreToWatchModule from '$lib/modules/More-to-Watch.svelte'


	let media = {
		title: "Loading...",
	}


	// Once, check database for saved progress
	const find_watchProgress = (user) => {
		if (user?.library?.[media.title]?.progress >= 0) {
			media.progress = user.library[media.title].progress

			if (media.type == 'TV Show') {
				media.season = user.library[media.title].season
				media.episode = user.library[media.title].episode
			}
		}
		else {
			let library_path = 'users/' + storage.read('username') + '/library'
			let write_collection = []
			
			media.progress = 0
			write_collection.push([`${library_path}/${media.title}/progress`, 0])

			if (media.type == 'TV Show') {
				media.season = 0
				write_collection.push([`${library_path}/${media.title}/season`, 0])

				media.episode = 0
				write_collection.push([`${library_path}/${media.title}/episode`, 0])
			}

			db.writeAll(write_collection)
		}
	}


	// Once, calculate media path
	const find_mediaPath = () => {
		if (media.type == 'TV Show') { 
			media.path = `https://209.163.185.11/videos/${media.title}/Season ${media.season + 1}/${mediaDB[media.title].seasons[media.season][media.episode]}.mp4`
			media.caption_path = `https://209.163.185.11/captions/${media.title}/Season ${media.season + 1}/${mediaDB[media.title].seasons[media.season][media.episode]}.srt`
		} 
		else {
			media.path = `https://209.163.185.11/videos/${media.title}.mp4`
			media.caption_path = `https://209.163.185.11/captions/${media.title}.srt`
		}
	}


	// Once, get media description of TV Show
	const find_mediaDescription = () => {
		if (media.type == 'TV Show') {
			media.description = `S${media.season + 1}, E${media.episode + 1} - ${serverTypeConversion(mediaDB[media.title].seasons[media.season][media.episode])}`
		}
	}


	// Timeout, check if server is connected
	const verify_serverConnection = () => {
		setTimeout(() => {
			if (document.querySelector('video').readyState == 0) {
				let accept_transfer = confirm('Server connection error!\nYou must permit your browser to read data from the file server.')
				if (accept_transfer) {
					window.open('https://209.163.185.11/', '_self')
				}
			}
		}, 5000);
	}


	// Once, change time of video to progress time
	const load_watchProgress = () => {
		const video = document.querySelector('video')

		video.addEventListener('durationchange', () => {
			video.currentTime = media.progress * video.duration
		})
	}


	// Interval, continuously update database with watch progress
	const update_watchProgress = () => {
		const video = document.querySelector('video')
		
		setInterval(() => {
			if (video.duration > 0) {
				db.write(
					`users/${storage.read('username')}/library/${media.title}/progress`,
					video.currentTime / video.duration
				)
			}
		}, 500);
	}

	// const manage_watchSyncInfo = () => {
	// 	db.read(`users/${storage.read('username')}/library/${media.title}/sync`, (data) => {

	// 	})
	// }
	

	// Welcoming function
	if (typeof window !== 'undefined') {
		window.addEventListener('keydown', (e) => {
			const video = document.querySelector('video')
			
			if (e.code == 'ArrowLeft') {
				video.currentTime = video.currentTime - 10
			}
			
			if (e.code == 'ArrowRight') {
				video.currentTime = video.currentTime + 10
			}
		})

		if (!storage.exists('username')) window.open('/', '_self')

		db.read('users/' + storage.read('username'), (user) => {
			media.title = user['watching']
			media.type = mediaDB[media.title]['type']
			media.category = mediaDB[media.title]['cat']
		
			find_watchProgress(user)
			find_mediaPath()
			find_mediaDescription()
			verify_serverConnection()
			load_watchProgress()
		    update_watchProgress()
			manage_watchSyncInfo()
		})
	}
</script>

<!--  -->

<svelte:head>
	<title>{media.title}</title>
</svelte:head>

<!--  -->

{#if typeof window !== 'undefined'}
<div class="app">

	<div class="side content">
		<div class="video-wrapper">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video src={media.path} controls autoplay></video>
		</div>

		<div class="info">
			<div class="title">{media.title}</div>

			{#if media.type == 'TV Show'}
				<div class="description">{media.description}</div>
			{/if}
		</div>

		<div class="action-buttons horizontal-scroll">
			{#if media.type == 'TV Show'}
				<button on:click={media_controls.next_episode(media)}>
					<img src="icons/next.svg" alt="Icon">
					Next Episode
				</button>
			{/if}

			<button on:click={media_controls.download(media)}>
				<img src="icons/download.svg" alt="Icon">
				Download
			</button>

			{#if media.type == 'TV Show'}
				<button on:click={media_controls.random_episode(media.title)}>
					<img src="icons/shuffle.svg" alt="Icon">
					Random Episode
				</button>
			{/if}

			<button on:click={media_controls.remove_from_library(media.title)}>
				<img src="icons/trash.svg" alt="Icon">
				Remove from Library
			</button>
		</div>
	</div>



	<div class="side modules">
		{#if media.type == 'TV Show'}
			<div class="module">
				<TvModule media={media}/>
			</div>
		{/if}

		<!-- <div class="module"> -->
			<!-- <MoreToWatchModule title={media.title}/> -->
		<!-- </div> -->
	</div>

</div>
{/if}

<!--  -->

<style>
	.app{
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 15px;
		padding: 15px;
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

	@media screen and (orientation: portrait) {
		.app{
			grid-template-columns: 1fr;
		}
	}

	.module{
		border: solid 2px var(--fg);
		border-radius: 5px;
		padding: 20px;
	}

	.video-wrapper{
		height: fit-content;
		border-radius: 5px;
		overflow: hidden;
	}

	video{
		width: 100%;
		display: block;
	}

	.title{
		font-size: 15pt;
		font-weight: 600;
	}
	
	.description{
		font-size: 12pt;
		font-weight: 500;
		color: gray;
	}

	.action-buttons{
		cursor: default;
	}
	
	.action-buttons button{
		display: inline-flex;
		align-items: center;
		padding: 10px;
		margin-right: 20px;
		font-size: 10pt;
		font-weight: 500;
		border-radius: 5px;
		border: solid 2px var(--fg);
	}

	.action-buttons button:hover{
		border-color: var(--e-fg);
		background: var(--fg);
	}

	.action-buttons img{
		height: 15px;
		margin-right: 10px;
	}
</style>