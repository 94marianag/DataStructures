//Replace
//Escribe una función que acepte como parámetro un arreglo de enteros y 
//regrese otro arreglo reemplazando todos los 0 por -1.

function replace (array){

    for(let i=0; i<=array.length-1;i++){
        if(array[i]==0)
        array[i]=-1;
        
    }console.log(array);
}
replace([0,0,0,0]);
