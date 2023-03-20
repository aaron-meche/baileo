<script>
	import { storage } from '$lib/data'
	import MediaSection from '$lib/components/Media Section.svelte'
</script>

<!--  -->

<svelte:head>
	<title>Home</title>
</svelte:head>

<!--  -->

<MediaSection title='Comedies' query='cat' condition='comedy'/>
<MediaSection title='Animations' query='cat' condition='animation'/>
<MediaSection title='Dramas' query='cat' condition='drama'/>
<MediaSection title='Marvel' query='cat' condition='marvel'/>
<MediaSection title='Christmas' query='cat' condition='christmas'/>
<MediaSection title='TV Shows' query='type' condition='TV Show'/>
<MediaSection title='Movies' query='type' condition='Movie'/>

<!--  -->

<style>
	
</style>