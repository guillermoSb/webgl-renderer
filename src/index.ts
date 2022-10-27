import { Obj } from './gl/obj';
import { vec3 } from 'gl-matrix';
/* eslint no-console:0 consistent-return:0 */
import "./style.css";

import Renderer from "./gl/renderer";


(async () => { 
	const obj = await  Obj.fromFile("face.obj");
	const r = new Renderer(1, 1);
	// r.createF(vec3.fromValues(0, 0, -400),vec3.fromValues(Math.PI, 0, 0),vec3.fromValues(0.1, 0.1, 0.1));
	// r.createF(vec3.fromValues(200, 0, -400),vec3.fromValues(Math.PI/2, 0, 0),vec3.fromValues(0.1, 0.1, 0.1));
	r.createObj(obj, vec3.fromValues(0, 0, -20),vec3.fromValues(0, 0, 0),vec3.fromValues(10,10,10));
	requestAnimationFrame(t => r.draw(t));
})();



