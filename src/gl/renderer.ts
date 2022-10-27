import { Obj } from './obj';
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
	polyCount = 0;

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
		this.initProgram(this.gl);
		const textureLocation = this.gl.getUniformLocation(this.program, "u_texture");
		const texture = gl.createTexture();
		const image = new Image();
		image.src = "model.bmp";
		image.addEventListener("load", () => {
			this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    	this.gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image);
			gl.generateMipmap(gl.TEXTURE_2D);
			this.gl.uniform1i(textureLocation, 0);
		});
	}

	createObj(obj: Obj, translation: vec3, rotation: vec3, scale: vec3) {
		const bufferData: number[] = [];
		for (const face of obj.faces) {
			for (let i = 0; i < 3; i++) {
				// Read the position
				let position = obj.vertices[face[i][0] - 1];
				bufferData.push(position[0]); // Append the positions
				bufferData.push(position[1]); // Append the positions
				bufferData.push(position[2]); // Append the positions
				// Read the texcoords
				let uvs = obj.texRecords[face[i][1] - 1];
				bufferData.push(uvs[0]);
				bufferData.push(uvs[1]);
				// Read the normals
				let normals = obj.normals[face[i][2] - 1];
				bufferData.push(normals[0]);
				bufferData.push(normals[1]);
				bufferData.push(normals[2]);
			}
			this.polyCount += 1;
			if (face.length === 4) {
				this.polyCount += 1;
				for (const i of [0, 2, 3]) {
					// Read the position
					let position = obj.vertices[face[i][0] - 1];
					bufferData.push(...position); // Append the positions
					// Read the texcoords
					let uvs = obj.texRecords[face[i][1] - 1];
					bufferData.push(...uvs);
					// Read the normals
					let normals = obj.normals[face[i][2] - 1];
					bufferData.push(...normals);
				}
			}
		}
		const o: SceneObject = new SceneObject(
			translation,
			rotation,
			scale,
			this.viewMatrix,
			bufferData
		);
		this.sceneObjects.push(o);
	}

	draw(now: number) {
		now *= 0.001;
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
			let matrixLocation = this.gl.getUniformLocation(this.program, "u_matrix");	// Get the location of the matrix
			let matrix = mat4.clone(this.perspectiveMatrix);
			mat4.translate(matrix, matrix, object.translation);
			mat4.rotateX(matrix, matrix, object.rotation[0]);
			mat4.rotateY(matrix, matrix, object.rotation[1]);
			mat4.rotateZ(matrix, matrix, object.rotation[2]);
			mat4.scale(matrix, matrix, object.scale);
			const newM = mat4.clone(this.viewMatrix);
			mat4.multiply(newM, matrix, this.viewMatrix);
			// Position
			let positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position");	// Get the location of the position
			this.setFigure(this.gl, object.vertexData);
			this.gl.uniformMatrix4fv(matrixLocation, false, newM);
			this.gl.enableVertexAttribArray(positionAttributeLocation);
			this.gl.vertexAttribPointer(
				positionAttributeLocation,
				3,
				this.gl.FLOAT,
				false,
				4 * 8,
				0
			);
			// Texture
			let uvsAttributeLocation = this.gl.getAttribLocation(this.program, "a_textcoord");
			this.gl.enableVertexAttribArray(uvsAttributeLocation);
			this.gl.vertexAttribPointer(
				uvsAttributeLocation,
				2,
				this.gl.FLOAT,
				false,
				4 * 8,
				4* 3
			);
			
			let primitiveType = this.gl.TRIANGLES;
			this.gl.drawArrays(primitiveType, 0, this.polyCount * 3);
		}


		this.then = now;
		requestAnimationFrame(t => this.draw(t));
	}

	public initProgram(gl: WebGLRenderingContext) {
		// Get the strings for our GLSL shaders
		const vertexShaderSource = (document.querySelector("#vertex-shader-2d") as HTMLScriptElement).text;
		const fragmentShaderSource = (document.querySelector("#fragment-shader-2d") as HTMLScriptElement).text;
		// create GLSL shaders, upload the GLSL source, compile the shaders
		var vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
		var fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
		// Link the two shaders into a program
		var program = this.createProgram(gl, vertexShader, fragmentShader);
		gl.useProgram(program);
		this.program = program;
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