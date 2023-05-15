class Calculadora {
    static resultado = 0;

    static esNumerico(num) {
        return typeof num == "number" ? true : false;
    }

    static _excepcionPrincipal(num) {
        if (!this.esNumerico(num)) {
            throw new TypeError("La calculadora solo acepta entradas numéricas");
        }
    }
    static borrar() {
        this.resultado = 0;
        return this;
    }

    static suma(num) {
        this._excepcionPrincipal(num);
        this.resultado += num;
        return this;
    }

    static resta(num) {
        this._excepcionPrincipal(num);
        this.resultado -= num;
        return this;
    }

    static multiplicacion(num) {
        this._excepcionPrincipal(num);
        this.resultado *= num;
        return this;
    }

    static potencia(num) {
        this._excepcionPrincipal(num);
        this.resultado **= num;
        return this;
    }

    static division(num) {
        this._excepcionPrincipal(num);
        if (num === 0) {
            throw new Error("La división por cero no es posible");
        } else {
            this.resultado /= num;
            return this;
        }
    }

    static raizCuadrada() {
        if (this.resultado < 0) {
            throw new RangeError(
                "No es posible la raíz cuadrada de números negativos"
            );
        } else {
            this.resultado = Math.sqrt(this.resultado);
            return this;
        }
    }
}

console.log(
    Calculadora.suma(10)
        .division(5)
        .potencia(3)
        .resta(5)
        .multiplicacion(10)
        .raizCuadrada().resultado
);