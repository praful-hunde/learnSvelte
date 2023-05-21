<h3>This is a SvelteKit project created for learning Svelte by following official tutorial.</h3>

<p style="margin-left: 20px">
    Each page under /routes/Exercises sub directories is for trying <a href="https://svelte.dev/tutorial/basics">Svelte tutorial</a><br>
    For each page under /routes/Exercises sub-directory a page link is generated, in sidebar.<br>
    This project is hosted on Vercel at <a href="https://learn-svelte-roan.vercel.app/">https://learn-svelte-roan.vercel.app/</a><br>

    The source code is available <a href="https://github.com/praful-hunde/learnSvelte">https://github.com/praful-hunde/learnSvelte</a> <br> 

    Whenever I get time, I try to follow tutorial and add new page for each topic in /routes/Exercises sub directory.<br>
    This is a great way to keep all examples code and notes in one place.<br><br>
    Of course I do git commit/push , and Magic Begins!<br> 
    Magically Vercel detects the push on github, build the code and deploy. Site is alway updated.<br>
    Did I tell CI/CD and hosting did not cost a penny? 
  </p>
  
 
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    console.log("Root Page rendered!");
    onMount(()=>{console.log("Root page Mounted")});
    onDestroy(()=>{console.log("Root page Destroyed")})
</script>