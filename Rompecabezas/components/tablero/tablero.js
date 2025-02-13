import { mezclarCartas } from "./data.js";

function item(contenido) {
    let divCarta = document.createElement('div');
    divCarta.className = "carta";

    let frente = document.createElement('div');
    frente.className = "frente";
    frente.textContent = contenido;

    let atras = document.createElement('div');
    atras.className = "atras";
    atras.textContent = "🃏"; 

    let inner = document.createElement('div');
    inner.className = "carta-inner";
    
    inner.appendChild(frente);
    inner.appendChild(atras);
    divCarta.appendChild(inner);

    divCarta.addEventListener("click", () => {
        divCarta.classList.toggle("volteada");
    });

    return divCarta;
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
