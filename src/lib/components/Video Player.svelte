<script>
    export let source
</script>

<!--  -->

<div class="player">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class='{statePref['glow'] == 'true' ? 'glow' : ''}' src={source} controls autoplay></video>
</div>

<!--  -->

<style>
	.toggle{
		margin-left: 5pt;
		padding: 2pt;
		border-radius: 100vh;
		background: rgb(50 50 60);
	}
	.toggle .coin{
		height: 7.5pt;
		width: 7.5pt;
		margin-left: 0;
		margin-right: 12.5pt;
		border-radius: inherit;
		transition: margin 200ms, background 200ms, width 200ms;
		background: rgb(120 120 130);
	}
	.toggle.active .coin{
		height: 7.5pt;
		width: 12.5pt;
		margin-left: 7.5pt;
		margin-right: 0;
		background: var(--accent);
	}
</style>