import { Obj } from "./gl/obj";
import { vec3 } from "gl-matrix";
/* eslint no-console:0 consistent-return:0 */
import "./style.css";

import Renderer from "./gl/renderer";


(async () => { 
	const obj = await  Obj.fromFile("face.obj");
	const r = new Renderer(1, 1);

	r.createObj(obj, vec3.fromValues(0, 0, 0), vec3.fromValues(0, 0, 0), vec3.fromValues(2, 2, 1));
	
	const toonShaderButton = document.getElementById("toonShader");
	const wavyShaderButton = document.getElementById("wavyShader");
	const lineShaderButton = document.getElementById("lineShader");
	const noiseShaderButton = document.getElementById("noiseShader");
	
	toonShaderButton.addEventListener("click", () => {
		r.initProgram("toonVertexShader", "toonFragmentShader");
	});
	
	wavyShaderButton.addEventListener("click", () => {
		r.initProgram("wavyVertexShader", "phongFragmentShader");
	});

	lineShaderButton.addEventListener("click", () => {
		r.initProgram("toonVertexShader", "lineFragmentShader");
	});

	noiseShaderButton.addEventListener("click", () => {
		r.initProgram("toonVertexShader", "noiseShaderFragmentShader");
	});
	requestAnimationFrame(t => r.draw(t));

})();	




