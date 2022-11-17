import { Obj } from "./obj";
import { SceneObject } from "./sceneObject";
import { mat4, vec3 } from "gl-matrix";

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
	activeTexture: string;
	viewMatrix: mat4;
	perspectiveMatrix: mat4;
	gl: WebGLRenderingContext;
	program: WebGLProgram;
	polyCount = 0;
	drawMode: number;
	camPosition = vec3.fromValues(0, 0, 4);
	camRotation = vec3.fromValues(0, 0, 0);
	targetPosition = vec3.fromValues(0, 0, 0);
	zoomLevel = 5;
	delta = 0;
	lightIntensity = 1.5;
	lightPosition = vec3.fromValues(0, 0, 100);
	imageLoaded = false;
	prevMouseX: number;
	prevMouseY: number;
	mouseMode = 0;

	constructor(width: number, height: number, t: string) {
		// Initialize the renderer dimensions
		this.width = width;
		this.height = height;
		this.then = 0;
		var canvas = document.querySelector("#renderer") as HTMLCanvasElement;
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		let gl = canvas.getContext("webgl");
		if (!gl) {
			alert("No webgl support available");
			return;
		}
		const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
		const zNear = 0.001;
		const zFar = 2000;
		// Matrix for the camera
		this.computeCameraMatrix(vec3.fromValues(0,0,0));
		// Matrix for the projection
		let matrix = mat4.create();
		mat4.perspective(matrix, 2 * Math.PI / 3, aspect, zNear, zFar);
		this.perspectiveMatrix = matrix;
		this.gl = gl;
		this.initProgram("toonVertexShader", "toonFragmentShader");
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
		this.drawMode = this.gl.TRIANGLES;
		const textureLocation = this.gl.getUniformLocation(this.program, "u_texture");
		const texture = gl.createTexture();
		const image = new Image();
		image.src = t;
		image.addEventListener("load", () => {
			this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    	this.gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, image);
			gl.generateMipmap(gl.TEXTURE_2D);
			this.gl.uniform1i(textureLocation, 0);
			this.imageLoaded = true;
		});

		document.onkeydown = (e) => {
			const { key } = e;
			e.preventDefault();
			switch (key) {
				case "1":
					this.drawMode = this.gl.TRIANGLES;	// Draw mode to triangles
					break;
				case "2":
					this.drawMode = this.gl.POINTS;	// Draw mode to triangles
					break;
				case "3":
					this.drawMode = this.gl.LINES;	// Draw mode to triangles
					break;
				case "z":
					if (this.zoomLevel > 0) {
						this.computeCameraMatrix(vec3.fromValues(0, 0, -0.5));
						this.zoomLevel -= 1;
					}
					break;
				case "x":
					if (this.zoomLevel < 10) {
						this.computeCameraMatrix(vec3.fromValues(0, 0, 0.5));
						this.zoomLevel += 1;
					}	
					break;
				case "m":
					const audio: HTMLAudioElement = document.getElementById('audio') as HTMLAudioElement;
					audio.muted = !audio.muted;
					break;
				case "w":
					this.targetPosition[1] += 4 * this.delta;
					this.computeCameraMatrix(vec3.fromValues(0, 4 * this.delta, 0));
					break;
				case "s":
					this.targetPosition[1] -= 4 * this.delta;
					this.computeCameraMatrix(vec3.fromValues(0, -4 * this.delta, 0));
					break;
				case "d":
					vec3.rotateY(this.lightPosition, this.lightPosition, vec3.fromValues(0, 0, 0), 4 * this.delta);
					break;
				case "a":
					vec3.rotateY(this.lightPosition, this.lightPosition, vec3.fromValues(0, 0, 0), -4 * this.delta);
					break;
				case "ArrowRight":
					this.camRotation[1] -= 4 * this.delta;
					this.computeCameraMatrix(vec3.create());
					break;
				case "ArrowLeft":
					this.camRotation[1] += 4 * this.delta;
					this.computeCameraMatrix(vec3.create());
					break;
				case "ArrowUp":
					this.camRotation[0] -= 4 * this.delta;
					this.computeCameraMatrix(vec3.create());
					break;
				case "ArrowDown":
					this.camRotation[0] += 4 * this.delta;
					this.computeCameraMatrix(vec3.create());
					break;
				default:
					break;
			}
		};

		document.getElementById("renderer").onclick = () => {
			this.mouseMode++;
			const mouseText = document.getElementById("mouse-mode");
		
			if (this.mouseMode === 1) {
				mouseText.innerHTML = "Mouse Mode: Rotate X";
			}
			if (this.mouseMode === 2) {
				mouseText.innerHTML = "Mouse Mode: Rotate Y";
			}
			if (this.mouseMode == 3) {
				mouseText.innerHTML = "Mouse Mode: OFF (Click To Switch)";
				this.mouseMode = 0;
			}
		};

		document.onmousemove = (event) => {
			if (!this.mouseMode) {
				return;
			}
		
			
			if (event.pageY > 60) {
				if (event.pageX > this.prevMouseX  && this.mouseMode == 1) {
					this.camRotation[1] += 4 * this.delta;
				} else if (event.pageX < this.prevMouseX && this.mouseMode == 1) {
					this.camRotation[1] -= 4 * this.delta;
				} else if (event.pageY > this.prevMouseY && this.mouseMode == 2) {
					this.targetPosition[1] += 4 * this.delta;
					this.computeCameraMatrix(vec3.fromValues(0, 4 * this.delta, 0));
				} else if (event.pageY < this.prevMouseY && this.mouseMode == 2) {
					this.targetPosition[1] -= 4 * this.delta;
					this.computeCameraMatrix(vec3.fromValues(0, -4 * this.delta, 0));
				}
		
				this.prevMouseX = event.pageX;
				this.prevMouseY = event.pageY;
			}
		};
		

		document.onwheel = (e: WheelEvent) => {
		
				if (e.deltaY > 0) {
					this.computeCameraMatrix(vec3.fromValues(0, 0, -1 * this.delta));
				} else if (e.deltaY < 0) {
					this.computeCameraMatrix(vec3.fromValues(0, 0, 1 * this.delta));
				}
			
		};
	}

	computeCameraMatrix(translation: vec3) {
		let cameraMatrix = mat4.create();
		mat4.translate(cameraMatrix, cameraMatrix, this.camPosition);
		mat4.translate(cameraMatrix, cameraMatrix, translation);
		let newCamPosition = vec3.fromValues(
      cameraMatrix[12],
      cameraMatrix[13],
      cameraMatrix[14],
		);
	
		if (newCamPosition[2] <= 0 || newCamPosition[2] >= 5) {
			return;
		}
		this.camPosition = newCamPosition;
		mat4.lookAt(cameraMatrix, newCamPosition,this.targetPosition, vec3.fromValues(0, 1, 0));
		mat4.rotateX(cameraMatrix, cameraMatrix, this.camRotation[0]);
		mat4.rotateY(cameraMatrix, cameraMatrix, this.camRotation[1]);
		this.viewMatrix = cameraMatrix;
		for (const object of this.sceneObjects) {
			object.viewMatrix = mat4.clone(this.viewMatrix);
		}
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
			mat4.clone(this.viewMatrix),
			bufferData,
			this.polyCount
		);
		this.sceneObjects.push(o);
	}

	draw(now: number) {
		if (this.imageLoaded) {
			now *= 0.001;
			this.delta = now - this.then;
			this.gl.enable(this.gl.CULL_FACE);	// Do not draw back facing triangles
			this.gl.enable(this.gl.DEPTH_TEST);	// Enable depth buffer
			this.gl.clearColor(0, 0, 0, 0.9);
			this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);	// Clear depth buffer
			this.computeCameraMatrix(vec3.create());
			let timeUniformLocation = this.gl.getUniformLocation(this.program, "u_time");
			this.gl.uniform1f(timeUniformLocation, now);
			// draw
			for (const object of this.sceneObjects) {
				object.draw(this.gl, this.program, mat4.clone(this.perspectiveMatrix), this.lightIntensity, this.lightPosition, this.drawMode);
			}
			this.then = now;
		}
		requestAnimationFrame(t => this.draw(t));
	}

	public initProgram(vertexShaderName: string, fragmentShaderName: string) {
		// Get the strings for our GLSL shaders
		const vertexShaderSource = (document.querySelector(`#${vertexShaderName}`) as HTMLScriptElement).text;
		const fragmentShaderSource = (document.querySelector(`#${fragmentShaderName}`) as HTMLScriptElement).text;
		// create GLSL shaders, upload the GLSL source, compile the shaders
		const vertexShader =  this.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderSource);
		const fragmentShader = this.createShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderSource);
		// Link the two shaders into a program
		var program = this.createProgram(this.gl, vertexShader, fragmentShader);
		this.gl.useProgram(program);
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
