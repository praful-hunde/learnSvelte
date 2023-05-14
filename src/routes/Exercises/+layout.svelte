<script lang="ts">
	 import { browser } from '$app/environment'; 
	import { getPages } from '$lib/getPagesUtil';

	let pages :string[] = [];
	
	if(browser)
	{

	const { url } = import.meta;
	const modules = import.meta.glob('./**/*.svelte',{ eager: true }); // Include subfolder
	//const modules = import.meta.glob('./**.svelte'); // Current folder only

	console.log("url = ",url);
	console.log("modules = ", modules);

	 pages = getPages(url, modules)
                .map((str) => str.replace(/\+page$/, ''))
                .filter((item) => item !== '/Exercises/');

				console.log("pages",pages);

				pages[0] = '/Exercises/Adding%20data/test';
	}
</script>

<div class="wrapper">
	<div id="nav" role="navigation" class="sidebar">
		<ul>
			{#if browser}
			{#each pages as page}
				<li>
					<a href={page}>{page.replace(/\//g, '').replace('Exercises', '')}</a>
				</li>
			{/each}
			{/if}
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
		width: 200px;
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
		flex: 1;
		padding-left: 210px;
	}
</style>
