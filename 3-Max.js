//Número Mayor
//Escribe una función que acepte como parámetro un arreglo de enteros 
//y regrese el número mayor del arreglo.
function max(array){
    let mx = array[0];
    for (let i =0; i<=array.length-1; i++){
        
            if (mx < array[i]) {
            mx = array[i];
        }       
        //    else
        //    continue;
    }
    console.log(mx);
}
max([5,12,3,9,8]);