<script lang="ts">
    import Nested from "../../../components/Nested.svelte";
let mousePosition = { x:0,y:0}
let m = mousePosition;
function onMouseMoveHandler(event)
{
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
}

</script>

<div on:mousemove={onMouseMoveHandler}>
 The mouse position is {mousePosition.x } X {mousePosition.y}
</div>

<!-- <div on:mousemove|self|capture={e =>  m = {x:e.clientX,y:e.clientY}}>
    The mouse position is {m.x } X {m.y}
   </div> -->
   <Nested on:message = {e => { alert(e.detail.Text)}}></Nested>

<style>
	div { 
        width: 100%; 
        height: 400px;
        border: 2px outset red;
        background-color: rgb(173, 216, 230);    
        text-align: center; 
    }
    
</style>