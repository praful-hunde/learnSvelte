export const prerender = true;
export const csr = false;

import { browser } from '$app/environment'; 
import { getPages } from '$lib/getPagesUtil';


let pages :string[] = [];

console.log("IsBrowser = ",browser);

const { url } = import.meta;
const modules = import.meta.glob('./**/*.svelte',{ eager: true }); // Include subfolder
//const modules = import.meta.glob('./**.svelte'); // Current folder only

console.log("url = ",url);
console.log("modules = ", modules);

 pages = getPages(url, modules)
            .map((str) => str.replace(/\+page$/, ''))
            .filter((item) => item !== '/Exercises/');

            console.log("pages",pages);

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    return {
        links: pages,
    };
}