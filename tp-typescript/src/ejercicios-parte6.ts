import { Usuario } from './types';

// Ejercicio 9: Función que simula una API
export function obtenerDatos(): Promise<Usuario[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const usuarios: Usuario[] = [
                { id: 1, nombre: 'Roberto', edad: 32, email: 'roberto@example.com', activo: true },
                { id: 2, nombre: 'Elena', edad: 27, email: 'elena@example.com', activo: false },
                { id: 3, nombre: 'Mario', edad: 41, email: 'mario@example.com', activo: true }
            ];
            resolve(usuarios);
        }, 3000); // Esperar 3 segundos
    });
}

export async function ejercicio9() {
    console.log('Obteniendo datos...');
    try {
        const datos = await obtenerDatos();
        console.log('Datos obtenidos después de 3 segundos:', datos);
        return datos;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}

// Ejercicio 10: Llamar a una API pública
export async function ejercicio10() {
    console.log('Llamando a API pública...');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();
        console.log('Usuarios de la API:', usuarios);
        return usuarios;
    } catch (error) {
        console.error('Error al llamar a la API:', error);
        return null;
    }
}