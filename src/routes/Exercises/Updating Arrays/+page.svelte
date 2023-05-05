<script lang="ts">
	let numbers: number[] = [1, 2, 3, 4];

	function addNumber() {
		// numbers.push( numbers.length + 1);
		// numbers = numbers;

		//Below line is same as above to commented lines. This is ES6 syntax
		numbers = [...numbers, numbers.length + 1];
	}

	//Reactive statement
	$: sum = numbers.reduce((prev, current, index) => prev + current, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>Add number</button>

<p>
	<a href="https://svelte.dev/tutorial/updating-arrays-and-objects">
		Updating Arrays and Objects
	</a>
</p>

<p>A simple rule of thumb: the updated variable must directly appear on the left hand side of the assignment.</p>
