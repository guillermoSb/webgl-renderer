import { mat2d, mat4 } from "gl-matrix";
import * as fs from "fs";

export class Obj {
	vertices: number[][];
	texRecords: number[][];
	normals: number[][];
	faces: number[][][];
	
	private constructor(vertices: number[][], normals: number[][], texRecords: number[][],
		faces: number[][][]) {
		this.vertices = vertices;
		this.texRecords = texRecords;
		this.normals = normals;
		this.faces = faces;
	}


	public static async fromFile(fileName: string): Promise<Obj> {
		const response = await fetch(fileName);
		if (!response) {
			throw new Error("Could not load obj file");
		}
		let vertices: number[][] = [];
		let normals: number[][] = [];
		let texRecords: number[][] = [];
		let faces: number[][][] = [];

		const text = await response.text();
		const lines = text.split("\n");
		for (const line of lines) {
			if (line.length === 0) continue;
			const prefix = line.split(" ")[0];
			const value = line.split(prefix)[1].trim();
			switch (prefix) {
				case "v":
					vertices.push(value.split(" ").map(v => parseFloat(v)));
					break;
				case "vt":
					texRecords.push(value.split(" ").map(v => parseFloat(v)));
					break;
				case "vn":
					normals.push(value.split(" ").map(v => parseFloat(v)));
					break;
				case "f":
					let face: number[][] = [];
					for (const vert of value.split(" ")) {
						face.push(vert.split("/").map(v => parseFloat(v)));
					}
					faces.push(face);
					break;
				default:
					break;
			}
		}
		const obj = new Obj(vertices, normals, texRecords, faces);
		return obj;
	}

}