<script>
	import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

</script>

<p>This is a src/components/Nested.svelte element</p>
<button on:click={e => { dispatch("message",{ Text:"The message is clear!"})}}>Click Me</button>