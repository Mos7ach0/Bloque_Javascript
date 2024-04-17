function compareNumbers() {
    var num1 = parseInt(prompt("Ingrese el primer número:"))
    var num2 = parseInt(prompt("Ingrese el segundo número:"))
      
      if (num1 === num2) {
          console.log("Los números son iguales");
      } else if (num1 > num2) {
          console.log("El primer número es mayor");
      } else {
          console.log("El segundo número es mayor");
      }
  }  

function evaluarLogicos() {
    // Definimos dos variables, una con el valor true y otra con el valor false
    var var1 = true;
    var var2 = false;
  
    // Operación AND lógico
    console.log(var1 && var2); // Resultado esperado: false, porque ambos deben ser true para que el resultado sea true
  
    // Operación OR lógico
    console.log(var1 || var2); // Resultado esperado: true, porque solo uno necesita ser true para que el resultado sea true
  
    // Operación NOT lógico en var1
    console.log(!var1); // Resultado esperado: false, porque NOT true es false
  
    // Operación NOT lógico en var2
    console.log(!var2); // Resultado esperado: true, porque NOT false es true
}

