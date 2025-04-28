# Aplicación en TypeScript con Vite

Este proyecto implementa una aplicación desarrollada con TypeScript utilizando Vite como herramienta de construcción. Es parte de un trabajo práctico para demostrar el uso de conceptos clave de TypeScript, incluyendo clases, objetos, arrays, tipos genéricos, promesas, asincronía, interfaces y types.

## Tecnologías Utilizadas

- TypeScript
- Vite
- HTML5 / CSS3
- Fetch API

## Funcionalidades Implementadas

El proyecto aborda los siguientes conceptos y funcionalidades:

- [x] **Interfaces y Types**: Definición y uso de interfaces y types para estructurar datos.
- [x] **Clases y Objetos**: Creación de clases y objetos a partir de ellas.
- [x] **Herencia**: Implementación de herencia entre clases.
- [x] **Arrays y Métodos de Arrays**: Uso de métodos como map, filter, sort, push y pop.
- [x] **Tipos Genéricos**: Implementación de funciones y clases con tipos genéricos.
- [x] **Asincronía**: Manejo de promesas y operaciones asíncronas.
- [x] **Consumo de API**: Implementación de llamadas a APIs externas.
- [x] **Manipulación del DOM**: Mostrar datos en pantalla e interactuar con elementos HTML.

## Estructura del Proyecto

```
typescript-vite-app/
├── public/
│   └── vite.svg
├── src/
│   ├── types.ts              # Interfaces y types
│   ├── classes.ts            # Definición de clases
│   ├── ejercicios.ts         # Ejercicios básicos
│   ├── ejercicios-parte3.ts  # Ejercicios de clases y objetos
│   ├── ejercicios-parte4.ts  # Ejercicios de arrays
│   ├── ejercicios-parte5.ts  # Ejercicios de tipos genéricos
│   ├── ejercicios-parte6.ts  # Ejercicios de promesas y asincronía
│   ├── ejercicios-parte7.ts  # Ejercicios de manipulación del DOM
│   ├── main.ts               # Punto de entrada principal
│   └── style.css             # Estilos de la aplicación
├── index.html                # Archivo HTML principal
├── package.json              # Dependencias y scripts
├── tsconfig.json             # Configuración de TypeScript
└── vite.config.ts            # Configuración de Vite
```

## Requisitos del Sistema

- Node.js (v16.0.0 o superior)
- npm (v8.0.0 o superior)

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/typescript-vite-app.git
   cd typescript-vite-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre la aplicación en tu navegador:
   `http://localhost:5173`

## Uso

- Abre la consola del navegador (F12) para ver los resultados de los ejercicios
- Interactúa con el botón "Cargar Usuarios" para ver la funcionalidad de manipulación del DOM

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Crea una versión optimizada para producción
- `npm run preview`: Previsualiza la versión de producción

## Explicación de los Ejercicios

### Parte 1: Configuración del Proyecto
Configuración inicial del proyecto con Vite y TypeScript.

### Parte 2: Interfaces y Types
Implementación de interfaces y types para estructurar datos, con ejemplos de uso y filtrado de datos.

### Parte 3: Clases y Objetos
Implementación de clases que implementan interfaces, con métodos y herencia.

### Parte 4: Arrays y Métodos de Arrays
Demostración de operaciones con arrays utilizando métodos como map, filter, sort, push y pop.

### Parte 5: Tipos Genéricos
Implementación de funciones y clases con tipos genéricos para mejorar la reutilización y seguridad de tipos.

### Parte 6: Promesas y Asincronía
Manejo de operaciones asíncronas mediante promesas y async/await, incluido el consumo de APIs.

### Parte 7: Manipulación del DOM
Interacción con el DOM para mostrar datos obtenidos de manera asíncrona.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Autor

[Tu Nombre]
