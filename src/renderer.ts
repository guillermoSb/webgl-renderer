import { mat3, vec2 } from "gl-matrix";

/**
 * Defines the structure of a Renderer
 */
export default class Renderer {
	// Dimensions for the renderer
	width: number;
	height: number;


	constructor(width: number, height: number) {
		// Initialize the renderer dimensions
		this.width = width;
		this.height = height;
	}

	draw() {
		// Get A WebGL context
		var canvas = document.querySelector("#renderer") as HTMLCanvasElement;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		let gl = canvas.getContext("webgl");
		if (!gl) {
			return;
		}
		const program = this.initProgram(gl);	// Init WebGl Program

		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		
		// Setup attributes and uniforms
		let positionAttributeLocation = gl.getAttribLocation(program, "a_position");
		let resolutionLocation = gl.getUniformLocation(program, "u_resolution");
		let matrixLocation = gl.getUniformLocation(program, "u_matrix");
		// Create a buffer and put three 2d clip space points in it
		var positionBuffer = gl.createBuffer();
		// Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.enableVertexAttribArray(positionAttributeLocation);
	
		this.setFigure(gl);
		let matrix = mat3.create();
		mat3.translate(matrix, matrix, vec2.fromValues(100, 100));
		mat3.rotate(matrix, matrix, Math.PI / 7);
		mat3.scale(matrix, matrix, vec2.fromValues(1, 1));
		

		// Clear the canvas
		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);


		// Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
		var size = 2;          // 2 components per iteration
		var type = gl.FLOAT;   // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
		var offset = 0;        // start at the beginning of the buffer
		gl.vertexAttribPointer(
			positionAttributeLocation, size, type, normalize, stride, offset);
		gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
		gl.uniformMatrix3fv(matrixLocation, false, matrix);

		// draw
		var primitiveType = gl.TRIANGLES;
		var offset = 0;
		var count = 18;
		gl.drawArrays(primitiveType, offset, count);
	}

	public initProgram(gl: WebGLRenderingContext): WebGLProgram {
		// Get the strings for our GLSL shaders
		const vertexShaderSource = (document.querySelector("#vertex-shader-2d") as HTMLScriptElement).text;
		const fragmentShaderSource = (document.querySelector("#fragment-shader-2d") as HTMLScriptElement).text;
		// create GLSL shaders, upload the GLSL source, compile the shaders
		var vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
		var fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
		// Link the two shaders into a program
		var program = this.createProgram(gl, vertexShader, fragmentShader);
		gl.useProgram(program);
		return program;
	}

	public  createShader(gl: any, type: any, source: any) {
		var shader = gl.createShader(type);
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
		if (success) {
			return shader;
		}

		console.error(gl.getShaderInfoLog(shader));
		gl.deleteShader(shader);
	}


	public setFigure(gl: WebGLRenderingContext) {
  gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
          // left column
          0, 0,
          30, 0,
          0, 150,
          0, 150,
          30, 0,
          30, 150,
 
          // top rung
          30, 0,
          100, 0,
          30, 30,
          30, 30,
          100, 0,
          100, 30,
 
          // middle rung
          30, 60,
          67, 60,
          30, 90,
          30, 90,
          67, 60,
          67, 90,
      ]),
      gl.STATIC_DRAW);
	}
	
	public createProgram(gl: any, vertexShader: any, fragmentShader: any) {
		var program = gl.createProgram();
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);
		var success = gl.getProgramParameter(program, gl.LINK_STATUS);
		if (success) {
			return program;
		}

		console.error(gl.getProgramInfoLog(program));
		gl.deleteProgram(program);
	}


}