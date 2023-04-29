/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a= Array(100).fill(false) 
console.log(a)

const colores =["Rojo", "Azul", "Gris"]
console.log(colores)

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------")
const copiaColores =colores.slice();
console.log(copiaColores)

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------")
console.log(colores.length)


console.log("-----------------practica----------------------")

function llenararray(limite){
    let array = [];

    for ( let i = 0; i < limite; i++){
        array.push(i + 1)
    }
    return array;
}
console.table(llenararray(100));

function arraydepares(limite){
    let lista = [];
    for (let i = 2; i <=limite; i +=2){
        lista.push(i);
    }

    return lista;
}
console.log(arraydepares(100))

let pares=[];
let impares=[];
for(let i=1; i<101; i++){

    if(i%2==0){
        pares.push(i)
    }
    else{
        impares.push(i)
    }
}
console.log(`pares: ${pares}\n impares: ${impares}`)

function ordene(a, b , c){
    let yo = [a, b, c];
    yo.sort( (a,b) => {
        return a - b;
    });
    return yo;
}
console.log(ordene(16, 35, 8));