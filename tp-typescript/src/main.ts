import './style.css';
import { ejercicio2 } from './ejercicios';
import { ejercicio3, ejercicio4 } from './ejercicios-parte3';
import { ejercicio5, ejercicio6 } from './ejercicios-parte4';
import { ejercicio7, ejercicio8 } from './ejercicios-parte5';
import { ejercicio9, ejercicio10 } from './ejercicios-parte6';
import { configurarBoton } from './ejercicios-parte7';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Aplicación TypeScript con Vite</h1>
    
    <div class="card">
      <h2>Parte 7: Manipulación del DOM</h2>
      <button id="cargar-usuarios" type="button">Cargar Usuarios</button>
      <div id="lista-usuarios"></div>
    </div>
    
    <div class="card">
      <p>
        Ver la consola para verificar los resultados de los ejercicios (F12)
      </p>
    </div>
  </div>
`;

// Ejecutar los ejercicios
console.log('--- Ejercicio 2: Arrays y filtrado ---');
ejercicio2();

console.log('\n--- Ejercicio 3: Clases y Objetos ---');
ejercicio3();

console.log('\n--- Ejercicio 4: Herencia de Clases ---');
ejercicio4();

console.log('\n--- Ejercicio 5: Métodos de Arrays (map, filter) ---');
ejercicio5();

console.log('\n--- Ejercicio 6: Métodos de Arrays (sort, push, pop) ---');
ejercicio6();

console.log('\n--- Ejercicio 7: Tipos Genéricos ---');
ejercicio7();

console.log('\n--- Ejercicio 8: Clase con Genéricos ---');
ejercicio8();

console.log('\n--- Ejercicio 9: Promesas con setTimeout ---');
ejercicio9();

console.log('\n--- Ejercicio 10: Llamada a API ---');
ejercicio10();

// Configurar el botón para la parte 7
configurarBoton();