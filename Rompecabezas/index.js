import { cargarCartas } from "./components/tablero/tablero.js";

let DOM = document.querySelector('#root');

let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let header = document.createElement('div');
header.className = "div-header";
contenedor.appendChild(header);

let progreso = document.createElement('div');
progreso.className = "div-progreso";
contenedor.appendChild(progreso);

let tablero = document.createElement('div');
tablero.className = "div-tablero"
contenedor.appendChild(tablero);
tablero.appendChild(cargarCartas());

let footer = document.createElement('div');
footer.className = "div-footer";
contenedor.appendChild(footer);


DOM.appendChild(contenedor);