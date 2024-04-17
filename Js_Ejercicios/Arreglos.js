function gestionarNombres() {
    // Creación del arreglo inicial de nombres
    let nombres = ["Ana", "Carlos", "Marta"];

    // Añadir un nombre nuevo al final del arreglo
    nombres.push("Javier");
    console.log("Arreglo después de añadir un nombre:", nombres);

    // Eliminar un nombre del arreglo (Carlos, en este caso)
    let indiceParaEliminar = nombres.indexOf("Carlos");
    if (indiceParaEliminar !== -1) {
        nombres.splice(indiceParaEliminar, 1);
    } else {
        console.log("Nombre a eliminar no encontrado.");
    }
    console.log("Arreglo después de eliminar un nombre:", nombres);

    // Buscar un nombre específico en el arreglo (Marta)
    let nombreBuscado = "Marta";
    let indiceEncontrado = nombres.indexOf(nombreBuscado);
    if (indiceEncontrado !== -1) {
        console.log(`El nombre '${nombreBuscado}' ha sido encontrado en el índice ${indiceEncontrado}.`);
    } else {
        console.log(`El nombre '${nombreBuscado}' no está en el arreglo.`);
    }
}

// Llamamos a la función para que ejecute las operaciones
gestionarNombres();

function calcularRaicesCuadradas(numeros) {
    // Aplicar el método map para calcular la raíz cuadrada de cada número en el arreglo
    const raicesCuadradas = numeros.map(num => Math.sqrt(num));

    // Mostrar en consola las raíces cuadradas
    console.log(raicesCuadradas);

    // También retornamos el arreglo de raíces cuadradas por si se necesita usar
    return raicesCuadradas;
}

// Arreglo de números para el cual se calcularán las raíces cuadradas
const numeros = [4, 9, 16, 25, 36, 81];

// Llamada a la función
calcularRaicesCuadradas(numeros);


