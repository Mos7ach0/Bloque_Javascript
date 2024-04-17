// Utilizando un bucle 'for'
function imprimirConFor() {
    console.log("Imprimiendo con bucle 'for':");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// Utilizando un bucle 'while'
function imprimirConWhile() {
    console.log("Imprimiendo con bucle 'while':");
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

// Utilizando un bucle 'do...while'
function imprimirConDoWhile() {
    console.log("Imprimiendo con bucle 'do...while':");
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 10);
}

// Llamamos a cada función para imprimir los números del 1 al 10
imprimirConFor();
imprimirConWhile();
imprimirConDoWhile();
