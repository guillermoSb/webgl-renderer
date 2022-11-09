import { mat4, vec3 } from "gl-matrix";


export class SceneObject {
	// To draw a scene object we need
	translation: vec3;
	rotation: vec3;
	scale: vec3;
	vertexData: number[];
	viewMatrix: mat4;
	sceneObjectMatrix: mat4;
	polyCount = 0;

	constructor(translation: vec3, rotation: vec3, scale: vec3, viewMatrix: mat4, vertexData: number[], polyCount: number) {
		this.translation = translation;
		this.rotation = rotation;
		this.scale = scale;
		this.viewMatrix = viewMatrix;
		this.vertexData = vertexData;
		this.polyCount = polyCount;
		this.sceneObjectMatrix = mat4.create();
	}

	public draw(gl: WebGLRenderingContext, program: WebGLProgram, perspectiveMatrix: mat4, lightIntensity: number, lightPosition: vec3,
		drawMode: number) {
		var positionBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			let matrixLocation = gl.getUniformLocation(program, "u_matrix");	// Get the location of the matrix
			let matrix = mat4.clone(perspectiveMatrix);
			mat4.translate(matrix, matrix, this.translation);
			mat4.rotateX(matrix, matrix, this.rotation[0]);
			mat4.rotateY(matrix, matrix, this.rotation[1]);
			mat4.rotateZ(matrix, matrix, this.rotation[2]);
			mat4.scale(matrix, matrix, this.scale);
			const newM = mat4.clone(this.viewMatrix);
			mat4.multiply(newM, matrix, this.viewMatrix);
			// Light intensity
			let lightIntensityLocation = gl.getUniformLocation(program, "u_intensity");
			gl.uniform1f(lightIntensityLocation, lightIntensity);
			// Light position 
			let lightPositionLocation = gl.getUniformLocation(program, "u_lightPosition");
			gl.uniform3fv(lightPositionLocation, lightPosition);
			// Light Position
			// Position
			let positionAttributeLocation = gl.getAttribLocation(program, "a_position");	// Get the location of the position
			this.setFigure(gl, this.vertexData);
			gl.uniformMatrix4fv(matrixLocation, false, newM);
			gl.enableVertexAttribArray(positionAttributeLocation);
			gl.vertexAttribPointer(
				positionAttributeLocation,
				3,
				gl.FLOAT,
				false,
				4 * 8,
				0
			);
			// Texture
			let uvsAttributeLocation = gl.getAttribLocation(program, "a_textcoord");
			gl.enableVertexAttribArray(uvsAttributeLocation);
			gl.vertexAttribPointer(
				uvsAttributeLocation,
				2,
				gl.FLOAT,
				false,
				4 * 8,
				4 * 3
			);
			let vectorAttributeLocation = gl.getAttribLocation(program, "a_normal");
			gl.enableVertexAttribArray(vectorAttributeLocation);
			gl.vertexAttribPointer(
				vectorAttributeLocation,
				3,
				gl.FLOAT,
				false,
				4 * 8,
				4 * 5,
			);
			
			let primitiveType = drawMode;
			gl.drawArrays(primitiveType, 0, this.polyCount * 3);
	}


	public setFigure(gl: WebGLRenderingContext, data: number[]) {
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array(data),
			gl.STATIC_DRAW);
	}
}
export interface Unifrom {
	type: "matrix" | "vec4" | "vec3";
	value: any;
	name: string;
}
export interface AttributeBuffer {
	size: number;
	type: "position" | "colors";
	glType: any;
	normalize: boolean;
	stride: number;
	offset: number;
	name: string;
	value: any;
	primitiveCount: number;
	primitiveOffset: number;

}