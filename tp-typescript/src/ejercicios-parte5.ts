import { Usuario } from './types';
import { CajaClass } from './classes';

// Ejercicio 7: Función genérica para obtener elemento aleatorio
export function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function ejercicio7() {
    // Probar la función con un array de números
    const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const numeroAleatorio = getRandomItem(numeros);
    console.log('Número aleatorio:', numeroAleatorio);

    // Probar la función con un array de strings
    const palabras: string[] = ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js'];
    const palabraAleatoria = getRandomItem(palabras);
    console.log('Palabra aleatoria:', palabraAleatoria);

    // Probar la función con un array de objetos
    const usuarios: Usuario[] = [
        { id: 1, nombre: 'Ana', edad: 25, email: 'ana@example.com', activo: true },
        { id: 2, nombre: 'Juan', edad: 30, email: 'juan@example.com', activo: false },
        { id: 3, nombre: 'Luis', edad: 35, email: 'luis@example.com', activo: true }
    ];
    const usuarioAleatorio = getRandomItem(usuarios);
    console.log('Usuario aleatorio:', usuarioAleatorio);

    return { numeroAleatorio, palabraAleatoria, usuarioAleatorio };
}

// Ejercicio 8: Implementar la interfaz Caja
export function ejercicio8() {
    // Probar la clase CajaClass con un string
    const cajaString = new CajaClass<string>('Esto es un texto en una caja');
    console.log('Caja con string:', cajaString);

    // Probar la clase CajaClass con un número
    const cajaNumero = new CajaClass<number>(123);
    console.log('Caja con número:', cajaNumero);

    // Probar la clase CajaClass con un objeto
    const cajaObjeto = new CajaClass<Usuario>({
        id: 1,
        nombre: 'Pedro',
        edad: 28,
        email: 'pedro@example.com',
        activo: true
    });
    console.log('Caja con objeto:', cajaObjeto);

    // Probar la clase CajaClass con un array
    const cajaArray = new CajaClass<string[]>(['uno', 'dos', 'tres']);
    console.log('Caja con array:', cajaArray);

    return { cajaString, cajaNumero, cajaObjeto, cajaArray };
}