import { AttributeBuffer, SceneObject, Unifrom } from "./sceneObject";
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
	sceneObjects: SceneObject[] = [];
	viewMatrix: mat4;
	perspectiveMatrix: mat4;
	gl: WebGLRenderingContext;
	program: WebGLProgram;

	constructor(width: number, height: number) {
		// Initialize the renderer dimensions
		this.width = width;
		this.height = height;
		this.then = 0;
		var canvas = document.querySelector("#renderer") as HTMLCanvasElement;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		let gl = canvas.getContext("webgl");
		if (!gl) {
			return;
		}
		const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
		const zNear = 0.01;
		const zFar = 2000;
		// Matrix for the camera
		const lookAt = vec3.fromValues(0, 0, 0);
		let cameraMatrix = mat4.create();
		mat4.fromYRotation(cameraMatrix, 0);
		mat4.translate(cameraMatrix, cameraMatrix, vec3.fromValues(0, 0, 0));
		var cameraPosition = vec3.fromValues(
			cameraMatrix[12],
			cameraMatrix[13],
			cameraMatrix[14],
		);
		var up = vec3.fromValues(0, 1, 0);
		mat4.lookAt(cameraMatrix, cameraPosition, lookAt, up);
		let viewMatrix = mat4.create();
		mat4.invert(viewMatrix, cameraMatrix);
		// Matrix for the projection
		let matrix = mat4.create();
		mat4.perspective(matrix, 2 * Math.PI / 3, aspect, zNear, zFar);
		this.viewMatrix = viewMatrix;
		this.perspectiveMatrix = matrix;
		this.gl = gl;
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	}

	createF(translation: vec3, rotation: vec3, scale: vec3) {
		const positionBufferData = [
			// left column front
			0, 0, 0,
			0, 150, 0,
			30, 0, 0,
			0, 150, 0,
			30, 150, 0,
			30, 0, 0,

			// top rung front
			30, 0, 0,
			30, 30, 0,
			100, 0, 0,
			30, 30, 0,
			100, 30, 0,
			100, 0, 0,

			// middle rung front
			30, 60, 0,
			30, 90, 0,
			67, 60, 0,
			30, 90, 0,
			67, 90, 0,
			67, 60, 0,

			// left column back
			0, 0, 30,
			30, 0, 30,
			0, 150, 30,
			0, 150, 30,
			30, 0, 30,
			30, 150, 30,

			// top rung back
			30, 0, 30,
			100, 0, 30,
			30, 30, 30,
			30, 30, 30,
			100, 0, 30,
			100, 30, 30,

			// middle rung back
			30, 60, 30,
			67, 60, 30,
			30, 90, 30,
			30, 90, 30,
			67, 60, 30,
			67, 90, 30,

			// top
			0, 0, 0,
			100, 0, 0,
			100, 0, 30,
			0, 0, 0,
			100, 0, 30,
			0, 0, 30,

			// top rung right
			100, 0, 0,
			100, 30, 0,
			100, 30, 30,
			100, 0, 0,
			100, 30, 30,
			100, 0, 30,

			// under top rung
			30, 30, 0,
			30, 30, 30,
			100, 30, 30,
			30, 30, 0,
			100, 30, 30,
			100, 30, 0,

			// between top rung and middle
			30, 30, 0,
			30, 60, 30,
			30, 30, 30,
			30, 30, 0,
			30, 60, 0,
			30, 60, 30,

			// top of middle rung
			30, 60, 0,
			67, 60, 30,
			30, 60, 30,
			30, 60, 0,
			67, 60, 0,
			67, 60, 30,

			// right of middle rung
			67, 60, 0,
			67, 90, 30,
			67, 60, 30,
			67, 60, 0,
			67, 90, 0,
			67, 90, 30,

			// bottom of middle rung.
			30, 90, 0,
			30, 90, 30,
			67, 90, 30,
			30, 90, 0,
			67, 90, 30,
			67, 90, 0,

			// right of bottom
			30, 90, 0,
			30, 150, 30,
			30, 90, 30,
			30, 90, 0,
			30, 150, 0,
			30, 150, 30,

			// bottom
			0, 150, 0,
			0, 150, 30,
			30, 150, 30,
			0, 150, 0,
			30, 150, 30,
			30, 150, 0,

			// left side
			0, 0, 0,
			0, 0, 30,
			0, 150, 30,
			0, 0, 0,
			0, 150, 30,
			0, 150, 0
		];
		const o: SceneObject = new SceneObject(
			translation,
			rotation,
			scale,
			this.viewMatrix,
			positionBufferData
		);
		this.sceneObjects.push(o);

	}

	draw(now: number) {
		now *= 0.001;
		const program = this.initProgram(this.gl);	// Init WebGl Program
		let deltaTime = now - this.then;
		this.gl.enable(this.gl.CULL_FACE);	// Do not draw back facing triangles
		this.gl.enable(this.gl.DEPTH_TEST);	// Enable depth buffer
		this.gl.clearColor(0, 0, 0, 1);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);	// Clear depth buffer
		// draw
		for (const object of this.sceneObjects) {
			object.rotation[1] += 1 * deltaTime;
			var positionBuffer = this.gl.createBuffer();
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
			let matrixLocation = this.gl.getUniformLocation(program, "u_matrix");	// Get the location of the matrix
			let matrix = mat4.clone(this.perspectiveMatrix);
			mat4.translate(matrix, matrix, object.translation);
			mat4.rotateX(matrix, matrix, object.rotation[0]);
			mat4.rotateY(matrix, matrix, object.rotation[1]);
			mat4.rotateZ(matrix, matrix, object.rotation[2]);
			mat4.scale(matrix, matrix, vec3.fromValues(1, 1, 1));
			const newM = mat4.clone(this.viewMatrix);
			mat4.multiply(newM, matrix, this.viewMatrix);
			let positionAttributeLocation = this.gl.getAttribLocation(program, "a_position");	// Get the location of the position
			this.setFigure(this.gl, object.vertexData);
			this.gl.uniformMatrix4fv(matrixLocation, false, newM);
			this.gl.enableVertexAttribArray(positionAttributeLocation);
			var size = 3;          // 2 components per iteration
			var type = this.gl.FLOAT;   // the data is 32bit floats
			var normalize = false; // don't normalize the data
			var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
			var offset = 0;        // start at the beginning of the buffer
			this.gl.vertexAttribPointer(
				positionAttributeLocation, size, type, normalize, stride, offset);

			let colorBuffer = this.gl.createBuffer();
			let colorAttributeLocation = this.gl.getAttribLocation(program, "a_color");	// Get the location of the position
			this.gl.enableVertexAttribArray(colorAttributeLocation);
			this.gl.bindBuffer(this.gl.ARRAY_BUFFER, colorBuffer);
			size = 3;                 // 3 components per iteration
			type = this.gl.UNSIGNED_BYTE;  // the data is 8bit unsigned values
			normalize = true;         // normalize the data (convert from 0-255 to 0-1)
			stride = 0;               // 0 = move forward size * sizeof(type) each iteration to get the next position
			offset = 0;               // start at the beginning of the buffer
			this.setColors(this.gl);

			this.gl.vertexAttribPointer(
				colorAttributeLocation, 3, this.gl.UNSIGNED_BYTE, true, 0, 0);

			var count = 16 * 6;
			var primitiveType = this.gl.TRIANGLES;
			this.gl.drawArrays(primitiveType, 0, count);
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

	public createShader(gl: any, type: any, source: any) {
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
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,

				// top rung front
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,

				// middle rung front
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,
				200, 70, 120,

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


	public setFigure(gl: WebGLRenderingContext, data: number[]) {
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(data),
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