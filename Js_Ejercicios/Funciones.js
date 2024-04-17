function Add(a,b,c){
    console.log(a+b+c)
  }
  
function multiplication(x,y,z){
    return x*y*z
  }
  
suma(2,3,4)
  
let resultado = multiplication(2,2,2)
  console.log(resultado)

  
function verificarVocales(x){
    const esVocal = /^[aeiou]$/i.test/(x);
  
    if(esVocal){
      console.log("Es una vocal")
    }
    else{
      console.log("No es Vocal")
    }
}


function esString(x, y, z) {
    // Verifica si cada argumento es de tipo string
    const resultado = typeof x === 'string' && typeof y === 'string' && typeof z === 'string';

    // Muestra el resultado en la consola
    console.log(resultado);
}

// Pruebas de la función
esString("hola", "mundo", "prueba"); // Debería mostrar true en la consola
esString("123", "456", 789); // Debería mostrar false, porque el tercer argumento no es una cadena
esString("apple", "banana", "cherry"); // Debería mostrar true en la consola




  
