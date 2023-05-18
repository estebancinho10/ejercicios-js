let data = `{  "empleados": [
    {"nombre": "Juan", "apellido": "Perez"},
    {"nombre": "Karina", "apellido": "Gonzalez"},
    {"nombre": "Luz", "apellido": "Lopez"},
    {"nombre": "Marco", "apellido": "Villalba"}
    ]
    }`
    
    let processedData = JSON.parse(data);
    
    console.log(processedData.empleados[2])
    
let _data = {
    empleados: [
        { nombre: "Juan", apellido: "Perez" },
        { nombre: "Karina", apellido: "Gonzalez" },
        { nombre: "Luz", apellido: "Lopez" },
        { nombre: "Marcos", apellido: "Villalba" }
    ]
}

let dataJson = JSON.stringify(_data);

console.log(dataJson);

