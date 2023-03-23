<script>
    export let icon, text

    let source = `icons/${icon}.svg`
</script>

<!--  -->

<div class='button'>
    <img src={source} alt="Icon">
    {text}
</div>

<!--  -->

<style>
	.button{
		display: inline-flex;
		align-items: center;
		font-size: 10pt;
		font-weight: 500;
		text-transform: uppercase;
		transition: box-shadow 200ms;
        padding: 5pt 10pt;
        border-radius: 5pt;
		background: var(--bold-gradient);
	}
	.button:hover{
		text-decoration: underline;
		text-decoration-color: white;
		text-underline-offset: 3pt;
	}
	img{
		height: 15pt;
		margin-right: 5pt;
	}
</style>