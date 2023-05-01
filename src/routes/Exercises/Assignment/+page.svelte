<script>
	let count = 0;

	function incrementCount() {
		return ++count;
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

<p>Svelte generates code to update the DOM, on assignment of count.</p>

<p>Not to self: On revisit to this rout the count is re initialized to zero. There shall be a way to prevent re initialization and catch the page</p>
