var pelicula="interestelar"
console.log("variable pelicula antes del bloque:", pelicula)

let musica="rock"
console.log("variable musica antes del bloque:", musica)

{
    var pelicula="matilda"
    console.log("variable pelicula en el bloque:", pelicula)

    let musica="salsa"
    console.log("variable musica en el bloque:", musica)
}


console.log("variable pelicula despues del bloque:", pelicula)
console.log("variable musica despues del bloque:", musica)


var nombre = "pepito"
var apellido = "perez"

let edad = "38"
let comida = "pizza"

{
    var nombre = "fulano"
    var apellido = "de tal"
    let edad = "40"
    let comida = "hamburguesa"

    console.log("la variable global se puede leer aqui", nombre)
    console.log("la variable global se puede leer aqui", nombre)
    console.log("la variable local se puede leer aqui", edad)
    console.log("la variable local se puede leer aqui", comida)
}

console.log("la variable local se puede leer aqui", nombre)
console.log("la variable local se puede leer aqui", apellido)
console.log("la variable local se puede leer aqui", edad)
console.log("la variable local se puede leer aqui", comida)