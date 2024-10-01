// solicitar las tres notas al alumno
let nota1 = prompt("ingresa Nota 1 (40%):");
let nota2 = prompt("ingresa Nota 2 (30%):");
let nota3 = prompt("ingresa Nota 3 (30%):");

// calcular el promedio
let promedio = (nota1 * 0.40) + (nota2 * 0.30) + (nota3 * 0.30);

// mostrar el promedio
alert("el promedio ponderado es: " + promedio.toFixed(2));

// validar notas
if (promedio < 3.95) {
    alert("has reprobado");
} else if (promedio >= 3.95 && promedio < 4.0) {
    alert("debes ir a examen");
} else {
    alert("has aprovado la asignatura");
}
