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
		background: rgb(50 50 50);
	}
	.toggle .coin{
		padding: 5pt;
		border-radius: inherit;
		transition: margin 200ms, background 200ms;
		background: gray;
		margin-left: 0;
		margin-right: 10pt;
	}
	.toggle.active .coin{
		background: var(--accent);
		margin-left: 10pt;
		margin-right: 0;
	}
</style>