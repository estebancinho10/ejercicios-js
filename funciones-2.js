/*Funciones expresadas o anonimas.
Las funciones expresadas hacen parte del ámbito concreto del programa,
es decir, estas funciones no existen hasta que la expresión que las genera es ejecutada.
Se consideran una buena practica de programación para tener el código ordenado*/

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function () {
    return console.log("Esta es una función expresada!");
}

funcionExpresada();

/*Funciones anonimas autoejecutables (IIFE).
Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
(function (parametros){//contenido de la funcion})(parametros);
*/

console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");

(function () {
    console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (c) {
    c.log("Mi segunda funcion anonima autoejecutable (IIFE) con parametros");
})(console);

(function (x, y, z) {
    console.log(x + y + z);
})(1, 2, 3);


const expresada = function (a, b) {
    if (a > b) {
        return 1;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
}
console.log(expresada(6, 5));

(function (num) {
    if (num % 2 === 0) {
        console.log(num + " es un numero par ");
    } else {
        console.log(num + " no es un numero par ");
    }
})
    (5);

(function (numero) {
    if (numero >= 0) {
        if (numero % 2 === 0) console.log("El numero", numero, " es par ");
        else console.log("El numero", numero, " es impar ");
    } else console.log("el numero" + numero + " no es entero positivo ");
})(-4);