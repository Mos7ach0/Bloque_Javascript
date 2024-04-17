function variables(){
    let miString  ="Hello world";
    let miNumero = 42;
    let miBooleano=false;
    let miNull=null;
    let miUndefined
    
    console.log(typeof miString)
     console.log(typeof miNumero)
     console.log(typeof miBooleano)
     console.log(typeof miNull)
     console.log(typeof miUndefined)
    }
    
    function tiposDatos(){
      let valor = prompt("Introduce un dato")
    
      if(!isNan(valor)){
        console.log("Es un numero")
      }
      else if(valor == "True" || valor == "false"){
        console.log("Es un booleano")
      }
      else{
        console.log("Es un string")    
      }
    }