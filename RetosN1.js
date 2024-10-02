//ingresar una cadena de texto
let cadena = prompt("Ingresa una cadena de texto:").toLowerCase(); // Convertir a minúsculas para evitar problemas de coincidencia

//contadores para cada vocal
let contadorA = 0;
let contadorE = 0;
let contadorI = 0;
let contadorO = 0;
let contadorU = 0;

// recorrer de la cadena
for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena[i];
    
    // validador y aumentar el contador 
    switch (caracter) {
        case 'a':
            contadorA++;
            break;
        case 'e':
            contadorE++;
            break;
        case 'i':
            contadorI++;
            break;
        case 'o':
            contadorO++;
            break;
        case 'u':
            contadorU++;
            break;
    }
}

//resultado
console.log(`Número de veces que aparece la vocal 'a': ${contadorA}`);
console.log(`Número de veces que aparece la vocal 'e': ${contadorE}`);
console.log(`Número de veces que aparece la vocal 'i': ${contadorI}`);
console.log(`Número de veces que aparece la vocal 'o': ${contadorO}`);
console.log(`Número de veces que aparece la vocal 'u': ${contadorU}`);
