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
		padding: 10pt;
		border-radius: 100vh;
        background: var(--accent);
        font-weight: 500;
		cursor: pointer;
        display: inline-flex;
        align-items: center;
	}

    .button:hover{
        opacity: 0.9;
    }

	img{
		height: 15pt;
        margin-right: 5pt;
	}
</style>