try {
    console.log(`inicio`);
    let suma = 15+15;
    console.log(`el resultado es ${suma}`);
} catch (error) {
    console-log(`se ignora cath porque no hay errores`);
}

try {
    console.log(`inicio`);
    let suma = 15+15;
    console.log(`el resultado es ${resultado}`);
} catch (error) {
    console.log(`hay un error! ${error}`);
}


console.log("----------------ACTIVIDAD----------------------")

/*Manejo de errores.
El manejo de errores con Javascript se realiza por medio de la declaración try…catch, el try es utilizado para definir un bloque de instrucciones que deben ser ejecutadas y en caso de que se presente algún error, se ejecutan las instrucciones definidas en el bloque catch.
*/

//Ejemplo sin error

console.log("-----------------Ejemplo sin error----------------------")

try {
    //Si no hay ningun error se ejecuta el bloque try
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${suma}`);
} catch (err) {
    //Si encuentra un error ejecuta el siguiente codigo
    console.log('Hay un error!');
}

//Ejemplo con error

console.log("-----------------Ejemplo con error----------------------")

try {
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${resultado}`);
    //Variable resultado no definida
} catch (err) {
    console.log('Hay un error!');
}

/*Finally: Es el bloque de código que siempre se ejecuta al finalizar el try..catch*/

console.log("-----------------Bloque finally----------------------")

try {
    console.log("En el try se agrega el codigo a evaluar")
    noExiste; //genera un error porque noExiste no esta definida
    console.log("Segundo mensaje en el try")
} catch (error) {
    console.log("Catch captura cualquier error que surga en el try")
    console.log(error) //imprime el error
} finally {
    console.log("Finally se ejecuta siempre al final de un bloque try-catch")
}

//Personalizacion de mensajes de error

console.log("-----------------Personalización mensajes de error----------------------")

try {
    let numero='y'
    if(isNaN(numero)){ //El metodo isNaN() evalua si la variable es de tipo numererico o no
        //Definición del nuevo mensaje de error  throw new Error()
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero*numero)
} catch (error) {
    console.log(`Se produjo el siguiente ${error}`)
}


function manejo_de_errores(arreglo_de_numeros ) {
    try {
        for (let i = 0; i < arreglo_de_numeros.length - 1; i++) {
            if (isNaN(arreglo_de_numeros(i))) {
                return true;
            }
        }
    }catch (error) {
        console.log("cuidadao! no se reciben datos no numericos.");
        console.log("analisis de datos terminado.");
    }
}
a = [1,2,4, `a`]
manejo_de_errores(a);

