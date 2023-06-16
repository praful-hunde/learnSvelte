<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/Exercises">Exercises</a></li>
	</ul>
</nav>
<slot />

<script>
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });
</script>