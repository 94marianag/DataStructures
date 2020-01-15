//Escribe una función que acepte como parámetro un arreglo de enteros 
//e imprima los elementos en el orden al revés.
function reversa(numeros){
    const copy = [...numeros];
   for(let i = numeros.length-1; i>= 0; i--){
    
    console.log(numeros[i]);
    }    
}
reversa([1,2,3]);