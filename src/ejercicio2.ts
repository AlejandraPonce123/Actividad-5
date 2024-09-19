class Calculadora {
    public sumar(a: number, b: number): number {
        return a + b;
    }

    public restar(a: number, b: number): number {
        return a - b;
    }

    public multiplicar(a: number, b: number): number {
        return a * b;
    }

    public dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error('No se puede dividir por cero.');
        }
        return a / b;
    }

    public potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    public factorial(n: number): number {
        if (n < 0) {
            throw new Error('No existe el factorial de números negativos.');
        }
        return n === 0 ? 1 : n * this.factorial(n - 1);
    }
}


const calculadora = new Calculadora();
console.log(calculadora.sumar(5, 3));
console.log(calculadora.factorial(5));
