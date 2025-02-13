import { cargarCartas } from "./components/tablero/tablero.js";
import { header } from "./components/header/header.js";

let DOM = document.querySelector('#root');

let contenedor = document.createElement('div');
contenedor.className = "contenedor";

let div_header = document.createElement('div');
div_header.className = "div-header";
contenedor.appendChild(div_header);
div_header.appendChild(header());

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

//envento para cada una de las cartas
let cargarLasCartasDOM = document.querySelectorAll('.div-item');
console.log(cargarLasCartasDOM);
cargarLasCartasDOM.forEach(cadaCarta => {

    cadaCarta.addEventListener("click" ,()=>{
        cadaCarta.classList.add("marcado");
    });
});