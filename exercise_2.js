/*
Desafíos:



Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

/*
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/

alert("IDENTIFICADOR DEL DÍA DE LA SEMANA.");
const week = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let dayOfWeek = prompt("Día de la semana: ");
// array.indexOf(userInput)
let dayIndex = week.indexOf(dayOfWeek);

    if (dayIndex === 6 || dayIndex === 5){
        alert("¡Buen fin de semana!");
    }   else if (dayIndex >= 0 && dayIndex <= 4) {
        alert("¡Buena semana!");
    }   else {
        alert("Día inválido.");
    }


/*
Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
*/

alert("IDENTIFICADOR DE POS/NEG.");
let numeroUsuario = prompt("Elige un número: ");

// isNaN() devuelve TRUE si el dato no es number
if(isNaN(numeroUsuario)){
    alert("Numero invalido.");
}   else {
    if (numeroUsuario < 0){
        alert("Tu número es negativo.");
    }   else if (numeroUsuario > 0){
        alert("Tu número es positivo.");
    }   
}


