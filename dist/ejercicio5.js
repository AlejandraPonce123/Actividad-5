"use strict";
class Persona {
    constructor(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    esMayorDeEdad() {
        console.log(this.edad >= 18 ? 'Es mayor de edad.' : 'No es mayor de edad.');
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, direccion, telefono, edad, sueldo) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }
    cargarSueldo(sueldo) {
        this.sueldo = sueldo;
    }
    imprimirSueldo() {
        console.log(`Sueldo: $${this.sueldo}`);
    }
    mostrarDatosPersonales() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
    }
}
const empleado = new Empleado('Ana', 'Martínez', 'Calle Falsa 123', '555-1234', 25, 1500);
empleado.esMayorDeEdad();
empleado.mostrarDatosPersonales();
empleado.imprimirSueldo();
