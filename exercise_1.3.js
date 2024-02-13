/*
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
*/
let increaseNumber = 0;

while(increaseNumber !==10){
     increaseNumber++;
     console.log(increaseNumber);
}


/*
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
*/
 let decreaseNumber = 10;

while(increaseNumber !==0){
     increaseNumber--;
     console.log(increaseNumber);
}


/*
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
let counter = 0;
let chooseNumber = parseInt(prompt(`Choose a number between 0 and 50`));

if (chooseNumber < 0){
    alert(`Number below 0 are invalid`);
}   else if (chooseNumber > 50){
    alert(`Number above 50 are invalid`);
}

if (chooseNumber >= 1 && chooseNumber <= 50){
    while (counter !== chooseNumber){
        counter++;
        console.log(counter);
    }   
}
