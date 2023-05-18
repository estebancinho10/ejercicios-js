/*JSON (JavaScript Object Notation).
Es básicamente una notación que es comúnmente utilizada para el intercambio de información*/

//JSON.parse(str). Convierte el JSON a un objeto y lo devuelve.

console.log("-----------Conversión de JSON a un Objeto----------------")

//JSON
const jsonUsuario = `{
  "nombre": "Mariana",
  "edad": 36
}`;

const usuario = JSON.parse(jsonUsuario); //Conversion con el método parse(JSON)
console.log(`Hola! Soy ${usuario.nombre} y tengo ${usuario.edad}`) //Impresión del objeto

console.log("-----------Conversión de un Objeto a JSON----------------")

//Objeto persona
const persona = { 
    nombre: "Mariana",
    edad: 36,
    amigos: ["Juan", "Fernanda", "José"]
  };

//JSON.stringify(obj). Convierte un objeto Javascript a JSON y la devuelve.
const jsonPersona = JSON.stringify(persona); //Conversión del objeto a json
console.log(jsonPersona) //Impresion del json

console.log("-----------practica de JSON----------------")

const jsondatos = `{
    "nombre": "Eduar",
    "apellido": "Jimenez",
    "correo": "edujin@gmail.com",
    "telefono": "4589658",
    "nacionalidad": "chileno"
}`;

const datos = JSON.parse(jsondatos);
console.log(`hola soy ${datos.nombre} ${datos.apellido}, mi correo es ${datos.correo} y mi numero de telefono es ${datos.telefono} soy de nacionalidad ${datos.nacionalidad}`)