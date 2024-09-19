"use strict";
class Calculadora {
    sumar(a, b) {
        return a + b;
    }
    restar(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero.');
        }
        return a / b;
    }
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    factorial(n) {
        if (n < 0) {
            throw new Error('No existe el factorial de números negativos.');
        }
        return n === 0 ? 1 : n * this.factorial(n - 1);
    }
}
const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3));
console.log(calculadora.factorial(5));
