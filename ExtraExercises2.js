//2.- Escribe una función que reciba como parámetro un arreglo de números sume todos
//y regrese si la suma de los elementos es un número par.
function suma(array){
    let a=0;
    for(let i=0; i<=array.length-1; i++){
        a = a+array[i];
    }
        if (a%2==0)
            console.log("Es par? ", "true")
        else
        console.log("Es par? ", "false") 
}
suma([2,6,8]);
