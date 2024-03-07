<script>
	import '../app.css';
</script>

<nav>
	<a href="/">Начало</a>
	<a href="/about">За проекта</a>
	<a href="/articles">Статии</a>
</nav>
<slot />

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;

		background: rgba(255, 255, 255, 0.09);
		backdrop-filter: blur(7.8px);
		-webkit-backdrop-filter: blur(7.8px);
		border: 1px solid rgba(255, 255, 255, 0.14);
	}

	a {
		margin-right: 1em;
		color: var(--primary);
		text-decoration: none;
	}
</style>
