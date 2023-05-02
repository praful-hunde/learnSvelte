<h1>Reactive Declaration</h1>


<p>count = {count}</p>
<p>In line double count = {count * 2}</p>
<p>count double = {countDouble}</p>

<button on:click={()=>{++count}}>Increment count</button>


<script lang="ts">
    let count:number = 0 ;
    let countDouble:number = 0;
    
    // Reactive declaration
   $: countDouble = count*2;

// Reactive statement 

$: console.log("Reactive statement " + count);

$: {

    alert('Reactive block ' + count);
}


</script>