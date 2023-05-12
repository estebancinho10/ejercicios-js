/*Clases.
Son una forma de organizar y simplificar el funcionamiento del código de una aplicación
Su sintaxis es la siguiente:
    class nombreClase{
        //propiedades y metodos
    }
Se pueden hacer objetos a partir de las clases de la siguiente forma:
    const nombreObjeto=new nombreClase()    
*/

console.log("-----------------Clases----------------------")

class Animal { //Definicion de una clase
    /*El constructor es un metodo que se ejecuta al instanciarse la clase*/
    constructor(nombre, genero) {
        //Propiedades de la clase animal.
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar() { //Método de la clase animal
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

//Creación de una instancia un objeto basado en la clase animal
const caliman = new Animal("Caliman", "Macho")

//Tipo de dato que es caliman
console.log(typeof (caliman))
//Impresión del objeto
console.log(caliman)
//Llamado al método
caliman.saludar();

/*Herencia
Una clase hija hereda las propiedades y métodos de una clase padre. Se utiliza la palabra reservada extends.
*/

console.log("-----------------Herencia----------------------")

class Perro extends Animal { //La clase perro extiende de la clase animal-
    constructor(nombre, genero, tamaño) {
        //Super es un metodo que manda a llamar el constructor de la clase padre
        super(nombre, genero)
        //Propiedad de la clase perro.
        this.tamaño = tamaño;
    }

    /*Sobreescritura.
     Permite a las clases hijas hacer una implementación de un método que ha sido dado por una clase padre.
    */

    saludar() { //sobreescritura del metodo saludar
        console.log(`Hola! Soy un perro y mi nombre es ${this.nombre}`)
    }

    ladrar() { //metodo de la clase perro
        console.log("Guau Guau")
    }
}

//Instancia de un objeto basado en la clase perro
const scooby = new Perro("Scooby Doo", "Macho", "Grande")

console.log(scooby);
scooby.saludar();
scooby.ladrar();

console.log("-----------------practica----------------------")

class figura1 {
    constructor(color) {
        this.color = color;

    }

    saludar() {
        console.log(`Hola, soy una figura y mi color es ${this.color}`);
    }
}

figura1 = new figura1("dorado")
figura1.saludar();


class Cuadrado extends figura{

    constructor(color, lado) {
      super(color);
      this.alto = lado;
      this.ancho = lado;
    }
    
    saludar() {
         return console.log(`Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto} x ${this.ancho}`);

    }

    calcularArea(){

        const area = (this.alto = this.ancho);

        return console.log(`el area del cuadrado es: ${area}`);
    }
  }
   const cuadrado = new Cuadrado(`verde`, 5, 5);
   Cuadrado.saludar();
   Cuadrado.calcularArea();
  

  class Circulo extends figura1 {
    constructor(color, radio) {
      super(color);
      this.radio = radio;
    }
    
    saludar() {
      console.log(`Hola! Soy un círculo. Mi color es ${this.color} y mi radio es ${this.radio}`);
    }
  }
  
  const circulo = new Circulo('negro', 5);
  circulo.saludar();