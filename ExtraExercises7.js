//7.- Escribe una función que reciba como parámetro un arreglo de números.
//La función debe regresar 'true' si todos los números del arreglo son iguales y false
//si uno solo es diferente.
function soniguales(array){  
    const b=array[0]; 
    for(let i=1; i<=array.length-1; i++){
        if (b!=array[i]){
            console.log("false");
            break;
        }
        
        if (i==array.length-1){
            console.log("true");
        }
    }
}
soniguales([5,5,2,2]);
