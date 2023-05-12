class TrianguloRectangulo {
    constructor(ladoA) {
        this.ladoA = ladoA;
    }

    explicacion() {
        let msj = 'El triángulo rectángulo es aquel que tiene un ángulo interior que es recto, es decir, mide 90º.';

        return msj;
    }

    set setLadoA(ladoA) {
        this.ladoA = ladoA;
    }

    get getLadoA() {
        return this.ladoA;
    }
}

const trianguloRectangulo = new TrianguloRectangulo();

trianguloRectangulo.setLadoA = 1;

console.log(trianguloRectangulo.explicacion());
console.log(`Valor del lado es: ${trianguloRectangulo.getLadoA}`);


class Coseno extends TrianguloRectangulo {
    constructor(ladoA) {
        super(ladoA);
    }

    explicacion() {
        let msj = 'El coseno de un ángulo α de un triángulo rectángulo se define como la razón entre el cateto contiguo o cateto adyacente (b) y la hipotenusa (c).';

        return msj;
    }

    coseno() {
        let coseno = Math.cos(this.ladoA);
        let msj = `El coseno de ${this.ladoA}º es: ${coseno.toFixed(4)}.`;

        return msj;
    }
}

const coseno = new Coseno();
coseno.setLadoA = 60;

console.log(coseno.explicacion());
console.log(coseno.coseno());


class Tangente extends TrianguloRectangulo {
    constructor(ladoA) {
        super(ladoA);
    }

    explicacion() {
        let msj = 'La tangente de un ángulo α de un triángulo rectángulo se define como la razón entre el cateto opuesto (a) y el cateto contiguo o cateto adyacente (b).';

        return msj;
    }

    tangente(){
        let tangente = Math.tan(this.ladoA);
        let msj = `La tangente de ${this.ladoA}º es: ${tangente.toFixed(4)}.`;

        return msj;
    }
}

const tangente = new Tangente();
tangente.setLadoA = 60;

console.log(tangente.explicacion());
console.log(tangente.tangente());


class Seno extends TrianguloRectangulo{
    constructor(ladoA){
        super(ladoA);
    }

    explicacion(){
        let msj = 'El seno de un ángulo α de un triángulo rectángulo se define como la razón entre el cateto opuesto (a) y la hipotenusa (c).';

        return msj;
    }

    seno(){
        let seno = Math.sin(this.ladoA);
        let msj = `El seno de ${this.getLadoA}º es: ${seno.toFixed(4)}`;

        return msj;
    }
}

const seno = new Seno();
seno.setLadoA = 60; 

console.log(seno.explicacion());
console.log(seno.seno());
