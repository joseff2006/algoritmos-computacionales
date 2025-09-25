console.log("--- 1. Arreglos ---");
const numeros = [10, 20, 30, 40, 50];
numeros.push(60);
console.log(`Arreglo modificado: ${numeros}`);
console.log(`Elemento en índice 2: ${numeros[2]}`);

console.log("\n--- 2. Diccionarios (Objetos) ---");
const libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  anio: 1605
};
console.log(`Título del libro: ${libro.titulo}`);
libro.editorial = "Anaya";
console.log(libro);

console.log("\n--- 3. Pilas (Stacks) ---");
const pila = [];

pila.push("dato1");
pila.push("dato2");
pila.push("dato3");
console.log(`Pila después de apilar: ${pila}`);

const datoDesapilado = pila.pop();
console.log(`Dato desapilado: ${datoDesapilado}`);
console.log(`Pila después de desapilar: ${pila}`);

console.log("\n--- 4. Colas (Queues) ---");
const cola = [];

cola.push("cliente1");
cola.push("cliente2");
cola.push("cliente3");
console.log(`Cola después de en-colar: ${cola}`);

const datoDecolado = cola.shift();
console.log(`Dato de-colado: ${datoDecolado}`);
console.log(`Cola después de de-colar: ${cola}`);