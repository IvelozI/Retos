//Desarrollar un contador de caracteres, solicitando al usuario que ingrese una palabra u
//oración, para luego contar cuántos caracteres tiene la palabra ingresada por el usuario.
//Mostrar la oración ingresada y el número de caracteres en el navegador. (50 puntos)




//funcion,pedir al usuario que ingrese una palabra u oracion, letras
let textoingresado = prompt("ingresa una palabra u oración:");
//guardar, letras, contar caracteres, caracteres
let contadortexto = textoingresado.length;
//imprimir texto mas cantidad
console.log("texto ingresado: \"" + textoingresado + "\"");
console.log("cantidad de caracteres: \"" + contadortexto + "\"")
