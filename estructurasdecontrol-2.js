/*While.
Permite ejecutar un código mientras se cumpla una condición.
Como se ve a continuación*/

console.log("-----------------Condicional while----------------------")

let cont=0

/*La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10*/

while(cont<10){
    console.log(`El while va en ${cont}`)
    cont++
}

/*For
Permite ejecutar un código un número determinado de veces.
Como se ve a continuación*/

/*La variable i aumenta de uno en uno siempre que sea mejor que 10*/

console.log("-----------------Condicional for----------------------")

for (let i = 0; i < 10; i++) {
    console.log(`El for va en ${i}`)
}


for (let i = 10; i >= 1; i--) {
    console.log(i)
}



let arr = [10, 50, 100];

for (let x of arr){
    console.log(x);
}


for (let j = 2; j < 20; j++) {
    if(j % 2 == 0){
        console.log(j);
    }
}

let resultado = 0;
for (let f = 1; f <= 5; f++) {
    resultado +=f;
}
console.log(`resultado es ${resultado}`)


contador = 1;
numero = 7;
while(contador <10) {
    console.log(`${numero} x ${contador} = ${numero*contador}`);
    contador++;
}
