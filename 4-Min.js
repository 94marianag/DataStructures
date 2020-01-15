//Ejercicio número mínimo
//Escribe una función que acepte como parámetro un arreglo de enteros 
//y regrese el número menor del arreglo.
function min(array){
    let mi = array[0];
    for (let i =0; i<=array.length-1; i++){
        
            if (mi > array[i]) {
            mi = array[i];
        }       
        
    }
    console.log(mi);
}
min([5,12,3,9,8]);