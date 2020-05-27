var letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

var numero=prompt("Introduzca el Numero DNI: ");
var resto=numero%23;
var dni=numero+letra[resto]

document.write(`Letra asignada: ${letra[resto]} <br> Nuevo DNI: ${dni}`);
console.log(`Letra asignada: ${letra[resto]} \nNuevo DNI: ${dni}`);

