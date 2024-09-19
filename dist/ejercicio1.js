"use strict";
class CabeceraPagina {
    constructor(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda';
    }
    obtenerEstilos() {
        return { titulo: this.titulo, color: this.color, fuente: this.fuente };
    }
    cambiarAlineacion(alineacion) {
        this.alineacion = alineacion;
    }
    imprimirPropiedades() {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineación: ${this.alineacion}`);
    }
}
const cabecera = new CabeceraPagina('Bienvenidos', 'azul', 'Arial');
cabecera.cambiarAlineacion('centro');
cabecera.imprimirPropiedades();
