// Ejercicio 6.1: Declara una variable 'frase' y asígnale el valor "JavaScript es genial". Usa el método 'length' para mostrar la longitud de la cadena.
// Ejercicio 6.2: Usa el método 'indexOf' para encontrar la posición de la palabra "genial" en la variable 'frase' y muestra el resultado en la consola.
// Ejercicio 6.3: Usa el método 'slice' para extraer la palabra "JavaScript" de la variable 'frase' y muestra el resultado en la consola.
// Ejercicio 6.4: Declara una variable 'nombreCompleto' y asígnale el valor "   Juan Pérez   ". Usa el método 'trim' para eliminar los espacios en blanco al principio y al final de la cadena y muestra el resultado en la consola.
// Ejercicio 6.5: Declara una variable 'cancion' y asígnale el valor "Twinkle, twinkle, little star". Usa el método 'split' para dividir la cadena en palabras individuales y muestra el resultado en la consola.

// 6.1
let frase = "Javascript es genial"
const longitud = frase.length

// 6.2
const posicionGenial = frase.indexOf("genial")
console.log(posicionGenial)

// 6.3
const sacar = frase.slice(0, 10)
console.log(sacar)

//6.4
var nombreCompleto = "   Juan Pérez   "
var nombreArreglado = nombreCompleto.trim();
console.log(nombreArreglado)

//6.5

var cancion = "Twinkle, twinkle, little star"
var division = cancion.split(" ");
console.log(division)