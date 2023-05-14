<script lang="ts">
	import { each } from 'svelte/internal';
  
	enum Shape {
	  Circle = 'Circle',
	  Rectangle = 'Rectangle',
	  Triangle = 'Triangle'
	}
  
	interface IShape {
	  shape: Shape;
	  color: string;
	}
  
	const renderShape = (obj: IShape) => {
	  switch (obj.shape) {
		case Shape.Circle:
		  return `
			<svg height="100" width="100">
			  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${obj.color}" />
			</svg>
		  `;
		case Shape.Rectangle:
		  return `
			<svg height="100" width="100">
			  <rect width="100" height="100" stroke="black" stroke-width="3" fill="${obj.color}" />
			</svg>
		  `;
		case Shape.Triangle:
		  return `
			<svg height="110" width="110">
			  <polygon points="50,10 2,100 100,100" stroke="black" stroke-width="3" fill="${obj.color}" />
			</svg>
		  `;
		default:
		  return '';
	  }
	}
  
	let shapes: IShape[] = [
	  { shape: Shape.Circle, color: 'Red' },
	  { shape: Shape.Rectangle, color: 'Blue' },
	  { shape: Shape.Triangle, color: 'Black' }
	];
  </script>
  
  <ul>
	{#each shapes as obj, index}
	  <li>{index+1}. {obj.shape} of color {obj.color}</li>
	  {@html renderShape(obj)}
	{/each}
  </ul>
  