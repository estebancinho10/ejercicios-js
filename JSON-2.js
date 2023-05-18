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

const datos = [
    {
        nombre: "Eduar",
        apellido: "Jimenez",
        correo: "edujin@gmail.com",
        telefono: 4589658,
        nacionalidad: "chileno"
    },
    {
        nombre: "German",
        apellido: "Rodriguez",
        correo: "rodriguez@gmail.com",
        telefono: 4584858,
        nacionalidad: "ecuatoriano"
    },
    {
        nombre: "Jhon",
        apellido: "Lagos",
        correo: "jhoanis@gmail.com",
        telefono: "4799658",
        nacionalidad: "estado unidense"
    },
    {
        nombre: "Andres",
        apellido: "Melo",
        correo: "melon@gmail.com",
        telefono: 4159687,
        nacionalidad: "peruano"
    },
    {
        nombre: "Arnold",
        apellido: "Cristancho",
        correo: "cristi@gmail.com",
        telefono: 9851658,
        nacionalidad: "mexicano"
    }
];


const jsondatos = JSON.stringify(datos);
console.log(jsondatos)

console.log("-----------practica de JSON----------------")

let Pelicula = `{
 "pelicula":[{
 "nombre": "hombres de negro",
 "año de estreno": "1997"
 "genero": "ciencia ficcion",
 "pais": ["estados unidos"],
 "duracion": "98 minutos"
 },{
 "nombre": "hombres araña",
 "año de estreno": "2002"
 "genero": "ciencia ficcion",
 "pais": ["estados unidos"],
 "duracion": "121 minutos"
 },{

 "nombre": "x-men",
 "año de estreno": "2000"
 "genero": "ciencia ficcion",
 "pais": "estados unidos",
 "duracion": "104 minutos"
 },{
 "nombre": "hombres de negro",
 "año de estreno": "2006"
 "genero": "drama",
 "pais": ["estados unidos"],
 "duracion": "117 minutos"
 },{
 "nombre": "inglourious basterds",
 "año de estreno": "2009"
 "genero": "accion comedia drama",
 "pais": ["estados unidos"],
 "duracion": "153 minutos"
 }
 ]
 }`

 let jsonPelicula = JSON.stringify(Pelicula); 
 console.log(jsonPelicula)
 
