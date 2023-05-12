/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------")

const numeros=[1,2,3]
let uno=numeros[0],
dos=numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

//Con destrucrturacion

console.log("--------------Con destructuración-------------------")

const [one, two, three]=numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one,two,three)

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona={
    nombre: "Ana",
    apellido: "Santos",
    edad: 23
}

const {nombre, apellido, edad}=persona; //deben tener el mismo nombre del la llave del objeto

console.log(nombre,apellido,edad)

console.log("--------------practica-------------------")

let dias_semana = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
];
let [diauno, diados, diatres, diacuatro, diacinco, diaseis, diasiete] =dias_semana;
console.log(dias_semana)


const mascota = {
    nombrre: "pinina",
    tamaño: "mediana",
    color: "blanca",
    eddad: 5,
}
const { nombrre, tamaño, color, eddad } = mascota

console.log(nombrre,tamaño,color,eddad)