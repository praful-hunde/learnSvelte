<script lang="ts">
	import { onDestroy } from 'svelte';

	const emojis: Record<string, string> = 
		{
			apple: '🍎',
			banana: '🍌',
			carrot: '🥕',
			doughnut: '🍩',
			egg: '🥚'
		};
	

	export let name: string;

	const emoji = emojis[name];

	onDestroy(() => {
		console.log('thing destroyed: ' + name);
	});
</script>

<p>
	<span>The emoji for { name } is { emoji }</span>
</p>

<style>
	p {
		margin: 0.8em 0;
	}
	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		text-align: center;
		border-radius: 0.2em;
		background-color: #FFDFD3;
	}
</style>
