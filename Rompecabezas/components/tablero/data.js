function mezclarCartas() {
    let carta_par_1 = ['🍇', '🍉', '🍋', '🍎', '🥝', '🍒', '🍑', '🍍'];
    let carta_par_2 = ['🍇', '🍉', '🍋', '🍎', '🥝', '🍒', '🍑', '🍍'];
    let cartas = carta_par_1.concat(carta_par_2);  

    cartas.sort(() => Math.random() - 0.5);

    return cartas; 
}

export { mezclarCartas };
