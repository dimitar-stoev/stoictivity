<script>
	const data = [
		{
			title: 'Title 1',
			description: 'Description 1'
		},
		{
			title: 'Title 2',
			description: 'Description 2'
		}
	];
</script>

<section>
	<h1>Статии</h1>
	<ul>
		{#each data as item, index}
			<li>
				<h2>{item.title}</h2>
				<p>{item.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		display: unset;
	}
</style>
