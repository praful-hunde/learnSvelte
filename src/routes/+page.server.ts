
  export async function load() {
    console.log("Running +page.server.ts");
    return {    
        staticText: `
          Each page under /routes/Exercises sub directories is for trying <a href="https://svelte.dev/tutorial/basics">Svelte tutorial</a><br>
          For each page under /routes/Exercises sub-directory a page link is generated, in the sidebar.<br>
          This project is hosted on Vercel at <a href="https://learn-svelte-roan.vercel.app/">https://learn-svelte-roan.vercel.app/</a><br>
          The source code is available <a href="https://github.com/praful-hunde/learnSvelte">https://github.com/praful-hunde/learnSvelte</a> <br> 
          Whenever I get time, I try to follow the tutorial and add a new page for each topic in the /routes/Exercises subdirectory.<br>
          This is a great way to keep all example code and notes in one place.<br><br>
          Of course, I do git commit/push, and Magic Begins!<br> 
          Magically, Vercel detects the push on GitHub, builds the code, and deploys. The site is always updated.<br>
          Did I tell you that CI/CD and hosting do not cost a penny?
        `,      
    };
  }
