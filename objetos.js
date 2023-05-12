const persona = {
    nombre: "fabian",
    apellido: "arias",
    edad: "30",
    hablar: function (){
        msj = `hola! mi nombre es ${this.nombre}`;
        return msj;
    }
}

console.log(persona.hablar());
console.log(persona.nombre);

