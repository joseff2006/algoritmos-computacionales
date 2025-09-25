

```javascript
// Búsqueda Lineal
function busquedaLineal(arr, objetivo) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === objetivo) {
      return i; // Retorna el índice si lo encuentra
    }
  }
  return -1; // Retorna -1 si no lo encuentra
}

let numeros = [3, 8, 1, 6, 2, 7];
let indice = busquedaLineal(numeros, 6);
console.log(indice); // Salida: 3

// Búsqueda Binaria
function busquedaBinaria(arr, objetivo) {
  let inicio = 0;
  let fin = arr.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (arr[medio] === objetivo) {
      return medio;
    } else if (arr[medio] < objetivo) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }
  return -1;
}

let numerosOrdenados = [1, 2, 3, 6, 7, 8];
let indiceBinario = busquedaBinaria(numerosOrdenados, 6);
console.log(indiceBinario); // Salida: 3

// Ordenamiento por Burbuja
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Intercambiar elementos
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let numerosDesordenados = [64, 34, 25, 12, 22, 11, 90];
let numerosOrdenadosBurbuja = bubbleSort(numerosDesordenados);
console.log(numerosOrdenadosBurbuja); // Salida: [11, 12, 22, 25, 34, 64, 90]

// Ordenamiento Rápido (Quicksort)
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const izquierda = [];
  const derecha = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      izquierda.push(arr[i]);
    } else {
      derecha.push(arr[i]);
    }
  }
  return [...quicksort(izquierda), pivot, ...quicksort(derecha)];
}

const numerosQuick = [5, 3, 7, 6, 2, 8, 4];
const numerosOrdenadosQuick = quicksort(numerosQuick);
console.log(numerosOrdenadosQuick); // Salida: [2, 3, 4, 5, 6, 7, 8]

// Ordenamiento por Mezcla (Merge Sort)
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const medio = Math.floor(arr.length / 2);
  const izquierda = arr.slice(0, medio);
  const derecha = arr.slice(medio);

  return merge(mergeSort(izquierda), mergeSort(derecha));
}

function merge(izquierda, derecha) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < izquierda.length && j < derecha.length) {
    if (izquierda[i] < derecha[j]) {
      resultado.push(izquierda[i]);
      i++;
    } else {
      resultado.push(derecha[j]);
      j++;
    }
  }

  return [...resultado, ...izquierda.slice(i), ...derecha.slice(j)];
}
```


