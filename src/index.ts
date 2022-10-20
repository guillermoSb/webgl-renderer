const canvas: HTMLCanvasElement = document.getElementById("renderer") as HTMLCanvasElement;

// Configure the canvas
canvas.width = 1024;
canvas.height = 768;

const gl = canvas.getContext("webgl");	// Create the WebGl Context

if (!gl) {
	alert("WebGl is not available");
}


