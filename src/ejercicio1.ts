class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'izquierda' | 'centro' | 'derecha';

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'izquierda';
    }

    public obtenerEstilos(): { titulo: string, color: string, fuente: string } {
        return { titulo: this.titulo, color: this.color, fuente: this.fuente };
    }

    public cambiarAlineacion(alineacion: 'izquierda' | 'centro' | 'derecha'): void {
        this.alineacion = alineacion;
    }

    public imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}, Alineación: ${this.alineacion}`);
    }
}


const cabecera = new CabeceraPagina('Bienvenidos', 'azul', 'Arial');
cabecera.cambiarAlineacion('centro');
cabecera.imprimirPropiedades();
