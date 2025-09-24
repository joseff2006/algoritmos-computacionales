console.log("--- 1. Ordenamiento por Burbuja ---");

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const arrBurbuja = [64, 34, 25, 12, 22, 11, 90];
console.log(`Arreglo original: ${arrBurbuja}`);
const arrOrdenadoBurbuja = bubbleSort(arrBurbuja);
console.log(`Arreglo ordenado: ${arrOrdenadoBurbuja}`);

console.log("\n--- 2. Ordenamiento por Selección ---");

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const arrSeleccion = [64, 25, 12, 22, 11];
console.log(`Arreglo original: ${arrSeleccion}`);
const arrOrdenadoSeleccion = selectionSort(arrSeleccion);
console.log(`Arreglo ordenado: ${arrOrdenadoSeleccion}`);