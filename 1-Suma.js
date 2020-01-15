//Suma
//Escribe una función que acepte como parámetro un arreglo de enteros 
//y regrese la suma de todos los números en el.
function suma(numeros){
    let currentSum = 0;
    for(let i=0; i < numeros.length; i++){

        currentSum = currentSum + numeros[i];
    }

    return currentSum;
}

console.log(suma([5,5,5]))