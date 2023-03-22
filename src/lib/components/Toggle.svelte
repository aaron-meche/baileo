<script>
    export let active
</script>

<!--  -->

<div class="toggle {active == 'true' ? 'active' : ''}">
    <div class="coin"></div>
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
		padding: 4pt;
		border-radius: inherit;
		transition: margin 200ms, background 200ms, padding 200ms;
		background: gray;
		margin-left: 0;
		margin-right: 12pt;
	}
	.toggle.active .coin{
		padding: 4pt 6pt;
		background: var(--accent);
		margin-left: 8pt;
		margin-right: 0;
	}
</style>