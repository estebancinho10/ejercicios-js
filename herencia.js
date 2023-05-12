class animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar(){
        let saludo = `hola, soy un gato y mi nombre es ${this.nombre} y mi raza ${this.raza}`;
        return saludo;
    }

    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza
    }
}

class gato extends animal{
    constructor(nombre, genero, color){
        super(nombre, genero);
        this.color = color;
        this.raza = null;
    }
    
    set setRaza(raza){
        this.raza = raza;
    }
}
const milla = new gato("milla", "macho", "cafecito");
console.log(milla);
console.log(milla.saludar());

milla.setRaza = "angora turco";
console.log(milla.saludar());
console.log(milla.raza);

const canela = new gato("canela", "hembra", "blanco");
console.log(canela);
console.log(canela.saludar())

canela.setRaza = "RAZA X";
console.log(canela.getRaza)