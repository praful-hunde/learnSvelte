<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="ts">
	import { onDestroy, onMount } from "svelte";
    console.log("Root Page rendered!");
    onMount(()=>{console.log("Root page Mounted")});
    onDestroy(()=>{console.log("Root page Destroyed")})
</script>