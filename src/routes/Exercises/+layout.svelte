<script lang="ts">
/** @type {import('./$types').LayoutData} */
 export let data;

 console.log("data.links")
  console.log(data.links);
  console.log(JSON.stringify(data));
</script>

<div class="wrapper">
	<div id="nav" role="navigation" class="sidebar">
		<ul class="sub-menu">
			{#each data.links as page}
				<li>
					<a href={page}>{page.replace(/\//g, '').replace('Exercises', '')}</a>
				</li>
			{/each}
		</ul>
		
	</div>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.sidebar {
		margin: 0;
		padding: 0;
		width: 15%;
		background-color: #f1f1f1;
		position: fixed;
		height: 100%;
		overflow: auto;
	}

	/* Sidebar links */
	.sidebar a {
		display: block;
		color: black;
		padding: 16px;
		text-decoration: none;
	}

	/* Active/current link */
	/* .sidebar a.active {
		background-color: #04aa6d;
		color: white;
	} */

	/* Links on mouse-over */
	.sidebar a:hover:not(.active) {
		background-color: #555;
		color: white;
	}

	.wrapper {
		display: flex;
	}

	.content {
		padding-left: 16%;
		min-height: 100%;
		height: 100%;
		width:100% ;
		
	}

	.sub-menu li {
    font-size: 1em;
    padding: .25em 1em;
    line-height: 1em;
}
</style>
