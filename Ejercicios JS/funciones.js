/* 1 Crea una función llamada "saludar" que tome un parámetro de tipo cadena/string que
represente un nombre, y muestre en la consola un saludo personalizado utilizando el
nombre proporcionado. Llama a la función con tu propio nombre para verificar que
funcione correctamente. */

/* function saludar(nombre){
    return("Hola como estas? " + nombre);    
}
console.log(saludar("Jhossy")); */

/* *********************************************************** */
/*2 Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y
devuelva el resultado de la multiplicación de ambos. Llama a la función con dos valores
diferentes y muestra el resultado en la consola. */

/* function multiplicar(num1, num2) {
    return(num1 * num2)
}
console.log(multiplicar(3, 10)); */

/* *********************************************************** */
/* 3 Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que
representen la base y la altura de un triángulo, y devuelva el área del mismo. Luego,
crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos
que representen los lados de un triángulo, y devuelva el perímetro del mismo. Utiliza
estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura
3 y lados de 4, 5 y 6 respectivamente. */

/* function areaTriangulo(base, altura){
    return (base * altura) / 2
}
function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3
}

console.log("El area del triangulo es: " + areaTriangulo(3, 5) + " y la base del triangulo es: " + perimetroTriangulo(4, 5, 6)); */

/* *********************************************************** */
/*4 Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que
representen el precio y la cantidad de un producto, y devuelva el precio total de la
compra. Si la cantidad de productos es mayor o igual a 10, aplica un descuento del
10% al precio total. Si la cantidad de productos es mayor o igual a 20, aplica un
descuento del 20% al precio total. Llama a la función con diferentes valores de precio y
cantidad para verificar que funcione correctamente  */

/* function calcularprecio(p,q){
    if(q<10){
        return p*q
    }
    if (q>=10){
        return ((p*q)*0.9)
    }
    if(q>=20){
        return ((p*q)*0.8)
    }
}
console.log(calcularprecio(1,20)) */

/* EJERCICIO 5 */ 

/* function esMayorDeEdad (num){
    if (num>=18) return "Eres mayor de edad"
    else return "Eres menor de edad"
}
console.log(esMayorDeEdad(17))
console.log(esMayorDeEdad(18)) */

/* EJERCICIO 6 */ 

/* function CalcularImpuesto (sueldo){
    if(sueldo <= 10000)
    return (sueldo*0.10)
    if(sueldo<=20000)
    return (sueldo*0.15)
    if (sueldo >20000) 
    return (sueldo*0.20)
}
console.log(CalcularImpuesto(19000))
console.log(CalcularImpuesto(20000)) */

/* EJERCICIO 7 */ 

/* function verificarDia (num){
    switch(num){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día Laboral"

        case 6:
        case 7:
            return "Es fin de Semana"
        default:
            return "Por favor ingresar número del 1 al 7"
    } 

}

console.log(verificarDia(2))
console.log(verificarDia(6))
console.log(verificarDia(3))
console.log(verificarDia(5))
console.log(verificarDia(9)) */