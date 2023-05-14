<script lang="ts">
	import Thing from '../../../components/Thing.svelte';

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	const handleClick = () => {
	 things =	things.slice(1);
	};
</script>

<button on:click={handleClick}> Remove item</button>

{#each things as thing (thing.id)}
	<Thing name={thing.name} />
{/each}
