 
//Pedimos por entrada de teclado el dato

let entrada = prompt ("Ingrese un numero menor que 10");

//Parseamos el dato para asegurarnos  que se trata de un dato numérico
let salida = Number(entrada);
//creo una constante para reservar el valor de un dato y denegar el acceso si se trata de ese.
const reservado = "gutierrez"

if (salida < 10) {
    //este console log lo uso para ver que entra bien en el condicional, no es para el usuario.
    console.log ('El numero es inferior a 10')
    let nombre = prompt ("Ingresa tu nombre de usuario:")
    let apellido = prompt ("Ingresa tu apellido:")

    if (((nombre != "") && (apellido != "")) && (apellido != reservado) ) {
        alert ("Saludos "+ nombre + " " + apellido)
   
    }
    else  {
        alert ("No puedes acceder con el usurario reservado.")
    }
    }

else {
    alert('Acceso denegado.')
}
//mostramos en un alert box el resultado con un string adicional.
