class Cancion {
    public titulo: string;
    public genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = '';
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public mostrarDatos(): void {
        console.log(`Título: ${this.titulo}, Género: ${this.genero}, Autor: ${this.autor}`);
    }
}


const cancion = new Cancion('Imagine', 'Rock');
cancion.setAutor('John Lennon');
cancion.mostrarDatos();
