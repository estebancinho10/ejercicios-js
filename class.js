class animal {
    constructor(nombre="max", genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar(){
       let msj = `hola, mi nombre es ${this.nombre}`;
        return msj;
    }
}
const perro = new animal(undefined, "macho");

console.log(perro);
console.log(perro.saludar());