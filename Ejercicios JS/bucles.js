
// --------------  Ejercicio N°1  --------------;

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 100:`));
// if (numeroIngresado >= 1 && numeroIngresado <= 100) {
//     console.log(`Números entre ${numeroIngresado} y 0:`);
//     for (let i = numeroIngresado; i >= 0; i--) {
//         console.log(i);
//     };
// } else {
//     console.log(`El numero ${numeroIngresado} no esta entre 1 y 100`);
// };

// --------------  Ejercicio N°2  --------------;

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 10:`));
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${numeroIngresado} = ${i * numeroIngresado}`);
// };

// --------------  Ejercicio N°3  --------------;

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 10:`));
// let suma = 0;
// while (numeroIngresado !== 0) {
//     suma += numeroIngresado;
//     numeroIngresado = parseInt(prompt("Ingresa otro número o ingresa 0 para finalizar:"));
// };
// console.log(`La suma de lo numeros ingresados hasta el momento es ${suma}`);

// --------------  Ejercicio N°4  --------------;

// let numeroIngresado = parseInt(prompt(`Ingresa un numero entre 1 y 10:`));
// let suma = 0;
// do {
//     suma += numeroIngresado;
//     numeroIngresado = parseInt(prompt("Ingresa otro número o ingresa 0 para finalizar:"));
// } while (numeroIngresado !== 0);
// console.log(`La suma de lo numeros ingresados hasta el momento es ${suma}`);

// --------------  Ejercicio N°5  --------------;

// let nuevoNumero = Number(prompt(`Ingresa un numero entre 1 y 10:`));
// let intentos = 0;
// do {
//     if (nuevoNumero > suma) {
//         console.log(`El numero ingresado es mayor que el numero secreto`);
//         nuevoNumero = Number(prompt(`El numero ingresado es mayor que el numero secreto, ingresa un numero entre 1 y 10:`));
//         intentos++
//     } else if (nuevoNumero < suma) {
//         console.log(`El numero ingresado es menor que el numero secreto`);
//         nuevoNumero = Number(prompt(`El numero ingresado es menor que el numero secreto, ingresa un numero entre 1 y 10:`));
//         intentos++
//     } else {
//         console.log(`Adivinaste! el numero secreto es ${suma} en ${intentos} intentos`);
//     };
// } while (nuevoNumero !== suma);

// --------------  Ejercicio N°6  --------------;

// let numeroIngresado = parseInt(prompt(`Ingrese un numero:`));
// for (let i = 1; i <= numeroIngresado; i++) {
//     if (numeroIngresado % i === 0) {
//         console.log(numeroIngresado / i);
//     };
// };

// --------------  Ejercicio N°7  --------------;

// let colores = ["Rojo", "Verde", "Azul", "Violeta", "Amarillo", "Celeste", "Naranja", "Rosa"];
// for (color of colores) {
//     console.log(color);
// };

// --------------  Ejercicio N°8  --------------;

// let numeros = [5, 7, 10, 13, 17];
// for (numero of numeros) {
//     console.log(`El numero es ${numero} y su doble es ${numero * 2}`);
// };

// --------------  Ejercicio N°9  --------------;

// let grupoFamiliar = [
//     {
//         nombre: "Laura",
//         edad: 58,
//         integrante: "Madre",
//         gusto: "las plantas",
//     },
//     {
//         nombre: "Mariana",
//         edad: 28,
//         integrante: "Hermana",
//         gusto: "cocinar",
//     },
//     {
//         nombre: "Belen",
//         edad: 26,
//         integrante: "Hermana",
//         gusto: "los gatos",
//     },
//     {
//         nombre: "Rebeca",
//         edad: 3,
//         integrante: "Sobrina",
//         gusto: "jugar",
//     },
//     {
//         nombre: "David",
//         edad: 20,
//         integrante: "Hermano",
//         gusto: "andar en bicicleta",
//     }
// ]
// for (miembro of grupoFamiliar) {
//     console.log(`Hola soy ${miembro.nombre} y tengo ${miembro.edad} años, soy el/la ${miembro.integrante} y me gusta ${miembro.gusto}`);
// };

// --------------  Ejercicio N°10  --------------;

// let estudiante = {
//     nombre: "Isaac",
//     apellido: "Alfonso",
//     esArgentino: true,
//     edad: 32,
//     estudios: "Universitario en curso"
// };
// for (let propiedad in estudiante) {
//     console.log(propiedad);
// };

// --------------  Ejercicio N°11  --------------;

// for (propiedad in estudiante) {
//     console.log(estudiante[propiedad]);
// };

// --------------  Ejercicio N°12  --------------;

// let nuevoNumero = parseInt(prompt(`Ingrese un numero`));
// let sumaNumPar = 0;
// let sumaNumImpar = 0;
// do {
//     nuevoNumero = parseInt(prompt(`Ingrese un nuevo numero`));
//     if (nuevoNumero !== 0) {
//         if (nuevoNumero % 2 === 0) {
//             sumaNumPar += 1;
//         } else {
//             sumaNumImpar += 1
//         };
//     };
// } while (nuevoNumero !== 0);
// console.log(`La suma de los numeros pares es: ${sumaNumPar}`);
// console.log(`La suma de los numeros impares es: ${sumaNumImpar}`);

// --------------  Ejercicio N°13  --------------;

// let numeros = [229, 59, 532, 777, 53, 74, 152, 462, 625, 439, 328];
// let mayorNumero = 0;
// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > mayorNumero) {
//         mayorNumero = numeros[i];
//     };
// };
// console.log(`El numero mas grande es: ${mayorNumero}`);