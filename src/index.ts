import { Obj } from "./gl/obj";
import { vec3 } from "gl-matrix";
/* eslint no-console:0 consistent-return:0 */
import "./style.css";

import Renderer from "./gl/renderer";


(async () => { 
	
	const url = new URL(window.location.href);
	const searchModel = url.searchParams.get("model") || null;
	const modelSelect: HTMLSelectElement = document.getElementById("modelSelect") as HTMLSelectElement;
	modelSelect.value = searchModel;
	const obj = await Obj.fromFile(`${searchModel}.obj`);
	const transformations = [];
	let activeTexture = "";
	if (searchModel === "face") {
		activeTexture = "model.bmp";
		transformations.push(vec3.fromValues(0, 0, 0), vec3.fromValues(0, 0, 0), vec3.fromValues(1, 1, 1));
	} else if (searchModel === "cat2") {
		activeTexture = "cat.jpg";
		transformations.push(vec3.fromValues(0, 0,0), vec3.fromValues(0, 0, 0), vec3.fromValues(0.05, 0.05, 0.05));
	} else if (searchModel === "temple") {
		activeTexture = "temple.png";
		transformations.push(vec3.fromValues(0, 0,-0.2), vec3.fromValues(0, 0, 0), vec3.fromValues(0.01,0.01,0.01));
	} else if (searchModel === "lantern") {
		activeTexture = "lantern.jpg";
		transformations.push(vec3.fromValues(0, 0,-1), vec3.fromValues(0, 0, 0), vec3.fromValues(0.01,0.01,0.01));
	}else if (searchModel === "fish") {
		activeTexture = "fish.jpg";
		transformations.push(vec3.fromValues(0, 0, -10), vec3.fromValues(0, 0, 0), vec3.fromValues(0.4,0.4,0.4));
	} else if (searchModel === "baloon") {
		activeTexture = "baloon.jpg";
		transformations.push(vec3.fromValues(0, 0, -2), vec3.fromValues(0, 0, 0), vec3.fromValues(0.4,0.4,0.4));
	} 
	
	const r = new Renderer(1, 1, activeTexture);
	r.createObj(obj, transformations[0], transformations[1], transformations[2]);

	
	const toonShaderButton = document.getElementById("toonShader");
	const wavyShaderButton = document.getElementById("wavyShader");
	const lineShaderButton = document.getElementById("lineShader");
	const noiseShaderButton = document.getElementById("noiseShader");


	modelSelect.addEventListener("change", () => {
		const url = new URL(window.location.href);
		url.searchParams.set("model", modelSelect.value);
		location.replace(url.href);
	});
	
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




