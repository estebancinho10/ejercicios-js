let miRegEX = /^[A-C]\w+\ses\s\w+/ ;
//let cadena = `casamentero`;
//let smg = `patron: as?.a /n`;

let cadenas = [`juan es guapo`, `adriano no es feo`, `adriano deja de ser guapo`, `adriano ya es guapo`, `no es ahora`, `Ahora es no`, `Adriano es guapo`];

for (i of cadenas){
    sal = `¿contiene ${i} el pátron  ${miRegEX.test(i)}`
    console.log(sal);
}
