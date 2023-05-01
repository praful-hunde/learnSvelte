<h1>Dynamic Attributes</h1>

<img src={src} alt="A robot" height="321" width="254" title="{src}">
<img {src} alt="A robot" height="321" width="254" title="{src}">  <!--This is short hand to above-->
<!-- <img src={src2} alt="A robot" height="321" width="254" title="{src2}">
<img src="../src/lib/images/robo.PNG" alt="A robot" height="321" width="254" title="../src/lib/images/robo.PNG"> -->

<div>
    <h1>My Learnings</h1>
    <ol>
        <li> This is about setting the attribute</li>
        <li> The value of an attribute can be set directly, like path for src attribute of image.</li>
        <li> OR can be set in a variable and variable can be used to set attribute value.</li>
        <li> Short Hand: If attribute name and variable name is same there is a short hand.</li>
        <li> If images folder is added under, static folder then the path must omit the static from the path.</li>
        <li>Note that the path to static assets in your HTML should start with a leading slash / to indicate that it is an absolute path relative to the root of the web server. This ensures that the browser can always find the file regardless of the current URL path.</li>
        <li> This may save some time <a href="https://github.com/bluwy/svelte-preprocess-import-assets"> link</a></li>
        <li> Thought: Dynamic Component Template <a href="https://stackoverflow.com/questions/56431848/dynamically-loading-component-using-import-or-fetch?noredirect=1&lq=1"> link</a></li>
    </ol>
</div>



<script lang="ts">
    let src = "/images/robo.PNG"; //The static is omitted from path
    let src2 = "../src/lib/images/robo.PNG";
</script>

<style>
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }
    
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;
    
      /* Position the tooltip */
      position: absolute;
      z-index: 1;
    }
    
    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
    .size_of_img{
    width:90px}
    </style>