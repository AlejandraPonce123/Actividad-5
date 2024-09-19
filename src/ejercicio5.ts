abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    public esMayorDeEdad(): void {
        console.log(this.edad >= 18 ? 'Es mayor de edad.' : 'No es mayor de edad.');
    }

    public abstract mostrarDatosPersonales(): void;
}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    public imprimirSueldo(): void {
        console.log(`Sueldo: $${this.sueldo}`);
    }

    public mostrarDatosPersonales(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
    }
}


const empleado = new Empleado('Ana', 'Martínez', 'Calle Falsa 123', '555-1234', 25, 1500);
empleado.esMayorDeEdad();
empleado.mostrarDatosPersonales();
empleado.imprimirSueldo();
