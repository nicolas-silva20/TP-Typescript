import { Usuario, Caja } from './types';

// Ejercicio 2: Implementar la clase UsuarioClass
export class UsuarioClass implements Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.activo = activo;
    }

    // Método para cambiar el estado activo
    toggleActivo(): void {
        this.activo = !this.activo;
    }
}

// Ejercicio 4: Extender la clase UsuarioClass
export class AdminUsuario extends UsuarioClass {
    permisos: string[];

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
        super(id, nombre, edad, email, activo);
        this.permisos = permisos;
    }
}

// Ejercicio 8: Implementar la clase CajaClass<T>
export class CajaClass<T> implements Caja<T> {
    contenido: T;

    constructor(contenido: T) {
        this.contenido = contenido;
    }
}