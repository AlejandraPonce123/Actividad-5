class Cuenta {
    public nombre: string;
    private cantidad: number;
    public tipoCuenta: string;
    public numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    public depositar(): void {
        if (this.cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5.00');
        } else {
            console.log(`Se ha depositado correctamente $${this.cantidad}.`);
        }
    }

    public retirar(valor: number): void {
        if (valor < 5) {
            console.log('El valor a retirar debe ser mayor a $5.00');
        } else if (valor > this.cantidad) {
            console.log('No hay suficiente dinero en la cuenta.');
        } else {
            this.cantidad -= valor;
            console.log(`Has retirado $${valor}. Te quedan $${this.cantidad} en la cuenta.`);
        }
    }

    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo de cuenta: ${this.tipoCuenta}, Número de cuenta: ${this.numeroCuenta}`);
    }
}


const cuenta = new Cuenta('Pedro Pérez', 100, 'Ahorros', '123456');
cuenta.depositar();
cuenta.retirar(20);
cuenta.mostrarDatos();
