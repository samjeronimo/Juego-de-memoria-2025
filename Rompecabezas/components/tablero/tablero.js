import { mezclarCartas } from "./data.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "div-item";  
    div.textContent = contenido;
    return div;
}

function cargarCartas() {
    let div = document.createElement('div');
    div.className = "tablero-div"; 

    let todas_las_cartas = mezclarCartas();

    todas_las_cartas.forEach(carta => {
        div.appendChild(item(carta));
    });

    return div;  
}

export { cargarCartas };  
