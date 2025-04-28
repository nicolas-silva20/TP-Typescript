import { UsuarioClass, AdminUsuario } from './classes';

// Ejercicio 3: Crear instancias de UsuarioClass
export function ejercicio3() {
    // Crear dos usuarios
    const usuario1 = new UsuarioClass(1, 'Juan Pérez', 35, 'juan@example.com', true);
    const usuario2 = new UsuarioClass(2, 'María López', 29, 'maria@example.com', false);

    console.log('Usuario 1:', usuario1);
    console.log('Usuario 2:', usuario2);

    // Cambiar estado activo
    usuario1.toggleActivo();
    usuario2.toggleActivo();

    console.log('Usuario 1 después de toggle:', usuario1);
    console.log('Usuario 2 después de toggle:', usuario2);

    return [usuario1, usuario2];
}

// Ejercicio 4: Crear una instancia de AdminUsuario
export function ejercicio4() {
    // Crear un usuario administrador
    const admin = new AdminUsuario(
        3,
        'Admin Rodríguez',
        40,
        'admin@example.com',
        true,
        ['crear', 'editar', 'eliminar']
    );

    console.log('Administrador:', admin);

    // Demostrar que hereda el método toggleActivo
    admin.toggleActivo();
    console.log('Administrador después de toggle:', admin);

    return admin;
}