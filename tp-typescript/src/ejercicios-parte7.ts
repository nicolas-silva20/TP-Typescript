// Ejercicio 11: Función para renderizar usuarios en el DOM
export function renderizarUsuarios(usuarios: any[]) {
    const contenedor = document.getElementById('lista-usuarios');

    if (!contenedor) {
        console.error('El elemento con ID "lista-usuarios" no existe en el DOM');
        return;
    }

    // Crear una lista HTML
    let listaHTML = '<ul>';

    // Agregar cada usuario a la lista
    usuarios.forEach(usuario => {
        listaHTML += `<li>
        <strong>${usuario.name || usuario.nombre}</strong>: ${usuario.email}
      </li>`;
    });

    listaHTML += '</ul>';

    // Actualizar el contenido del elemento
    contenedor.innerHTML = listaHTML;
}

// Ejercicio 12: Configurar el evento del botón
export function configurarBoton() {
    const boton = document.getElementById('cargar-usuarios');

    if (!boton) {
        console.error('El elemento con ID "cargar-usuarios" no existe en el DOM');
        return;
    }

    // Agregar evento de click
    boton.addEventListener('click', async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const usuarios = await response.json();
            renderizarUsuarios(usuarios);
        } catch (error) {
            console.error('Error al cargar usuarios:', error);

            // Mostrar mensaje de error en la interfaz
            const contenedor = document.getElementById('lista-usuarios');
            if (contenedor) {
                contenedor.innerHTML = '<p>Error al cargar los usuarios. Inténtalo de nuevo más tarde.</p>';
            }
        }
    });
}