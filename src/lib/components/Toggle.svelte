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
		height: 8pt;
		width: 8pt;
		margin-left: 0;
		margin-right: 13pt;
		border-radius: inherit;
		transition: margin 200ms, background 200ms, width 200ms;
		background: gray;
	}
	.toggle.active .coin{
		height: 8pt;
		width: 13pt;
		margin-left: 8pt;
		margin-right: 0;
		background: var(--accent);
	}
</style>