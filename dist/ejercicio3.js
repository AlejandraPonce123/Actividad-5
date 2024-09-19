"use strict";
class Cancion {
    constructor(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }
    getAutor() {
        return this.autor;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    mostrarDatos() {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}
const cancion = new Cancion('Imagine', 'Rock');
cancion.setAutor('John Lennon');
cancion.mostrarDatos();
