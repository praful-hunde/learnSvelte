<h3>This is a SvelteKit project created for learning Svelte by following official tutorial.</h3>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<script lang="ts">
  export const prerender = true;
  export const csr = false;
  /** @type {import('./$types').PageData} */
  export let data:any;
	import { onDestroy, onMount } from "svelte";
    console.log("Root Page rendered!");
    onMount(()=>{console.log("Root page Mounted")});
    onDestroy(()=>{console.log("Root page Destroyed")})
</script>



<main>
  {@html data.staticText || ''}
</main> 