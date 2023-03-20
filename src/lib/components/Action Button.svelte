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
		padding: 5pt;
		border-radius: 100vh;
		background: rgb(50 50 50);
	}
	.toggle .coin{
		padding: 5pt;
		border-radius: inherit;
		transition: margin 300ms, background 300ms;
		background: gray;
		margin-left: 0;
		margin-right: 15pt;
	}
	.toggle.active .coin{
		background: var(--accent);
		margin-left: 15pt;
		margin-right: 0;
	}
</style>