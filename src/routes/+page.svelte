<script>
	import { enhance } from '$app/forms';
	import './page.css';
</script>

<section id="home">
	<h1>Нови статии <span>&</span><br /> подобрения</h1>
	<p>Абонирайте се за бюлетина и не пропускайте нова статия</p>

	<form method="post" use:enhance>
		<input type="email" name="email" placeholder="Вашият имейл" required />
		<input type="submit" value="Абонирай се" />
	</form>
</section>
