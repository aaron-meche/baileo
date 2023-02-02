<script>
	import {
		media_info
	} from '../data'

	let media_titles = Object.keys(media_info)
</script>

<!--  -->

<svelte:head>
	<title>Baileo - Home</title>
	<meta name="description" content="Baileo V.Omega"/>
</svelte:head>

<section>
    <h1>All Media</h1>
	<div class="list">
		{#each media_titles as title}
			<div class="item">
				<span class="title">{title.replaceAll('_', ' ')}</span>
				<span class="type">{media_info[title]['mediaType'].replace('tv', 'TV Series').replace('movie', 'Movie')}</span>
			</div>
		{/each}
	</div>
</section>

<!--  -->

<style>
	.list{
		outline: solid 1pt gray;
		padding: 10pt;
		margin: 25pt;
	}

	.list .item{
		background: rgb(25 25 25);
		padding: 10pt;
		margin: 5pt;
	}

	.list .item:hover{
		background: rgb(40 40 40);
	}

	.list .item .type{
		color: gray;
		font-weight: 300;
	}
</style>