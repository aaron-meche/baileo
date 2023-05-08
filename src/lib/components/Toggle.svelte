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
		margin-left: 5px;
		padding: 2px;
		border-radius: 100vh;
		background: rgb(50, 50, 50);
		border: solid 1px rgb(75, 75, 75);
	}

	.toggle .coin{
		height: 10px;
		width: 10px;
		margin-left: 0;
		margin-right: 15px;
		background: gray;
		border-radius: inherit;
		transition: margin 200ms, background 200ms, width 200ms;
	}

	.toggle.active .coin{
		height: 10px;
		width: 15px;
		margin-left: 10px;
		margin-right: 0;
		background: var(--accent);
	}
</style>