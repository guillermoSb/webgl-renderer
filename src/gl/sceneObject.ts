import { mat4, vec3 } from "gl-matrix";


export class SceneObject {
	// To draw a scene object we need
	translation: vec3;
	rotation: vec3;
	scale: vec3;
	vertexData: number[];
	viewMatrix: mat4;
	sceneObjectMatrix: mat4;

	constructor(translation: vec3, rotation: vec3, scale: vec3, viewMatrix: mat4, vertexData: number[]) {
		this.translation = translation;
		this.rotation = rotation;
		this.scale = scale;
		this.viewMatrix = viewMatrix;
		this.vertexData = vertexData;

		this.sceneObjectMatrix = mat4.create();
		mat4.translate(this.sceneObjectMatrix, this.sceneObjectMatrix, this.translation);
		mat4.rotateX(this.sceneObjectMatrix, this.sceneObjectMatrix, this.rotation[0]);
		mat4.rotateY(this.sceneObjectMatrix, this.sceneObjectMatrix, this.rotation[1]);
		mat4.rotateZ(this.sceneObjectMatrix, this.sceneObjectMatrix, this.rotation[2]);
		mat4.scale(this.sceneObjectMatrix, this.sceneObjectMatrix, this.scale);
		mat4.multiply(this.sceneObjectMatrix, this.sceneObjectMatrix, this.viewMatrix);

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