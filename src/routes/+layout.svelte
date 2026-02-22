<script>
	import '$lib/main.css';
	import favicon from '$lib/assets/icon.png';
	import { resolve } from '$app/paths';
	import { db } from '$lib/data'
	let { children } = $props();

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Baileo - Home</title>
	<script src="https://kit.fontawesome.com/5cf062dc93.js" crossorigin="anonymous"></script>
</svelte:head>

<div class="navbar">
	<div class="left">
		<button>
			<div class="fa-solid fa-bars"></div>
		</button>
		<a href={resolve("/")} class="logo">baileo</a>
	</div>
	<div class="right">
		<button>
			<div class="fa-solid fa-user"></div>
		</button>
	</div>
</div>

<div class="page">
	{@render children()}
</div>

<style>
	.navbar{
		display: grid;
		grid-template-columns: auto min-content;
		position: sticky;
		top: 0;
		background: linear-gradient(to top right, var(--l1), var(--l05));
		padding: 0.5rem 1rem;
	}

	.navbar * {
		display: inline-block;
	}

	.navbar .logo{
		margin-left: 0.5rem;
		cursor: pointer;
	}

	.navbar button{
		height: 2.5rem;
		width: 2.5rem;
		cursor: pointer;
		text-align: center;
		border-radius: 0.5rem;
	}

	.navbar button:hover{
		background: var(--l2);
		outline: solid 1pt var(--l4);
	}
</style>