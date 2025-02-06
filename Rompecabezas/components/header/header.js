function header() {
    let header = document.createElement('header');
    header.className = "item-header";

    let img = document.createElement('img');
    img.src = "https://www.deere.com/assets/images/latinamerica/es/john-deere-for-kids/memoria/johndeere-memoria-01-logo.png";
    img.alt = "logo";
    header.appendChild(img);

    let h1 = document.createElement('h1');
    h1.textContent = "Frutas";
    header.appendChild(h1);

    let nivel1 = document.createElement('div');
    nivel1.className = "nivel-1";
    nivel1.innerText = "Nivel 1"
    header.appendChild(nivel1);

    let nivel2 = document.createElement('div');
    nivel2.className = "nivel-2";
    nivel2.innerHTML = "Nivel 2";
    header.appendChild(nivel2);

    let nivel3 = document.createElement('div');
    nivel3.className = "nivel-3";
    nivel3.innerText = "Nivel 3";
    header.appendChild(nivel3);

    let nivel4 = document.createElement('div');
    nivel4.className = "nivel-4";
    nivel4.innerText = "Nivel 4";
    header.appendChild(nivel4);

    let nivel5 = document.createElement('div');
    nivel5.className = "nivel-5";
    nivel5.innerText = "Nivel 5";
    header.appendChild(nivel5);

    return header;
}

export { header };