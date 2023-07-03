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

	let media = {}

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
			// verify_serverConnection()
			load_watchProgress()
		    update_watchProgress()
			manage_watchSyncInfo()
		})
	}
</script>

<!--  -->

{#if typeof window !== 'undefined'}

<div class="top-bar">
	<h1>{media.title}</h1>
	{#if media.type == 'TV Show'}
		<h3>{media.description}</h3>
	{/if}
</div>

<div class="video-wrapper">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video src={media.path} controls autoplay></video>
</div>

<div class="lateral-grid horizontal-scroll">
	{#if media.type == 'TV Show'}
		<button clickable class="standard-button" on:click={media_controls.next_episode(media)}>
			<img icon src="icons/next.svg" alt="Icon">
			Next Episode
		</button>

		<button clickable class="standard-button" on:click={media_controls.random_episode(media.title)}>
			<img icon src="icons/shuffle.svg" alt="Icon">
			Random Episode
		</button>
	{/if}

	<button clickable class="standard-button" on:click={media_controls.download(media)}>
		<img icon src="icons/download.svg" alt="Icon">
		Download
	</button>

	<button clickable class="standard-button" on:click={media_controls.remove_from_library(media.title)}>
		<img icon src="icons/trash.svg" alt="Icon">
		Remove from Library
	</button>
</div>

{/if}

<!--  -->

<style>
	.video-wrapper{
		margin: 0 4vw;
		border-radius: 10px;
		overflow: hidden;
	}

	video{
		height: 100%;
		max-height: 70vh;
		width: 100%;
		display: block;
	}

	.lateral-grid{
		gap: 10px;
		padding: 0 4vw;
	}

	.horizontal-scroll{
		width: fit-content;
		padding: 20px 4vw;
	}
</style>