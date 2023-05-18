let claves = {
    "clave1": "valor1",
    "clave2": null,
    "clave3": 9,
    "clave4": true,
    "colores": ["Rosado", "Naranja", "Rojo", "Azul"],
    "Juan": {
        "telefono": "123456789",
        "correo": "juan@correo.com",
        "direccion": "Calle 123 # 45 - 67"
    }
}

let _datos = `{
    "nombre": "Rodrigo",
    "apellido": "Bohorquez",
    "edad": 37,
    "hobbies": ["jugar Futbol", "ver tv", "los video juegos"],
    "direccion_web": {
        "correo": "rodri@hotmail.com",
        },
    "telefonos": {
        "telefono celular": "3162569568",
        "telefono fijjo": "4029272",
        "direccion": "calle 42 # 95 - 18"
    }
}`


let tienda = `{
    "productos":
        {
            "nombre": "arroz",
            "marca": "diana",
            "valor": {
                "valor_compra": 20000,
                "valor_venta": 23000
            },
            "tipo": "alimento",
            "inventario": 10
        },
        {
            "nombre": "jabon",
            "marca": "ariel",
            "valor": {
                "valor_compra": 5452,
                "valor_venta": 6985
            },
            "tipo": "aseo",
            "inventario": 20
        },
        {
            "nombre": "detergente",
            "marca": "suavitel",
            "valor": {
                "valor_compra": 5000,
                "valor_venta": 5300
            },
            "tipo": "aseo",
            "inventario": 20
        },
        {
            "nombre": "gaseosa",
            "marca": "cocacola",
            "valor": {
                "valor_compra": 4000,
                "valor_venta": 4500
            },
            "tipo": "bebida",
            "inventario": 100
        },
        {
            "nombre": "aceite",
            "marca": "gourmet",
            "valor": {
                "valor_compra": 19000,
                "valor_venta": 22000
            },
            "tipo": "alimento",
            "inventario": 45
        },
        {
            "nombre": "galletas",
            "marca": "festival",
            "valor": {
                "valor_compra": 8000,
                "valor_venta": 9100
            },
            "tipo": "alimento",
            "inventario": 200
        },
        {
            "nombre": "cerveza",
            "marca": "poker",
            "valor": {
                "valor_compra": 2000,
                "valor_venta": 2500
            },
            "tipo": "bebida",
            "inventario": 500
        },
        {
            "nombre": "crema dental",
            "marca": "colgate",
            "valor": {
                "valor_compra": 7500,
                "valor_venta": 8700
            },
            "tipo": "aseo",
            "inventario": 1000
        }
}
`;
let jsontienda = JSON.stringify(tienda); 
console.log(jsontienda)


