/**
 * Returns absolute paths to pages included in the modules
 * 
 * @param url - import.meta.url
 * @param modules - import.meta.glob();
 * @returns Paths to pages excluding routes with dynamic parameters
 */
export const getPages = (url: string, modules: Record<string, unknown>): string[] => {
    /*
     * Possible url values
     * Server: file:///____/src/routes/index.svelte
     * Client(dev): http://127.0.0.1:____/src/routes/index.svelte?t=1658306082278
     * Client(preview): http://127.0.0.1:____/_app/immutable/pages/index.svelte-e7ea94ef.js
    http://127.0.0.1:4173/_app/immutable/nodes/2.8b9b85dd.js
     */

    console.log("Inside getPages")
    const directory = url
      .replace(/.*\/(.*?)\+layout\.svelte\.(\w+)\.js/, "/$1/")
      .replace(/(.*?)\/src\/routes\//, '/')
      .replace(/(.*?)\/immutable\/pages\//, '/')
      .replace(/(.*?)\/immutable\/entry\//, '/')
      .replace(/(.*?)\/immutable\/nodes\//, '/')
      .replace(/(.*?)\/var\/task\//, '/')      
      .replace(/(.*?)\/entries\/pages\//, '/')
      .replace('+layout.server.ts', '')
      .replace('_layout.server.ts.js', '') 
			.replace(/\/([^/])*.svelte.*/, '/')
      
      
     
      console.log("directory = ",directory);

      console.log(Object.keys(modules));
    const excludedEntries = ['./+layout.svelte', './+page.svelte'];

    const paths = Object.keys(modules)
    .filter(entry => !excludedEntries.includes(entry))
      // Convert relative path to absolute path
      .map((path) => path.replace(/^(.\/)/, directory))
      // Filter private modules (default regular expression in SvelteKit)
      .filter((path) => !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(path))
      // Filter paths with dynamic parameters (e.g. /blog/[slug].svelte)
      .filter((path) => !/\[.*\]/.test(path))
      // Remove '/index', layout name (@___), and file extension (.svelte)
      .map((path) => path.replace(/(\/index)?(@.*)?.svelte/, ''))
      // Set empty path string to '/' ('./index.svelte' is converted to '')
      .map((path) => path || '/')     //.sort();    
      
    return paths;
  };