import { Producto } from './types';

// Ejercicio 5: Manipular array de productos
export function ejercicio5() {
    // Crear array de productos
    const productos: Producto[] = [
        { id: 1, nombre: 'Laptop', precio: 1200, stock: 10 },
        { id: 2, nombre: 'Mouse', precio: 25, stock: 0 },
        { id: 3, nombre: 'Teclado', precio: 45, stock: 5 },
        { id: 4, nombre: 'Monitor', precio: 150, stock: 3 },
        { id: 5, nombre: 'Auriculares', precio: 75, stock: 0 }
    ];

    // Usar map para mostrar solo los nombres
    const nombresProductos = productos.map(producto => producto.nombre);
    console.log('Nombres de productos:', nombresProductos);

    // Usar filter para obtener productos con stock > 0
    const productosDisponibles = productos.filter(producto => producto.stock > 0);
    console.log('Productos disponibles:', productosDisponibles);

    return { nombresProductos, productosDisponibles };
}

// Ejercicio 6: Ordenar y modificar array de productos
export function ejercicio6() {
    // Crear array de productos
    const productos: Producto[] = [
        { id: 1, nombre: 'Laptop', precio: 1200, stock: 10 },
        { id: 2, nombre: 'Mouse', precio: 25, stock: 0 },
        { id: 3, nombre: 'Teclado', precio: 45, stock: 5 },
        { id: 4, nombre: 'Monitor', precio: 150, stock: 3 },
        { id: 5, nombre: 'Auriculares', precio: 75, stock: 0 }
    ];

    console.log('Productos originales:', productos);

    // Ordenar productos de menor a mayor precio
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    console.log('Productos ordenados por precio:', productosOrdenados);

    // Agregar un nuevo producto con push
    const nuevoProducto: Producto = { id: 6, nombre: 'Webcam', precio: 60, stock: 7 };
    productos.push(nuevoProducto);
    console.log('Productos después de agregar uno nuevo:', productos);

    // Eliminar el último producto con pop
    const productoEliminado = productos.pop();
    console.log('Producto eliminado:', productoEliminado);
    console.log('Productos después de eliminar el último:', productos);

    return { productosOrdenados, productos };
}