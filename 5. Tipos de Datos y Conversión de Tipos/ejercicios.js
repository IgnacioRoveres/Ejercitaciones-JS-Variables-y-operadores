// Ejercicio 5.1: Declara una variable 'cadenaNumero' y asígnale el valor "123". Convierte esta cadena a un número y almacénalo en una nueva variable 'numeroConvertido'. Muestra ambos valores en la consola.
// Ejercicio 5.2: Declara una variable 'booleano' y asígnale el valor 'true'. Convierte este valor a una cadena y almacénalo en una nueva variable 'cadenaBooleano'. Muestra ambos valores en la consola.

var cadenaNumero = "123"

var numeroConvertido = Number.parseInt(cadenaNumero)


console.log(numeroConvertido)
console.log(cadenaNumero)

var booleano = true;
var cadenaBooleano = booleano.toString();

console.log(booleano)
console.log(cadenaBooleano)