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
let userNum = prompt("Elige un número: ");

// isNaN() devuelve TRUE si el dato no es number
if(isNaN(userNum)){
    alert("Numero invalido.");
}   else {
    if (userNum < 0){
        alert("Tu número es negativo.");
    }   else if (userNum > 0){
        alert("Tu número es positivo.");
    }   
}

/*
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
*/

alert("ADIVINADOR DE NUM ALEATORIO");
alert("Tienes 3 vidas");
const intervalNum = 5;
let secretNum = 0;
let userInput = 0;
let roundPts = 0;
let vidas = 3;

while(roundPts < 100){
    secretNum = Math.floor(Math.random()*intervalNum)+1;
    console.log(secretNum);

    userInput = parseInt(prompt(`Número entre 1 y ${intervalNum}: `));

    if (userInput == secretNum){
        roundPts += 25
        console.log(roundPts);
    } else {
        vidas--;
    }
    
    if(roundPts >= 100){
        alert("Conseguiste todos los puntos!");
        break;
    }

    if(vidas  <= 0){
        alert(`Te quedaste sin vidas`);
        break;
    }
}

/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
*/

let balance = 1;
let deposit = 0;
let withdrawal = 0;

alert(`Your current balance is: ${balance}`);
let clientRequest = prompt(`You want a deposit or a withdrawal?`);

if (clientRequest == "Deposit" || clientRequest == "deposit"){
    deposit = parseInt(prompt(`Deposit quantity: `));
    alert(`Your new balance is: ${balance += deposit}`);
}   else if (clientRequest == "withdrawal" || clientRequest == "withdrawal"){
    withdrawal = parseInt(prompt(`Deposit quantity: `));
    alert(`Your new balance is: ${balance -= withdrawal}`);
}   else {
    alert(`Invalid option`);
}

/*
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

let userName = prompt(`¿Cómo te llamas?`);
alert(`Bienvenido a mi página ${userName}!`);