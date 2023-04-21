let n1 = 14; 
let n2 = 52;

function sumar (a, b){
    return a+b ; 
}

let num = sumar(n1, n2);
console.log(num)

function saludar(){
    msj = "hola mundo";
    return msj;
}

let str = saludar();
console.log(str);

/*Funcion declarada.
Son funciones que forman parte del ámbito global del programa,
que para que se ejecuten se debe hacer un llamado a la función,
independientemente de donde se declaren se pueden ser llamadas desde cualquier parte del código.
*/

//Funcion declarada sin parametros y sin valor de retorno

function estoEsUnaFuncion(){
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

//Ivocacion de la funcion

estoEsUnaFuncion();

//Funcion declarada con parametros y valor de retorno


function saludar(nombre, edad){
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

console.log(saludar("Amparo", 39));

//Asignación de valores por defecto a una funciones


function carrera(nombre="desconocido", carrera="desconocido"){
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}

carrera("Juan", "desarrollo de web")
carrera();

function division(a,b){
    let c;
    if(b == 0)
        c="error by zero"
    else
        c=a/b
    return c;
}
function resta (numeroUno, numeroDos){
    return numeroUno - numeroDos;
}
function suma (a,b){
    return a+b;
}
function multiplicacion (a,b){
    return a*b;
}

let a = 5;
let b = 0;

let op = "div";


switch (op) {
    case "suma":
        console.log(sumar(a, b))
        break;
    case "resta":
        console.log(resta(a, b))
        break;
    case "multi":
        console.log(multiplicacion(a, b))
        break;
    case "div":
        console.log(division(a, b))
        break;
    default:
        break;

}


const dolarCop = function (a) {

    let valorDolar = 0.00023;
    let conversionCop = (a * valorDolar) / 1;

    return conversionCop
}

const copDolar = function (a) {

    let valorCop = 4424;
    let conversionDolar = (a * valorCop) / 1;

    return conversionDolar;
}

let cop = 500000;
let dolar = 30;

let convertirCopDolar = dolarCop (cop);
let convertirDolarcop = copDolar (dolar);

console.log(`la conversion de ${cop} pesos colombianos a dolar es: $${convertirCopDolar}`)
console.log(`la conversion de ${dolar} dolar a pesos colombianos es: $${convertirDolarcop} cop`)


function triangulo (a,b){
    return (a*b)/2;
}
function areaCirculo ( radio ) {
    const PI = 3.1416;
    return PI * radio**2; //x^2
}
function areaCuadrado (a,b){
    return a*b;
}

ladoa = 15;
ladob = 30;

radio = 24;

console.log(`el area de un cuadrado cuyos lados miden ${ladoa} y ${ladob} es de ${areaCuadrado(ladoa,ladob)}`)
console.log(`el area de un triangulo cuya base mide ${ladoa} y su altura es ${ladob} es de ${triangulo(ladoa,ladob)}`)
console.log(`el area de un circulo cuyo radio mide ${radio} es de ${areaCirculo(radio)}`)

