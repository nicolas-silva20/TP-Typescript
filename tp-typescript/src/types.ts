// Interfaz para representar un Usuario
export interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
}

// Type con las mismas propiedades que la interfaz Usuario
export type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
}

/*
  Diferencia entre Interface y Type en TypeScript:
  
  1. Interfaces:
     - Las interfaces son extensibles, se pueden declarar múltiples veces y se fusionarán
     - Se utilizan principalmente para definir contratos de objetos
     - No pueden ser utilizadas para crear uniones o tipos primitivos
 
  2. Types:
     - Los types no son extensibles pero son más flexibles
     - Pueden representar tipos primitivos, uniones, intersecciones y otros tipos más complejos
     - Se pueden utilizar con tuplas y otras estructuras más avanzadas
*/

// Interfaz para Producto
export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}

// Interfaz genérica para el contenedor
export interface Caja<T> {
    contenido: T;
}