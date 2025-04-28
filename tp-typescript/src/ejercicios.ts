import { Usuario } from './types';

// Ejercicio 2: Crear y filtrar un array de usuarios
export function ejercicio2() {
    // Creación del array de usuarios
    const usuarios: Usuario[] = [
        {
            id: 1,
            nombre: 'Carlos García',
            edad: 28,
            email: 'carlos@example.com',
            activo: true
        },
        {
            id: 2,
            nombre: 'Laura Pérez',
            edad: 32,
            email: 'laura@example.com',
            activo: false
        },
        {
            id: 3,
            nombre: 'Miguel Rodríguez',
            edad: 24,
            email: 'miguel@example.com',
            activo: true
        }
    ];

    // Filtrar usuarios activos
    const usuariosActivos = usuarios.filter(usuario => usuario.activo === true);

    console.log('Usuarios originales:', usuarios);
    console.log('Usuarios activos:', usuariosActivos);

    return usuariosActivos;
}