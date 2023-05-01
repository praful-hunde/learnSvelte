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

<p>Svelte generates code to update the DOM, on assignment of count.</p>
