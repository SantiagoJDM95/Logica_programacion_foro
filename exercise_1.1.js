
/*
Declara una variable llamada nombre y asígnale el valor "Luna".
Crea una variable llamada edady asígnale el valor 25.
Establece una variable numeroDeVentas y asígnale el valor 50.
Establece una variable saldoDisponible y asígnale el valor 1000.
Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos".
*/
let name = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";

/*
Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!".
Muestra una alerta con el texto "¡Error! Completa todos los campos".
Ahora muestra una alerta con el valor de la variable mensajeDeError .
*/
alert(`¡Bienvenida y bievenido a nuestro sitio web ${name}!`);
alert("¡Error! Completa todos los campos.");
alert(`${mensajeDeError}`);

/*
Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre .
Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
*/
name = prompt("Nombre: ");
edad = prompt("Edad: ");

/*
Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
 */
if (edad >= 18){
    alert(`¡Puedes obtener tu licencia de conducir!`);
}
