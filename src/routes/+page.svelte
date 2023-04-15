<script>
	import { storage } from '$lib/main'
	import MediaSection from '$lib/components/Media Section.svelte'
	import ContinueSection from '$lib/components/Continue Section.svelte'
</script>

<!--  -->

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--  -->

<div class="media-selection-pool">
	<!-- <ContinueSection/> -->
	<MediaSection title='Comedies' query='cat' condition='comedy'/>
	<MediaSection title='Animations' query='cat' condition='animation'/>
	<MediaSection title='Dramas' query='cat' condition='drama'/>
	<MediaSection title='Marvel' query='cat' condition='marvel'/>
	<MediaSection title='Romantic Comedies' query='cat' condition='romcom'/>
	<MediaSection title='Christmas' query='cat' condition='christmas'/>
	<MediaSection title='TV Shows' query='type' condition='TV Show'/>
	<MediaSection title='Movies' query='type' condition='Movie'/>
</div>

<!--  -->

<style>
</style>