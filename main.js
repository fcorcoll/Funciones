

const tasa = 1.20;
function solicitarPresupuesto(){

    let precio = prompt("Ingresa el presupuesto estimado:");
    
                console.log("Presupuesto estimado del cliente es: " + precio);
                return precio;
    }
    
    let resultado = solicitarPresupuesto();

    console.log(resultado);

  let residencia = prompt("resides en barcelona?");
    if (residencia == "si") {
        aplicarTasa(resultado);
    }
    else {
        console.log("que suerte");
    }
    function aplicarTasa(valor){

        valor = valor * tasa;
        alert ("Que suerte que vives en Barcelona, este producto te va a costar:" + " " + valor);

    }
    