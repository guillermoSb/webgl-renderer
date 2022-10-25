import { mat3, mat4, vec2, vec3 } from "gl-matrix";

/**
 * Defines the structure of a Renderer
 */
export default class Renderer {
	// Dimensions for the renderer
	width: number;
	height: number;
	then: number;
	rotation: vec3;

	constructor(width: number, height: number) {
		// Initialize the renderer dimensions
		this.width = width;
		this.height = height;
		this.then = 0;
		this.rotation = vec3.fromValues(Math.PI,0,0);
	}

	draw(now: number) {
		now *= 0.001;
		let deltaTime = now - this.then;
		// this.rotation[0] += 1 * deltaTime;
		this.rotation[1] += 1 * deltaTime;
		// Get A WebGL context
		var canvas = document.querySelector("#renderer") as HTMLCanvasElement;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		let gl = canvas.getContext("webgl");
		if (!gl) {
			return;
		}
		const program = this.initProgram(gl);	// Init WebGl Program
		gl.enable(gl.CULL_FACE);	// Do not draw back facing triangles
		gl.enable(gl.DEPTH_TEST);	// Enable depth buffer
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);	// Clear depth buffer


		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		
		// Setup attributes and uniforms
		let colorLocation = gl.getAttribLocation(program, "a_color");
		let positionAttributeLocation = gl.getAttribLocation(program, "a_position");
		let resolutionLocation = gl.getUniformLocation(program, "u_resolution");
		let matrixLocation = gl.getUniformLocation(program, "u_matrix");
		// Create a buffer and put three 2d clip space points in it
		var positionBuffer = gl.createBuffer();
		let colorBuffer = gl.createBuffer();
		// Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		this.setFigure(gl);
		const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
		const zNear = 0.01;
		const zFar = 2000;

		// Matrix for the camera
		const fPosition = vec3.fromValues(200, 0, 0);
		let cameraMatrix = mat4.create();
		mat4.fromYRotation(cameraMatrix, this.rotation[1] );
		mat4.translate(cameraMatrix, cameraMatrix, vec3.fromValues(0, 0, 200 * 1.5));
		var cameraPosition = vec3.fromValues(
			cameraMatrix[12],
			cameraMatrix[13],
			cameraMatrix[14],
		);
		var up = vec3.fromValues(0, 1, 0);
		mat4.lookAt(cameraMatrix, cameraPosition, fPosition, up);
		let viewMatrix = mat4.create();
		mat4.invert(viewMatrix, cameraMatrix);
		// Matrix for the projection
		let matrix = mat4.create();
		mat4.perspective(matrix, 2 * Math.PI/3, aspect, zNear, zFar);
		mat4.translate(matrix, matrix, vec3.fromValues(0, 0, -200));
		mat4.rotateX(matrix, matrix, Math.PI);
		mat4.rotateY(matrix, matrix, 0);
		mat4.rotateZ(matrix, matrix, 0);
		mat4.scale(matrix, matrix, vec3.fromValues(0.5, 0.5, 0.5));
		// Matrix for the view projection
		let viewProjectionMatrix = mat4.create();
		mat4.multiply(viewProjectionMatrix, matrix, viewMatrix);

		// Clear the canvas
		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		
		gl.enableVertexAttribArray(positionAttributeLocation);
		var size = 3;          // 2 components per iteration
		var type = gl.FLOAT;   // the data is 32bit floats
		var normalize = false; // don't normalize the data
		var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
		var offset = 0;        // start at the beginning of the buffer
		gl.vertexAttribPointer(
			positionAttributeLocation, size, type, normalize, stride, offset);
		gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height);
		
		gl.enableVertexAttribArray(colorLocation);
		gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
		this.setColors(gl);
		gl.vertexAttribPointer(
    colorLocation, 3, gl.UNSIGNED_BYTE, true, 0,0);

		// draw
		for (let i = 0; i < 5; i++) {
			const radius = 200;
			const angle = i * Math.PI * 2 / 5;
			var x = Math.cos(angle) * radius;
			var y = Math.sin(angle) * radius;
			let mat = mat4.translate(viewProjectionMatrix,viewProjectionMatrix, vec3.fromValues(x,0,y));
  		// Set the matrix.
  		gl.uniformMatrix4fv(matrixLocation, false, mat);
			var primitiveType = gl.TRIANGLES;
			var offset = 0;
			var count = 16 * 6;
			gl.drawArrays(primitiveType, offset, count);
		}
		this.then = now;
		requestAnimationFrame(t => this.draw(t));
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

	public setColors(gl: WebGLRenderingContext) {
  gl.bufferData(
      gl.ARRAY_BUFFER,
      new Uint8Array([
          // left column front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // top rung front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // middle rung front
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,
        200,  70, 120,

          // left column back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // top rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // middle rung back
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,
        80, 70, 200,

          // top
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,
        70, 200, 210,

          // top rung right
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,
        200, 200, 70,

          // under top rung
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,
        210, 100, 70,

          // between top rung and middle
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,
        210, 160, 70,

          // top of middle rung
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,
        70, 180, 210,

          // right of middle rung
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,
        100, 70, 210,

          // bottom of middle rung.
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,
        76, 210, 100,

          // right of bottom
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,
        140, 210, 80,

          // bottom
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,
        90, 130, 110,

          // left side
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220,
        160, 160, 220]),
      gl.STATIC_DRAW);
}


	public setFigure(gl: WebGLRenderingContext) {
  gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        	0,   0,  0,
          0, 150,  0,
          30,   0,  0,
          0, 150,  0,
          30, 150,  0,
          30,   0,  0,

          // top rung front
          30,   0,  0,
          30,  30,  0,
          100,   0,  0,
          30,  30,  0,
          100,  30,  0,
          100,   0,  0,

          // middle rung front
          30,  60,  0,
          30,  90,  0,
          67,  60,  0,
          30,  90,  0,
          67,  90,  0,
          67,  60,  0,

          // left column back
            0,   0,  30,
           30,   0,  30,
            0, 150,  30,
            0, 150,  30,
           30,   0,  30,
           30, 150,  30,

          // top rung back
           30,   0,  30,
          100,   0,  30,
           30,  30,  30,
           30,  30,  30,
          100,   0,  30,
          100,  30,  30,

          // middle rung back
           30,  60,  30,
           67,  60,  30,
           30,  90,  30,
           30,  90,  30,
           67,  60,  30,
           67,  90,  30,

          // top
            0,   0,   0,
          100,   0,   0,
          100,   0,  30,
            0,   0,   0,
          100,   0,  30,
            0,   0,  30,

          // top rung right
          100,   0,   0,
          100,  30,   0,
          100,  30,  30,
          100,   0,   0,
          100,  30,  30,
          100,   0,  30,

          // under top rung
          30,   30,   0,
          30,   30,  30,
          100,  30,  30,
          30,   30,   0,
          100,  30,  30,
          100,  30,   0,

          // between top rung and middle
          30,   30,   0,
          30,   60,  30,
          30,   30,  30,
          30,   30,   0,
          30,   60,   0,
          30,   60,  30,

          // top of middle rung
          30,   60,   0,
          67,   60,  30,
          30,   60,  30,
          30,   60,   0,
          67,   60,   0,
          67,   60,  30,

          // right of middle rung
          67,   60,   0,
          67,   90,  30,
          67,   60,  30,
          67,   60,   0,
          67,   90,   0,
          67,   90,  30,

          // bottom of middle rung.
          30,   90,   0,
          30,   90,  30,
          67,   90,  30,
          30,   90,   0,
          67,   90,  30,
          67,   90,   0,

          // right of bottom
          30,   90,   0,
          30,  150,  30,
          30,   90,  30,
          30,   90,   0,
          30,  150,   0,
          30,  150,  30,

          // bottom
          0,   150,   0,
          0,   150,  30,
          30,  150,  30,
          0,   150,   0,
          30,  150,  30,
          30,  150,   0,

          // left side
          0,   0,   0,
          0,   0,  30,
          0, 150,  30,
          0,   0,   0,
          0, 150,  30,
          0, 150,   0
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