<script lang="ts" >
	import { onMount } from 'svelte';
	let count: number = 0;
	onMount(() => {
		count = 0;
	});

	
	function incrementCount() {

		//alert("Clicked!S")
		return ++count ;

	}
</script>

<script lang="ts" context="module">
  async function load({params:any}) {
	  console.log("On load")
	}

</script>

<button on:click={incrementCount}>
	Click Me -> Clicked = {count}
	{count === 1 ? 'time' : 'times'}
</button>

<button on:click={incrementCount}>
	Click Me -> Clicked = {count}
	{count === 1 ? 'time' : 'times'}
</button>

<p>Svelte compiler generates code to update the DOM.<br> When count value is assigned the DOM is updated.<br>
	This happens by code injected during compilation which I guess override assignment operation of count variable.</p>

<p>
	Note to self: On revisit to this route the count is re initialized to zero. There shall be a way to
	prevent re initialization and catch the page.

	 EXAMPLE Links
	<a href="https://stackoverflow.com/questions/58153729/restart-or-re-init-component-in-svelte">using key</a>
	AND
	<a href="https://stackoverflow.com/questions/70506426/how-to-persist-layout-state-between-pages-in-sveltekit">Store</a>
</p>
