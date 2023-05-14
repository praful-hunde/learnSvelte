<script>
	let user = { loggedIn: true };

	function toggleLoggedIn() {
		user.loggedIn = !user.loggedIn;
	}

	let x = 7;
</script>

{#if user.loggedIn}
	<button on:click={toggleLoggedIn}>Log out</button>
{/if}
{#if !user.loggedIn}
	<button on:click={toggleLoggedIn}>Log in</button>
{/if}

{#if user.loggedIn}
	<button on:click={toggleLoggedIn}>Log out </button>
{:else}
	<button on:click={toggleLoggedIn}>Log in with :else block</button>
{/if}
{#if user.loggedIn}
	<button on:click={toggleLoggedIn}>Log out </button>
{:else if !user.loggedIn}
	<button on:click={toggleLoggedIn}>Log in with :else if block</button>
{/if}

<button on:click={() => (x += 1)}>+</button>
<button on:click={() => (x -= 1)}>-</button>

{#if x > 10}
	<p>x is greater than 10</p>
{:else if 5 > x}
	<p>x is less than 5</p>
{:else}
	<p>x is between 5 AND 10.</p>
{/if}
